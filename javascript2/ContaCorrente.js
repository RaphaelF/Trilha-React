export class ContaCorrente{
    agencia;
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            console.log("Valor sacado:",valor);
            this._saldo -= valor;
            console.log(this._saldo);
            return valor;
        }else{
            console.log("Valor sacado:",this._saldo);
            this._saldo = 0;
            return valor;
        }
    }

    depositar(valor){
        if (valor <= 0){
            return;
        }
        this._saldo += valor;
        
    }
}