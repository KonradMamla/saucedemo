import { LoginPage } from '../../PageObjects/LoginPage';
import { User } from '../../support/types/users';

describe('Login functionality', () => {

  let user1: User;
  let user2: User;
  let user3: User;
  let user4: User;

  before(() => {
    cy.fixture('credentials.json').then((users) => {
      user1 = users.users[0];
      user2 = users.users[1];
      user3 = users.users[2];
      user4 = users.users[3];
    });
  });

    it('Should log in with valid credentials', function () {
      const loginPage = new LoginPage();

      loginPage.navigation();

      loginPage.fillUsername().type(user1.userName);

      loginPage.fillPassword().type(user1.password);

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
