// importowanie potrzebnych bibliotek i modułów

import { LoginPage } from '../../PageObjects/LoginPage';
import { User, Users } from './model';

describe('Login functionality', () => {

  let user: User;

  before(() => {
    cy.fixture('credentials.json').then((users) => {
      user = users.users[2];
    });
  });

    it('Should log in with valid credentials', function () {
      const loginPage = new LoginPage();

      loginPage.navigation();

      loginPage.fillUsername().type(user.userName);

      loginPage.fillPassword().type(user.password);

      loginPage.submitLoginForm();

      // weryfikacja, czy użytkownik został zalogowany poprawnie
      // cy.url().should('include', '/inventory.html');
      // cy.get('.title').should('have.text', 'Products');
    });

    //   it('Should display error message with invalid credentials', () => {
    //     // inicjalizacja obiektu strony logowania
    //     const loginPage = new LoginPage();

    //     // nawigacja do strony logowania
    //     loginPage.navigation();

    //     // wpisanie błędnego loginu i hasła
    //     loginPage.fillUsername('invalid_user');
    //     loginPage.fillPassword('invalid_password');

    //     // kliknięcie przycisku logowania
    //     loginPage.submitLoginForm();

    //     // weryfikacja, czy wyświetlony został błąd logowania
    //     cy.get('.error-message-container').should('be.visible');
    //     cy.get('.error-message-container').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
      // });
  });
