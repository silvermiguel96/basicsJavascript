class Persona {
    constructor(nombre, apellido, edad, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.altura = altura
    }

    saludar(fn){
        //var nombre = this.nombre
        //var apellido = this.apellido
        var { nombre, apellido} = this
        console.log(`Hola, soy ${nombre} ${apellido}`)
        if(fn) {
            fn(nombre, apellido)
        }
    }

    cumple(){
        console.log(`Tu edad es de ${this.edad + 1}`)
    }

    esAlto(){
        return console.log(`Es :${this.altura > 1.8}`)
    }
}
class Desarrolador extends Persona{
    constructor(nombre, apellido){
        super(nombre, apellido)
    }
    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrolador`);
        if(fn){
            fn(this.nombre, this.apellido, true )
        }
    }
}

function responderSaluo(nombre, apellido , esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if(esDev){
        console.log(`No sabia que eras Desarrolador/a`)
    }
}

var miguel = new Persona('Miguel', 'Rendon', 22, 1.75) 
var jaime = new Desarrolador('Jaime', 'Rendon', 55, 1.90)

miguel.saludar()
miguel.saludar(responderSaluo)
jaime.saludar(responderSaluo)

/*
Persona
persona.prototype*/