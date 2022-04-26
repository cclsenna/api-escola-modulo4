import ProfessorController from "../controllers/ProfessorController.js";

const RouterProfessor=(app)=>{
    app.get('/professor',ProfessorController.exibeProf);
}

export default RouterProfessor;
