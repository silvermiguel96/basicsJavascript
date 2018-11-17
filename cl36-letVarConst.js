var miguel = {
    nombre: 'miguel',
    apellido: 'rendon',
    edad: 22
}

function esMayorDeEdad(persona) {
    let mensaje
    const MAYOR_DE_EDAD = 18

    if(persona.edad > MAYOR_DE_EDAD){
        mensaje = 'Es mayor de edad'
    }else {
        mensaje = 'Es menor de edad'
    }
    console.log(mensaje)
    var long = 10

    for(let i = 0; i < long; i += 1){
        console.log(i)
    }
    console.log('valor de var : '+ long)
    console.log('valor de i es :'+ i )
}

esMayorDeEdad(miguel)