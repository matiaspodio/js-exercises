let saldo = 10000;
let cuenta = "matias";
let dineroAtransferir = prompt("Ingrese cuanto dinero desea transferir");
if (isNaN(dineroAtransferir)) {
    alert("Ingrese solo números");
}

let cuentaAtransferir;

if (dineroAtransferir <= saldo) {
    do {
        cuentaAtransferir = prompt("Ingrese cuenta de destino")
        if (cuentaAtransferir == cuenta) {
            alert("Transacción realizada con exito")
        } else {
            alert("La cuenta ingresada no existe")
        }
    } while (cuentaAtransferir !== cuenta);
} else {
    alert("La transacción supera el saldo en su cuenta ");
}



