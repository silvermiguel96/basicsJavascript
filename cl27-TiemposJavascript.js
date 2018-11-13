console.log('a')
console.time()
// pasar una referencia a al funcion.
setTimeout(function(){
    console.timeEnd()
    console.log('b')
}, Math.random())
setTimeout(() => console.log('d'), 1000)

console.log('c')