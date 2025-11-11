"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const campoNome = document.getElementById('nome');
const formulario = document.getElementsByTagName('form');
const botaoEnviar = document.querySelector('#btn-enviar');
botaoEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(`Nome: ${campoNome.value}`);
});
// Resumo do que foi aprendido
// - Manipulação do DOM com TypeScript
// - Uso de type assertions (as HTMLInputElement, as HTMLButtonElement)
//# sourceMappingURL=dom.js.map