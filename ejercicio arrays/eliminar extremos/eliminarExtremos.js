let numeros = [];
let numero;

function agregarNumeros() {
    if (!(isNaN(numero)) && numero != 0) {
        numeros.push(parseInt(numero));
    } 
}

do {
    numero = prompt("Ingrese los numeros que desee, para finalizar ingrese 0 (cero)");
    agregarNumeros();
} while (!(numero == 0));

console.log(numeros)
numeros.sort((a, b) => a - b);
console.log(numeros)
numeros.shift();
console.log(numeros)
numeros.pop();
console.log(numeros);

