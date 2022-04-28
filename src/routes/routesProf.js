import ProfessorController from "../controllers/ProfessorController.js";

const RouterProfessor=(app)=>{
    app.get('/professor',ProfessorController.exibeProf);
    app.get('/professor/:id',ProfessorController.exibeum);
    app.post('/professor',ProfessorController.cadastrar);
    app.delete('/professor/:id',ProfessorController.excluir);
    app.patch('/professor/:id',ProfessorController.atualizar);

}

export default RouterProfessor;
