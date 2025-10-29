function Felino(tamanho, peso){
    let _tamanho = tamanho;
    let _peso = peso;

    this.getTamanho = function(){
        return _tamanho;
    }

    this.getPeso = function(){
        return _peso;
    }

    this.setTamanho = function(tamanho){
        if(tamanho > 0){
            _tamanho = tamanho;
        }
        else{
            _tamanho = 0;
        }
    }

    this.setPeso = function(peso){
        if(peso > 0){
            _peso = peso;
        }
        else{
            _peso = 0;
        }
    }

    this.emitirSom = function(){
        console.log("Barulho do felino")
    }

}

function Gato(tamanho, peso){

    Felino.call(this, tamanho, peso);

    this.emitirSom = function(){
        console.log("Miau")
    }
}

function Leao(tamanho, peso){

    Felino.call(this, tamanho, peso);

    this.emitirSom = function(){
        console.log("Roar")
    }
}


const gatinho1 = new Gato(0.5, 2)
const gatinho2 = new Gato(0.4, 2.1)
const leao = new Leao(2, 190)

gatinho1.emitirSom()
gatinho2.emitirSom()
leao.emitirSom()