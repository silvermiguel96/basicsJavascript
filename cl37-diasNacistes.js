function DiasEntreFechas(FInicio, FFinal){
    
    const unDia = 1000 * 60 * 60 * 24
    //abs trae un valor absoluto
    const diferencia = Math.abs(FInicio - FFinal)

    return Math.floor(diferencia / unDia)
}

const  hoy = new Date()
const nacimiento  = new Date(1996, 1, 13)

DiasEntreFechas(hoy, nacimiento)
