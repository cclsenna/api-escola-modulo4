import Validator from "fastest-validator";

class AlunoModel {
  constructor(nome, sobrenome, dataNascimento, tel,email,foto,id_professor,turno,nota_historia,nota_matematica,nota_geografia,nota_portugues,nota_artes,nota_edfisica,cep,rua,bairro,cidade,uf,numero) {
    this._nome = nome;
    this._sobrenome = sobrenome;
    this._dataNascimento = dataNascimento;
    this._tel=tel;
    this._email=email;
    this._foto=foto;
    this._id_professor=id_professor;
    this._turno=turno;
    this._nota_historia=nota_historia;
    this._nota_matematica=nota_matematica;
    this._nota_geografia=nota_geografia;
    this._nota_portugues=nota_portugues;
    this._nota_artes=nota_artes;
    this._nota_edfisica=nota_edfisica;
    this._cep=cep;
    this._rua=rua;
    this._bairro=bairro;
    this._cidade=cidade;
    this._uf=uf;
    this._numero=numero;  


  }

  static validaDados(body) {
    const schema = {
      nome: { type: "string", optional: false },
      sobrenome: { type: "string", optional: false },
      dataNascimento: { type: "string", optional: false }
    };

    const validator = new Validator();

    return validator.validate(body, schema);
  }
}

/*
    "matricula": 1,
    "nome": "Iata",
    "sobrenome": "Anderson",
    "dataNascimento": "1991/01/15",
    "tel": 219999999,
    "email": "teste@teste.com.br",
    "foto": null,
    "turma": 13,
    "id_professor": 1,
    "turno": "M",
    "nota_historia": 9.5,
    "nota_matematica": 9.5,
    "nota_geografia": 9.5,
    "nota_portugues": 9.5,
    "nota_artes": 9.5,
    "nota_edfisica": 9.5,
    "cep": "22222",
    "rua": "rua teste",
    "bairro": "bairro teste",
    "cidade": "testópolis",
    "estado": "TS",
    "numero": "43"
*/

export default AlunoModel;
