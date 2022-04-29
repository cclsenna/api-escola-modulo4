import express from "express";
import {routerAluno,RouterProfessor} from "./routes/routes.js";

const app = express();
app.use(express.json());
routerAluno(app);
RouterProfessor(app);

export default app;
