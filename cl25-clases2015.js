class Persona {
    constructor(nombre, apellido, edad, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.altura = altura
    }

    saludar(){
        console.log(`Hola, soy ${this.nombre} ${this.apellido}`)
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
   // saludar(){
    //    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrolador`);
    //}

}

var miguel = new Persona('Miguel', 'Rendon', 22, 1.75) 
var jaime = new Desarrolador('Jaime', 'Rendon', 55, 1.90)

miguel.saludar()
miguel.cumple()
jaime.saludar()
jaime.cumple()
jaime.esAlto()
miguel.esAlto()
/*
Persona
persona.prototype*/