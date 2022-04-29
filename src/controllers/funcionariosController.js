/*Importação do model, DAO e db*/

import FuncionariosModel from "../models/funcionariosModel.js";
import FuncionariosDAO from "../DAO/funcionariosDAO.js";
import db from "../infra/configDb.js";


    /*Metodo Get exibir todos os registros*/
    /*Read do crud*/
    class FuncionariosController {
        static TodosRegistros = (req, res) => {
            const funcionariosDAO = new FuncionariosDAO(db);

            funcionariosDAO.ExibirTodos()
            .then((funcionarios) => {
                res.status(200).json(funcionarios);
            })
            .catch((erro) => {
                res.status(400).json(erro);
            })
        }   
    }

    /*Metodo Get exibir um registro por matricula*/

    

    /*Metodo post - inserção de um registro/cadastrar */

    /*Metodo delete - deleção de um registro*/

    /*Metodo patch - atualização de registro*/
export default FuncionariosController