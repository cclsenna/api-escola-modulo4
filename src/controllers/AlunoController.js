import AlunoModel from "../models/AlunoModel.js";
import AlunoDao from "../DAO/AlunoDAO.js";
import db from "../infra/configDb.js";

class AlunoController {
  static exibirTodos = (req, res) => {
    const alunoDao = new AlunoDao(db);

    alunoDao
      .listarTodos()
      .then((aluno) => {
        res.status(200).json(aluno);
      })
      .catch((erro) => {
        res.status(400).json(erro);
      });
  };

  static exibirUmPorMatricula = (req, res) => {
    const alunoDao = new AlunoDao(db);
    const { matricula } = req.params;

    alunoDao
      .listarUm(matricula)
      .then((resultado) => {
        res.status(200).json(resultado);
      })
      .catch((erro) => {
        console.log(erro);
        res.status(400).json(erro);
      });
  };

  static cadastrar = (req, res) => {
    const alunoDao = new AlunoDao(db);
    const body = req.body;

    const validador = AlunoModel.validaDados(body);

    if (validador != true) {
      return res.status(400).json({
        message: "Erro no cadastro",
        errors: AlunoModel.validaDados(body),
      });
    }

    const novoAluno = new AlunoModel(body.nome, body.sobrenome, body.dataNascimento, body.turma);

    alunoDao
      .inserir(novoAluno)
      .then((resultado) => {
        res.status(201).json(resultado);
      })
      .catch((erro) => {
        res.status(400).json(erro);
      });
  };

  static excluir = (req, res) => {
    const alunoDao = new AlunoDao(db);
    const { matricula } = req.params;

    alunoDao
      .deletar(matricula)
      .then((resultado) => {
        res.status(200).json(resultado);
      })
      .catch((erro) => {
        res.status(400).json(erro);
      });
  };

  static atualiza = (req, res) => {
    const body = req.body;
    const { matricula } = req.params;
    const alunoDao = new AlunoDao(db);

    const validador = AlunoModel.validaDados(body);
    
    if (validador != true) {
      return res.status(400).json({
        message: "Erro atualizar cadastro",
        errors: AlunoModel.validaDados(body),
      });
    }

    const atualizaAluno = new AlunoModel(
      body.nome,
      body.sobrenome,
      body.dataNascimento,
      body.turma
    );

    alunoDao
      .atualizar(matricula, atualizaAluno)
      .then((resultado) => {
        res.status(200).json(resultado);
      })
      .catch((erro) => {
        res.status(400).json(erro);
      });
  };
}

export default AlunoController;
