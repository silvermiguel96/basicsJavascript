var miguelangel = {
    nombre: 'Miguelangel',
    apellido: 'Rendon',
    edad: 22,
    peso: 75
}
function IncrementarPesoAnual(persona){
console.log(`Al inicio del año ${persona.nombre} pesa ${persona.peso}`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_AÑO = 365

var incremento = persona => persona.peso += INCREMENTO_PESO
var decremento = persona => persona.peso -= INCREMENTO_PESO

var comeMucho = () => Math.random() < 0.3
var ejercicio = () => Math.random() < 0.4

const META = persona.peso - 3
var dias = 0
while (persona.peso > META){
    if(comeMucho()){
        incremento(persona)
    }
    if(ejercicio()){
        decremento(persona)
    }
    dias += 1
}
console.log(`${persona.nombre} de demoro ${dias} en lograr su meta de ${META}`)
}

IncrementarPesoAnual(miguelangel)