let numeros = [];
let numero;

function promediarNumeros() {
    return numeros.reduce(suma) / numeros.length;
}

function suma(total, numero) {
    return total + numero;
}

do {
    numero = prompt("Ingrese numeros, para finalizar ingrese salir");
    if (numero <= 9 && !(isNaN(numero))) {
        numeros.push(parseInt(numero));
    }
} while ( !(numero == 'salir'));
    
let numeroPromedio = promediarNumeros();

alert("El promedio de los numeros ingresados de un digito es: " +  numeroPromedio);