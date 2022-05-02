/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
//import db from "./configDb.js";
import sqlite3 from "sqlite3";
const db = new sqlite3.Database('./database.db');


// criando tabela alunos 

const ALUNOS_SCHEMA = `CREATE TABLE IF NOT EXISTS alunos (
    matricula INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(30) NOT NULL,
    dataNascimento DATE NOT NULL,
  	turma INTEGER NOT NULL
    );`;

// inserindo dados na tabela alunos

const INSERIR_ALUNOS = `
INSERT INTO alunos (nome, sobrenome, dataNascimento, turma)
VALUES 
    ('Iata','Anderson', '1991/01/15', 13),
    ('Karla', 'Valeriano', '1993/10/13', 13),
    ('Giovanni', 'Clayton', '1994/07/2', 13),
    ('Edu', 'Moreira', '1991/05/20', 13),
    ('Rodrigo', 'William', '1995/06/18', 13),
    ('Paulo', 'Reis', '1995/01/13', 13);

`

function criaTabelaAl() {
    db.run(ALUNOS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de alunos");
    });
}

function populaTabelaAl() {
     db.run(INSERIR_ALUNOS, (error)=> {
        if (error) console.log("Erro ao popular tabela de alunos");
    });
}



const PROF_SCHEMA=`CREATE TABLE IF NOT EXISTS professores (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    nome VARCHAR(30) NOT NULL,
    sobrenome VARCHAR(30) NOT NULL,
    dataNascimento DATE NOT NULL,
    materia varchar(60) NOT NULL
    );`;

const INSERIR_PROF=`
INSERT INTO professores (nome, sobrenome, dataNascimento,materia)
VALUES 
    ('Joel','Santana', '1950/06/18','portugues'),
    ('Lisca', 'Doido', '1965/02/10','matematica'),
    ('Zinedine', 'Zidane', '1978/01/15','geografia')
`


function criaTabelaProf(){
    db.run(PROF_SCHEMA,error=>{
        if(error) console.log('Erro ao criar tabela de alunos');
    });

}


function populaTabelaProf(){
    db.run(INSERIR_PROF,error=>{
        if(error) console.log('Erro ao criar tabela de alunos');
    });

}
/* ------------- criando tabela funcionarios -----------------------*/

const FUNCIONARIOS_SCHEMA = `CREATE TABLE IF NOT EXISTS funcionarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(30) NOT NULL,
    dataNascimento DATE NOT NULL,
  	profissao VARCHAR(50) NOT NULL
    );`;

/*-------------inserindo dados na tabela funcionarios---------------- */

const INSERIR_FUNCIONARIOS = `
INSERT INTO funcionarios (nome, sobrenome, dataNascimento, profissao)
VALUES 
    ('Joao','geraldo', '1955/05/20', 'porteiro'),
    ('Tia', 'Maria', '1985/02/22', 'merendeira'),
    ('Rodrigo', 'Will', '1994/05/2', 'Inspetor'),
    ('Kassi', 'Façanha', '1987/05/28', 'facilitadora'),
    ('Caio', 'Sena', '1982/06/10', 'diretor'),
    ('Paulo', 'Reis', '1974/09/13', 'zelador');

`

function criaTabelaFU() {
    db.run(FUNCIONARIOS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de funcionarios");
    });
}

function populaTabelaFU() {
     db.run(INSERIR_FUNCIONARIOS, (error)=> {
        if (error) console.log("Erro ao popular tabela de funcionarios");
    });
}




db.serialize( () => {
    criaTabelaAl();
    populaTabelaAl();
    criaTabelaProf();
    populaTabelaProf();
    criaTabelaFU();
    populaTabelaFU();
});



