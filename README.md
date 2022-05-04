# API Escola - Projeto de Conclusão - Módulo 4 Resilia Web Dev

## Resumo
Este projeto foi realizado como parte da conclusão do módulo 4 do curso de desenvolvimetno Web Full Stack da Resilia.Nele foi realizada a construção de uma API coma temática de uma escola, utilizando as tecnologias aprendidas em aula.
<br>

## Tecnologias Utilizadas no desenvolvimento
NodeJs Dependências: Express, Cors, Nodemon, Fastest Validator e SQLlite

## Acesso à API
A API foi hospedada no Heroku,o que permite o consumo via internet.
URL : https://app-escola-resilia.herokuapp.com
Para verificar como utilizar o serviço, ver a seção de "Rotas Disponíveis" neste documento


## Como executar o projeto ?
O procedimento abaixo se refere caso deseje avaliar o código e executar localmente.

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
        "matricula": 1,
        "nome": "Iata",
        "sobrenome": "Anderson",
        "dataNascimento": "1991/01/15",
        "turma": 13
    },
    {
        "matricula": 2,
        "nome": "Karla",
        "sobrenome": "Valeriano",
        "dataNascimento": "1993/10/13",
        "turma": 13
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

- **PUT**
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
{url}/professores
```
Request - busca de registro único por matrícula

```
{url}/professores/{matricula}
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


- **POST** Cadastramento de novos professsores
```
{url}/professores
```
Request Body(Json)
```
 {
        "nome": {string},
        "sobrenome": {string},
        "dataNascimento": {string},
        "materia": {string}
    }
```



- **PUT** Atualizar registro de professor já existente
```
{url}/professores/{matricula}
```
Request Body - Json
```
{
    "nome": {string},
    "sobrenome": {string},
    "dataNascimento": {string},
    "materia": {string}
}
```


- **DELETE** Exclusão de registro existente na base
```
{url}/professores/{matricula}
```


### FUNCIONÁRIOS
- **GET**

Request - busca todos os registros da entidade
```
{url}/funcionarios
```
Request - busca de registro único por matrícula

```
{url}/funcionarios/{matricula}
```
Exemplo Response
```
{
        "id": 1,
        "nome": "Joao",
        "sobrenome": "geraldo",
        "dataNascimento": "1955/05/20",
        "profissao": "porteiro"
    
}

```



- **POST**
Cadastramento de novos funcionários
```
{url}/funcionarios
```
Request Body(Json)
```
 {
        "nome": {string},
        "sobrenome": {string},
        "dataNascimento": {string},
        "profissao": "{string}"
    }
```


- **PUT**
Atualizar registro de funcionário já existente
```
{url}/funcionarios/{matricula}
```
Request Body - Json
```
{
    "nome": {string},
    "sobrenome": {string},
    "dataNascimento": {string},
    "profissao": {string}
}
```


- **DELETE**
Exclusão de registro existente na base
```
{url}/funcionarios/{matricula}
```

## Contribuições
Este projeto foi realizado em conjunto com outros dois membros do curso,onde cada um construiu  uma rota do serviço.

### Caio Senna  https://github.com/cclsenna
### Iata Anderson https://github.com/IataAnderson
### Rodrigo William https://github.com/1995william





