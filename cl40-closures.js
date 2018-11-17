
function crearSaludo (finalClase) {

    return function (nombre){
        console.log(`Hola ${nombre} ${finalClase}`)
    }
}
const saludar = pais => nombre => console.log(`Hola ${nombre} de ${pais}`);

const saludoArgentino = crearSaludo('che');
const saludoMexicano = crearSaludo('guey');
const saludoColombiano = crearSaludo('amigo');

saludoArgentino('miguel')
saludoColombiano('Miguel')
saludoMexicano('miguel')