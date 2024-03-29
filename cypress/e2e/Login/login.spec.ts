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
  });

  context('Verify that appropriate error messages are displayed for invalid credentials.', () => {
    it('Should display error message for invalid credentials', () => {

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

      cy.url().should('not.include', '/inventory.html')
      cy.get('[data-test=error]').should('be.visible')

      cy.get('h3')
        .should('be.visible')
        .and('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    });
  });

  context('Login validation', () => {
    it('Should display an error for empty username', () => {
      loginPage.fillPassword().type(standard_user.password);
      loginPage.submitLoginForm();
      loginPage.getErrorMessage()
        .should('be.visible')
        .and('have.text', 'Epic sadface: Username is required');
    });

    it('Should display an error for empty password', () => {
      loginPage.fillUsername().type(standard_user.userName);
      loginPage.submitLoginForm();
      loginPage.getErrorMessage()
        .should('be.visible')
        .and('have.text', 'Epic sadface: Password is required');
    });

    it('Should display an error for an invalid username and valid password', () => {
      loginPage.fillUsername().type(locked_out_user.password);
      loginPage.fillPassword().type(standard_user.password);
      loginPage.submitLoginForm();
      loginPage.getErrorMessage()
        .should('be.visible')
        .and('have.text', 'Epic sadface: Username and password do not match any user in this service'
        );
    });

    it('Should display an error for a valid username and invalid password', () => {
      loginPage.fillUsername().type(standard_user.userName);
      loginPage.fillPassword().type(invalid_username.password);
      loginPage.submitLoginForm();
      loginPage.getErrorMessage()
        .should('be.visible')
        .and('have.text', 'Epic sadface: Username and password do not match any user in this service'
        );
    });
  });
});