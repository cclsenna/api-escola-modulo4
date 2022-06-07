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
      console.log(aluno);
      const query = "INSERT INTO alunos (nome, sobrenome, dataNascimento,tel,email,foto,id_professor,turno,nota_historia,nota_matematica,nota_geografia,nota_portugues,nota_artes,nota_Edfisica,cep,rua,bairro,cidade,uf,numero) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

      this._db.run(
        query, [aluno._nome, aluno._sobrenome, aluno._dataNascimento,aluno._tel,aluno._email,aluno._foto,aluno._id_professor,aluno._turno,aluno._nota_historia,aluno._nota_matematica,aluno.__nota_geografia,aluno._nota_portugues,aluno._nota_artes,aluno._nota_Edfisica,aluno._cep,aluno._rua,aluno._bairro,aluno._cidade,aluno._uf,aluno._numero],
        (erro, resultado) => {
          if (!erro) {
            return resolve("Aluno cadastrado");
          } else {
            console.log(erro.message);
            
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
      const query = `UPDATE alunos SET nome=?, sobrenome=?, dataNascimento=?,tel=?,email=?,foto=?,id_professor=?,turno=?,nota_historia=?,nota_matematica=?,nota_geografia=?,nota_portugues=?,nota_artes=?,nota_Edfisica=?,cep=?,rua=?,bairro=?,cidade=?,uf=?,numero=? WHERE matricula = ?`;
      
      this._db.run(query, [aluno._nome, aluno._sobrenome, aluno._dataNascimento,aluno._tel,aluno._email,aluno._foto,aluno._id_professor,aluno._turno,aluno._nota_historia,aluno._nota_matematica,aluno.__nota_geografia,aluno._nota_portugues,aluno._nota_artes,aluno._nota_Edfisica,aluno._cep,aluno._rua,aluno._bairro,aluno._cidade,aluno._uf,aluno._numero,matricula], (erro, resultado) => {
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
