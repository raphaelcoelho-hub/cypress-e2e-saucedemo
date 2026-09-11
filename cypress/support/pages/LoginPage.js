
class LoginPage {
  elements = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginButton: () => cy.get('[data-test="login-button"]'),
    errorMessage: () => cy.get('[data-test="error"]')
  };

  visit() {
    cy.visit("/");
  }

  fillUsername(username) {
    this.elements.usernameInput().clear();
    if (username) {
      this.elements.usernameInput().type(username);
    }
  }

  fillPassword(password) {
    this.elements.passwordInput().clear();
    if (password) {
      this.elements.passwordInput().type(password);
    }
  }

  clickLoginButton() {
    this.elements.loginButton().click();
  }

  submitLogin(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.clickLoginButton();
  }
}

export default new LoginPage();

