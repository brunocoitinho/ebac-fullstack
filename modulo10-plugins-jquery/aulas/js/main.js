$(document).ready(function () {
    $("#carrossel-imagens").slick({
        autoplay: true,
        arrows: false,
    });

    $(".menu-hamburger").click(function (e) {
        $("nav").slideToggle("slow");
    });

    var options = {
        onChange: function (tel) {
            let masks = ["(00) 0000-0000  0", "(00) 00000-0000"];
            let mask = tel.length > 14 ? masks[1] : masks[0];

            $("#telefone").mask(mask, options);
        },
    };

    $("#telefone").mask("(00) 0000-0000  0", options);

    $("form").validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
            },
            mensagem: {
                required: true,
            },
            veiculoInteresse: {
                required: true,
            },
        },
        messages: {
            nome: "Por favor, insira o seu nome",
        },
        submitHandler: function (form) {
            console.log(form);
        },
        invalidHandler: function (event, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos > 1) {
                alert(`Existem ${camposIncorretos} campos incorretos!`);
            }
            if (camposIncorretos == 1) {
                alert(`Existe ${camposIncorretos} campo incorreto!`);
            }
        },
    });
    $('.lista-veiculos button').click(function(){
        const destino = $('#contato')

        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#veiculo-interesse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
});
