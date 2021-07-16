let edades = [];
let edad;

function validarEdades() {
    if (edad >= 18) {
        edades.push(parseInt(edad))
    }
}

do {
    edad = prompt("Ingrese las edades, para finalizar ingrese cero");
    validarEdades();
} while ( !(edad == 0));

alert("Las edades ingresadas mayores a 18 son: " +  edades.slice());

