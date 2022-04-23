import AlunoModel from "../models/AlunoModel.js"
import bancoTeste from "../infra/db.js"

class AlunoController {
    static exibirAlunos = (req,res) => {
       return res.status(200).json(bancoTeste.alunos)
    }

    static cadastrarAluno = (req,res) => {
        const body = req.body;
        const insereAluno = new AlunoModel(body.nome, body.sobrenome, body.dataNascimento);
        bancoTeste.alunos.push(insereAluno);
        res.status(201).json(`Aluno: ${body.nome} cadastrado com sucesso.`) 
    }

}

export default AlunoController;