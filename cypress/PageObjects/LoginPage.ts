export class LoginPage
{
    navigation() {
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

}

