class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            console.log("Valor sacado:",valor);
            this.saldo -= valor;
        }else{
            console.log("Valor sacado:",this.saldo);
            this.saldo = 0;
        }
    }
}



const cliente1 = new Cliente();
const contaCorrenteRaphael = new ContaCorrente();

cliente1.nome = "Raphael";
cliente1.cpf = "11122233309";
contaCorrenteRaphael.saldo = 0;
contaCorrenteRaphael.agencia = 1001;
console.log(contaCorrenteRaphael.saldo);
contaCorrenteRaphael.saldo = 100;
console.log(contaCorrenteRaphael.saldo);

contaCorrenteRaphael.sacar(40);
console.log(contaCorrenteRaphael.saldo);

const cliente2 = new Cliente();
const contaCorrenteEduardo = new ContaCorrente();

cliente2.nome = "Eduardo";
cliente2.cpf = "11122233310";
contaCorrenteEduardo.saldo = 0;
contaCorrenteEduardo.agencia = 1001;

console.log(cliente1,`\n`,cliente2);
