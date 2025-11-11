let estaChovendo: boolean = false; 

estaChovendo = true;

let idade: number = 37;
let altura: number = 1.75;

let nome: string = "Bruno";
const nacionalidade: string = "Brasileiro";

let colegas: string[] = ["Ana", "Bia", "Carlos"];
const tecnologias: Array<string> = ["JavaScript", "TypeScript", "React"];

const notas: ReadonlyArray<number> = [7.5, 8.0, 9.0]; // Array imutável sem o método push

const lista: [idade: number,nome:string, estaEstudando:boolean] = [11, "João", true]; // Tupla

let idadeDaAna:number | string = 18;
idadeDaAna = "dezoito";

let dadosDaApi: any;
dadosDaApi = 10;
dadosDaApi = "Bruno";
dadosDaApi = true;
dadosDaApi = [];
dadosDaApi = {};
dadosDaApi = null;
dadosDaApi = undefined;
dadosDaApi = new Date();

let curso = "TypeScript"; // Inferência de tipo string
// curso = 10; // Erro: não pode atribuir número a string
