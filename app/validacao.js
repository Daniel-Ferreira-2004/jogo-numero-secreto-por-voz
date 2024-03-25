function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute;

    if (Number.isNaN(numero)) {
        elementoChute.innerHTML += '<div>Numero invalido</div>'
        return;
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor Invalido: Fale um numero entre ${menorValor} e ${maiorValor}</div>`;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Voce acertou!</h2>
            <h3>O numero secreto era ${numeroSecreto}<h/3>
            <button id='jogar-novamente' class='jogar-denovo'>jogar Novamente</button>
        `
    }else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é Menor <i class='fa-solid fa-donw-long'></i></div>
        `
    }else {
        elementoChute.innerHTML += `
        <div>O número secreto é Maior <i class='fa-solid fa-up-long'></i></div>
        `
    }
    
}

function chuteForInvalido(numero){
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener ('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})