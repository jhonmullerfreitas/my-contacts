# My contacts

## É uma aplicação web fullstack para realizar o manuseio de contatos de uma agenda

## Tecnologias usadas:
- ReactJS
- NodeJS
- JavaScript
- TypeScript
- Express

## Funcionalidades:
- Realiza o cadastro de usuário
- Realiza o login
- Realiza o cadastro de contatos
- Realiza a listagem de todos os contatos do usuário logado
- Realiza a deleção de contatos

## Diretórios:
A aplicação conta com dois diretórios:
- api-mycontacts (diretório da API)
- interface-mycontacts (diretório da interface)

## Clone:
Você pode realizar o clone deste repositório contendo a aplicação completa através do comando `$ git clone https://github.com/jhonmullerfreitas/my-contacts.git`

## Interface:
- Para executar a interface deste projeto é necessário ter em sua máquina um gerenciador de pacotes como o `yarn` ou `npm`
- Após fazer o clone do repositório você pode entrar dentro da pasta `interface-mycontacts` e executar o comando `$ yarn install` para instalar as dependências do projeto, logo após execute `$ yarn start`
- se tudo ocorrer de maneira correta, a interface abrirá uma aba em seu navegador padrão na url `http://localhost:3000/`
- para utilizar a interface é necessário estar com a API executando, siga os passos abaixo

## API:
- Para executar o servidor em localhost através desta API, você precisa estar dentro do diretório `api-interface` e rodar o comando `$ yarn install` para instalar todas as dependências
- Execute o comando `yarn dev` e note que o servidor irá iniciar em localhost:3001
- Para requisições com clientes HTTP como Insomnia ou Postman siga o exemplo dos endpoints abaixo.
