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

function imprimirProfeciones(persona) {
    console.log( ` ${persona.nombre} es :`)
    //persona.ingeniero == true ? console.log('Ingeniero'): console.log('No es ingeniero');
    if(persona.ingeniero === true){
        console.log('Ingeniero')
    }else{
        console.log('No es ingeniero')
    }
}

function imprimirMayorDeEdad(persona) {
    console.log(`${persona.nombre} es :`) 
    persona.edad >= 18 ? console.log('Mayor de edad ') : console.log('Menor de edad ');
    console.log(`${persona.nombre} es  ${persona.edad >= 18 ? 'Mayor' : 'Menor'} de edad `)
    
}