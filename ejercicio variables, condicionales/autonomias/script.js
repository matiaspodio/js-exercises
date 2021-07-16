//tanque
let capacidaTanque = 50

//motores
let motor16 = 1.6
let motor18 = 1.8
let motor20 = 2.0

//autonomia

let motor16autonomia = 750
let motor18autonomia = 600
let motor20autonomia = 500

//input de usuario

let kilometrosArecorrer = prompt("Ingrese cuantos KM desea recorrer")
if(isNaN(kilometrosArecorrer))
{alert('solo numeros!')}
let motorAuto = prompt("Ingrese que motor tiene su auto: 1.6, 1.8 o 2.0")
if (isNaN( motorAuto))
{alert('solo numeros!')}

if (kilometrosArecorrer <= motor16autonomia && motor16 == motorAuto) {
    alert("Puede realizar el viaje sin cargar nafta")
} if (kilometrosArecorrer > motor16autonomia && motor16 == motorAuto){
    let cantidadDeCargas = ((kilometrosArecorrer / motor16autonomia) - 1) * 50;
    alert("Debe recargar " + cantidadDeCargas + " litros")
}
if (kilometrosArecorrer <= motor18autonomia && motor18 == motorAuto) {
    alert("Puede realizar el viaje sin cargar nafta")
} if (kilometrosArecorrer > motor18autonomia && motor18 == motorAuto) {
    let cantidadDeCargas2 = ((kilometrosArecorrer / motor18autonomia) - 1) * 50;
    alert("Debe recargar " + cantidadDeCargas2 + " litros")
}
if (kilometrosArecorrer <= motor20autonomia && motor20 == motorAuto) {
    alert("Puede realizar el viaje sin cargar nafta")
} if (kilometrosArecorrer > motor20autonomia && motor20 == motorAuto) {
    let cantidadDeCargas3 = ((kilometrosArecorrer / motor20autonomia) - 1) * 50;
    alert("Debe recargar " + cantidadDeCargas3 + " litros")
}

if (motordelauto != motor1 && motordelauto != motor2 && motordelauto != motor3 )
{
    alert("EL motor no existe. los modelos deben ser 1.6, 1.8 o 2.0")
}