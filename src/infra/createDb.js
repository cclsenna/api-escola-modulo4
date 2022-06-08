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
    ('Iata','Anderson', '1991/01/15','219999999',"iata@teste.com.br",'http://www.objetodireto.com.br/fotos/tuca%203x4.jpg' ,'1','T','7.6','9.5','7.5','7.2','5.5','5.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Karla', 'Valeriano', '1993/10/13','219999999',"karla@teste.com.br",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3QayYfjyjPDZZKQKwQei-NsfXmiW4PWcBGA&usqp=CAU','2','M','9.5','9.5','9.5','9.5','9.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Giovanni', 'Clayton', '1994/07/2','219999999',"gio@teste.com.br",'https://imageserve.babycenter.com/18/000/416/UHSrrN03ASPW94xm2vdJ1BxYEDx7dd46_med.jpg','4','T','5.5','8.5','9.5','9.5','9.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Edu', 'Moreira', '1991/05/20','219999999',"edu@teste.com.br",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1EgN5m-7GP_vyfegRbnJDZms4JZnZrw0QKA&usqp=CAU','2','M','9.5','9.5','9.5','9.5','9.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Rodrigo', 'William', '1995/06/18','219999999',"rodrigo@teste.com.br",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSyQnQ_2W2ee3nUuCPHKkySIkF25N2h-Yazg&usqp=CAU','4','M','9.5','9.5','9.5','9.5','9.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Paulo', 'Reis', '1995/01/13','219999999',"paulo@teste.com.br",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ZQb9-Pf4oBGY7TuEiK3o8Z-1vMo_dQNmq7BouyGhuTSpGiBrqgaCdM7mJmYuXPFNyUM&usqp=CAU','3','M','9.5','9.5','9.5','9.5','9.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Thereza', 'Mello', '1995/01/13','219999999',"thereza@teste.com.br",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYLki7Uw81R1Fd9_wdsXr2EORxXxIogxqMA&usqp=CAU','2','M','9.5','9.5','9.5','9.5','9.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Eduardo', 'Moreira', '1995/01/13','219999999',"eduardo@teste.com.br",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUFeI-a9er0PhiU624ImN4CxjgQJpgrsh-pk5IiIPgziMSbmq4R0D8rc5jR49UXYV6EAc&usqp=CAU','1','T','9.5','9.5','9.5','9.5','9.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Maria', 'Rita', '1995/01/13','219999999',"maria@teste.com.br",'http://1.bp.blogspot.com/_oPYPxd0ixNw/SdOf5_2E_sI/AAAAAAAAAUM/BfmFpLakS1g/s400/foto3x4+col%C3%A9gio.jpg','2','M','9.5','9.5','9.5','9.5','9.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Gabriel', 'Lopes', '1995/01/13','219999999',"gabriel@teste.com.br",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRLpUdB21VORGY7hp2EeJnMF8MMjAzGVFCOQ&usqp=CAU','3','M','9.5','9.5','9.5','9.5','9.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('William', 'Firmino', '1995/01/13','219999999',"william@teste.com.br",'https://pbs.twimg.com/profile_images/820024858516062208/Kwp03T9B_400x400.jpg','2','M','9.5','9.5','9.5','9.5','9.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Eliane', 'Cristina', '1995/01/13','219999999',"eliane@teste.com.br",'https://static3.depositphotos.com/1005818/216/i/600/depositphotos_2161621-stock-photo-innocent-asian-baby-face.jpg','1','T','9.5','9.5','8.8','8.0','8.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Milla', 'Rany', '1995/01/13','219999999',"milla@teste.com.br",'https://i.pinimg.com/originals/8b/d3/e4/8bd3e46fe554b6d2c03a5c0eb219cc2e.jpg','1','M','9.5','9.5','9.5','9.5','9.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Kassiane', 'Façanha', '1995/01/13','219999999',"kassiane@teste.com.br",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3QayYfjyjPDZZKQKwQei-NsfXmiW4PWcBGA&usqp=CAU','2','T','5.5','9.5','9.5','9.5','9.1','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Inara', 'Almeida', '1995/01/13','219999999',"inara@teste.com.br",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJm5ciPYbK0PWHb10IcpIhNtIUXw9N8u_eQ&usqp=CAU','1','M','9.5','8.5','9.5','6.2','9.7','9.3',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Douglas', 'Andrade', '1995/01/13','219999999',"douglas@teste.com.br",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiy3BcoyohFr15cEoi3lUF0ON9dHIQNdFS2w&usqp=CAU','1','M','9.5','9.5','9.5','9.5','9.5','9.5',"22222","rua teste","bairro teste","testópolis","TS","43"),
    ('Caio', 'Senna', '1993/04/20','219999999',"caio@teste.com.br",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPV9BS1fg8ne_U7b7L4aTa3s5dZp2npN9r5w&usqp=CAU','1','M','8.0','7.5','6.1','6.2','7.0','8.2',"24110310","rua teste","bairro teste","testópolis","RJ","43");

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



