class LogoutPage {
  elements = {
    menuButton: () => cy.get("#react-burger-menu-btn"),
    menuCloseButton: () => cy.get("#react-burger-cross-btn"),
    logoutLink: () => cy.get("#logout_sidebar_link"),
    usernameInput: () => cy.get('[data-test="username"]'),
    loginButton: () => cy.get('[data-test="login-button"]')
  };

  clicarMenuHamburguer() {
    this.elements.menuButton().should("be.visible").click();
  }

  validarOpcaoVisivel(opcao) {
    this.elements.logoutLink().should("be.visible").and("have.text", opcao);
  }

  clicarOpcaoLogout(opcao) {
    this.elements.logoutLink().should("be.visible").click();
  }

  validarRedirecionamentoLogin() {
    cy.location("pathname", { timeout: 10000 }).should("eq", "/");
    this.elements.usernameInput().should("be.visible");
    this.elements.loginButton().should("be.visible");
  }
}

export default new LogoutPage();