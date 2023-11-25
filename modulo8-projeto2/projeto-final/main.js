const formContato = document.getElementById('form-adicionar')
const contatos = []


formContato.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaContato()

})

function adicionaContato(){
    const inputNome = document.getElementById('nome-contato')
    const inputNumero = document.getElementById('numero-contato')

    const novoContato = {nome: inputNome.value, numero : inputNumero.value}

    contatos.push(novoContato)
    let index = contatos.indexOf(novoContato)

    let linhaContato = `<tr id='contato-${index}'>`
    linhaContato +=`<td>${novoContato.nome}</td>`
    linhaContato +=`<td>${novoContato.numero}</td>`
    linhaContato +=`<td><button id='btn-editar${index}' onclick='habilitarEdicao(event)'>✏️</button> <button id='btn-excluir${index}' onclick ='excluiContato(event)' >❌</button></td>`
    linhaContato += '</tr>'

    inputNome.value = ''
    inputNumero.value = ''

    adicionaATabelaAgenda(linhaContato)

}

function adicionaATabelaAgenda(novaLinha){
    let corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML += novaLinha
}


// validação telefone
const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

function excluiContato(event){
    const elementoAExcluir = event.srcElement.parentElement.parentElement
    const pos = elementoAExcluir.id.split('-')[1]
    contatos.splice(pos, 1)
    elementoAExcluir.remove()
    atualizaId(parseInt(pos))
}

function atualizaId(posExcluida){


    for(i = posExcluida + 1; i <= contatos.length; i++){
        let elemento = document.getElementById(`contato-${i}`)
        elemento.setAttribute('id', `contato-${i-1}`)
        
    }
    
}

function habilitarEdicao(event){
    const elementoAEditar = event.srcElement.parentElement.parentElement
    const pos = elementoAEditar.id.split('-')[1]
    const nomeAnterior = elementoAEditar.children[0].innerText
    const telAnterior = elementoAEditar.children[1].innerText
    const tdNome = elementoAEditar.children[0]
    const tdTel = elementoAEditar.children[1]
    const tdAcoes = elementoAEditar.children[2]

    tdNome.innerHTML = `<input type="text" required>`
    tdNome.children[0].value = nomeAnterior

    tdTel.innerHTML = `<input type="tel" maxlength="15" required onkeyup="handlePhone(event)">`
    tdTel.children[0].value = telAnterior

    tdAcoes.innerHTML = `<button onclick="confirmarEdicao(event,${pos})">✅</button>`

    /*let linhaContato = `<tr id='contato-${index}'>`
    linhaContato +=`<td>${novoContato.nome}</td>`
    linhaContato +=`<td>${novoContato.numero}</td>`
    linhaContato +=`<td><button id='btn-editar${index}' onclick='habilitarEdicao(event)'>✏️</button> <button id='btn-excluir${index}' onclick ='excluiContato(event)' >❌</button></td>`
    linhaContato += '</tr>'*/

}

function confirmarEdicao(event, index){
    const contatoEditado = document.getElementById(`contato-${index}`)
    const novoNome = contatoEditado.children[0].children[0].value
    const novoTel = contatoEditado.children[1].children[0].value

    contatos[index].nome = novoNome
    contatos[index].numero = novoTel

    let linhaContato = `<tr id='contato-${index}'>`
    linhaContato +=`<td>${novoNome}</td>`
    linhaContato +=`<td>${novoTel}</td>`
    linhaContato +=`<td><button id='btn-editar${index}' onclick='habilitarEdicao(event)'>✏️</button> <button id='btn-excluir${index}' onclick ='excluiContato(event)' >❌</button></td>`
    linhaContato += '</tr>'

    contatoEditado.innerHTML = linhaContato

    console.log(contatos)
}