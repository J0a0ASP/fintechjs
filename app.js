import {ContaCorrente} from './conta-corrente.js'

//Construindo o objeto atual
const conta1= new ContaCorrente(1,"Luiz",100);

console.log(conta1.saldo);
conta1.consultarSaldo();
conta1.depositar(5000);
conta1.consultarSaldo();

const conta2 = new ContaCorrente(2,"Ana", 200);
conta2.consultarSaldo();
conta2.depositar(7000);
conta2.consultarSaldo();
