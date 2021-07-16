let miArray = [];
let caracter;

function agregarCaracteres() {
    if (caracter != 0) {
        miArray.push(parseInt(caracter));
    } 
}

do {
    caracter = prompt("Ingrese los Caracteres que desee, para finalizar ingrese 0 (cero)");
    agregarCaracteres();
} while (!(caracter == 0));

//sin resolver

