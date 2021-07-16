let numerosPares = [];
let numerosImpares = [];
let datosNoNumericos = [];

function paresImpares() {
    if ((numero % 2 == 0) && !(isNaN(numero))) {
        numerosPares.push(parseInt(numero));
    } else if ((numero % 2 !== 0) && !(isNaN(numero))) {
        numerosImpares.push(parseInt(numero));
    } else {
        datosNoNumericos.push(numero);
    }
}

do {
    numero = prompt("Ingrese los numeros que desee, para finalizar ingrese 0 (cero)");
    paresImpares();
} while (!(numero == 0));

console.log('los numeros pares son: ' + numerosPares);
console.log('la cantidad de numeros pares son: ' + numerosPares.length);
console.log('los numeros impares son: ' + numerosImpares);
console.log('la cantidad de numeros impares son: ' + numerosImpares.length);

console.log('los datos no numericos son: ' + datosNoNumericos);
