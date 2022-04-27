import AlunoModel from "../models/AlunoModel.js";
import AlunoDao from "../DAO/AlunoDAO.js";
import db from "../infra/configDb.js";

class AlunoController {

  static exibirTodos = (req, res) => {
    const alunoDao = new AlunoDao(db);
    alunoDao
      .listarTodos()
      .then((aluno) => {
        res.json(aluno);
      })
      .catch((erro) => {
        res.json(erro);
      });
  };


  static exibirUmPorId = (req, res) => {
    const alunoDao = new AlunoDao(db);
    const { id } = req.params;

    alunoDao
      .listarUm(id)
      .then((resultado) => {
        res.json(resultado);
      })
      .catch((erro) => {
        console.log(erro);
        res.status(400).json(erro);
      });
  };


  static cadastrar = (req, res) => {
    const alunoDao = new AlunoDao(db);
    const body = req.body;
    console.log(body);
    const novoAluno = new AlunoModel(body.nome, body.sobrenome, body.dataNascimento);
    console.log('aaaa');
    console.log(novoAluno)

    alunoDao.inserir(novoAluno)
      .then((resultado) => {
        res.status(201).json(resultado);
      })
      .catch((erro) => {
        res.status(400).json(erro);
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
        res.status(400).json(erro);
      });
  };

  static atualiza = (req, res) => {
    const body = req.body;
    const { id } = req.params;
    const alunoDao = new AlunoDao(db);
    const atualizaAluno = new AlunoModel(body.nome, body.sobrenome, body.dataNascimento);

    alunoDao.atualizar(id,atualizaAluno)
      .then((resultado) => {
        res.json(resultado);
      })
      .catch((erro) => {
        res.status(400).json(erro);
      });

  }
}

export default AlunoController;
