
var Miguelangel  = {
    nombre: 'Miguelangel',
    apellido: 'Rendon',
    edad: 22,
    ingeniero: false,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

var MayorDeEdad = 18

function EsMayorDeEdad(persona){
    return persona.edad >= MayorDeEdad
}

function LogMayorDeEdad(persona){
     console.log(`${persona.nombre} es ${EsMayorDeEdad(persona) == true ? 'Mayor' : 'Menor'} de edad`) 
}

LogMayorDeEdad(Miguelangel)