
 function Persona(nombre, apellido, edad, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.altura = altura
    // no tenemos nesecidad de retornar ya que lo posee javascript 
    //return this
}
// prototipo
Persona.prototype.saludar = function (){
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`)
}

Persona.prototype.cumple = function (){
    console.log(`Tu edad es de ${this.edad + 1}`)
}

Persona.prototype.esAlto = function(){
    console.log(`Es ${this.altura >= 1.80 ?  'Alto': 'Bajo' }`)
}

var miguel = new Persona('Miguel', 'Rendon', 22, 1.75) 
var jaime = new Persona('Jaime', 'Rendon', 55, 1.80)

function ImprimirPersona(persona){
    persona.saludar()
    persona.esAlto()
    persona.cumple()
}

ImprimirPersona(miguel)
ImprimirPersona(jaime)
/*
 function Persona(nombre, apellido){
     var obj = {}
     obj.nombre = nombre
     obj.apellido = apellido
     return obj
 }

 var miguel = Persona('Miguel', 'Rendon')
 */