# language: pt
@navigation
Funcionalidade: Menu & Navegação Global

  Contexto: Estar logado no sistema
    Dado que eu acesse a página de login do SauceDemo
    E eu realize o login com o usuário "standard_user" e senha "secret_sauce"
    Então eu devo ser redirecionado para a página de produtos

  Cenário: Navegar para a página de Todos os Itens
    Quando eu clicar no menu hambúrguer
    E clicar na opção "All Items"
    Então eu devo permanecer na página de catálogo de produtos

  Cenário: Acessar a página Sobre (About)
    Quando eu clicar no menu hambúrguer
    E clicar na opção "About"
    Então eu devo ser redirecionado para o site externo da Sauce Labs

  Cenário: Resetar o estado da aplicação
    Quando eu clicar no menu hambúrguer
    E clicar na opção "Reset App State"
    Então o estado da aplicação deve ser limpo com sucesso