/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
import sqlite3 from "sqlite3";

const db = new sqlite3.Database('./database.db');


// criando tabela alunos 

const ALUNOS_SCHEMA = `CREATE TABLE IF NOT EXISTS alunos (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    nome VARCHAR(30) NOT NULL,
    sobrenome VARCHAR(30) NOT NULL,
    dataNascimento DATE NOT NULL
    );`;

// inserindo dados na tabela alunos

const INSERIR_ALUNOS = `
INSERT INTO alunos (nome, sobrenome, dataNascimento)
VALUES 
    ('Arnaldo','Golimar', '1995/06/18'),
    ('Zé', 'Raimundo', '1990/05/02'),
    ('Maria', 'do Socorro', '1980/01/15')
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




db.serialize( () => {
    criaTabelaAl();
    populaTabelaAl();
    criaTabelaProf();
    populaTabelaProf();
});

export default db;