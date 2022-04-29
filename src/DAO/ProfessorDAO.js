class ProfessorDAO{

    constructor(db){
        this._db=db;
    }

    async listarTudo(){
        return await new Promise((resolve,reject)=>{
            const query='select * from professores;'

            this._db.all(query,(erro,resultado)=>{

                if(!erro) return resolve(resultado);
                return reject(erro);                
            });
        });


    }

    async listaUm(id){
        return await new Promise((resolve,reject)=>{
            const query='select * from professores where id=?'
            this._db.get(query,[id],(erro,resultado)=>{
                if(!erro) return resolve(resultado);
                return reject(erro);
            });

        });

    }
    

    async inserir(novoProf){
        return await new Promise((resolve,reject)=>{
            const query='insert into professores (nome,sobrenome,dataNascimento,materia) values (?,?,?,?)';
            this._db.run(query,[novoProf._nome,novoProf._sobrenome,novoProf._nascimento,novoProf._materia],erro=>{
                if(!erro) return resolve('Dados inseridos com sucesso');
                return reject(erro);
            });
        });

    }

    

    async remover(id){
        return await new Promise((resolve,reject)=>{
            const query='delete from professores where id=?';
            this._db.run(query,[id],erro=>{
                if(!erro) return resolve('Registro deletado com sucesso');
                return reject (erro);
            });
        });
    }

    async alterar(id,prof){
        return await new Promise((resolve,reject)=>{
            const query='update professores set nome=?,sobrenome=?,dataNascimento=?,materia=? where id=?';
            this._db.run(query,[prof._nome,prof._sobrenome,prof._nascimento,prof._materia,id],erro=>{
                if(!erro) return resolve ('Registro alterado com sucesso')
                return  reject(erro);
            });

        });
    }   


}

export default ProfessorDAO;