import express from "express";
import routerAluno from "./routes/routes.js";
import RouterProfessor from "./routes/routesProf.js"

const app = express();
app.use(express.json());
routerAluno(app);
RouterProfessor(app);

export default app;
