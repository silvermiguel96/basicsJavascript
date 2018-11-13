function heredaDe(prototipoHijo, prototipoPadre){
    var fn  =  function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}
 function Persona(nombre, apellido, edad, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.altura = altura
}
// prototipo
Persona.prototype.saludar = function(){ 
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`)
}
Persona.prototype.cumple = function (){
     console.log(`Tu edad es de ${this.edad + 1}`)
}

Persona.prototype.esAlto = function(){
   return this.altura > 1.8
}

// Funcion que se ejecuta al crear Nuevos Desarroladores
function Desarroladores(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido 
}
heredaDe(Desarroladores, Persona)
//Utilizamos la funcon ya creada
Desarroladores.prototype.saludar = function(){

    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrolador`);
}
var miguel = new Persona('Miguel', 'Rendon', 22, 1.75) 
var jaime = new Desarroladores('Jaime', 'Rendon', 55, 1.80)

miguel.saludar()
jaime.saludar()
/*
Persona
persona.prototype*/