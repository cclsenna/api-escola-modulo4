class AlunoDao {

  constructor(db) {
    this._db = db;
  }

  async listarTodos() {
    return await new Promise((resolve, reject) => {
      const query = "SELECT * FROM alunos";

      this._db.all(query, (erro, resultado) => {
        if (!erro) {
          return resolve(resultado);
        } else {
          return reject("Não foi possivel listar Tabela");
        }
      });
    });
  }

  async listarUm(id) {
    return await new Promise((resolve, reject) => {
      const query = "SELECT * FROM alunos WHERE id = ?";
    
      this._db.get(query, [id], (erro, resultado) => {
        if (!erro) {
          return resolve(resultado);
        } else {
          return reject(erro);
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
            return resolve("Aluno cadastrado com sucesso!");
          } else {
            console.log(erro);
            return reject("Não foi possível cadastrar aluno!");
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
            return resolve("Aluno deletado com sucesso!");
          } else {
            console.log(erro);
            return reject("Não foi possível deletar aluno!");
          }
        }
      );
    });
  }

  async atualizar(id, aluno) {
    return await new Promise((resolve, reject) => {
      const query = `UPDATE alunos SET nome = ?, sobrenome = ?, dataNascimento = ? WHERE id = ?`;

      this._db.run(query, [aluno._nome, aluno._sobrenome, aluno._dataNascimento, id], (erro, resultado) => {
          if (!erro) {
            return resolve("Aluno matriculado com sucesso!");
          } else {
            return reject("Não foi possível atualizar aluno!");
          }
        }
      );
    });
  }
 
}

export default AlunoDao;
