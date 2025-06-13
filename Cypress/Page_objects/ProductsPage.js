class ProductsPage {
  constructor() {
    this.sortDropdown = '.select_container'
    this.items = '.inventory_item_name'
    this.addToCartBtn = '.btn_primary.btn_inventory'
    this.shoppingCartLink = '.shopping_cart_link'
  }

  selectSortOption(option) {
    cy.get('.product_sort_container').select('Price (low to high)');
  }

  addFirstItemToCart() {
    cy.get(this.addToCartBtn).eq(0).click()
  }

  openShoppingCart() {
    cy.get(this.shoppingCartLink).click()
  }
}

export default new ProductsPage()