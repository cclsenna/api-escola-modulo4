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


}

export default ProfessorDAO;