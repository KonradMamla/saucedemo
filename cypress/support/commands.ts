/// <reference types="Cypress" />
import { User } from '../support/types/users';
import { LoginPage } from '../PageObjects/LoginPage';



///// <reference types="cypress-xpath" />
//require('@cypress/xpath');


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


declare global {
  namespace Cypress {
    interface Chainable {
      loginByCookie(user: User): void;
    }
  }
}

Cypress.Commands.add('loginByCookie', (user: User) => {
  cy.setCookie('session-username', user.userName);
  cy.setCookie('session-password', user.password);
  //cy.visit('https://www.saucedemo.com/inventory.html');
});