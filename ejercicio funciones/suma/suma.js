let numero1, numero2, numero3, numero4, numero5;

function solicitarValores() {
    do {
        numero1 = parseInt(prompt("Ingrese el primer numero"));
        numero2 = parseInt(prompt("Ingrese el segundo numero"));
        numero3 = parseInt(prompt("Ingrese el tercero numero"));
        numero4 = parseInt(prompt("Ingrese el cuarto numero"));
        numero5 = parseInt(prompt("Ingrese el quinto y ultimo numero"));
    } while (validarNumeros());
}

function validarNumeros() {
    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3) || isNaN(numero4) || isNaN(numero5)) {
        alert("Ingrese unicamente numeros");
        return true;
    } else {
        return false;
    }
}

function suma(numero1, numero2, numero3, numero4, numero5){
    return (numero1 + numero2 + numero3 + numero4 + numero5);
}
function promediar(numero1, numero2, numero3, numero4, numero5) {
    return (numero1 + numero2 + numero3 + numero4 + numero5) / 5
}

solicitarValores();

let x = suma(numero1, numero2, numero3, numero4, numero5);

let numPromedio = promediar(numero1, numero2, numero3, numero4, numero5);

alert("La suma de " + numero1 + "+" + numero2 + "+" + numero3 + "+" + numero4 + "+" + numero5 + " es igual a: " + x);

alert ("El promedio de " + numero1 + "+" + numero2 + "+" + numero3 + "+" + numero4 + "+" + numero5 + " es igual a: " + numPromedio)

