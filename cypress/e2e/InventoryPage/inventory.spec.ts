import { InventoryPage } from '../../PageObjects/InventoryPage';
import { User } from '../../support/types/users';

describe('Inventory page', () => {

  let standard_user: User;
  let inventoryPage: InventoryPage;


  beforeEach(() => {
    cy.fixture('users.json').then((users) => {
      standard_user = users.users[0];
      cy.loginByCookie(standard_user);
      inventoryPage = new InventoryPage();
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
        //names.slice() creates a copy of the original 'names' array
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
      //  Getting the list of product prices
      inventoryPage.getProductPrices().then(($prices) => {
        // Converting to an array and removing white spaces from the beginning and end of each price
        const prices = Array.from($prices).map((el) => el.textContent.trim());
        // Converting prices to numbers and checking if they are sorted in ascending order
        const numericPrices = prices.map(parseFloat);
        expect(numericPrices).to.deep.equal(numericPrices.slice().sort());
      })
    });

      it.only('Should sort items by price descending order (high to low)', () => {
        inventoryPage.sortByPriceHighToLow();
        //  Getting the list of product prices
        inventoryPage.getProductPrices().then(($prices) => {
          // Converting to an array and removing white spaces from the beginning and end of each price
          const prices = Array.from($prices).map((el) => el.textContent.trim());
          // Converting prices to numbers and checking if they are sorted in descending order
          const numericPrices = prices.map(parseFloat);
          expect(numericPrices).to.deep.equal(numericPrices.slice().sort().reverse());
        })
    });
  });
});