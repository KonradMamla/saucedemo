import { LoginPage } from '../../PageObjects/LoginPage';
import { User } from '../../support/types/users';

describe('Login functionality', () => {

  let loginPage: LoginPage;
  let standard_user: User;
  let locked_out_user: User;
  let invalid_username: User;

  beforeEach(() => {
    cy.fixture('users.json').then((users) => {
      standard_user = users.users[0];
      locked_out_user = users.users[1];
      invalid_username = users.users[4];
      loginPage = new LoginPage();
      loginPage.navigationLoginPage();
    })
  })

  context('Positive Login Tests', () => {
    it('Should log in with valid credentials', () => {
      loginPage.fillUsername().type(standard_user.userName);

      loginPage.fillPassword().type(standard_user.password);

      loginPage.submitLoginForm();

      cy.url().should('include', '/inventory.html');

      cy.get('.title').should('have.text', 'Products');
    });

    it('Should not be able to login with invalid credentials', () => {

      loginPage.fillUsername().type('invalid-username')

      loginPage.fillPassword().type('invalid-password')

      loginPage.submitLoginForm();

      cy.url().should('not.include', '/inventory.html')
      cy.get('[data-test=error]').should('be.visible')
    })

    it('Should not be able to log in with locked out user account', () => {

      loginPage.fillUsername().type(locked_out_user.userName);

      loginPage.fillPassword().type(locked_out_user.password);

      loginPage.submitLoginForm();

      cy.url().should('not.include', '/inventory.html')
      cy.get('[data-test=error]').should('be.visible')
    });
  });

  context('Negative Login Tests', () => {
    it('Should not be able to login with invalid credentials', () => {

      loginPage.fillUsername().type(invalid_username.userName);

      loginPage.fillPassword().type(invalid_username.password);

      loginPage.submitLoginForm();

      cy.get('[data-test=error]')
        .should('be.visible')
        .and('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    it('Should not be able to log in with locked out user account', () => {

      loginPage.fillUsername().type(locked_out_user.userName);

      loginPage.fillPassword().type(locked_out_user.password);

      loginPage.submitLoginForm();

      cy.get('h3')
        .should('be.visible')
        .and('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    });
  });
});