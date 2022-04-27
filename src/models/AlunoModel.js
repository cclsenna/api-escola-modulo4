import Validator from "fastest-validator";

class AlunoModel {
  constructor(nome, sobrenome, dataNascimento, turma) {
    this._nome = nome;
    this._sobrenome = sobrenome;
    this._dataNascimento = dataNascimento;
    this._turma = turma;
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

export default AlunoModel;
