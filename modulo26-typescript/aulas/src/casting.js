"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var casting;
(function (casting) {
    let idade = 10;
    idade.toFixed();
    idade.length;
    idade.forEach(i => console.log(i)); // Erro em tempo de execução
    let nome = 35; // Evitar esse tipo de casting
    let nome2 = (35).toString(); // Maneira correta de converter número para string
})(casting || (casting = {}));
//# sourceMappingURL=casting.js.map