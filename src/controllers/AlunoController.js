import AlunoModel from "../models/AlunoModel.js";
import AlunoDao from "../DAO/AlunoDAO.js";
import db from "../infra/createDb.js";

class AlunoController {

  static exibirTodos = (req, res) => {
    const alunoDao = new AlunoDao(db);
    alunoDao
      .lista()
      .then((aluno) => {
        res.json(aluno);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };


  static exibirUmPorId = (req, res) => {
    const alunoDao = new AlunoDao(db);
    const { id } = req.params;

    alunoDao
      .listaUm(id)
      .then((resultado) => {
        res.json(resultado);
      })
      .catch((erro) => {
        console.log(erro);
        res.json(erro);
      });
  };


  static cadastrar = (req, res) => {
    const alunoDao = new AlunoDao(db);
    const body = req.body;
    const novoAluno = new AlunoModel(body.nome, body.sobrenome, body.dataNascimento);

    alunoDao.inserir(novoAluno)
      .then((resultado) => {
        res.json(resultado);
      })
      .catch((erro) => {
        res.json(erro);
      });
  };


  static excluir = (req, res) => {
    const alunoDao = new AlunoDao(db);
    const { id } = req.params;

    alunoDao.deletar(id)
      .then((resultado) => {
        res.json(resultado);
      })
      .catch((erro) => {
        res.json(erro);
      });
  };

  
}

export default AlunoController;
