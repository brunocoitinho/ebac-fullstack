class Conta {
    numeroDaConta: string;
    saldo: number = 0;
    constructor(numeroDaConta: string){
        this.numeroDaConta = numeroDaConta;
    }
}

class ContaSalario extends Conta {
    constructor(numeroDaConta: string){
        super(numeroDaConta);
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }
}

interface ITransacional { // Interface, define um contrato
    transferir: (valor: number, destinatario: Conta) => boolean;
    taxaTransferencia: number;
}

interface IPessoaJuridica {
    cnpj: string;
    razaoSocial: string;
}

interface IPessoaFisica {
    cpf: string;
    nome: string;
}

interface ICliente extends IPessoaFisica, IPessoaJuridica {} // Interface que herda de outras interfaces

class ContaCorrente extends Conta implements ITransacional { // Implementando interface
    taxaTransferencia: number = 1.5; // 1.5%

    transferir(valor: number, destinatario: Conta): boolean {
        const taxa = (valor * this.taxaTransferencia) / 100;
        const valorTotal = valor + taxa;
        if (this.saldo >= valorTotal) {
            this.saldo -= valorTotal;
            destinatario.saldo += valor;
            return true;
        }
        return false;
    }
}
    