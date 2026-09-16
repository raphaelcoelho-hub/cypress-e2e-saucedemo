import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import logoutPage from "../pages/logoutPage";

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
  logoutPage.clicarMenuHamburguer();
});

When("clicar na opção {string}", (opcao) => {
  logoutPage.clicarOpcaoLogout();
});

Then("eu devo ser encerrado e redirecionado para a tela de login", () => {
  logoutPage.validarRedirecionamentoLogin();
});