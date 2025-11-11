"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    numeroDaConta;
    saldo = 0;
    constructor(numeroDaConta) {
        this.numeroDaConta = numeroDaConta;
    }
}
class ContaSalario extends Conta {
    constructor(numeroDaConta) {
        super(numeroDaConta);
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaCorrente extends Conta {
    taxaTransferencia = 1.5; // 1.5%
    transferir(valor, destinatario) {
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
//# sourceMappingURL=interface.js.map