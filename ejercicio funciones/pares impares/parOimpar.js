let numerosPares = [];
let numerosImpares = [];

function paresImpares() {
    if ((numero % 2 == 0) && !(isNaN(numero))) {
        numerosPares.push(parseInt(numero));
    } else if ((numero % 2 !== 0) && !(isNaN(numero))) {
        numerosImpares.push(parseInt(numero));
    }
}

do {
    numero = prompt("Ingrese los numeros que desee, para finalizar ingrese 0 (cero)");
    paresImpares();
} while (!(numero == 0));

if (numerosPares > numerosImpares) {
    alert('los numeros mas ingresados son Pares siendo un total de ' + numerosPares.length)
} else {
    alert('los numeros mas ingresados son Impares siendo un total de ' + numerosImpares.length)
}
    
console.log('los numeros pares son: ' + numerosPares);
console.log('los numeros impares son: ' + numerosImpares);
console.log('los numeros pares son: ' + numerosPares.length);
console.log('los numeros impares son: ' + numerosImpares.length);
