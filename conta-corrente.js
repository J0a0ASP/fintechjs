export class ContaCorrente{
    //atributos ou propriedades
    numero 
    nome
    saldo

    constructor(pNumero, pNome, pSaldo=0){
        this.numero = pNumero;
        this.nome = pNome
        this.saldo = pSaldo;
    }

    //Ações da classe = Metodo/Funções
    consultarSaldo(){
        console.log("Saldo de " + this.nome + "- R$ "+ this.saldo);
    }

    depositar(valorDeposito){
        this.saldo += valorDeposito;

    }

} //FIm da classe (cuidado para nao fazer função fora dela)