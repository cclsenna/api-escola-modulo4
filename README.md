# API Escola - Projeto de Conclusão - Módulo 4 Resilia Web Dev

## Resumo
Este projeto foi realizado como parte da conclusão do módulo 4 do curso de desenvolvimetno Web Full Stack da Resilia.Nele foi realizada a construção de uma API coma temática de uma escola, utilizando as tecnologias aprendidas em aula.
<br>

## Tecnologias Utilizadas no desenvolvimento
NodeJs (Express, Nodemon, Fastest Validator e SQLlite)


## Como executar o projeto ?

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
- Todas as dependências necessárias já estão configuradas no package.json,bastanto apenas realizar o download. Para a primeira execução, realizar o download de todos os pacotes necessários.

```
$ npm install
```

### Criação do Banco de Dados (opcional)
- Caso deseje recriar o banco de dados, executar o arquivo **createDb.Js** apenas na primeira vez para realizar a geração do banco de dados. Este arquivo irá gerar novamente todas as tabelas necessárias e popular com dados de fábrica para que possam ser realizados eventuais testes.

```
$ node createDb.js
```

### Iniciar o servidor
```
$ node server.js
```

## Rotas disponíveis
As rotas criadas estão descritas nas seções abaixao,separados por cada entidade. 

### ALUNOS

- **GET**

Selecionar registros de alunos já existentes

Request - busca todos os registros da entidade
```
{url}/alunos
```

Request - busca de registro único por matrícula
```
{url}/alunos/{matricula}
```

Exemplo Response
```
[
    {
        "id": 1,
        "nome": "Lionel",
        "sobrenome": "Messi",
        "dataNascimento": "1995/06/18"
    },
    {
        "id": 2,
        "nome": "Cristiano",
        "sobrenome": "Ronaldo",
        "dataNascimento": "1990/05/02"
    },
    {
        "id": 3,
        "nome": "Sergio",
        "sobrenome": "Aguero",
        "dataNascimento": "1980/01/15"
    },
    {
        "id": 4,
        "nome": "Bruno",
        "sobrenome": "Henrique",
        "dataNascimento": "1980/01/15"
    }
]

```
- **POST**

Cadastramento de novos alunos
```
{url}/alunos
```

Request Body - Json
```
{
    "nome": {string},
    "sobrenome": {string},
    "dataNascimento": {string},
    "turma": {integer}
}
```

- **PATCH**
Atualizar registro de aluno já existente
```
{url}/alunos/{matricula}
```

Request Body - Json
```
{
    "nome": {string},
    "sobrenome": {string},
    "dataNascimento": {string},
    "turma": {integer}
}
```


- **DELETE**

Request - deleção de um único registro por matrícula
```
{url}/alunos/{matricula}
```

### PROFESSORES
- **GET**

Request - busca todos os registros da entidade
```
{url}/professor
```
Request - busca de registro único por matrícula

```
{url}/professor/{matricula}
```
Exemplo Response
```
{
    "id": 1,
    "nome": "Joel",
    "sobrenome": "Santana",
    "dataNascimento": "1950/06/18",
    "materia": "matematica"
}

```


- **POST**
Cadastramento de novos professsores
```
{url}/professor
```
Request Body(Json)
```
 {
        "nome": "Joao",
        "sobrenome": "Teste",
        "dataNascimento": "1988/06/18",
        "materia": "geografia"
    }
```



- **PATCH**
Atualizar registro de professor já existente
```
{url}/professor/{matricula}
```
Request Body - Json
```
{
    "nome": {string},
    "sobrenome": {string},
    "dataNascimento": {string},
    "materia": {integer}
}
```


- **DELETE**

Exclusão de registro existente na base
```
{url}/professor/{matricula}
```


### FUNCIONÁRIOS
- **GET**


- **POST**


- **PATCH**


- **DELETE**

## Contribuições
Este projeto foi realizado em conjunto com outros dois membros do curso,onde cada um construiu  uma rota do serviço.

### Caio Senna  https://github.com/cclsenna
### Iata Anderson https://github.com/IataAnderson
### Rodrigo William https://github.com/1995william





