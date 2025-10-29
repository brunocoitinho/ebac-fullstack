// Objetos literais: Uma forma de criar objetos diretamente no código.
// Cada objeto é uma instância única.

const carroDoJoao = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function() {
        console.log("vruum");
    }
}

const carroDaMaria = {
    modelo: 'Ka',
    fabricante: 'Ford',
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: function() {
        console.log("vrum");
    }
}

// Construtor de objetos: Uma função que serve como um "molde" para criar múltiplos objetos com a mesma estrutura.

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("acelerar");
    }
}

// Instanciando objetos a partir do construtor Carro.
// A palavra-chave "new" cria uma nova instância do objeto.
const carroDoJoao2 = new Carro("Fiesta", "Ford", 2020, 2019);
// Chamar a função sem "new" não cria um novo objeto Carro, e o "this" dentro da função se refere ao objeto global (window no navegador).
const carroDaMaria2 = Carro("Ka", "Ford", 2021, 2020);

console.log(carroDoJoao2);
console.log(carroDaMaria2); // O resultado será "undefined" porque a função não retorna nada.

// Declaração de variáveis de diferentes tipos.
const nome = "Bruno"
const idade = 37
const ehMaiorDeIdade = true
const conhecimentos = ["JavaScript", "HTML", "CSS"]

// Criando um objeto "pessoa" que agrupa as variáveis acima.
const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos
}

// O operador "typeof" retorna o tipo de uma variável.

// console.log(typeof nome); // string
// console.log(typeof idade); // number
// console.log(typeof ehMaiorDeIdade); // boolean
// console.log(typeof conhecimentos); // object (Arrays são um tipo especial de objeto)
// console.log(typeof pessoa); // object

// O operador "instanceof" verifica se um objeto é uma instância de um determinado construtor.

// console.log(carroDoJoao2 instanceof Carro); // true
// console.log(carroDaMaria2 instanceof Carro); // false, pois não foi criado com "new"
// console.log(conhecimentos instanceof Array); // true
// console.log(pessoa instanceof Object); // true

// Acessando propriedades de um objeto.

console.log(pessoa.nome); // Notação de ponto
console.log(pessoa['nome']); // Notação de colchetes

// Função que exibe um atributo de um objeto dinamicamente.

function exibeAtributo(objeto, atributo) {
    console.log(objeto[atributo]);
}

exibeAtributo(pessoa, "nome");
exibeAtributo(pessoa, "idade");
exibeAtributo(pessoa, "ehMaiorDeIdade");
exibeAtributo(pessoa, "conhecimentos");

// Adicionando uma nova propriedade ao objeto.

pessoa.sobrenome = null;

// Verificando se uma propriedade existe e tem um valor "verdadeiro".
// "null" é considerado um valor "falso" em contextos booleanos.

if(pessoa.sobrenome) {
    console.log("A pessoa possui sobrenome");
} else {
    console.log("A pessoa não possui sobrenome");
}

// O operador "in" verifica se a propriedade existe no objeto, independentemente do seu valor.

if('sobrenome' in pessoa) {
    console.log("A pessoa possui o atributo sobrenome");
} else {
    console.log("A pessoa não possui o atributo sobrenome");
}

// Object.freeze() "congela" um objeto, impedindo que novas propriedades sejam adicionadas
// e que as existentes sejam removidas ou alteradas.

Object.freeze(pessoa);
pessoa.idade = 38; // Esta alteração será ignorada.
pessoa.nacionalidade = "Brasileira"; // Esta adição será ignorada.

console.log(pessoa);

// Object.keys() retorna um array com os nomes das propriedades de um objeto.
console.log(Object.keys(pessoa));
console.log(Object.keys(pessoa).length); // Retorna a quantidade de propriedades.

// Object.values() retorna um array com os valores das propriedades de um objeto.
console.log(Object.values(pessoa));

// Object.entries() retorna um array de arrays, onde cada subarray contém um par [chave, valor].
console.log(Object.entries(pessoa));
