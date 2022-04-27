import AlunoController from "../controllers/AlunoController.js";

const routerAluno = (app) => {
  app.get("/aluno", AlunoController.exibirTodos);
  app.get("/aluno/:id", AlunoController.exibirUmPorId);
  app.post("/aluno", AlunoController.cadastrar);
  app.delete("/aluno/:id", AlunoController.excluir);
  app.patch("/aluno/:id", AlunoController.atualiza);
};


export default routerAluno;
