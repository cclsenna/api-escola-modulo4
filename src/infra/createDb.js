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
    tel  VARCHAR(20),
    email VARCHAR(50),
    foto VARCHAR(10000),  
    id_professor INTEGER NOT NULL,
    turno VARCHAR(1) NOT NULL,
    nota_historia REAL,
    nota_matematica REAL,
    nota_geografia REAL,
    nota_portugues REAL,
    nota_artes REAL,
    nota_edfisica REAL,
    cep varchar(10),
    rua VARCHAR(100),
    bairro VARCHAR(100),
    cidade VARCHAR(100),
    uf VARCHAR(2),
    numero VARCHAR(10)
    );`;

// VARCHAR(20)inserindo dados na tabela alunos

const INSERIR_ALUNOS = `
INSERT INTO alunos(nome, sobrenome, dataNascimento,tel,email,foto,id_professor,turno,nota_historia,nota_matematica,nota_geografia,nota_portugues,nota_artes,nota_Edfisica,cep,rua,bairro,cidade,uf,numero)
VALUES 
    ('Iata','Anderson', '1991/01/15','219999999',"teste@teste.com.br",'https://www.pluriconsultoria.com.br/wp-content/uploads/2020/10/314197-1.png' ,'1','M','9.5','9.5','9.5','9.5','9.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Karla', 'Valeriano', '1993/10/13','219999999',"teste@teste.com.br",'https://www.pluriconsultoria.com.br/wp-content/uploads/2020/10/314197-1.png','1','M','9.5','9.5','9.5','9.5','9.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Giovanni', 'Clayton', '1994/07/2','219999999',"teste@teste.com.br",'https://www.pluriconsultoria.com.br/wp-content/uploads/2020/10/314197-1.png','1','M','9.5','9.5','9.5','9.5','9.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Edu', 'Moreira', '1991/05/20','219999999',"teste@teste.com.br",'https://www.pluriconsultoria.com.br/wp-content/uploads/2020/10/314197-1.png','1','M','9.5','9.5','9.5','9.5','9.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Rodrigo', 'William', '1995/06/18','219999999',"teste@teste.com.br",'https://www.pluriconsultoria.com.br/wp-content/uploads/2020/10/314197-1.png','1','M','9.5','9.5','9.5','9.5','9.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Paulo', 'Reis', '1995/01/13','219999999',"teste@teste.com.br",'https://www.pluriconsultoria.com.br/wp-content/uploads/2020/10/314197-1.png','1','M','9.5','9.5','9.5','9.5','9.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Thereza', 'Mello', '1995/01/13','219999999',"teste@teste.com.br",'https://www.pluriconsultoria.com.br/wp-content/uploads/2020/10/314197-1.png','1','M','9.5','9.5','9.5','9.5','9.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Eduardo', 'Moreira', '1995/01/13','219999999',"teste@teste.com.br",'https://www.pluriconsultoria.com.br/wp-content/uploads/2020/10/314197-1.png','1','M','9.5','9.5','9.5','9.5','9.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Maria', 'Rita', '1995/01/13','219999999',"teste@teste.com.br",'https://www.pluriconsultoria.com.br/wp-content/uploads/2020/10/314197-1.png','1','M','9.5','9.5','9.5','9.5','9.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Gabriel', 'Lopes', '1995/01/13','219999999',"teste@teste.com.br",'https://www.pluriconsultoria.com.br/wp-content/uploads/2020/10/314197-1.png','1','M','9.5','9.5','9.5','9.5','9.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('William', 'Firmino', '1995/01/13','219999999',"teste@teste.com.br",'https://www.pluriconsultoria.com.br/wp-content/uploads/2020/10/314197-1.png','1','M','9.5','9.5','9.5','9.5','9.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Eliane', 'Cristina', '1995/01/13','219999999',"teste@teste.com.br",'https://www.pluriconsultoria.com.br/wp-content/uploads/2020/10/314197-1.png','1','M','9.5','9.5','9.5','9.5','9.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Milla', 'Rany', '1995/01/13','219999999',"teste@teste.com.br",'https://www.pluriconsultoria.com.br/wp-content/uploads/2020/10/314197-1.png','1','M','9.5','9.5','9.5','9.5','9.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Kassiane', 'Façanha', '1995/01/13','219999999',"teste@teste.com.br",'https://www.pluriconsultoria.com.br/wp-content/uploads/2020/10/314197-1.png','1','M','9.5','9.5','9.5','9.5','9.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Inara', 'X', '1995/01/13','219999999',"teste@teste.com.br",'https://www.pluriconsultoria.com.br/wp-content/uploads/2020/10/314197-1.png','1','M','9.5','9.5','9.5','9.5','9.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Douglas', 'adnreade', '1995/01/13','219999999',"teste@teste.com.br",'https://www.pluriconsultoria.com.br/wp-content/uploads/2020/10/314197-1.png','1','M','9.5','9.5','9.5','9.5','9.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43");

    


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
    ('Haroldo','Lima', '1990/06/20','portugues'),
    ('Ricardo', 'Alves', '1992/02/10','matematica'),
    ('Patrícia', 'Silveira', '1990/01/15','geografia'),
    ('Flávia', 'da Silva', '1989/02/20','geografia'),
    ('Karlla', 'Antunes', '1980/11/28','geografia'),
    ('Marluce', 'Ramos', '1985/12/12','geografia'),
    ('Cláudia', 'Diniz', '1982/06/01','geografia'),
    ('Lúcia', 'Carvalho', '1983/06/20','geografia'),
    ('Vinícius', 'Lopes', '1983/02/10','geografia');
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



