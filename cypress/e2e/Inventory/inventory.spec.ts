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


});
