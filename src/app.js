import express from "express";
import routerAluno from "./routes/routes.js";

const app = express();
app.use(express.json());
routerAluno(app);

export default app;