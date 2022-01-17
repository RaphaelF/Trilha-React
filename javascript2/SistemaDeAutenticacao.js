
/*
Ser autenticavel significa ter método 'autenticar'

Duck type
*/ 
import { Funcionario } from "./Funcionarios/Funcionario.js";

export class SistemaDeAutenticacao {
    static login(autenticavel, senha){
        if(SistemaDeAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
       return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}