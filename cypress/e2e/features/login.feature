# language: pt
Funcionalidade: Autenticação de Usuários e Gestão de Sessão
    Como um usuário cadastrado no SauceDemo
    Quero informar minhas credenciais na página de autenticação
    Para que eu possa acessar o catálogo d eprodutos e realizar compras com segurança

    Contexto:
        Dado que estou na página inicial de login do Saucedemo

        
        Cenário: Cn 01 - Login com credenciais válidas
          Quando preencho o campo de usuário com credencial válida "standard_user"
          E preencho o campo de senha com credencial válida "secret_sauce"  
          E clico no botão de login
          Então devo ser redirecionado para a página de produtos
          

        Cenário: Cn 02 - Login com usuário bloqueado
          Quando preencho o campo de usuário com usuário bloqueado "locked_out_user"
          E preencho o campo de senha com credencial válida "secret_sauce"
          E clico no botão de login
          Então devo visualizar uma mensagem de erro de autenticação

        Cenário: Cn 03 - Login com senha inválida
           Quando preencho o campo de usuário com credencial válida "standard_user"
           E preencho o campo de senha com credencial inválida "senha_incorreta"
           E clico no botão de login
           Então devo visualizar uma mensagem de erro de autenticação

        Cenário: Cn 04 - Login com usuário inválido
            Quando preencho o campo de usuário com credencial inválida "usuario_invalido"
            E preencho o campo de senha com credencial válida "secret_sauce"
            E clico no botão de login
            Então devo visualizar uma mensagem de erro de autenticação

        Cenário: Cn 05 - Login com credenciais vazias
            Quando deixo o campo de usuário em branco
            E deixo o campo de senha em branco
            E clico no botão de login
            Então devo permanecer na página de login

        Cenário: Cn 06 - Login com campo do usuário vazio e senha válida
            Quando deixo o campo de usuário em branco
            E preencho o campo de senha com credencial válida "secret_sauce"
            E clico no botão de login
            Então devo permanecer na página de login

        Cenário: Cn 07 - Login com campo do usuário válido e senha vazia
            Quando preencho o campo de usuário com credencial válida "standard_user"
            E deixo o campo de senha em branco
            E clico no botão de login
            Então devo permanecer na página de login

        Cenário: Cn 08 - Login com letras maiúsculas e minúsculas no usuário e senha
            Quando preencho o campo de usuário com "Standard_User"
            E preencho o campo de senha com "Secret_Sauce"
            E clico no botão de login
            Então devo visualizar uma mensagem de erro de autenticação

        Cenário: Cn 09 - Login com espaços no meio do usuário e da senha
            Quando preencho o campo de usuário com "stan dard_user"
            E preencho o campo de senha com "secret_sa uce"
            E clico no botão de login
            Então devo visualizar uma mensagem de erro de autenticação

        Cenário: Cn 10 - Tentativa de acesso à rota protegida sem autenticação
            Quando tento acessar a rota protegida "/inventory.html" sem estar logado
            Então devo ser redirecionado para a página de login

        Cenário: Cn 11 - Login com credenciais de usuário com Caps Lock ativado
            Quando preencho o campo de usuário com "STANDARD_USER"
            E preencho o campo de senha com "secret_sauce"
            E clico no botão de login
            Então devo visualizar uma mensagem de erro de autenticação

        Cenário: Cn 12 - Login com credenciais de usuário válidas e senha com Caps Lock ativado
            Quando preencho o campo de usuário com "standard_user"
            E preencho o campo de senha com "SECRET_SAUCE"
            E clico no botão de login
            Então devo visualizar uma mensagem de erro de autenticação