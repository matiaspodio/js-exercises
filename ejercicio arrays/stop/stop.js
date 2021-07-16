let numeros = [];
let numero;

do {
    numero = prompt("Ingrese numeros, para finalizar ingrese stop");
    if (numero && !(isNaN(numero))) {
        numeros.push(parseInt(numero));
    }
} while ( !(numero == 'stop'));

alert('los numeros que ingresó son: ' + numeros.join(' * '));