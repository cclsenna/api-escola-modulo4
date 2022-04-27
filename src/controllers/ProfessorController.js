import ProfessorModel from "../models/ProfessorModel.js"
import db from "../infra/configDb.js"
import ProfessorDAO from "../DAO/ProfessorDAO.js"


class ProfessorController{


    static exibeProf=(req,res)=>{
        const profDAO=new ProfessorDAO(db);
        profDAO.listarTudo()
        .then(result=>{
            res.json(result);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    
    static exibeum=(req,res)=>{
        const profDAO=new ProfessorDAO(db);
        const {id}=req.params;

        profDAO.listaUm(id)

        .then(result=>{ 
            res.json(result);
        })
        .catch(error=>{
            console.log(error);
        })

    }

    static cadastrar=(req,res)=>{
        const profDAO=new ProfessorDAO(db);
        const body=req.body;
        const novoProf=new ProfessorModel(body.nome,body.sobrenome,body.dataNascimento,body.materia);

        profDAO.inserir(novoProf)
        .then(result=>{
            res.status(201).json(result);
        })
        .catch(error=>{
            res.status(400).json(error);
        })
        

    }
}

export default ProfessorController;
