function funcaoMuitoPesada() {
    let execeucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
        execeucoes++;
    }
    return execeucoes;
}

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        resolve(funcaoMuitoPesada());
    } catch (error) {
        reject(error);
    }
});


const promiseComParametros = (login, senha) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`Logado com o usuário ${login} e a senha ${senha}`)
            }, 3000);
            
        })
}

async function execucaoPrincipal() {
    console.log("inicio");
    // await funcaoMuitoPesadaPromise
    //     .then((resultado) => {
    //         console.log(resultado);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });

    promiseComParametros("bruno", "123456")
    .then(resultado => {
        console.log(resultado);
    })
    .catch(error => {
        console.log(error);
    })

    try{
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
    console.log("fim");
}




execucaoPrincipal()
