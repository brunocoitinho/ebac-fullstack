"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    nome;
    renda;
    constructor(nome, renda) {
        this.nome = nome;
        if (renda) {
            this.renda = renda;
        }
    }
    dizRenda() {
        console.log(`Minha renda é ${this.renda}`);
    }
    dizOla() {
        console.log(`Olá, meu nome é ${this.nome}`);
        if (this.renda) {
            this.dizRenda(); // Chamando método privado dentro da classe
        }
    }
}
class ContaBancaria {
    saldo = 0; // Atributo protegido, acessível apenas dentro da classe e suas subclasses
    numeroConta;
    constructor(numeroConta) {
        this.numeroConta = numeroConta;
    }
    static retornaNumeroBanco() {
        return "001";
    }
    getSaldo() {
        return this.saldo;
    }
    sacar(valor) {
        this.saldo -= valor;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaBancariaPF extends ContaBancaria {
    pessoaFisica;
    constructor(numeroConta, pessoaFisica) {
        super(numeroConta);
        this.pessoaFisica = pessoaFisica;
    }
    depositar(valor) {
        this.saldo += valor + 10; // Bônus de depósito para pessoa física
    }
}
const ContaDoPedro = new ContaBancariaPF("1234-5", new Pessoa("Pedro", 3000));
ContaDoPedro.depositar(100);
console.log(ContaDoPedro.getSaldo()); // Deve exibir 110 devido ao bônus de depósito
console.log(ContaBancaria.retornaNumeroBanco()); // Chamando método estático da classe
//Resumo do que foi aprendido
// Modificadores de acesso: public, private, protected
// public > private > protected // Níveis de restrição
// Métodos estáticos
// Herança entre classes
// Uso de construtores para inicialização de objetos
//# sourceMappingURL=oo.js.map