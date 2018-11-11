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

const pasarAlturaCms = persona => {
    //persona.altura *= 100
    // persona.altura = persona.altura * 100
    //return persona
    return {
        ...persona,
        altura: persona.altura * 100
    }

}
const pasarAlturaCmsArroy = persona => ({
    ...persona,
    altura: persona.altura * 100
})


var personaCms = personas.map(pasarAlturaCms)

console.log(personaCms)
console.log(personas)