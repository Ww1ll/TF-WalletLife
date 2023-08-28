# Projeto de Testes Wallet Life
Estes testes tem como objetivo realizar testes de automação front end utilizando o framework selenium.
O objeto de teste foi o projeto DBCursos Tech realizado pela equipe de front-end durante a 12ª edição do Vem Ser DBC.

## Objetivo
O objetivo deste projeto é automatizar os testes de interface de usuário do site Wallet Life utilizando a ferramenta de testes front end Cypress. Além disso, serão gerados relatórios detalhados utilizando o Allure.

## Pré-requisitos
* Ferramenta de gerenciamento de dependências npm
* Ambiente de desenvolvimento integrado (IDE) de sua escolha (VS Code)
* Dependências: cypress 12.0.0, faker-js 8.0.2, faker-br 0.4.1, date-fns 2.30.0, cypress-allure-plugin 2.40.0

## Geração de relatórios no Allure
  1. Instale as dependências necessárias
      npm install cypress --save-dev
      npm install @shelex/cypress-allure-plugin --save-dev
      npm install allure-commandline --save-dev
     
  2. Configurar o Cypress para usar o plugin Allure
     No seu arquivo commands.js no diretório support, adicione o seguinte código para configurar o uso do plugin Allure:
       import '@shelex/cypress-allure-plugin'
     
  3. Gere o relatório Allure
     npx allure generate allure-results --clean -o allure-report
      Isso criará o relatório Allure na pasta allure-report.

  4. Abra o relatório Allure
     npx allure open allure-report

## Equipe
* Alexia Oliveira
* Daniel Trovão
* Henrique Oliveira
* Kassia Espirito Santo
* Mateus Aniceto
* William Braz
* Yuri Soares
