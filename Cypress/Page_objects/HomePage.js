class HomePage {
  constructor() {
    this.url = '/'
    this.userNameInput = '[data-test="username"]'
    this.passwordInput = '[data-test="password"]'
    this.loginButton = '[data-test="login-button"]'
  }

  visit() {
    cy.visit(this.url)
  }

  logIn(username, password) {
    cy.get(this.userNameInput).type(username)
    cy.get(this.passwordInput).type(password)
    cy.get(this.loginButton).click()
  }
}

export default new HomePage()