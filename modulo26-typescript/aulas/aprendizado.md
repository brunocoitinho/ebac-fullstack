# Aprendizados em TypeScript

Este documento resume os principais conceitos de TypeScript abordados neste projeto, com explicações e exemplos para iniciantes.

## Compilando o Projeto com `npx tsc`

O código TypeScript que escrevemos não pode ser executado diretamente pelo navegador ou pelo Node.js. Ele precisa primeiro ser **compilado** (ou transpilado) para JavaScript. A ferramenta que faz isso é o compilador do TypeScript, chamado `tsc`.

### Por que usar `npx tsc`?

Seu instrutor recomendou o uso de `npx tsc`, e essa é a abordagem moderna e mais correta para a maioria dos projetos. Vamos entender o motivo.

1.  **O Problema da Instalação Global:** Antigamente, era comum instalar o TypeScript "globalmente" na máquina com `npm install -g typescript`. Isso disponibilizava o comando `tsc` em qualquer terminal. O problema é que, se você trabalhasse em dois projetos que usassem **versões diferentes** do TypeScript, teria um conflito. A versão global seria uma só, o que poderia causar erros de compilação em um dos projetos.

2.  **A Solução: Dependências Locais:** A boa prática é instalar o TypeScript como uma dependência de desenvolvimento **local** para cada projeto (`npm install typescript --save-dev` ou `npm i -D typescript`). Isso registra a versão exata do TypeScript no arquivo `package.json` do projeto, garantindo que todos que trabalharem nele usem a mesma versão.

3.  **O Papel do `npx`:** Aqui entra a mágica do `npx`. O `npx` é uma ferramenta que vem com o `npm` e serve para executar pacotes. Ao rodar `npx tsc`, ele faz o seguinte:
    *   Primeiro, ele procura pelo executável `tsc` na pasta `node_modules/.bin` do **seu projeto local**.
    *   Se encontrar, ele o executa.

    **Motivação:** Usar `npx tsc` garante que você está executando a versão do compilador TypeScript que foi instalada **especificamente para aquele projeto**, evitando os problemas de versão da instalação global. É a forma de garantir consistência e portabilidade para seu projeto.

### Comandos Essenciais do Compilador

Ao executar os comandos, o `tsc` automaticamente procura e utiliza o arquivo de configuração `tsconfig.json` na raiz do projeto.

*   **Compilação Única:**
    ```bash
    npx tsc
    ```
    **Motivação:** Este comando lê seu `tsconfig.json`, compila todos os arquivos `.ts` para `.js` de acordo com as regras e depois para. É ideal para criar uma "build" final do seu código antes de publicá-lo.

*   **Modo de Observação (Watch Mode):**
    ```bash
    npx tsc --watch
    ```
    **Motivação:** Este é o comando mais útil durante o desenvolvimento. Ele compila o projeto uma vez e depois fica "assistindo" a todos os arquivos. Sempre que você salva uma alteração em um arquivo `.ts`, o compilador o recompila automaticamente para JavaScript. Isso acelera drasticamente o desenvolvimento, pois você não precisa rodar o comando manualmente a cada mudança.

---

## Configurando o Compilador (`tsconfig.json`)

O arquivo `tsconfig.json` é o coração de um projeto TypeScript. Ele permite que você configure como o compilador (TSC) deve se comportar, definindo regras e opções para a compilação do seu código TypeScript para JavaScript.

**Motivação:** Ter um `tsconfig.json` garante que seu projeto seja compilado de forma consistente, com as mesmas regras para todos os desenvolvedores. Ele também permite que você habilite ou desabilite recursos do TypeScript, como a verificação de tipos mais rigorosa.

**Exemplo de `tsconfig.json`:**

```json
{
  "compilerOptions": {
    "target": "esnext", // Define a versão do JavaScript que será gerada
    "module": "nodenext", // Define o sistema de módulos
    "strict": true, // Habilita todas as opções de verificação de tipos estritas
    "sourceMap": true, // Gera arquivos .map para facilitar a depuração
    "declaration": true // Gera arquivos .d.ts com as definições de tipos
  }
}
```

## Tipos Básicos

TypeScript adiciona tipos ao JavaScript, o que ajuda a evitar erros comuns e a tornar o código mais legível e manutenível.

**Motivação:** Usar tipos ajuda a documentar seu código e a evitar que você passe o tipo de dado errado para uma função ou variável.

**Exemplos:**

