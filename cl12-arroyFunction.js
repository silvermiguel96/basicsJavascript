
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
// Genera constantes

const  MayorDeEdad = 18

const EsMayorDeEdad =  ({ edad }) =>  edad >= MayorDeEdad


function LogMayorDeEdad(persona){
     console.log(`${persona.nombre} es ${EsMayorDeEdad(persona) == true ? 'Mayor' : 'Menor'} de edad`) 
}

const MayorDeEdadLog = persona => console.log(`${persona.nombre} es ${EsMayorDeEdad(persona) == true ? 'Mayor' : 'Menor'} de edad`)

function permitirAcceso(persona){
    if(!EsMayorDeEdad(persona)){
        console.log('acceso Denagado')
    }
}

MayorDeEdadLog(Miguelangel)