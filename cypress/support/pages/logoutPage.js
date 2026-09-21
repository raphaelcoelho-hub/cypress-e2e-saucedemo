class LogoutPage {
  // 1. Mapeamento dos elementos da tela (Seletores)
  elements = {
    menuButton: () => cy.get("#react-burger-menu-btn"),
    logoutLink: () => cy.get("#logout_sidebar_link"),
    loginButton: () => cy.get('[data-test="login-button"]')
  };

  // 2. Ações que podem ser executadas na página
  clicarMenuHamburguer() {
    this.elements.menuButton().click();
  }

  clicarOpcaoLogout() {
    this.elements.logoutLink().click();
  }

  validarRedirecionamentoLogin() {
    cy.url().should("eq", "https://www.saucedemo.com/");
    this.elements.loginButton().should("be.visible");
  }
}

export default new LogoutPage();