const form = document.getElementById('form-deposito')
const nomeBeneficiario = document.getElementById('nome-beneficiario')
let formEValido = false

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.length >= 2 && nomeComoArray[1] != ''
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta')
    const valorDeposito = document.getElementById('valor-deposito')
    const mensagemSucesso = `O montante de: <span class="success-data">${valorDeposito.value}</span>  depositado para o cliente: <span class="success-data">${nomeBeneficiario.value}</span> - conta: <span class="success-data">${numeroContaBeneficiario.value}</span>`

    formEValido = validaNome(nomeBeneficiario.value)
    
    if (formEValido){
        const containerMensagemSucesso = document.querySelector('.success-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'block'
    }else{
        document.querySelector('.error-message').style.display = 'block';
        nomeBeneficiario.classList.add('error')
    }
})

nomeBeneficiario.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validaNome(e.target.value)

    if(!formEValido){
        nomeBeneficiario.classList.add('error')
        document.querySelector('.error-message').style.display = 'block';
    } else{
        nomeBeneficiario.classList.remove('error')
        document.querySelector('.error-message').style.display = 'none';
    }
})