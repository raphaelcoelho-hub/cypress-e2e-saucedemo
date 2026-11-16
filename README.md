# 🛒 Automação E2E - SauceDemo com Cypress & Cucumber

![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![Cucumber](https://img.shields.io/badge/Cucumber-23963F?style=for-the-badge&logo=cucumber&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

Projeto de automação de testes End-to-End (E2E) desenvolvido em **colaboração** para validar os fluxos críticos da aplicação [SauceDemo](https://www.saucedemo.com/). A suíte foi estruturada utilizando **BDD (Behavior-Driven Development)** com Gherkin em português e a arquitetura **Page Object Model (POM)**.

---

## 👥 Colaboração e Fluxo de Trabalho
Este projeto é desenvolvido de forma colaborativa, aplicando boas práticas de engenharia de qualidade e versionamento:
*   Controle de versão com Git utilizando fluxo de *branches* por funcionalidade e *Pull Requests* revisados antes do *merge* na branch principal.
*   Divisão de tarefas entre mapeamento de páginas (POM), escrita de cenários (BDD) e implementação de *steps*.

---

## 🎯 Escopo e Status dos Cenários

Os testes estão modularizados por domínio funcional da aplicação[cite: 1]:

### ✅ Concluídos (Mergeados na `main`)
*   **🔐 Autenticação (`login.feature`)**[cite: 1]
    *   Login com credenciais válidas e redirecionamento para o catálogo.
    *   Validação de mensagens de erro para usuário bloqueado (`locked_out_user`), credenciais inválidas e campos obrigatórios.
*   **🚪 Encerramento de Sessão (`logout.feature`)**[cite: 1]
    *   Logout seguro através do menu lateral e validação de bloqueio de acesso a rotas protegidas sem autenticação.
*   **🧭 Navegação e Catálogo (`navigation.feature`)**[cite: 1]
    *   Interação com o menu lateral, visualização de detalhes dos produtos e ordenação/filtragem na vitrine.

### 🚧 Em Desenvolvimento (Roadmap)
*   **🛍️ Carrinho de Compras (`cart.feature`)**[cite: 1]
    *   Adição e remoção de produtos (vitrine e carrinho), validação de persistência e contador de itens.
*   **💳 Fluxo de Checkout (`checkout.feature`)**[cite: 1]
    *   Preenchimento e validação de formulário de entrega, conferência de valores e finalização do pedido.

---

## 📁 Estrutura do Projeto

```text
cypress-saucedemo/
├── cypress/
│   ├── e2e/
│   │   ├── features/               # Especificações BDD em Gherkin (.feature)
│   │   │   ├── cart.feature
│   │   │   ├── checkout.feature
│   │   │   ├── login.feature
│   │   │   ├── logout.feature
│   │   │   └── navigation.feature
│   │   └── step_definitions/       # Implementação técnica dos passos BDD
│   │       ├── cartSteps.js
│   │       ├── checkoutSteps.js
│   │       ├── loginSteps.js
│   │       ├── logoutSteps.js
│   │       └── navigationSteps.js
│   ├── fixtures/                   # Massas de dados estáticas (JSON)
│   │   └── example.json
│   └── support/
│       ├── pages/                  # Page Objects (mapeamento de seletores e ações)
│       │   ├── CartPage.js
│       │   ├── CheckoutPage.js
│       │   ├── LoginPage.js
│       │   ├── LogoutPage.js
│       │   └── NavigationPage.js
│       ├── commands.js             # Comandos customizados e reutilizáveis do Cypress
│       └── e2e.js                  # Configurações globais e hooks de execução
├── .gitignore                      # Arquivos e pastas ignorados no versionamento
├── cypress.config.js               # Configurações do Cypress e preprocessor do Cucumber
├── package.json                    # Dependências e scripts do projeto
├── package-lock.json               # Controle de versão exata das dependências
└── README.md                       # Documentação do projeto

---

Pré-requisitos
Node.js (v16 ou superior)

Gerenciador de pacotes npm

Como Executar os Testes
1 - Clonar o repositório:
git clone [https://github.com/raphaelcoelho-hub/cypress-e2e-saucedemo.git](https://github.com/raphaelcoelho-hub/cypress-e2e-saucedemo.git)
cd cypress-e2e-saucedemo
---
2 - Instalar as dependências:
npm install
---
3 - Executar em Modo Interativo (Interface Gráfica):
npx cypress open

---

🔑 Massa de Dados Utilizada
Para a execução dos cenários implementados, o projeto utiliza a seguinte credencial padrão da aplicação SauceDemo:

Usuário Válido: standard_user / secret_sauce

📊 Evidências de Execução
Screenshots: O Cypress gera automaticamente capturas de tela em caso de falhas, auxiliando no diagnóstico rápido de bugs.

💡 Boas Práticas Aplicadas
Behavior-Driven Development (BDD): Documentação viva escrita em linguagem natural, facilitando o alinhamento de expectativas e cenários.

Page Object Model (POM): Centralização de seletores e ações de página, garantindo manutenibilidade e código limpo.

Gestão de Escopo e Versionamento: Entregas incrementais desenvolvidas em colaboração e validadas via Pull Requests.

## 🗺️ Roadmap do Projeto

- [x] **Login:** Autenticação de usuários (sucesso, bloqueados, campos vazios).
- [x] **Logout:** Encerramento seguro de sessão e proteção de rotas.
- [x] **Navigation:** Validação de menu lateral, detalhes de produtos e filtros.
- [ ] **Cart:** Adição, remoção e persistência de itens no carrinho de compras.
- [ ] **Checkout:** Preenchimento de dados de entrega, cálculo de impostos e finalização do pedido.

---

## ✍️ Autores

Desenvolvido em colaboração por:

*   **Raphael Coelho** - https://github.com/raphaelcoelho-hub
*   **Lais Teodorico** - https://github.com/laisteoo
