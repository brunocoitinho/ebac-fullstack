type Aluno = {
    nome: string;
    idade: number;
    cursos?: string[];
}


const alunos: Aluno[] = [
    { nome: "Ana", idade: 20, cursos: ["Front-end", "UX/UI"] },
    { nome: "Bia", idade: 22, cursos: ["Back-end", "DevOps"] },
    { nome: "Carlos", idade: 23, cursos: ["Fullstack", "Mobile"] }
]

// alunos.push("Bruno"); // Erro: Tipo 'string' não pode ser atribuído ao tipo '{ nome: string; idade: number; cursos: string[]; }'.

alunos.push({ nome: "Bruno", idade: 25, cursos: ["Data Science"] }); // Correto

const novoAluno: Aluno = { nome: "Daniel", idade: 21 };
alunos.push(novoAluno); // Correto

function listarAlunos(alunos: Aluno[]): void {
    alunos.forEach(aluno => {
        console.log(`Nome: ${aluno.nome}, Idade: ${aluno.idade}`);
        if (aluno.cursos) {
            console.log(`Cursos: ${aluno.cursos.join(", ")}`);
        }
    });
}

listarAlunos(alunos);