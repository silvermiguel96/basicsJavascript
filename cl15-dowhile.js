var contador = 0

const llueve = () => Math.random() < 0.25

do {
    contador += 1
} while (!llueve())

console.log(` llovio ${contador} ${contador > 1 ? 'veces' : 'vez' }`)