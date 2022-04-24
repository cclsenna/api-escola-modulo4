import AlunoModel from "../models/AlunoModel.js"
import AlunoDao from "../DAO/AlunoDAO.js"
import db from "../infra/createDb.js"

class AlunoController {
    
    static exibirAlunos = (req,res) => {
        const alunoDao = new AlunoDao(db)
        alunoDao.lista()
        .then((aluno) => {
            res.json(aluno)
        }).catch((erro)=> {console.log(erro)})
    }

    

}

export default AlunoController;