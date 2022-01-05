import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Raphael","11122233309");
const cliente2 = new Cliente("Eduardo","11122233310");

const contaCorrenteRaphael = new ContaCorrente(1001,cliente1);
const contaCorrenteEduardo = new ContaCorrente(1001, cliente2);

contaCorrenteRaphael.depositar(500);
contaCorrenteRaphael.transferir(200, contaCorrenteEduardo);

console.log(contaCorrenteRaphael);
console.log(contaCorrenteEduardo);
console.log("Número de contas: " , ContaCorrente.numeroDeContas);

