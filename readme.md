# Projeto de Desenvolvimento Web: Site de agendamento de consulta médica

Projeto feito para a aula de Desenvolvimento Web, implementando a ideia de um site de agendamento de consulta médica

## Pré-requisitos

Para esse projeto é apenas necessário um navegador web atualizado, como o Google Chrome

## Instalação

1. Faça o download ou clone o projeto com o comando `git clone https://github.com/GuiJv/DesenvWebUEMG.git`
2. No diretório clonado, abra o arquivo `index.html`

## Uso

O projeto conta, em todas as páginas, com uma barra de navegação no topo com *Inicio*, *Entrar* e *Suporte*, na página principal há também a pesquisa, no caso de máquina com menor resolução, as opções se econtram em um menu drop-down no canto superior esquerdo.   
A página principal conta com um menu central mostrando todos os tipos de exames dispóniveis, com um link para a página específica da consulta.  
A página de login, acessada pelo *Entrar* no menu superior ou menu drop-down, se encontra um formulário de login para o usuário também com as opções *Cadastrar-se* e *Esqueci minha senha*.
A página de cadastro, acessada pelo *Cadastrar-se*, contém um formulário para o cadastro de novos usuários, e a página de redefinição de senha, acessada pelo *Esqueci minha senha*, contem apenas um formulário para enviar um e-mail.   

## Estrutura do Projeto

O projeto conta com a página principal como `index.html` e os diretórios, `css` que conta com o arquivo `style.css` que estiliza a página, `img` que contem os arquivos
de imagens da página, `js` que conta com o arquivo `script.js` que dinamiza a página, `login` que contem os arquivos html relacionados a login e a suporte, `consultas` que contem os arquivos html relacionados a cada página específica.

Estrutra do diretório do projeto:

###DevWeb
|_ index.html
|_ consultas
| | _ consulta_geral.html
| | _ etc.html
|_ login
| | _ login.html
| | _ etc.html
|_ css
| | _ style.css
|_ js
| |_ script.js
|_ img
  |_ img.png

  
