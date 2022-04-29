import express from "express";
import {routerAluno,RouterProfessor} from "./routes/routes.js";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors());

routerAluno(app);
RouterProfessor(app);

app.get("/",(req,res)=>{
    res.send(`Bem vindo a API escola
    Para mais informações sobre usabilidade,acessar https://github.com/cclsenna/api-escola-modulo4`);

});



export default app;
