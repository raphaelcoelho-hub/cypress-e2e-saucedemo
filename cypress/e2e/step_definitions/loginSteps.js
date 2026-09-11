import LoginPage from "../../support/pages/LoginPage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// --- Contexto ---
Given("que estou na página inicial de login do Saucedemo", () => {
  LoginPage.visit();
});

// --- Ações de Preenchimento de usuário ---
When("preencho o campo de usuário com {string}", (usuario) => {
  LoginPage.fillUsername(usuario);
});

When("preencho o campo de usuário com credencial válida {string}", (usuario) => {
  LoginPage.fillUsername(usuario);
});

When("preencho o campo de usuário com usuário bloqueado {string}", (usuario) => {
  LoginPage.fillUsername(usuario);
});

When("preencho o campo de usuário com credencial inválida {string}", (usuario) => {
  LoginPage.fillUsername(usuario);
});

When("deixo o campo de usuário em branco", () => {
  LoginPage.fillUsername("");
});

When("preencho o campo de usuario com espaço no meio do nome {string}", (usuario) => {
  LoginPage.fillUsername(usuario);
});

// --- Ações de Preenchimento de senha ---
When("preencho o campo de senha com {string}", (senha) => {
  LoginPage.fillPassword(senha);
});

When("preencho o campo de senha com credencial válida {string}", (senha) => {
  LoginPage.fillPassword(senha);
});

When("preencho o campo de senha com credencial inválida {string}", (senha) => {
  LoginPage.fillPassword(senha);
});

When("deixo o campo de senha em branco", () => {
  LoginPage.fillPassword("");
});

When("preencho o campo de senha com espaço no meio da senha {string}", (senha) => {
  LoginPage.fillPassword(senha);
});

// --- Ação Global de clicar no botão de login ---
When("clico no botão de login", () => {
  LoginPage.clickLoginButton();
});

// --- Validações de resultado ---
Then("devo ser redirecionado para a página de produtos", function () {
  cy.url().should('include', '/inventory.html');
});

Then("devo visualizar uma mensagem de erro de autenticação", () => {
  LoginPage.elements.errorMessage().should("be.visible");
});

// --- Cenário de Rota protegida ---
When("tento acessar a rota protegida {string} sem estar logado", (rota) => {
  cy.visit(rota, { failOnStatusCode: false });
});

// --- Validação de redirecionamento para a página de login ---
Then("devo ser redirecionado para a página de login", () => {
  cy.url().should("include", "/");
});

Then("devo permanecer na página de login", () => {
  cy.url().should("include", "/");
});