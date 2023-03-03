
const bottonOnOff = document.querySelector('#boton-main');
const modoCalculadora = document.querySelector('.modo');
const calculadora = document.querySelector('#calculator');


bottonOnOff.addEventListener('click', (event) => {
    const even = event.target;
    if (even.classList.contains("active")) {
        
        optionCalculator(even, "desactive", "On", "green", "not-allowed");
    } else {
        optionCalculator(even, "active", "Off", "red", "pointer");
    }
});
function optionCalculator(even, clase, innerOnOff, color, cursorCalc) {
    even.className = clase;
    even.innerHTML = innerOnOff;
    even.style.background = color;
    modoCalculadora.innerHTML = innerOnOff;
    modoCalculadora.style.color = color;
    calculadora.style.cursor = cursorCalc;
}