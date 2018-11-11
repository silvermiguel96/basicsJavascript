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

var Incremento = persona => persona.peso += INCREMENTO_PESO
var decremento = persona => persona.peso -= INCREMENTO_PESO

for(let i = 1;i < DIAS_DEL_AÑO ;i += 1){
    let Nrandom = Math.random()


}
console.log(`Al final del año ${persona.nombre} pesa ${persona.peso.toFixed(2)}`)
}

IncrementarPesoAnual(miguelangel)