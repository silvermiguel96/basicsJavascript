
const Miguel = {
    nombre: 'miguel',
    apellido: 'Rendon',
    edad: 22
}

//const cumpleaños = personas => personas.edad++

const cumpleañosInmutable = personas => ({
  ... personas,
  edad: personas.edad +1   
})