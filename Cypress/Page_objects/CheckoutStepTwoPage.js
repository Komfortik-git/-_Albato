class CheckoutStepTwoPage {
  constructor() {
    this.finishButton = '[data-test="finish"]'
    this.successfulOrderMessage = '.complete-header'
  }

  finalizeOrder() {
    cy.get(this.finishButton).click()
  }

  verifySuccessfulOrder() {
    cy.get(this.successfulOrderMessage).should('contain', 'Thank you for your order!')
  }
}

export default new CheckoutStepTwoPage()