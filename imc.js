const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(2)

        let classificacao = ""
        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso'
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal'
        } else if (valorIMC < 30) {
            classificacao = 'voce esta levemente acima do peso'
        } else if (valorIMC < 35) {
            classificacao = 'com obeisdade grau 1'
        } else if (valorIMC < 40) {
            classificacao = 'obsidade grau 2'
        } else {
            classificacao = 'com obesidade grau 3. Tome cuidado'
        }


        resultado.textContent = `${nome} seu IMC é ${valorIMC} e voce esta ${classificacao}`

    } else {
        resultado.textContent = 'Preencha todos os campos'
    }
}

function alturaNumero() {
    const altura = document.getElementById('altura').value
    document.getElementById('valorAltura').innerHTML = altura

}

function pesoNumero() {
    const altura = document.getElementById('peso').value
    document.getElementById('valorPeso').innerHTML = altura

}