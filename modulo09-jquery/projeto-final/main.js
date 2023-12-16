$(document).ready(function() {
    $('form').submit(function (e) { 
        e.preventDefault();
        const nomeTarefa = $('#inputNomeTarefa').val();
        const novoItem = $('<li class="tarefaCadastrada"></li>')
        const novoCard = $('<div class="card"></div>')
        $(`<p>${nomeTarefa}</p>`).appendTo(novoCard)
        $(novoCard).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(500)
        $('#inputNomeTarefa').val('')
        
    });
    $("body").on("click",".tarefaCadastrada",function (e) { 
        $(e.target).addClass('tarefaRealizada');
    });
});