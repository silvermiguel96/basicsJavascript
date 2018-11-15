const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id){
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $
     .get(url ,opts ,function(data) {
         resolve(data)
     })
     .fail(() => reject(id))
  })
}
function onError(id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`)
}


obtenerPersonaje(1)
.then(function(personaje){
    console.log(`Hola soy ${personaje.name}`)
    return obtenerPersonaje(2)
})
.then(function(personaje2){
    console.log(`Hola soy ${personaje2.name}`)
    return obtenerPersonaje(3)
})
.catch(function(personaje){
    onError(personaje)
})

function ImprimirPerson(person){
    obtenerPersonaje(person)
    .then(person => { 
        console.log(`Hola , yo soy ${person.name}`)
    })
    
    .catch(function(id){
        onError(id)
    })
}

function cicloPerson(numberPerson){
    for(var i= 1; i < numberPerson +1; i += 1){
        ImprimirPerson(i)
    }
}

cicloPerson(6)