const formQuadratica = document.getElementById("form-quadratica");
const inputCoeficienteA = document.getElementById("coeficiente-a");
const inputCoeficienteB = document.getElementById("coeficiente-b");
const inputCoeficienteC = document.getElementById("coeficiente-c");
const txtResultado = document.getElementById("resultado");

formQuadratica.addEventListener("submit", function (e) {
    e.preventDefault();
    let ca = parseFloat(inputCoeficienteA.value);
    let cb = parseFloat(inputCoeficienteB.value);
    let cc = parseFloat(inputCoeficienteC.value);
    let d = discriminante(ca, cb, cc);
    let resposta = `Discriminante: ${d} || Raízes: ${baskhara(d, ca, cb)}`;
    txtResultado.innerText = resposta;
});

function discriminante(a, b, c) {
    return b ** 2 - 4 * a * c;
}

function baskhara(disc, a, b) {
    let totalraizes = 0;
    let res = "(";
    if (disc < 0) {
        return "A equação não possui raízes reais.";
    }
    let x1 = (b * -1 + Math.sqrt(disc)) / (2 * a);
    totalraizes++;
    res += `X1: ${x1} `;
    console.log();
    if (disc > 0) {
        let x2 = (b * -1 - Math.sqrt(disc)) / (2 * a);
        totalraizes++;
        res += `X2: ${x2}`;
    }
    return res + `) || O total de raízes reais é ${totalraizes}.`;
}
