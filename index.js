import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente("Anderson", 11122233309);
const cliente2 = new Cliente("Esther", 4445556609);

const contaCorrenteAnderson = new ContaCorrente(1001, cliente1);

contaCorrenteAnderson.depositar(500);

const contaCorrenteEsther = new ContaCorrente(1002, cliente2);

contaCorrenteAnderson.transferir(200, contaCorrenteEsther)


console.log(ContaCorrente.numeroDeContas);