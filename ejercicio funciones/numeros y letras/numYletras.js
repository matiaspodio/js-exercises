// const numero = capturarNumero()

function capturarNumero() {
    let input;
    do {
        input = parseInt(prompt('Ingrese un numero del 1 al 10'))
        if ((isNaN(input)) || input < 1 || input > 10) {
            alert('Ingrese solo numeros del 1 al 10');
        }
    } while ((isNaN(input)) || input < 1 || input > 10);
    return num = input;
}

convertirNumeroALetra(capturarNumero());

function convertirNumeroALetra(numero) {

    switch (numero) {
        case 1:
            alert('el numero ingresado equivale a la letra A, recargue la pagína para comenzar de nuevo')
            break;
        case 2:
            alert('el numero ingresado equivale a la letra B, recargue la pagína para comenzar de nuevo')
            break;
        case 3:
            alert('el numero ingresado equivale a la letra C, recargue la pagína para comenzar de nuevo')
            break;
        case 4:
            alert('el numero ingresado equivale a la letra D, recargue la pagína para comenzar de nuevo')
            break;
        case 5:
            alert('el numero ingresado equivale a la letra E, recargue la pagína para comenzar de nuevo')
            break;
        case 6:
            alert('el numero ingresado equivale a la letra F, recargue la pagína para comenzar de nuevo')
            break;
        case 7:
            alert('el numero ingresado equivale a la letra G, recargue la pagína para comenzar de nuevo')
            break;
        case 8:
            alert('el numero ingresado equivale a la letra H, recargue la pagína para comenzar de nuevo')
            break;
        case 9:
            alert('el numero ingresado equivale a la letra I, recargue la pagína para comenzar de nuevo')
            break;
        case 10:
            alert('el numero ingresado equivale a la letra J, recargue la pagína para comenzar de nuevo')
            break;

    }
}


do {
    if (confirm('Quiere realizarlo devuelta?')) {

        convertirNumeroALetra(capturarNumero());
        
    } else {

        alert('Hasta luego!');

    }

} while (true);