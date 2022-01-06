
/*
Ser autenticavel significa ter método 'autenticar'
*/ 
import { Funcionario } from "./Funcionarios/Funcionario.js";

export class SistemaDeAutenticacao {
    static login(autenticavel, senha){
        return autenticavel.autenticar(senha);
    }
}