<h1 align="center">⏰ Cadastrou Logou! ⏰</h1>

<p align="center">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/cassiojj/cadastrou-logou?color=">
  <img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/cassiojj/cadastrou-logou?color=">
  <img alt="Project programing languages count" src="https://img.shields.io/github/languages/count/cassiojj/cadastrou-logou?color=">
</p>

## :computer: Projeto

Este projeto contempla um completo Backend para cadastro e autenticação de usuário, com direito a troca de senha, proteção conta **brute force** entre outras coisas :wink:.

Projeto feito com o aprendizado adquirido no Bootcamp GoStack da <a href="https://rocketseat.com.br/" target="_blank">Rocketseat</a>

## :gear: Contruído com:

<ul><li>NodeJS</ul>
<ul><li>TypeScrypt</li></ul>
<ul><li>TypeORM</li></ul>
<ul><li>JWT (JSON Web Token)</li></ul>
<ul><li>MySQL</li></ul>
<ul><li>Redis</li></ul>
<ul><li>SES (AWS Simple Email Service)</li></ul>
<ul><li>Etherea (https://ethereal.email/)</li></ul>


## :heavy_check_mark: Pré-requesitos para funcionamento

<ul>
    <li><a href="https://nodejs.org/en/" target="_blank">NodeJS
    </a></li>
</ul>

<ul>
    <li><a href="https://dev.mysql.com/downloads/" target="_blank">MySQL</a></li>
</ul>

<ul>
    <li><a href="https://redis.io/" target="_blank">Redis</a></li>
</ul>

## :heavy_exclamation_mark: Arquivos importantes a serem configurados

> **src/config/mail.ts** => trocar os valores email e name para os seus

> **rc/shared/container/providers/MailProvider/implementations/SESMailProvider.ts** => ajustar o valor da region

> **src/modules/users/services/SendForgotPasswordEmailService.ts** => ajustar o subject

> **ormconfig.json** => ajustar as configurações do banco de dados

## :movie_camera: Veja funcionando

<img src="https://github.com/cassiojj/cadastrou-logou/blob/main/assets/cadastrouLogou.gif">
