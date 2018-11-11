var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}

const esAlta = ({ altura }) => altura > 1.8

var personas = [sacha, alan, martin, dario, vicky, paula]

var personasAltas = personas.filter(esAlta)

const pasarAlturaACms = persona => ({
  ...persona,
  altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms)

/*
var acom = 0
for (let i = 0 ; i < personas.length ; i += 1 ){
    acom = acom  + personas[i].cantidadDeLibros
}*/
//Primero la funcion luego el indice , valor inicual del acomulador

//var reducer = (acom, personas) => acom + personas.cantidadDeLibros 
var reducer = (acom, {cantidadDeLibros}) => acom + cantidadDeLibros 


var totalDeLibros = personas.reduce(reducer, 0)

console.log(`El total del libros es ${totalDeLibros}`)