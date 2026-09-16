import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

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

When("eu clicar no menu hambúrguer", () => {
  cy.get("#react-burger-menu-btn").click();
});

When("clicar na opção {string}", (opcao) => {
  cy.get("#logout_sidebar_link").click();
});

Then("eu devo ser encerrado e redirecionado para a tela de login", () => {
  cy.url().should("eq", "https://www.saucedemo.com/");
});