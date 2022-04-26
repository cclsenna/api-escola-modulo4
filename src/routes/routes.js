import AlunoController from "../controllers/AlunoController.js";
//import ProfessorController from  "../controllers/ProfessorController.js";

const router = (app) => {
  app.get("/aluno", AlunoController.exibirAlunos);
  app.post("/aluno", AlunoController.cadastrar);
};

export default router;
