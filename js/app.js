
const bottonOnOff = document.querySelector('#boton-main');
const modoCalculadora = document.querySelector('.modo');
const calculadora = document.querySelector('#calculator');
const idImageCalculator = document.querySelector('#id-image-calculator');
//Seleccionadores del visor
const operador1 = document.querySelector("#operador-1");
const operacion = document.querySelector("#operacion");
const operador2 = document.querySelector("#operador-2");
const resultado = document.querySelector("#resultado");


//Seleccionadores de los numeros
const uno = document.querySelector("#content-uno");
const dos = document.querySelector("#content-dos");
const tres = document.querySelector("#content-tres");
const cuatro = document.querySelector("#content-cuatro");
const cinco = document.querySelector("#content-cinco");
const seis = document.querySelector("#content-seis");
const siete = document.querySelector("#content-siete");
const ocho = document.querySelector("#content-ocho");
const nueve = document.querySelector("#content-nueve");
const cero = document.querySelector("#content-cero");

//Seleccionadores de los operadores
const suma = document.querySelector("#content-suma");
const resta = document.querySelector("#content-resta");
const multiplicacion = document.querySelector("#content-multiplicacion");
const division = document.querySelector("#content-division");
const igual = document.querySelector("#content-igual");
//Todos lo operadores
const allOperator = document.querySelectorAll('.boton-oper');


//Seleccionador del boton eliminar
const eliminarAll = document.querySelector("#content-eliminar");
//Span para mostrar Error
const aviso = document.querySelector('#aviso-error');



//Esta evento, deshabilita la calculadora cuando esta apagada
bottonOnOff.addEventListener('click', (event) => {
    const even = event.target;
    if (even.classList.contains("active")) {

        optionCalculator(even, "desactive", "On", "green", "not-allowed", "block", "none");
    } else {
        optionCalculator(even, "active", "Off", "red", "pointer", "none", "block");
    }
});

function optionCalculator(even, clase, innerOnOff, color, cursorCalc, displayImg, displayCal) {
    even.className = clase;
    even.innerHTML = innerOnOff;
    even.style.background = color;
    modoCalculadora.innerHTML = innerOnOff;
    modoCalculadora.style.color = color;
    idImageCalculator.style.cursor = cursorCalc;
    idImageCalculator.style.display = displayImg;
    calculadora.style.display = displayCal;
}

eventosDeNumeros();

function eventosDeNumeros() {
    uno.addEventListener('click', (event) => {
        escrituraVisor("1")
    });
    dos.addEventListener('click', (event) => {
        escrituraVisor("2")
    });
    tres.addEventListener('click', (event) => {
        escrituraVisor("3")
    });
    cuatro.addEventListener('click', (event) => {
        escrituraVisor("4")
    });
    cinco.addEventListener('click', (event) => {
        escrituraVisor("5")
    });
    seis.addEventListener('click', (event) => {
        escrituraVisor("6")
    });
    siete.addEventListener('click', (event) => {
        escrituraVisor("7")
    });
    ocho.addEventListener('click', (event) => {
        escrituraVisor("8")
    });
    nueve.addEventListener('click', (event) => {
        escrituraVisor("9")
    });
    cero.addEventListener('click', (event) => {
        escrituraVisor("0")
    });
}


function escrituraVisor(number) {
    if (OperadorVacio()) {
        operador1.innerHTML += number;
    } else {
        operador2.innerHTML += number;
    }
}


function OperadorVacio() {
    if (operacion.textContent) return false;
    else return true;
}

eventosOperadores();

function eventosOperadores() {
    suma.addEventListener('click', () => {
        operacion.innerHTML = "+";
    });
    resta.addEventListener('click', () => {
        operacion.innerHTML = "-";
    });
    division.addEventListener('click', () => {
        operacion.innerHTML = "/";
    });
    multiplicacion.addEventListener('click', () => {
        operacion.innerHTML = "*";
    });
}

eliminarAll.addEventListener('click', () => {
    operador1.innerHTML = "";
    operador2.innerHTML = "";
    operacion.innerHTML = "";
    resultado.innerHTML = "";

})

igual.addEventListener('click', () => {
    if (operador1.textContent && operador2.textContent && operacion.textContent) {
        operadorOne = parseInt(operador1.textContent, 10);
        operadorTwo = parseInt(operador2.textContent, 10);
        switch (operacion.textContent) {
            case "+":
                resultado.innerHTML = sumas(operadorOne, operadorTwo);
                break;
            case "-":
                resultado.innerHTML = restas(operadorOne, operadorTwo);
                break;
            case "/":
                if(operadorTwo !== 0){
                    resultado.innerHTML = divisiones(operadorOne, operadorTwo);
                }else{
                    mostrarMensaje("No se puede dividir por cero!!!");
                }
                
                break;
            case "*":
                resultado.innerHTML = multiplicaciones(operadorOne, operadorTwo);
                break;
        }
    } else {
        mostrarMensaje("Debes tener los dos operando!!!");
    }

})

const sumas = (op1, op2) => op1 + op2;
const restas=(op1,op2)=> op1 - op2;
const divisiones=(op1,op2)=> op1 / op2;
const multiplicaciones=(op1,op2)=> op1 * op2;



function mostrarMensaje(mensaje) {
    aviso.innerHTML = mensaje;
    setTimeout(() => {
        aviso.innerHTML = "";
    }, 3000)
}