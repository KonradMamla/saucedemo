export class InventoryPage {
  private inventoryList = () => cy.get('.inventory_list');
  private inventoryItems = () => this.inventoryList().find('.inventory_item');
  private cartBadge = () => cy.get('.fa-shopping-cart + .shopping_cart_badge');
  private cartLink = () => cy.get('.shopping_cart_link');
  private sortDropdown = () => cy.get('select[data-test="product_sort_container"]');

  public navigationInventoryPage() {
    cy.visit('/inventory.html', { 
      failOnStatusCode: false
  });
  }

  public addItemToCart(itemName: string) {
    this.inventoryItems()
      .contains(itemName)
      .parent('.inventory_item')
      .find('button')
      .click();
  }

  public openCart() {
    this.cartBadge().click();
    this.cartLink().click();
  }

  public getCartBadgeValue() {
    return this.cartBadge().invoke('text');
  }

  public sortByPriceLowToHigh() {
    this.sortDropdown().select('lohi');
  }

  public sortByPriceHighToLow() {
    this.sortDropdown().select('hilo');
  }

  public sortByNameAtoZ() {
    this.sortDropdown().select('az');
  }

  public sortByNameZtoA() {
    this.sortDropdown().select('za');
  }

  public getItemNames(): Cypress.Chainable<string[]> {
    return this.inventoryItems().find('.inventory_item_name').invoke('text');
  }

  public getItemPrices(): Cypress.Chainable<string[]> {
    return this.inventoryItems().find('.inventory_item_price').invoke('text');
  }
}
