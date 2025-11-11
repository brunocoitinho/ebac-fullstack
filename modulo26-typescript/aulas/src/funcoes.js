"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculaAreaRetangulo(base, altura) {
    return base * altura;
}
const calculaArea2 = (base, altura) => {
    return base * altura;
};
const calculaArea3 = (base, altura) => base * altura;
function somar(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}
function imprimeSoma(a, b) {
    console.log(`A soma de ${a} e ${b} é ${a + b}`);
}
function teste() {
    if (Math.random() > 0.5) {
        return "Olá";
    }
    else {
        return 10;
    }
}
const resultadoDeTeste = teste();
//# sourceMappingURL=funcoes.js.map