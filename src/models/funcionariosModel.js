import Validator from "fastest-validator";

class FuncionariosModel {
    constructor(nome, sobrenome, dataNascimento, profissao){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._dataNascimento = dataNascimento;
        this._profissao = profissao;

    }
    static validaDados(body) {
        const schema = {
          nome: { type: "string", optional: false },
          sobrenome: { type: "string", optional: false },
          dataNascimento: { type: "string", optional: false },
          profissao: { type: "string", optional: false },
        };
    
        const validator = new Validator();
    
        return validator.validate(body, schema);
      }

}

export default FuncionariosModel;
