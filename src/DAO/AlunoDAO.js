class AlunoDao {

    constructor(db) {
        this._db = db;
    }

    
     async lista () {
        return await new Promise ((resolve, reject) => {
            const query = 'SELECT * FROM alunos'

            this._db.all(query, (erro, resultado) => {
                if(!erro) {
                    return resolve(resultado)
                } else {
                    console.log(erro);
                    return reject('Não foi possivel listar aluno')
                }
            })    
        })
        }
      async inserir (aluno) {
        return await new Promise ((resolve, reject) => {
            
            const query = `INSERT INTO alunos (nome,sobrenome,dataNascimento) values (?,?,?)`

            this._db.run(query,[aluno._nome, aluno._sobrenome, aluno._dataNascimento], 
                (erro, resultado) => {

                if(!erro) {
                    return resolve('Aluno cadastrado com sucesso')
                } else {
                    console.log(erro);
                    return reject('Não foi possivel cadastrar aluno')
                }
            })    
        
        })
        }
            
        
}


export default AlunoDao;