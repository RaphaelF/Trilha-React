import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();

const contaCorrenteRaphael = new ContaCorrente();

cliente1.nome = "Raphael";
cliente1.cpf = "11122233309";

contaCorrenteRaphael.agencia = 1001;

contaCorrenteRaphael.depositar(100);
contaCorrenteRaphael.depositar(100);

const valorSacado = contaCorrenteRaphael.sacar(40);
console.log(valorSacado);
console.log(contaCorrenteRaphael);

