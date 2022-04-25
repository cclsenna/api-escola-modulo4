class AlunoDao {
  constructor(db) {
    this._db = db;
  }

  async lista() {
    return await new Promise((resolve, reject) => {
      const query = "SELECT * FROM alunos";

      this._db.all(query, (erro, resultado) => {
        if (!erro) {
          return resolve(resultado);
        } else {
          console.log(erro);
          return reject("Não foi possível listar aluno");
        }
      });
    });
  }

  async listaUm(id) {
    return await new Promise((resolve, reject) => {
      const query = "SELECT * FROM alunos WHERE id = ?";
    
      this._db.get(query, [id], (erro, resultado) => {
        if (!erro) {
          return resolve(resultado);
        } else {
          return reject("Aluno não encontrado");
        }
      });
    });
  }

  async inserir(aluno) {
    return await new Promise((resolve, reject) => {
      const query = "INSERT INTO alunos (nome,sobrenome,dataNascimento) values (?,?,?)";

      this._db.run(
        query, [aluno._nome, aluno._sobrenome, aluno._dataNascimento],
        (erro, resultado) => {
          if (!erro) {
            return resolve("Aluno cadastrado com sucesso");
          } else {
            console.log(erro);
            return reject("Não foi possível cadastrar aluno");
          }
        }
      );
    });
  }

  async deletar(id) {
    return await new Promise((resolve, reject) => {
      const query = "DELETE FROM alunos WHERE id = ?";

      this._db.get(query, [id], (erro, resultado) => {
          if (!erro) {
            return resolve(resultado);
          } else {
            console.log(erro);
            return reject("Não foi possível deletar aluno");
          }
        }
      );
    });
  }

 
}

export default AlunoDao;
