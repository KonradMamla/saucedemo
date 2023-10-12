import { Menu } from '../../PageObjects/Menu';
import { User } from '../../support/types/users';

describe('Log out functionality', () => {

    let standard_user: User;
    let menu: Menu;

    beforeEach(() => {
        cy.fixture('users.json').then((users) => {
            standard_user = users.users[0];
            cy.loginByCookie(standard_user);
            menu = new Menu();
            menu.navigationInventoryPage();
        });
    });


    context('Positive Log out', () => {
        it('Should log out when clicking the "Logout" button', () => {
            menu.menuButton();
            menu.logout();
            cy.url().should('include', 'https://www.saucedemo.com/');

        })
        it('Should automatically log out after a period of inactivity', () => {
            cy.wait(300000);
            cy.url().should('include', '/inventory.html');
        })
    });
});