import funcionariosModel from "../models/funcionariosModel"
import funcionariosDAO from "../DAO/funcionariosDAO"
import db from "../infra/createDb"
import res from "express/lib/response"

class funcionariosController {

    static exibirFuncionarios = (req, res) => {
        const funcionariosDAO = new funcionariosDAO(db)
        funcionariosDAO.lista()
        .then((funcionarios) => {
            res.json(funcionarios)
        }).catch((erro) => {console.log(erro)})
    }

static cadastrar = (req, res) => {
        const funcionariosDAO = new funcionariosDAO(db)
        const body = req.body;
        const novoFuncionarios = new 
        funcionariosModel(body.nome, body.sobrenome, body.dataNascimento);

        funcionariosDAO.inserir(novoFuncionarios)
        .then((resultado) => {
            res.json(resultado)
        }).catch((erro) => {
            res.json(erro)
        })
}
}

export default funcionariosController;