let autonomia = 675;
let kilometros = prompt("Cuántos Km deséa recorrer? (solo ingresar números)");
kilometros = Number(kilometros);

while (!/^[0-9]+$/.test(kilometros)) { 
    alert("Ingrese solo numeros");
    kilometros = prompt("Cuántos Km deséa recorrer? (solo ingresar números)");
}

// /^[0-9]+$/.test returns a boolean depending on whether or not the string matches the given regular expression.

if (kilometros <= autonomia) {
    alert("Usted llega con un tanque de combustible")
} else {
    alert("Debera cargar combustible en el trayecto")
}

