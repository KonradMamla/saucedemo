export class Menu {

    public navigationInventoryPage() {
        cy.visit('/inventory.html', {
          failOnStatusCode: false
      });
      }

    menuButton() {
        return cy.get('#react-burger-menu-btn').contains('Open Menu').click();
    }

    allItems(){
        return cy.get('#inventory_sidebar_link').contains('All Items').click();
    }

    about(){
        return cy.get('#about_sidebar_link').contains('About').click();
    }

    logout(){
        return cy.get('#logout_sidebar_link').contains('Logout').click();
    }

    resetAppState(){
        return cy.get('#reset_sidebar_link').contains('Reset App State').click();
    }



}