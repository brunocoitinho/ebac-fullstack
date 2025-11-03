class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

let alunos = [new Aluno("Bruno", 9), new Aluno("Maria", 10), new Aluno("João", 4), new Aluno("Ana", 8.5), new Aluno('Carlos', 5)];

function aprovados() {
    return alunos.filter(aluno => aluno.nota >= 6);

}

console.log(aprovados());