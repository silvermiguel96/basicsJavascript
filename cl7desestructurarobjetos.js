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

function ImprimirNombreyEdad(personas){
    var { nombre, edad } = personas
    console.log(`Hola soy ${nombre} y tengo ${edad}  años `)
}

imprimirNombreF3(Miguelangel)
ImprimirNombreyEdad(Jaime)