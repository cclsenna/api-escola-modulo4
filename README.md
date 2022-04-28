# API Escola - Projeto de Conclusão - Módulo 4 Resilia Web Dev

## Resumo
Este projeto foi realizado como parte da conclusão do módulo 4 do curso de desenvolvimetno Web Full Stack da Resilia.Nele foi realizada a construção de uma API coma temática de uma escola, utilizando as tecnologias aprendidas em aula.
<br>

## Tecnologias Utilizadas no desenvolvimento
NodeJs (Express,Nodemon,Fastest Validator e SQL Lite)


## Com executar o projeto ?

### Realizar o clone do diretório

- Via HTTPS 

```
$ git clone https://github.com/cclsenna/api-escola-modulo4.git
```

- Via SSH
```
$ git clone git@github.com:cclsenna/api-escola-modulo4.git
```

### Instalação das dependências 
- Todas as dependências necessárias já estão listadas no package.json. Para a primeira execução, realizar o download de todos os pacotes necessários.

```
$ npm install
```

### Criação do Banco de Dados (opcional)
- Caso deseje recriar o banco de dados,executar o arquivo createDb.Js apenas na primeira vez para realizar a geração do banco de dados. Este arquivo irá gerar novamente todas as tabelas necessárias e popular com dados de fábrica para que possam ser realizados eventuais testes.

```
$ node createDb.js
```


### Iniciar o servidor
```
$ node server.js
```

## Rotas disponíveis
As rotas criadas estão descritas nas seções abaixao,separados por cada entidade. 

### Alunos

- **GET**

```
{url}/alunos
```


{url}/alunos/{matricula}

- **POST**

{url}/alunos
```
Body(Json)

{
    "nome": {string},
    "sobrenome": {string},
    "dataNascimento": {string},
    "turma": {integer}
}
```

- **PATCH**

{url}/alunos/{matricula}

Body (Json)
```
{
    "nome": {string},
    "sobrenome": {string},
    "dataNascimento": {string},
    "turma": {integer}
}
```

- **DELETE**

{url}/alunos/{matricula}

### Professores
- **GET**
{url}/professor

{url}/professor/{matricula}



- **POST**
{url}/professor



- **PATCH**
{url}/professor/{matricula}



- **DELETE**
{url}/professor/{matricula}


### Funcionários
- **GET**


- **POST**


- **PATCH**


- **DELETE**

## Contribuições
Este projeto foi realizado em conjunto com outros dois membros do curso,onde cada um construiu  uma rota do serviço.

### Caio Senna  https://github.com/cclsenna
### Iata Anderson https://github.com/IataAnderson
### Rodrigo William https://github.com/1995william





