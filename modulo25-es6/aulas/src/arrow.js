const minhaFuncao = () =>  "Função arrow function executada!"

const retornaUmCarro = () => ({modelo: "Ka", Fabricante: "Ford"});


console.log(minhaFuncao());
console.log(retornaUmCarro());

const carro = {
    velocidadeAtual: 40,
    acelerar: function() {
        this.velocidadeAtual += 10;
    },
    frear: () => {
        this.velocidadeAtual -= 10; // o this não funciona em arrow functions
    }
}

carro.acelerar();
console.log(carro.velocidadeAtual);
carro.frear();
console.log(carro.velocidadeAtual);