```typescript
let estaChovendo: boolean = false;
let idade: number = 37;
let nome: string = "Bruno";

// Arrays
let colegas: string[] = ["Ana", "Bia", "Carlos"];
const tecnologias: Array<string> = ["JavaScript", "TypeScript", "React"];

// Tuplas (arrays com tipos e ordem definidos)
const lista: [idade: number, nome: string, estaEstudando: boolean] = [11, "João", true];

// Union Types (quando uma variável pode ter mais de um tipo)
let idadeDaAna: number | string = 18;
idadeDaAna = "dezoito";

// Any (desabilita a verificação de tipos, use com cautela)
let dadosDaApi: any;
dadosDaApi = 10;
dadosDaApi = "Bruno";
```

## Inferência de Tipos

O TypeScript é inteligente o suficiente para inferir o tipo de uma variável com base no valor que você atribui a ela.

**Motivação:** A inferência de tipos torna o código menos verboso, pois você não precisa declarar o tipo de todas as variáveis.

**Exemplo:**

```typescript
let curso = "TypeScript"; // O TypeScript infere que 'curso' é do tipo string
// curso = 10; // Erro: não pode atribuir um número a uma string
```

## Tipos Customizados (`type`)

Você pode criar seus próprios tipos para representar estruturas de dados mais complexas.

**Motivação:** Tipos customizados tornam seu código mais claro e reutilizável, especialmente ao lidar com objetos com uma estrutura específica.

**Exemplo:**

```typescript
type Aluno = {
    nome: string;
    idade: number;
    cursos?: string[]; // A interrogação indica que a propriedade é opcional
}

const alunos: Aluno[] = [
    { nome: "Ana", idade: 20, cursos: ["Front-end", "UX/UI"] },
    { nome: "Bia", idade: 22, cursos: ["Back-end", "DevOps"] }
];
```

## Funções

Você pode e deve tipar os parâmetros e o valor de retorno das suas funções.

**Motivação:** Tipar funções garante que você passe os argumentos corretos e que o valor de retorno seja do tipo esperado.

**Exemplos:**

```typescript
// Função com parâmetros e retorno tipados
function calculaAreaRetangulo(base: number, altura: number): number {
    return base * altura;
}

// Arrow function com tipos
const calculaArea2 = (base: number, altura: number): number => {
    return base * altura;
};

// Função que não retorna nada (void)
function imprimeSoma(a: number, b: number): void {
    console.log(`A soma de ${a} e ${b} é ${a + b}`);
}
```

## Orientação a Objetos

TypeScript suporta programação orientada a objetos com classes, herança e modificadores de acesso.

**Motivação:** A orientação a objetos ajuda a organizar o código em entidades reutilizáveis e a modelar o mundo real de forma mais eficaz.

**Exemplos:**

```typescript
class Pessoa {
    nome: string;
    renda?: number;

    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): void {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
}

class ContaBancaria {
    protected saldo: number = 0; // Acessível apenas na classe e subclasses
    numeroConta: string;

    constructor(numeroConta: string) {
        this.numeroConta = numeroConta;
    }

    getSaldo(): number {
        return this.saldo;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }
}

// Herança
class ContaBancariaPF extends ContaBancaria {
    // ...
}
```

## Interfaces

Interfaces definem um "contrato" que uma classe ou objeto deve seguir.

**Motivação:** Interfaces são úteis para garantir que diferentes classes tenham os mesmos métodos e propriedades, promovendo a consistência e a interoperabilidade.

**Exemplo:**

```typescript
interface ITransacional {
    transferir: (valor: number, destinatario: Conta) => boolean;
    taxaTransferencia: number;
}

class ContaCorrente extends Conta implements ITransacional {
    taxaTransferencia: number = 1.5;

    transferir(valor: number, destinatario: Conta): boolean {
        // ...
        return true;
    }
}
```

## Type Casting

Às vezes, você sabe mais sobre o tipo de um valor do que o TypeScript. Nesses casos, você pode usar o *type casting* para dizer ao compilador qual é o tipo correto.

**Motivação:** O *type casting* é útil ao interagir com o DOM ou com APIs que retornam tipos genéricos.

**Exemplo:**

```typescript
const campoNome = document.getElementById('nome') as HTMLInputElement;
console.log(campoNome.value);
```

## Manipulação do DOM

O TypeScript torna a manipulação do DOM mais segura, pois você pode especificar o tipo dos elementos que está selecionando.

**Motivação:** Ao usar tipos para elementos do DOM, você obtém autocompletar e verificação de tipos para as propriedades e métodos desses elementos, evitando erros em tempo de execução.

**Exemplo:**

```typescript
const botaoEnviar = document.querySelector('#btn-enviar') as HTMLButtonElement;

botaoEnviar.addEventListener('click', (event: MouseEvent) => {
    event.preventDefault();
    // ...
});
```
