class NavigationPage {
  elements = {
    menuButton: () => cy.get("#react-burger-menu-btn"),
    allItemsLink: () => cy.get("#inventory_sidebar_link"),
    aboutLink: () => cy.get("#about_sidebar_link"),
    resetStateLink: () => cy.get("#reset_sidebar_link")
  };

  clicarMenu() {
    this.elements.menuButton().click();
  }

  clicarAllItems() {
    this.elements.allItemsLink().click();
  }

  clicarAbout() {
    this.elements.aboutLink().click();
  }

  clicarResetState() {
    this.elements.resetStateLink().click();
  }
}

export default new NavigationPage();