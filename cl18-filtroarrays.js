var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

//const esAlta = (persona) => persona.altura > 1.8
const esAlta = ({ altura }) => altura > 1.8
const esBaja = ({ altura }) => altura < 1.8
var personas = [sacha, alan, martin, dario, vicky, paula]


/*var personaAlta = personas.filter(function (persona){
    return persona.altura > 1.8
})

7var personaBAja = personas.filter(function(persona){
    return persona.altura < 1.8
})*/

function asignarAltura (personas){
    var  personaAlta = personas.filter(esAlta)
    var  personaBAja = personas.filter(esBaja)
    
    console.log(`las Personas altas son ${personaAlta} y las bajas son ${personaBAja}`)
}
asignarAltura(personas)