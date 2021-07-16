//const perros = document.getElementById('perros');
const arrPerros = [];
const nombrePerros = [];
const perrosAdoptados = [];
const perrosEnEspera = [];
const perrosEnproceso = [];



class Perro {
    constructor(name, pedigree, hairColor, size, age, sex, stageOfAdoption) {
        this.name = name;
        this.pedigree = pedigree;
        this.hairColor = hairColor;
        this.size = size;
        this.age = age;
        this.sex = sex;
        this.stageOfAdoption = stageOfAdoption;
    }
    
    changeStageOfAdoption(stage) {
        this.stageOfAdoption = stage;
        if (confirm('¿Desea cambiar el estado de adopción?') === true) {
            this.stageOfAdoption = pedirEstado();
        }
    }
    informStageOfAdoption() {
        console.log('Este perro se encuentra ' + this.stageOfAdoption);
    }
}

    const pedirDatos = () => {
        const name = prompt('Ingrese el Nombre del perro');
        const pedigree = prompt('Ingrese la Raza del perro');
        const hairColor = prompt('Ingrese el color de pelo del perro');
        const size = prompt('Ingrese el tamaño del perro');
        const age = prompt('Ingrese la edad del perro');
        const sex = prompt('Ingrese el sexo del perro');
        const stageOfAdoption = pedirEstado();
        arrPerros.push(new Perro(name, pedigree, hairColor, size, age, sex, stageOfAdoption));
    }
    const pedirEstado = () => {
        const stageOfAdoption = prompt('Escribe el estado de adopcion del perro; "adoptado", "en espera", "en proceso".').toLowerCase();
        if (stageOfAdoption === 'adoptado' || stageOfAdoption === 'en espera' || stageOfAdoption === 'en proceso') {
            return stageOfAdoption;
        } else {
            alert('Ingrese solamente una de las tres opciones');
            return pedirEstado();
        }
        
    }
    
    do {
        pedirDatos();
    } while (agregarOtro == true);
    
    while (agregarOtro == true) {
        let agregarOtro = confirm('desea agregar otro perro?');
        
    }
    
    arrPerros.forEach((perro) => {
        nombrePerros.push(perro.name)
        if (perro.stageOfAdoption === 'adoptado') {
            perrosAdoptados.push(perro.name);
        } else if (perro.stageOfAdoption === 'en proceso') {
            perrosEnproceso.push(perro.name);
        } else if (perro.stageOfAdoption === 'en espera') {
            perrosEnEspera.push(perro.name);
        } 
            
        
    });

    console.log('todos los perros son: ' + nombrePerros.join(" / "));
    console.log('Los perros en espera de adopcion son: ' + perrosEnEspera.join(' / '));
    console.log('los perros en proceso de adopcion son: ' + perrosEnproceso.join(' / '));
    console.log('los perros ya adoptados son: ' + perrosAdoptados.join(' / '));