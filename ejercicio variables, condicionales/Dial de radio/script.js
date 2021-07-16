alert("procedimiento para saber si el dial existe")
let dial = prompt("ingrese el dial")

//para determinar si un numero es impar puedes realizar la operacion numero % 2.
// si devuelve 1 significa que es impar, si devuelve 0 es par
if ( (parseInt(dial) % 2) == 1 && parseInt(dial) >= 89.9 && parseInt(dial) <= 107.9) {
    alert("la radio si existe!")
} else {
    alert("la radio no existe!")
}