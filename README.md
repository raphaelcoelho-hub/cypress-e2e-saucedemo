# 🧪 Automação E2E - SauceDemo com Cypress & Cucumber

Projeto de automação de testes End-to-End (E2E) para a aplicação SauceDemo, desenvolvido utilizando Cypress, Cucumber (BDD) e a arquitetura Page Object Model (POM).

## 🚀 Tecnologias Utilizadas

- **Cypress:** Framework de testes automatizados E2E.
- **Cucumber / Gherkin:** Escrita de cenários em linguagem natural (BDD).
- **JavaScript:** Linguagem base para desenvolvimento dos testes.
- **Node.js & npm:** Gerenciamento de pacotes e dependências.

## 📁 Estrutura do Projeto

cypress/
├── e2e/
│   ├── features/          # Arquivos BDD (.feature) em português
│   └── step_definitions/  # Implementação dos passos dos testes
└── support/
    └── pages/             # Mapeamento de elementos e ações (Page Objects)

## ⚙️ Como Executar os Testes

1. Clonar o repositório:
   git clone [https://github.com/raphaelcoelho-hub/cypress-e2e-saucedemo.git](https://github.com/raphaelcoelho-hub/cypress-e2e-saucedemo.git)

2. Instalar as dependências:
   npm install

3. Abrir a interface interativa do Cypress:
   npx cypress open