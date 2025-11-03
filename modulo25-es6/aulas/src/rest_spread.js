function somar(a, b) {
    // return a + b;
    // console.log(arguments)
    let soma = 0;
    for(let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    return soma;
}

console.log(somar(10, 20)); // 30

function somaComRest(...numeros) {
    // console.log(numeros);
    const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0) ;
    
    return soma;
}

console.log(somaComRest(10, 20, 30, 40, 50)); //


// spread operator
const numeros = [10, 20, 30, 40, 50];
console.log(...numeros); // 10 20 30 40 50

const timesRJ = ['Botafogo', 'Flamengo', 'Vasco', 'Fluminense'];
const timesSP = ['Palmeiras', 'Corinthians', 'São Paulo', 'Santos'];


const todosTimes = timesRJ.concat(timesSP);
console.log(todosTimes); //
const todosTimesSpread = [...timesRJ, ...timesSP];
console.log(todosTimesSpread); //

const carroDaJulia = {
    modelo: 'Ka',
    fabricante: 'Ford',
    ano: 2020,
};

const carroDoBruno = {
    ...carroDaJulia,
    modelo: 'Gol',
    fabricante: 'Volkswagen',
};

const carroDoPedro = {
    ...carroDaJulia,
}

console.log(carroDoBruno); //
console.log(carroDoPedro); //

// desestruturação
const { modelo: modeloDoCarroDaJulia, fabricante: fabricanteDoCarroDaJulia, ano: anoDoCarroDaJulia} = carroDaJulia;
const { modelo: modeloDoCarroDoBruno, fabricante: fabricanteDoCarroDoBruno, ano: anoDoCarroDoBruno } = carroDoBruno;

console.log('--- Desestruturação ---');
console.log("Carro da Julia")
console.log(modeloDoCarroDaJulia);
console.log(fabricanteDoCarroDaJulia);
console.log(anoDoCarroDaJulia);

console.log("Carro do Bruno")
console.log(modeloDoCarroDoBruno);
console.log(fabricanteDoCarroDoBruno);
console.log(anoDoCarroDoBruno);

const [primeiroTimeRJ, segundoTimeRJ, ...outrosTimesRJ] = timesRJ;

console.log('--- Desestruturação de array ---');
console.log(primeiroTimeRJ);
console.log(segundoTimeRJ);
console.log(outrosTimesRJ);