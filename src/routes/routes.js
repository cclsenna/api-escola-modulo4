import AlunoController from "../controllers/AlunoController.js";

const router = (app) => {
  app.get("/aluno", AlunoController.exibirAlunos);
  
};

export default router;
