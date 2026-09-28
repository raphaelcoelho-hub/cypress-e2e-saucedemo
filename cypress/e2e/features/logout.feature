# language: pt
@logout

Funcionalidade: Encerramento de Sessão e Logout

  Cenário: Cn 01 Exibir a opção Logout no menu lateral para usuário autenticado
    Dado que eu realizei o login com sucesso
    Quando eu clicar no menu hambúrguer
    Então eu devo visualizar a opção "Logout" no menu lateral

  Cenário: Cn 02 Realizar logout com sucesso através do menu lateral
    Dado que eu realizei o login com sucesso
    Quando eu clicar no menu hambúrguer
    E clicar na opção "Logout"
    Então eu devo ser redirecionado para a tela de login

  Cenário: Cn 03 Impedir acesso à página de produtos após o logout
    Dado que eu realizei o logout do sistema
    Quando eu tento acessar diretamente a rota protegida "/inventory.html"
    Então eu devo ser redirecionado para a tela de login

  Cenário: Cn 04 Impedir a exibição da página protegida ao voltar após o logout
    Dado que eu realizei o logout do sistema
    Quando eu clico no botão de voltar do navegador
    Então eu devo ser redirecionado para a tela de login

  Cenário: Cn 05 Impedir a exibição da página protegida ao avançar após o logout
    Dado que eu realizei o logout do sistema
    Quando eu volto e avanço no histórico do navegador
    Então eu devo ser redirecionado para a tela de login

  Cenário: Cn 06 Impedir acesso direto a rotas protegidas sem sessão válida
    Dado que eu não estou autenticado no sistema
    Quando eu tento acessar diretamente a rota protegida "/inventory.html"
    Então eu devo ser redirecionado para a tela de login

   