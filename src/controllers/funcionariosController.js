/*Importação do model, DAO e db*/

import FuncionariosModel from "../models/funcionariosModel.js";
import FuncionariosDAO from "../DAO/funcionariosDAO.js";
import db from "../infra/configDb.js";


    /* ------------ 1º Metodo Get exibir todos os registros------------------------------*/
    /*-------------------Read do crud---------------------------------------------------*/
    class FuncionariosController {
        static TodosRegistros = (req, res) => {
            const funcionariosDAO = new FuncionariosDAO(db);

            funcionariosDAO
            .ExibirTodos()
            .then((funcionarios) => {
                res.status(200).json(funcionarios);
            })
            .catch((erro) => {
                res.status(400).json(erro);
            });
        }; 

        /* ------------------2º Metodo Get - exibir um registro por id------------------*/

        static exibirUm = (req, res) => {
            const funcionariosDAO = new funcionariosDAO(db);
            const { id } = req.params;
        
            funcionariosDAO
              .ListarUm(id)
              .then((resultado) => {
                res.status(200).json(resultado);
              })
              .catch((erro) => {
                console.log(erro);
                res.status(400).json(erro);
              });
          };
 
          /* ------------3º Metodo post - inserção de um registro/cadastrar--------------- */

          static Cadastrar = (req, res) => {
            const funcionariosDAO = new funcionariosDAO(db);
            const body = req.body;
        
            const validador = FuncionariosModel.validaDados(body);
        
            if (validador != true) {
              return res.status(400).json({
                message: "Erro no cadastro",
                errors: FuncionariosModel.validaDados(body),
              });
            }
            const novoFuncionarios = new FuncionariosModel(body.nome, body.sobrenome, body.dataNascimento, body.turma);

    funcionariosDAO
      .inserir(novoFuncionarios)
      .then((resultado) => {
        res.status(201).json(resultado);
      })
      .catch((erro) => {
        res.status(400).json(erro);
      });
  }
    /* 4º ------------------Metodo delete - deleção de um registro-------------------------------*/

    static Excluir = (req, res) => {
        const funcionariosDAO = new funcionariosDAO(db);
        const { id } = req.params;
    
        funcionariosDAO
          .deletar(id)
          .then((resultado) => {
            res.status(200).json(resultado);
          })
          .catch((erro) => {
            res.status(400).json(erro);
          });
      };
    /*5º-------------------Metodo patch - atualização de registro------------------------------*/
    static update = (req, res) => {
        const body = req.body;
        const { id } = req.params;
        const funcionariosDAO = new FuncionariosDAO(db);
    
        const validador = FuncionariosModel.validaDados(body);
        
        if (validador != true) {
          return res.status(400).json({
            message: "Erro ao atualizar cadastro",
            errors: FuncionariosModel.validaDados(body),
          });
        }
    
        const updateFuncionarios = new FuncionariosModel(
          body.nome,
          body.sobrenome,
          body.dataNascimento,
          body.profissao
        );
    
        updateFuncionarios
          .updateFuncionarios(id, atualizaFuncionarios)
          .then((resultado) => {
            res.status(200).json(resultado);
          })
          .catch((erro) => {
            res.status(400).json(erro);
          });
      };  
    }

    
export default FuncionariosController;