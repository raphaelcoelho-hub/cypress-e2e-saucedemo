import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../support/pages/LoginPage";
import logoutPage from "../../support/pages/logoutPage";

const realizarLoginPadrao = () => {
  loginPage.visit();
  cy.get('[data-test="username"]').should("be.visible");
  loginPage.submitLogin("standard_user", "secret_sauce");
  cy.location("pathname", { timeout: 10000 }).should("eq", "/inventory.html");
};

Given("que eu acesse a página de login do SauceDemo", () => {
  loginPage.visit();
});

Given("eu realize o login com o usuário {string} e senha {string}", (usuario, senha) => {
  loginPage.submitLogin(usuario, senha);
});

Given("que eu realizei o logout do sistema", () => {
  realizarLoginPadrao();
  logoutPage.clicarMenuHamburguer();
  logoutPage.clicarOpcaoLogout("Logout");
  logoutPage.validarRedirecionamentoLogin();
});

Given("que eu realizei o login com sucesso", () => {
  realizarLoginPadrao();
});

Given("que eu não estou autenticado no sistema", () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  loginPage.visit();
});

Then("eu devo ser redirecionado para a página de produtos", () => {
  cy.location("pathname", { timeout: 10000 }).should("eq", "/inventory.html");
  cy.get('[data-test="title"]').should("be.visible").and("have.text", "Products");
});

When("eu clicar no menu hambúrguer", () => {
  logoutPage.clicarMenuHamburguer();
});

Then("eu devo visualizar a opção {string} no menu lateral", (opcao) => {
  logoutPage.validarOpcaoVisivel(opcao);
});

When("clicar na opção {string}", (opcao) => {
  logoutPage.clicarOpcaoLogout(opcao);
});

When("eu tento acessar diretamente a rota protegida {string}", (rota) => {
  cy.visit(rota, { failOnStatusCode: false });
});

When("eu clico no botão de voltar do navegador", () => {
  cy.go("back");
});

When("eu volto e avanço no histórico do navegador", () => {
  cy.go("back");
  cy.go("forward");
});

Then("eu devo ser redirecionado para a tela de login", () => {
  logoutPage.validarRedirecionamentoLogin();
});