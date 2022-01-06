export class Conta{
    static numeroDeContas = 0;
    
    
    constructor(saldoInicial,agencia, cliente){
        this._saldo = saldoInicial;
        this._agencia = agencia;
        this._cliente = cliente;
        Conta.numeroDeContas += 1;
        if(this.constructor == Conta){
            console.log("Você não deveria instanciar essa conta");
        }
    }

    get cliente(){
        return this._cliente;
    }

    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente;
        }
    }

    get saldo(){
        return this._saldo;
    }


    sacar(valor){
        let taxa = 1;
        return this._sacar(valor, taxa);
        
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            console.log("Valor sacado:",valorSacado);
            this._saldo -= valorSacado;
            console.log(this._saldo);
            return valorSacado;
        }else{
            console.log("Valor sacado:",this._saldo);
            this._saldo = 0;
            return valor;
        }
    }

    depositar(valor){
        if (valor <= 100){
            return;
        }
        this._saldo += valor;
        
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valor);
    }

}