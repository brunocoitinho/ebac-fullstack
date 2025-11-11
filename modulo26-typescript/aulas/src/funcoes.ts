function calculaAreaRetangulo(base: number, altura: number): number {
    return base * altura;
}

const calculaArea2 = (base: number, altura: number): number => {
    return base * altura;
};

const calculaArea3 = (base: number, altura: number): number => base * altura;

function somar(...numeros: number[]): number {
    return numeros.reduce((total, num) => total + num, 0);
}

function imprimeSoma(a: number, b: number): void {
    console.log(`A soma de ${a} e ${b} é ${a + b}`);
}

function teste(): string | number {
    if (Math.random() > 0.5) {
        return "Olá";
    } else {
        return 10;
    }

}

const resultadoDeTeste = teste();