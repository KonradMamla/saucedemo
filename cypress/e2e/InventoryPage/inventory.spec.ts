import { InventoryPage } from '../../PageObjects/InventoryPage';
import { User } from '../../support/types/users';

describe('Inventory page', () => {

  let standard_user: User;
  let locked_out_user: User;
  let problem_user: User;
  let performance_glitch_user: User;

  let inventoryPage: InventoryPage;


  beforeEach(() => {
    cy.fixture('users.json').then((users) => {
      standard_user = users.users[0];
      locked_out_user = users.users[1];
      problem_user = users.users[2];
      performance_glitch_user = users.users[3];

      // set user to login
      cy.loginByCookie(standard_user);

      inventoryPage = new InventoryPage();

      // Visit inventory page
      inventoryPage.navigationInventoryPage();

    });
  });

  it('Should display products on the page', () => {

    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
  });

  context('Sort products', () => {

    it('Should sort items by name in ascending order', () => {
      inventoryPage.selectSortOption('az');
      inventoryPage.getInventoryItemNames().then((names) => {
        //names.slice() tworzy kopię oryginalnej tablicy names
        expect(names).to.deep.equal(names.slice().sort());
      });
    });

    it('Should sort items by name in descending order', () => {
      inventoryPage.selectSortOption('za');
      inventoryPage.getInventoryItemNames().then((names) => {
        expect(names).to.deep.equal(names.slice().sort().reverse());
      });
    });

    it.only('Should sort items by price ascending (low to high)', () => {

      inventoryPage.sortByPriceLowToHigh();

      // Pobranie listy cen produktów
      inventoryPage.getProductPrices().then(($prices) => {
        // Konwersja do tablicy i usunięcie białych znaków z początku i końca każdej ceny
        const prices = Array.from($prices).map((el) => el.textContent.trim());

        // Konwersja cen na liczby i sprawdzenie, czy są posortowane rosnąco
        const numericPrices = prices.map(parseFloat);
        expect(numericPrices).to.deep.equal(numericPrices.slice().sort());

      })
    });

      it.only('Should sort items by price descending order (high to low)', () => {
        inventoryPage.sortByPriceHighToLow();

        // Pobranie listy cen produktów
        inventoryPage.getProductPrices().then(($prices) => {
          // Konwersja do tablicy i usunięcie białych znaków z początku i końca każdej ceny
          const prices = Array.from($prices).map((el) => el.textContent.trim());

          // Konwersja cen na liczby i sprawdzenie, czy są posortowane malejąco
          const numericPrices = prices.map(parseFloat);
          expect(numericPrices).to.deep.equal(numericPrices.slice().sort().reverse());
        })
    });
  });
});