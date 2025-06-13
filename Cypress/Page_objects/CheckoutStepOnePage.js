class CheckoutStepOnePage {
  constructor() {
    this.firstNameInput = '#first-name'
    this.lastNameInput = '#last-name'
    this.zipCodeInput = '#postal-code'
    this.continueButton = '.cart_button'
  }

  fillOutForm(firstName, lastName, zipCode) {
    cy.get(this.firstNameInput).type(firstName)
    cy.get(this.lastNameInput).type(lastName)
    cy.get(this.zipCodeInput).type(zipCode)
    cy.get(this.continueButton).click()
  }

  submitFormWithoutZip() {
    cy.get(this.firstNameInput).type('John')
    cy.get(this.lastNameInput).type('Doe')
    cy.get(this.continueButton).click()
  }

  verifyError() {
    cy.contains('Error: Postal Code is required').should('be.visible')
  }
}

export default new CheckoutStepOnePage()