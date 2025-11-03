// Conhecendo métodos de arrays

const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho um perfil na rede social: ${redesSociais[i]}`);
}

// forEach
redesSociais.forEach((rede, index) => {
    console.log(`${index + 1} - Eu uso a rede social: ${rede}`);
});

const alunos = ['Bruno', 'Ana', 'Carlos', 'Maria'];

// map

const alunosComCurso = alunos.map((aluno) => {
    aluno = {
        nome: aluno,
        curso: 'Front-end'
    };
    return aluno
});

console.log(alunosComCurso);

const numeros = [1, 2, 3, 4, 5, 6];
const dobroDosNumeros = numeros.map(n => n * 2);
console.log(dobroDosNumeros); // [2, 4, 6, 8, 10, 12]

// find

const Ana = alunosComCurso.find((aluno) => {
    return aluno.nome === 'Ana';
});

console.log(Ana);

// findIndex
const indiceCarlos = alunosComCurso.findIndex((aluno) => {
    return aluno.nome === 'Carlos';
});

console.log(indiceCarlos);

// every
let todosTemCursoFrontEnd = alunosComCurso.every((aluno) => {
    return aluno.curso === 'Front-end';
});

console.log(todosTemCursoFrontEnd);

// push
alunosComCurso.push({ nome: 'Marcos', curso: 'Back-end' });

todosTemCursoFrontEnd = alunosComCurso.every((aluno) => {
    return aluno.curso === 'Front-end';
});

console.log(alunosComCurso);
console.log(todosTemCursoFrontEnd);

// some
const algumAlunoTemCursoBackEnd = alunosComCurso.some((aluno) => {
    return aluno.curso === 'Back-end';
});

console.log(algumAlunoTemCursoBackEnd);

// filter

const alunosBackEnd = alunosComCurso.filter((aluno) => {
    return aluno.curso === 'Back-end';
});

const filtraBackEnd = aluno => aluno.curso === 'Back-end'; //Quando só há um parâmetro não precisa dos parênteses

const alunosBackEnd2 = alunosComCurso.filter(filtraBackEnd);


console.log(alunosBackEnd);
console.log(alunosBackEnd2);

// reduce
const somaDosNumeros = numeros.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 0);

let somaComFor = 0;
for (let i = 0; i < numeros.length; i++) {
    somaComFor += numeros[i];
}

console.log(numeros);
console.log(somaDosNumeros);
console.log(somaComFor);

const nomeDosAlunos = alunosComCurso.reduce((acumulador, aluno) => {
    acumulador+= aluno.nome + ' ';
    return acumulador;
}, '');

console.log(nomeDosAlunos);




