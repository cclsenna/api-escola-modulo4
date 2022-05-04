import AlunoController from "../controllers/AlunoController.js";
import ProfessorController from "../controllers/ProfessorController.js";
import FuncionariosController from "../controllers/funcionariosController.js";


const routerAluno = (app) => {
  app.get("/alunos", AlunoController.exibirTodos);
  app.get("/alunos/:matricula", AlunoController.exibirUmPorMatricula);
  app.post("/alunos", AlunoController.cadastrar);
  app.delete("/alunos/:matricula", AlunoController.excluir);
  app.put("/alunos/:matricula", AlunoController.atualiza);
};

const RouterProfessor=(app)=>{
  app.get('/professores',ProfessorController.exibeProf);
  app.get('/professores/:id',ProfessorController.exibeum);
  app.post('/professores',ProfessorController.cadastrar);
  app.delete('/professores/:id',ProfessorController.excluir);
  app.put('/professores/:id',ProfessorController.atualizar);

}

const RouterFuncionarios = (app) =>{
  app.get('/funcionarios', FuncionariosController.TodosRegistros);
  app.get('/funcionarios/:id', FuncionariosController.exibirUm);
  app.post('/funcionarios', FuncionariosController.Cadastrar);
  app.delete('/funcionarios/:id', FuncionariosController.Excluir);
  app.put('/funcionarios/:id', FuncionariosController.update);

}


export {routerAluno,RouterProfessor,RouterFuncionarios};
