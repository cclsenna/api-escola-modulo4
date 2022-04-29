/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
import db from "./configDb.js";



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
    ('Paulo', 'Reis', '1995/01/13', 13),

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

// db.serialize( () => {
//     criaTabelaAl();
//     populaTabelaAl();
// });

