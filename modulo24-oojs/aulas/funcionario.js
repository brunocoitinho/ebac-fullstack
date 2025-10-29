//Estudo sobre herança, polimorfismo e encapsulamento em JavaScript

// Define a função construtora Pessoa
function Pessoa(nome) {
    // Define um método 'dizOi' para o objeto
    this.dizOi=function() {
        console.log("Oi, meu nome é " + this.nome);
    }
}

// Define a função construtora funcionario
function funcionario(nome, cargo, salario) {
    
    // this.cargo = cargo;
    // this.salario = salario;

    let _cargo = cargo;
    let _salario = salario;

    // Métodos getters e setters para cargo e salário

    this.getCargo = function() {
        return _cargo;
    }

    this.getSalario = function() {
        return _salario;
    }

    this.setCargo = function(novoCargo) {
        _cargo = novoCargo;
    }

    this.setSalario = function(novoSalario) {
        if(typeof novoSalario !== 'number' || novoSalario < 0) {
            console.log("Salário inválido");
            return;
        }
        _salario = novoSalario;
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }

    
    // Chama a função construtora Pessoa, passando o 'this' de funcionario e o nome
    // Isso faz com que funcionario herde as propriedades e métodos de Pessoa
    Pessoa.call(this, nome);

    // Define um método 'dizCargo' para o objeto
    this.dizCargo = function() {
        console.log("Meu cargo é " + this.cargo);
    }

    // Define um método 'dizSalario' para o objeto
    this.dizSalario = function() {
        console.log("Meu salário é " + this.salario);
    }
}

// Define a função construtora Estagiario
function Estagiario(nome) {
    // Chama a função construtora funcionario, passando o 'this' de Estagiario e o nome
    funcionario.call(this, nome, "Estagiário", 2000);

    // Define um método 'aumento' para o objeto
    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);
    }
}



const pessoa1 = new Pessoa("Maria"); // Cria uma nova instância do objeto Pessoa com o nome "Maria"
const funcionario1 = new funcionario("João", "Desenvolvedor", 5000); // Cria uma nova instância do objeto funcionario 
const funcionario2 = new Estagiario("Pedro")


pessoa1.dizOi(); // Chama o método 'dizOi' do objeto pessoa1
funcionario1.dizOi(); // Chama o método 'dizOi' (herdado de Pessoa) do objeto funcionario1


console.log(pessoa1);
console.log(funcionario1);

console.log(funcionario1.getCargo());
console.log(funcionario1.getSalario());

funcionario1.setCargo("Analista");
funcionario1.setSalario(6000);

console.log(funcionario1.getCargo());
console.log(funcionario1.getSalario());

funcionario1.aumento();
console.log(funcionario1.getSalario());

console.log(funcionario2.getSalario());
funcionario2.aumento();
console.log(funcionario2.getSalario());

