import ProfessorModel from "../models/ProfessorModel.js"
import db from "../infra/createDb.js"
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
}

export default ProfessorController;
