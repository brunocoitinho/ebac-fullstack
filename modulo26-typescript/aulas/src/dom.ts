const campoNome = document.getElementById('nome') as HTMLInputElement;
const formulario = document.getElementsByTagName('form');
const botaoEnviar = document.querySelector('#btn-enviar') as HTMLButtonElement;

botaoEnviar.addEventListener('click', (event: MouseEvent) => {
    event.preventDefault();
    console.log(`Nome: ${campoNome.value}`);
})

// Resumo do que foi aprendido
// - Manipulação do DOM com TypeScript
// - Uso de type assertions (as HTMLInputElement, as HTMLButtonElement)