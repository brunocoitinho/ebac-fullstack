// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("btn-buscar-cep").addEventListener("click", function() {
//         const xhttp = new XMLHttpRequest();
//         const cep = document.getElementById("cep").value;
//         const endpoint = `https://viacep.com.br/ws/${cep}/json/`;

//         xhttp.open("GET", endpoint);
//         xhttp.send();
//     })
// })

$(document).ready(function () {

    $('#cep').mask('00000-000');

    $("#btn-buscar-cep").click(function () {
        const cep = $("#cep").val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
        $(".bi-search").addClass("d-none");
        $(".spinner-border").removeClass("d-none");

        // $.ajax(endpoint).done(function (res) {
        //     console.log(res);

        //     setTimeout(function(){
        //         $(".bi-search").removeClass("d-none");
        //         $(".spinner-border").addClass("d-none");
        //         $("#endereco").val(
        //             `${res.logradouro}, ${res.bairro}, ${res.localidade} - ${res.uf}`
        //         );
        //     }, 4000)
            
        // });
        
        fetch(endpoint)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                setTimeout(function(){
                    document.querySelector(".bi-search").classList.remove("d-none");
                    document.querySelector(".spinner-border").classList.add("d-none");
                    document.getElementById("endereco").value =
                        `${json.logradouro}, ${json.bairro}, ${json.localidade} - ${json.uf}`;
                }, 4000)
            }).catch(function (error) {
                alert("Ocorreu um erro. Tente novamente mais tarde.");
            }).finally(function() {
                console.log("Sempre executado");
            });
    });

    $("#form-pedido").submit(function(event) {
        event.preventDefault();

        if ($('#nome').val().length === 0) {
            throw new Error("Preencha o nome");
        }

        if ($('#sobrenome').val().length === 0) {
            throw new Error("Preencha o sobrenome");
        }

        if ($('#email').val().length === 0) {
            throw new Error("Preencha o email");
        }

        alert("Formulário enviado!");
    })
});
