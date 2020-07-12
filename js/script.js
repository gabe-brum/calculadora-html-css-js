function somTecla() {
    var blip = document.getElementById('blip');

    blip.volume = 0.2;
    blip.play();
}

//Variáveis globais
var num1 = "";
var num2 = "";
var operador = "";

function pegarValor(valor) {
    //Verifica se o operador tem valor
    if (operador == "") {
        num1 += valor;
        document.getElementById('display').innerHTML = num1;
        somTecla();
    } else {
        num2 += valor;
        document.getElementById('display').innerHTML = num2;
        somTecla();
    }

    document.getElementById('display').innerHTML = num1;
}

function pegarOperador(sinal) {
    if (num1 != "") {
        if (num2 == "") {
            operador = sinal;
            document.getElementById('display').innerHTML = num1 + sinal;
        } else {
            //Faz o cálculo
            calcular();
        }

        //operador = sinal;
        //document.getElementById('display').innerHTML = num1 + sinal;
        somTecla();
    } else {
        somTecla();
    }
}

function calcular() {
    // Converte os valores para decimal
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    var resultado = "";

    // Verifica o operador informado
    if (operador == "+") {
        resultado = num1 + num2;
    } else if (operador == "-") {
        resultado = num1 - num2;
    } else if (operador == "/") {
        resultado = num1 / num2;
    } else if (operador == "X") {
        resultado = num1 * num2;
    } else {
        // cálculo de porcentagem
        resultado = (num1 / 100) * num2;
    }

    // Limpa variáveis
    num1 = "";
    num2 = "";
    operador = "";

    //Mostra o resultado
    document.getElementById('display').innerHTML = resultado;

}

// Tecla igual
function verificarIgual() {
    // Verifica se todos os campos foram preenchidos
    if (num2 != "") {
        calcular();
    }
    somTecla();
}

// Limpar display
function limpar() {
    num1 = "";
    num2 = "";
    operador = "";
    document.getElementById('display').innerHTML = "0";
    somTecla();
}