# language: pt
@logout
Funcionalidade: Encerramento de Sessão e Logout

  Contexto: Estar logado no sistema
    Dado que eu acesse a página de login do SauceDemo
    E eu realize o login com o usuário "standard_user" e senha "secret_sauce"
    Então eu devo ser redirecionado para a página de produtos

  Cenário: Realizar logout com sucesso através do menu lateral
    Quando eu clicar no menu hambúrguer
    E clicar na opção "Logout"
    Então eu devo ser encerrado e redirecionado para a tela de login