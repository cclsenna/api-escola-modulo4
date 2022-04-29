class FuncionariosDAO {
    constructor(db){
        this._db = db;

    }
    async ExibirTodos(){
        return await new Promise((resolve, reject) => {
            const query = "SELECT * FROM funcionarios";
            
            this._db.all(query, (erro,resultado) => {
                if(erro) {
                    return resolve(resultado);
                }else{
                    return reject("Não foi possivel listar registros")
                }
            })
        })
    }
}

export default FuncionariosDAO;