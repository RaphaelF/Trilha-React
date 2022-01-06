import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaDeAutenticacao } from "./SistemaDeAutenticacao.js";

const cliente = new Cliente ('Rick', 77788899920, '123123');
const diretor = new Diretor ('Raphael',10000, 1112223309);
const gerente = new Gerente ('Eduardo', 5000, 12345678910);

diretor.cadastrarSenha('123456');
gerente.cadastrarSenha('123');
const gerenteEstaLogado = SistemaDeAutenticacao.login(gerente, '123');
const diretorEstaLogado = SistemaDeAutenticacao.login(diretor, '123456');
const clienteEstaLogado = SistemaDeAutenticacao.login(cliente, '1231323');

console.log(gerenteEstaLogado);
console.log(diretorEstaLogado);
console.log(clienteEstaLogado);

