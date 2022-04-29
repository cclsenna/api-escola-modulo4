import express from "express";
import {routerAluno,RouterProfessor} from "./routes/routes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

routerAluno(app);
RouterProfessor(app);

export default app;
