//Estudando sobre Map

// Criando um novo map
let meuMap = new Map(); 

// Adicionando um par chave-valor ao map
meuMap.set("nome", "Bruno");
meuMap.set("stack", "html, css, js, react");
console.log(meuMap);

// Recuperando o valor associado à chave "nome"
const nome = meuMap.get("nome");
console.log(nome);

// Exibindo o número de elementos no map
console.log(meuMap.size);

// Verificando se a chave "nome" existe no map
console.log(meuMap.has("nome"));

for (let chave of meuMap.keys()) {
    console.log(chave);
}

for (let valor of meuMap.values()) {
    console.log(valor);
}

for (let par of meuMap.entries()) {
    console.log(par);
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

// metodo delete

meuMap.delete("stack");
console.log(meuMap);

// Limpando o map (removendo todos os elementos)
meuMap.clear();
console.log(meuMap.size);


// Estudando sobre Set

const cpfs = new Set();
cpfs.add("52518999043");
cpfs.add("54928127005");
cpfs.add("66812970050");
cpfs.add("66812970050");
cpfs.add("66812970050");
cpfs.add("66812970050"); // Valores repetidos são ignorados

console.log(cpfs);
console.log(cpfs.keys()); //A chave e o valor são as mesmas
console.log(cpfs.values());
console.log(cpfs.entries());


cpfs.forEach((valor) =>{
    console.log(valor);
})

const array = ["Bruno", "Carlos", "Maria", "Ana", "Carlos", "Maria"];
const arrayComoSet = new Set([...array]);
console.log(arrayComoSet);

const arraySemRepeticao = [...arrayComoSet];
console.log(arraySemRepeticao);


