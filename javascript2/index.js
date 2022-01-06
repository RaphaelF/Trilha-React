import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";


const cliente1 = new Cliente("Raphael","11122233309");


const contaCorrenteRaphael = new ContaCorrente(1001,cliente1);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const conta = new Conta(0, cliente1, 1001);


contaCorrenteRaphael.depositar(500);
contaCorrenteRaphael.sacar(110);

console.log(contaCorrenteRaphael);
console.log(contaPoupanca);





