const form = document.getElementById('form-imc')
const inputPeso = document.getElementById('num-peso')
const inputAltura = document.getElementById('num-altura')
const mensagem = document.getElementById('msg')
const btn = document.getElementById('btn-calcular')
let valorValido = false

function validaValor(pesoInformado, alturaInformada){
    return alturaInformada > pesoInformado
}

form.addEventListener('submit', function(e){
    e.preventDefault()
    
    let peso = parseFloat(inputPeso.value)
    let altura = parseInt(inputAltura.value)
    
    valorValido = validaValor(peso, altura)

    if(valorValido){
        let imc = peso/(altura**2)
        mensagem.style.display = 'block'
        mensagem.innerHTML = `IMC = ${imc}`
    }
})

inputAltura.addEventListener('keyup', function(e){
    
    let peso = parseFloat(inputPeso.value)
    let altura = parseInt(inputAltura.value)
    
    valorValido = validaValor(peso, altura)
    
    if(!valorValido){
        if(inputAltura.value != '' && inputPeso.value != ''){
            mensagem.style.display = 'block'
            mensagem.innerHTML = `O peso não pode ser maior que a altura`
            mensagem.classList.add('error')
            inputAltura.classList.add('error')
        }    
        btn.disabled = true
    } else{
        mensagem.style.display = 'none'
        btn.disabled = false
        mensagem.classList.remove('error')
        inputAltura.classList.remove('error')
    }
})

