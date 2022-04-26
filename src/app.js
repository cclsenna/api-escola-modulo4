import express from "express";
import routerAluno from "./routes/routes.js";
import routerProf from "./routes/routesProf.js"

const app = express();
app.use(express.json());
routerAluno(app);
routerProf(app);

export default app;