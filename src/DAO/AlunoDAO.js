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

  async listarUm(matricula) {
    return await new Promise((resolve, reject) => {
      const query = "SELECT * FROM alunos WHERE matricula = ?";
    
      this._db.get(query, [matricula], (erro, resultado) => {
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
      const query = "INSERT INTO alunos (nome,sobrenome,dataNascimento,turma) values (?,?,?,?)";

      this._db.run(
        query, [aluno._nome, aluno._sobrenome, aluno._dataNascimento,aluno._turma],
        (erro, resultado) => {
          if (!erro) {
            return resolve("Aluno cadastrado");
          } else {
            
            return reject("falha no cadastro");
          }
        }
      );
    });
  }

  async deletar(matricula) {
    return await new Promise((resolve, reject) => {
      const query = "DELETE FROM alunos WHERE matricula = ?";

      this._db.get(query, [matricula], (erro, resultado) => {
          if (!erro) {
            return resolve("Aluno descadastrado com sucesso!");
          } else {
            return reject("Não foi possível descadastrar aluno!");
          }
        }
      );
    });
  }

  async atualizar(matricula, aluno) {
    return await new Promise((resolve, reject) => {
      const query = `UPDATE alunos SET nome = ?, sobrenome = ?, dataNascimento = ?, turma = ? WHERE matricula = ?`;

      this._db.run(query, [aluno._nome, aluno._sobrenome, aluno._dataNascimento, aluno._turma, matricula], (erro, resultado) => {
          if (!erro) {
            return resolve("Cadastro atualizado com sucesso!");
          } else {
            return reject("Não foi possível atualizar cadastro!");
          }
        }
      );
    });
  }
 
}

export default AlunoDao;
