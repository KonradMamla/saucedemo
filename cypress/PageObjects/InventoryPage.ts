export class InventoryPage {

  readonly productSortContainer = '.product_sort_container';
  readonly inventoryItemName = '.inventory_item_name';

  public navigationInventoryPage() {
    cy.visit('/inventory.html', {
      failOnStatusCode: false
  });
  }

  selectSortOption(option: string) {
    cy.get(this.productSortContainer).select(option);
  }

  getInventoryItemNames() {
    return cy.get(this.inventoryItemName).then(($items) => {
      return Array.from($items).map((el) => el.textContent.trim());
    });
  }

  getProductPrices() {
    return cy.get('.inventory_item_price');
  }

  sortByPriceLowToHigh() {
    cy.get('.product_sort_container').select('lohi');
  }

  sortByPriceHighToLow() {
    cy.get('.product_sort_container').select('hilo');
  }



}
