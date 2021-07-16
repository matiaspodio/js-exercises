const users = [];

class User {
    constructor(nombre, apellido, email, usuario, contraseña, activo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.activo = activo;
    }
}

const carlos = new User('Carlos', 'Gonzalez', 'carlosgonzalez@hotmail.com', 'carlitos.g', 'admin', true);
users.push(carlos);
const constanza = new User('Constanza', 'Rivas', 'cotyrivas@hotmail.com', 'coty.ri', 'admin', true);
users.push(constanza);
const hipolito = new User('Hipolito', 'Yrigoyen', 'polito@hotmail.com', 'polito.y', 'admin', false);
users.push(hipolito);
const enzo = new User('Enzo', 'Perez', 'enzoperez@hotmail.com', 'el.enzo', 'admin', true);
users.push(enzo);


function addUser() {
    const newUsuario = prompt('Ingrese un nombre de usuario');
    //pido un nombre de usuario, si ya esta en uso, salta mensaje de error y pide otro nuevamente
    try {
        for (let index = 0; index < users.length; index++) {
            const element = users[index].usuario; // con el punto me salen las propiedades del objeto dentro del array
            if (newUsuario === element) {
                throw new Error('este nombre de usuario ya esta en uso');
            }
        } 
    } catch (error) {
        alert(error.message);
        addUser();
    }
    //pido el resto de los datos
    const nombre = prompt('Ingrese su nombre');
    const apellido = prompt('Ingrese su apellido');
    const email = prompt('Ingrese su email');
    const contraseña = prompt('Ingrese su nueva contraseña');
    const activo = true;
    const usuario = newUsuario;
    //bienvenida
    users.push(new User (nombre, apellido, email, usuario, contraseña, activo));
    alert('bienvenido/a ' + nombre + ' ' + apellido);
    
    let agregarNuevoUsuario = confirm('Desea agregar un nuevo usuario?');
    
    if (agregarNuevoUsuario === true) {
        addUser();
    } else {
        alert('hasta luego');
    }
}

addUser();
console.log(users);

