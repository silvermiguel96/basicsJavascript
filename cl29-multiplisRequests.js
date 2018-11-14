const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

const responsePerson =  function(person) {
    console.log(`Hola yo soy ${person.name}`)
}

function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, responsePerson)
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
