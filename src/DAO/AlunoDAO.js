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
                    return reject('Não foi possivel cadastrar aluno')
                }
            })    
        })
        }
    static async inserir (aluno) {
        return await new Promise ((resolve, reject) => {
            const query = `INSERT INTO alunos (id,nome,sobrenome,dataNascimento) values (?,?,?)`

            this._db.run(query,[aluno.id,aluno.nome,aluno.sobrenome,aluno.dataNascimento], 
                (erro, resultado) => {
                if(!erro) {
                    return resolve(resultado)
                } else {
                    console.log(erro);
                    return reject('Não foi possivel cadastrar aluno')
                }
            })    
        })
        }
            
        
}


export default AlunoDao;