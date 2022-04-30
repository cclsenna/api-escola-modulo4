import Validator from "fastest-validator";

class FuncionariosModel {
    constructor(nome, sobrenome, DatadeNascimento, profissao){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._DatadeNascimento = DatadeNascimento;
        this._profissao = profissao;

    }
    static validaDados(body) {
        const schema = {
          nome: { type: "string", optional: false },
          sobrenome: { type: "string", optional: false },
          dataNascimento: { type: "string", optional: false },
          turma: { type: "number", optional: false },
        };
    
        const validator = new Validator();
    
        return validator.validate(body, schema);
      }

}

export default FuncionariosModel;
