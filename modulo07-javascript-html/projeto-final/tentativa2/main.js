const form = document.getElementById('form-maior')
const na = document.getElementById('num-a')
const nb = document.getElementById('num-b')
const mensagem = document.getElementById('msg')
const btn = document.getElementById('btn-calcular')
let valorValido = false

function validaValor(numA, numB){
    return numB > numA
}

form.addEventListener('submit', function(e){
    e.preventDefault()
    
    let a = parseInt(na.value)
    let b = parseInt(nb.value)
    
    valorValido = validaValor(a, b)

    mensagem.style.display = 'block'

    if(valorValido){
        mensagem.innerHTML = `Eba! O valor do campo B, é maior que o do campo A!`
        mensagem.classList.remove('error')
        na.classList.remove('error')
        nb.classList.remove('error')
    }else{
        mensagem.innerHTML = `Que pena! O valor do campo B, NÃO é maior que o do campo A!`
        mensagem.classList.add('error')
        na.classList.add('error')
        nb.classList.add('error')
    }
})


