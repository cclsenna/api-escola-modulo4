import AlunoController from "../controllers/AlunoController.js";

const routerAluno = (app) => {
  app.get("/alunos", AlunoController.exibirTodos);
  app.get("/alunos/:matricula", AlunoController.exibirUmPorMatricula);
  app.post("/alunos", AlunoController.cadastrar);
  app.delete("/alunos/:matricula", AlunoController.excluir);
  app.patch("/alunos/:matricula", AlunoController.atualiza);
};

export default routerAluno;
