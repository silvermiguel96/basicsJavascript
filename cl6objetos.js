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
// Primera Forma
function imprimirNombreF1(personas){
    var nombre = personas.nombre.toUpperCase()
    console.log(nombre)
}

// segunda Forma
function imprimirNombreF2(personas){
    console.log(personas.nombre.toUpperCase())
}
// Tercera Forma
function imprimirNombreF3({ nombre }){
    console.log(nombre.toUpperCase())
}
imprimirNombreF1(Miguelangel)
imprimirNombreF2(Jaime)
imprimirNombreF3(Miguelangel)