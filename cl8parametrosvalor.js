var Miguelangel = {
    nombre : 'Miguelangel',
    apellido: 'Rendon',
    edad: 22
}

var Jaime = {
    nombre: 'Jaime',
    apellido: 'Restrepo',
    edad: 30
}

function imprimirNombreF3(personas){
    var { nombre } = personas
    console.log(nombre.toUpperCase())
}


imprimirNombreF3(Miguelangel)


function cumpleanos(persona){
    return {
        ...persona,
        edad : persona.edad + 1
    }
}