import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import navigationPage from "../../support/pages/NavigationPage";

// Passos do Contexto (Login)
Given("que eu acesse a página de login do SauceDemo", () => {
  cy.visit("https://www.saucedemo.com");
});

Given("eu realize o login com o usuário {string} e senha {string}", (usuario, senha) => {
  cy.get('[data-test="username"]').type(usuario);
  cy.get('[data-test="password"]').type(senha);
  cy.get('[data-test="login-button"]').click();
});

Then("eu devo ser redirecionado para a página de produtos", () => {
  cy.url().should("include", "/inventory.html");
});

// Passos da Navegação
When("eu clicar no menu hambúrguer", () => {
  navigationPage.clicarMenu();
});

When("clicar na opção {string}", (opcao) => {
  if (opcao === "All Items") {
    navigationPage.clicarAllItems();
  } else if (opcao === "About") {
    navigationPage.clicarAbout();
  } else if (opcao === "Reset App State") {
    navigationPage.clicarResetState();
  }
});

Then("eu devo permanecer na página de catálogo de produtos", () => {
  cy.url().should("include", "/inventory.html");
});

Then("eu devo ser redirecionado para o site externo da Sauce Labs", () => {
  cy.origin("https://saucelabs.com", () => {
    cy.url().should("include", "saucelabs.com");
  });
});

Then("o estado da aplicação deve ser limpo com sucesso", () => {
  cy.get("#reset_sidebar_link").should("be.visible");
});