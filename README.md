<div align=center>
	<img src="https://imgur.com/aIHvhhJ.png">
 
# Desafio Eurekka
</div>

Repositório criado para entrega do Desafio proposto pela Eurekka.

## 🚀 Recursos Utilizados

* **[NodeJS](https://nodejs.org/en)**
* **[ReactJS](https://www.postman.com)**
* **[MongoDB](https://www.mongodb.com/)**
* **[Bootstrap](https://react-bootstrap.github.io/)**
* **[Postman](https://www.postman.com)**


## 🔥 Executando a Aplicação Local

Para executar o projeto na sua máquina local, basta seguir os passos abaixo:

### 🌀 Começando... 

Você deve clonar o repositório do projeto na sua máquina e instalar as dependências.

```
git clone git@github.com:daniLdutra/eurekka-challenge.git
cd eurekka-challenge
```
### ❗️ Instalando as Dependências: 

Abre seu terminal e digite o caminho onde você clonou o projeto

```
cd /home/seuUsuario/(...)
```

Depois, quando estiver com o caminho do terminal dentro do diretório do projeto **(`eurekka-challenge`)**, acesse a pasta do front (`front-eurekka`) e digite:

```
npm install
```

Faça o mesmo para a pasta do back (`back-eurekka`)

Ao digitar a instrução acima, todas as dependências listadas e definidas no arquivo `package.json`.


### 💨 Executando a Aplicação

Abra 2 terminais, um na pasta do front e outro no back e digite:

```
> npm run dev
```
## 🎯 Rotas back-end

O back (`API`) está sendo executada na porta `3001`, e para que todas as rotas possam ser acessadas localmente é necessário acessar `http://localhost:3001/` antes dos endpoints de requisição.

| Feature | Método | Rota |
|---------|--------|------|
| Criação de laudo | POST | `/report` |
| Recuperar informações do laudo por ID | GET | `/report<id>` |

O front está sendo executada na porta `3000`, e para que todas as rotas possam ser acessadas localmente é necessário acessar `http://localhost:3000/` antes dos endpoints de requisição.

| Feature | Método | Rota |
|---------|--------|------|
| Formulário para criação de laudo | POST | `/report/create` |
| Visualizar informações do laudo por ID | GET | `/report/<id>` |


## Obrigada por chegar até aqui! :)