class Pessoa {
    nome: string;
    renda?: number;

    constructor(nome: string, renda?: number) {
        this.nome = nome;
        if (renda) {
            this.renda = renda;
        }
    }

    private dizRenda(): void { // Método privado, acessível apenas dentro da classe
        console.log(`Minha renda é ${this.renda}`);
    }


    dizOla(): void {
        console.log(`Olá, meu nome é ${this.nome}`);
        if (this.renda) {
            this.dizRenda(); // Chamando método privado dentro da classe
        }
    }
}

class ContaBancaria {
    protected saldo: number = 0; // Atributo protegido, acessível apenas dentro da classe e suas subclasses
    numeroConta: string;

    constructor(numeroConta: string) {
        this.numeroConta = numeroConta;
    }

    static retornaNumeroBanco(): string { // Método estático, acessível sem instanciar a classe
        return "001";
    }

    getSaldo(): number {
        return this.saldo;
    }

    sacar(valor: number): void {
        this.saldo -= valor;    
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }
}

class ContaBancariaPF extends ContaBancaria {
    pessoaFisica: Pessoa;
    constructor(numeroConta: string, pessoaFisica: Pessoa) {
        super(numeroConta);
        this.pessoaFisica = pessoaFisica;
    }

    depositar(valor: number): void {
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