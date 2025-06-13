class ShoppingCartPage {
  constructor() {
    this.shoppingCartLink = '.shopping_cart_link';
    this.checkoutButton = '.checkout_button';
    this.emptyCartMessage = '.cart_contents_container h3';
  }

  navigateToCart() {
    return cy.get(this.shoppingCartLink).click();
  }

  proceedToCheckout() {
    return cy.get(this.checkoutButton).click();
  }

  verifyEmptyCart() {
    return cy.get(this.emptyCartMessage).should('contain', 'Your Cart Is Empty');
  }
}

export default new ShoppingCartPage();