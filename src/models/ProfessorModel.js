import Validator from "fastest-validator";

class ProfessorModel{

    constructor(nome,sobrenome,nascimento,materia){
        this._nome=nome;
        this._sobrenome=sobrenome;
        this._nascimento=nascimento;
        this._materia=materia;
    }

    static valida=(post)=>{
        const schema={
            nome:{type: "string",optional: false },
            sobrenome: {type:"string", optional:false},
            dataNascimento: {type:"string", optional:false},
            materia: {type: "string", optional:false}           

        }

        const valida=new Validator();
        return valida.validate(post,schema);
    }

    




}

export default ProfessorModel;