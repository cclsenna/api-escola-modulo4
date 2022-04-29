import AlunoController from "../controllers/AlunoController.js";
import ProfessorController from "../controllers/ProfessorController.js";
import FuncionariosController from "../controllers/funcionariosController.js";


const routerAluno = (app) => {
  app.get("/alunos", AlunoController.exibirTodos);
  app.get("/alunos/:matricula", AlunoController.exibirUmPorMatricula);
  app.post("/alunos", AlunoController.cadastrar);
  app.delete("/alunos/:matricula", AlunoController.excluir);
  app.patch("/alunos/:matricula", AlunoController.atualiza);
};

const RouterProfessor=(app)=>{
  app.get('/professor',ProfessorController.exibeProf);
  app.get('/professor/:id',ProfessorController.exibeum);
  app.post('/professor',ProfessorController.cadastrar);
  app.delete('/professor/:id',ProfessorController.excluir);
  app.patch('/professor/:id',ProfessorController.atualizar);

}

const RouterFuncionarios = (app) =>{
  app.get('/funcionarios', FuncionariosController.TodosRegistros);

}


export {routerAluno,RouterProfessor};
