$(document).ready(function () {

    let options = {
        onChange: function (tel) {
            let masks = ["(00) 0000-0000  0", "(00) 00000-0000"];
            let mask = tel.length > 14 ? masks[1] : masks[0];

            $("#inputTel").mask(mask, options);
        },
    };

    $("#inputTel").mask("(00) 0000-0000  0", options);
    $("#inputCep").mask("00000-000");

    $("form").validate({
        rules: {
            inputNome: {
                required: true,
            },
            inputEmail: {
                required: true,
                email: true,
            },
            inputTel: {
                required: true,
            },
            inputEndereco: {
                required: true,
            },
            inputCep: {
                required: true,
            },
        },
    });
});
