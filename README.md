
<img src="./src/Assets/Clothing-view.png" alt="Preview platform" width="80%" height="auto" margin="0 auto">

# Oque é Clothing?

Clothing é uma plataforma para cadastro e controle de vestuários em estoque, e torna possível visualizar o seu valor estimado e quantidade disponível, além de nome e descrição do estado atual.

# Instalações

* Primeiramente, acesse o seu terminal e pasta desejada.
* Em seguida faça o clone do projeto com ```git clone https://github.com/lucca-rodrigues/Clothing-Service-API.git```
* Feito isso acesse a pasta do repositório com ```cd Clothing-Service-API```
* Faça a instalação das dependências com ```yarn ``` ou ```npm install``` (Recomendamos a utilização do Yarn).

# API Service
* Agora com o projeto e dependências instalados, instale todas as dependências com ```yarn ``` ou ```npm install```.
* O projeto já possui um banco de dados Sqlite integrado para facilitar a execução, mas se desejar utilizar outro banco de dados faça a instalação do driver desejado e em seguida configure os dados de conexão no ```.env```.


# Execução com banco de dados atual:
* Se optar por utilizar o mesmo banco, basta rodar ```yarn dev ou``` ou ```npm run dev```(Já preparamos alguns scrips para facilitar o processo).


# Execução com novo banco de dados:
* Instale o driver do banco de dados
* Faça a configuração de conexão no ```.env``` substituindo as configurações originais.
* Aqui segue uma lista com os scripts disponíveis para facilitar o processo:
```javascript
 "scripts": {
    "start": "node server.js",
    "dev": "adonis serve --dev", // START O PROJETO
    "migrate": "adonis migration:run", // RODAR MIGRATIONS
    "refresh": "adonis migration:refresh", // DELETAR E RE-CRIAR MIGRATIONS
    "reset": "adonis migration:reset", // REMOVER MIGRATIONS
    "model": "adonis make:model", // CRIAR NOVOS MODELS
    "controller": "adonis make:controller",// CRIAR NOVOS CONTROLLERS
    "migration": "adonis make:migration", // CRIAR NOVAS MIGRATIONS
    "test": "node ace test"
  },
```
* Para utilizar os scrips é simples ```yarn + comando Ex: yarn migrate ``` ou ``` npm run migrate```.


# Endpoints da API
* Esta API possui as seguintes endpoints:
```javascript
Route.get('/clothings', 'ClothingController.index')
Route.get('/clothings/:id', 'ClothingController.show')
Route.post('/clothings', 'ClothingController.store')
Route.put('/clothings/:id', 'ClothingController.update')
Route.delete('/clothings/:id', 'ClothingController.destroy')
```
* Para editar ou incrementar novas rotas, basta acessar ```start/routes.js```.

# Startando o Front-end
* Agora que sua API já esta em funcionamento, é hora de dar o start a plataforma web se ainda não estiver rodando com ```yarn start``` ou ```npm run start```.env

# Agradecimentos
* Obrigado por ter acompanhado até aqui, espero ter lhe ajudado com as configurações e detalhes sobre este projeto.
