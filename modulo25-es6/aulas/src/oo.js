// function Pokemon(nomeDoPokemon, tipoDoPokemon) {
//     this.nome = nomeDoPokemon;
//     this.tipo = tipoDoPokemon;
// }

// const pikachu = new Pokemon("Pikachu", "Elétrico");
// console.log(pikachu);

// const charmander = new Pokemon("Charmander", "Fogo");
// console.log(charmander);

// const bulbasaur = new Pokemon("Bulbasaur", "Planta");
// console.log(bulbasaur);

// const squirtle = new Pokemon("Squirtle", "Água");
// console.log(squirtle);

class Pokemon {
    #hp = 100 // # torna o atributo privado

    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeDoAtaque){
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`);
    }

    receberAtaque() {
        this.#hp -= 10;
    }

    exibirHp() {
        console.log(this.#hp);
    }


}

class Pikachu extends Pokemon {
    constructor() {
        super("Pikachu", "Elétrico");
    }

    atacar(nomeDoAtaque) {
        if (nomeDoAtaque ) {
            super.atacar(nomeDoAtaque);
        } else{
            super.atacar("Choque do Trovão");
        }
    }
}

const pikachuDoAsh = new Pikachu();
console.log(pikachuDoAsh);
pikachuDoAsh.exibirHp()
pikachuDoAsh.atacar("Investida Trovão");
pikachuDoAsh.receberAtaque();
pikachuDoAsh.exibirHp()
pikachuDoAsh.atacar();



console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon);

