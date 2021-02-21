<h1 align="center">⏰ Cadastrou Logou! ⏰</h1>

<p align="center">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/cassiojj/cadastrou-logou?color=">
  <img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/cassiojj/cadastrou-logou?color=">
  <img alt="Project programing languages count" src="https://img.shields.io/github/languages/count/cassiojj/cadastrou-logou?color=">
</p>

## :computer: Projeto

Este projeto contempla um completo fluxo de cadastro e autenticação de usuário, com direito a troca de senha :wink:.

## :gear: Contruído com:

Este projeto foi construído utilizando o conteúdo que aprendemos em sala de aula:

<details>
    <summary>Backend</summary>
    <ul><li>Java 8</li></ul>
    <ul><li>JDK 13.0.2</li></ul>
    <ul><li>JSP</li></ul>
    <ul><li>JSTL</li></ul>
    <ul><li>Java Bens</li></ul>
    <ul><li>DAO (Data Acess Object)</li></ul>
    <ul><li>Service</li></ul>
    <ul><li>Factory</li></ul>
    <ul><li>MVC</li></ul>
    <ul><li>Front Controller</li></ul>
    <ul><li>Command</li></ul>
    <ul><li>MySQL</li></ul>
</details>

<details>
    <summary>Frontend</summary>
    <ul><li>HTML 5</li></ul>
    <ul><li>JSP</li></ul>
    <ul><li>JSTL</li></ul>
    <ul><li>Bootstrap</li></ul>
    <ul><li>CSS 3</li></ul>
    <ul><li>JavaScript</li></ul>
</details>
Passos para colocar em produção.

Deve-se criar as variaveis no GITLAB,

deve-se criar as variaves do .env e ormconfig.json

deve0e ajustar o .env e ormconfig.json nas variaveis do GITLAB

o ajuste do ormconfig.json, é simplesmente trocar o "src"por "dist" e ".ts" por ".js", pois como desenvolvemos em typescript, devemos converter para javscript, para o node entender

não esquecer de colocar no .dockerignore, para não buildar o ormconfig.json e lógico no .gitignore não enviar o ormconfig.json e o .env


#### Recursos utilizados

**Ethereal** (https://ethereal.email/) para testar o envio de email em desenvolvimento

No arquivo "src/shared/container/providers/MailProvider/implementations/EtherealMailProvider.ts", ajustar as linhs referente ao name e Address


No arquivo "src/config/mail.ts", trocar os valores email e name para os seus

**AWS SES**

Deve-se trocar a region no arquivo "src/shared/container/providers/MailProvider/implementations/SESMailProvider.ts"
Deve-se ajustar tambémo subject no arquivo "src/modules/users/services/SendForgotPasswordEmailService.ts"
