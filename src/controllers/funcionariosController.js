const res = require('express/lib/response')
const bd = require('../infra/bd')
const funcionarios = require('../models/funcionariosModel')
const funcionariosDao = require('../DAO/funcionariosDao')


const funcionariosController = (app)=> {const newDao = new funcionariosDao(bd)

    /*Get = Read do CRUD e exibe registros*/
app.get('/funcionarios', async (req, res) => {

  try{
    const funcionarios = await funcionariosDao.listFuncionarios()
  res.send(funcionarios)
  }catch(error){
    res.send(error)
  }
  
  })
  
  app.post('/funcionarios', function (req, res) {
       res.send('Rota POST de funcionarios ativada: funcionarios adicionado ao banco de dados')

    bd.run(`INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?,?,?)`,
    [novoFuncionarios.nome, novoFuncionarios.email, novoFuncionarios.senha],
    (error) =>{
      if (error){
        res.json(error)
      }else{
        res.json("Deu certo inserir")
      }
    })
  })
  
}
module.exports = funcionariosController