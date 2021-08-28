let dataLancamento = new Date("09/10/2021").getTime();

let cronometro = setInterval(tick, 1000);

function tick () {
    let agora = new Date().getTime();
    let restante = dataLancamento - agora;

    if (restante > 0) {
        let dias = Math.floor(restante / (1000 * 60 * 60 * 24));
        dias = adicionarPrefix0(dias);

        let horas = Math.floor((restante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        horas = adicionarPrefix0(horas);

        let minutos = Math.floor((restante % (1000 * 60 * 60)) / (1000 * 60));
        minutos = adicionarPrefix0(minutos);

        let segundos = Math.floor((restante % (1000 * 60)) / 1000);
        segundos = adicionarPrefix0(segundos);

        document.querySelector('#cronometro-dias').innerText = dias;
        document.querySelector('#cronometro-horas').innerText = horas;
        document.querySelector('#cronometro-minutos').innerText = minutos;
        document.querySelector('#cronometro-segundos').innerText = segundos;
    } else {
        // oculta o container do cronometro
        document.querySelector('#cronometro-container').classList.add('hide');
        // exibe o container da data-especial
        document.querySelector('#data-especial').classList.remove('hide');
    }
}

function adicionarPrefix0(unidade){
    if (unidade < 10) {
        return "0" + unidade;
    }
    return unidade;
}