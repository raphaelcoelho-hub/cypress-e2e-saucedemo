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
    navigationPage.elements.aboutLink().then(($link) => {
      $link[0].addEventListener("click", (event) => event.preventDefault(), { once: true });
    });
    navigationPage.clicarAbout();
  } else if (opcao === "Reset App State") {
    navigationPage.clicarResetState();
  }
});

git checkout feature/KAN-81-menu-navegacao

Then("o link deve apontar para o site externo da Sauce Labs", () => {
  navigationPage.elements.aboutLink().should("have.attr", "href").and("include", "saucelabs.com");
});

Then("o estado da aplicação deve ser limpo com sucesso", () => {
  cy.get("#reset_sidebar_link").should("be.visible");
});