/*---------Class responsável por fazer as transações no banco sqlite--------------------------*/
class FuncionariosDAO {
  constructor(db) {
    this._db = db;

  }
  /*1º--------Função assincrona responsável por retornar o registro de todos funcionarios-----*/

  async ExibirTodos() {
    return await new Promise((resolve, reject) => {
      const query = "SELECT * FROM funcionarios";

      this._db.all(query, (erro, resultado) => {
        if (!erro) {
          return resolve(resultado);
        } else {
          return reject("Não foi possivel listar registros")
        }
      });
    });
  }

  /*2º ------------Função responsável por retornar o registro de um funcionario --------------*/

  async ListarUm(id) {
    return await new Promise((resolve, reject) => {
      const query = "SELECT * FROM funcionarios WHERE id = ?";

      this._db.get(query, [id], (erro, resultado) => {
        if (!erro) {
          return resolve(resultado);
        } else {
          return reject(erro);
        }
      });
    });
  }

  /*3º-------Função assincrona responsável por cadastrar e validar dados no registro -----*/

  async inserir(funcionarios) {
    return await new Promise((resolve, reject) => {
      const query = "INSERT INTO funcionarios (nome,sobrenome,dataNascimento,profissao) values (?,?,?,?)";

      this._db.run(
        query, [funcionarios._nome, funcionarios._sobrenome, funcionarios._dataNascimento, funcionarios._profissao],
        (erro, resultado) => {
          if (!erro) {
            return resolve("funcionario registrado");
          } else {

            return reject("falha no registro");
          }
        }
      );
    });
  }
  /* 4º Função assincrona - responsável por deletar registros */

  async excluir(id) {
    return await new Promise((resolve, reject) => {
      const query = "DELETE FROM funcionarios WHERE id = ?";

      this._db.get(query, [id], (erro, resultado) => {
        if (!erro) {
          return resolve("Registro de funcionario deletado!");
        } else {
          console.log(erro);
          return reject("Não foi possível excluir o registro!");
        }
      }
      );
    });
  }
  /* -----------5º função assincrona - Responsavel por atualizar registros -----------------*/

  async atualizar(id, funcionarios) {
    return await new Promise((resolve, reject) => {
      const query = `UPDATE funcionarios SET nome = ?, sobrenome = ?, dataNascimento = ?, profissao = ? WHERE id = ?`;

      this._db.run(query, [funcionarios._nome, funcionarios._sobrenome, funcionarios._dataNascimento, funcionarios._profissao, id], (erro, resultado) => {
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

export default FuncionariosDAO;