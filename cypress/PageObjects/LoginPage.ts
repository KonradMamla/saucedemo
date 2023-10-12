export class LoginPage {
    navigationLoginPage() {
        cy.visit('/', {
            failOnStatusCode: false
        })
    }

    fillUsername() {
        return cy.get('#user-name')
    }

    fillPassword() {
        return cy.get('#password')
    }

    submitLoginForm() {
        return cy.get('#login-button').contains('Login').click();
    }

    getErrorMessage() {
        return cy.get('[data-test=error]');
      }

}

