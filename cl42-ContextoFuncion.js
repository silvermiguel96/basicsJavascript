const Miguel = {
    nombre: 'Miguel',
    apellido: 'Rendon'
}

const Diana = {
    nombre: 'Diana',
    apellido: 'Rondon'
}

function saludar(saludo = 'Hola') {
    console.log(`${saludo} , Mi nombre es ${this.nombre}`)
}

//const saludarMiguel = saludar.bind(Miguel)

setTimeout( saludar.bind( Miguel, 'Hola Amigo'), 1000)

saludar.call(Miguel, 'Buenos Dias')

saludar.apply(Miguel, ['Hola Compañero'])