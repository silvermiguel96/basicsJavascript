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


// vamos a recorrer el array  para retonrnas unas proemas
// var almacenarPromesas = ids.map(function(id){
    //    return obtenerPersonaje(id)
    //})
    //
    
async function obtenerPersonaje(){
        
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var almacenarPromesas = ids.map ((id) => obtenerPersonaje(id) )
    try {
        var personajes = await  Promise.all(almacenarPromesas)
        console.log(personajes)
    } catch(id){
        onError(id)
    }
    //Metodo de promesas
    // Promise
    // 1 .all(almacenarPromesas)
    // .then(personaje => console.log(personaje))
    // .catch(onError)
    
}

obtenerPersonaje()