/*function processData(inputString) {
    let inputCopy = inputString.split('\n').slice(1);
    inputCopy.forEach((str) => {
        let evenStr = '';
        let oddStr = '';
        for (let i = 0; i < str.length; i++) {
            i % 2 ? oddStr += str[i] : evenStr += str[i];
        }
        console.log(`${evenStr} ${oddStr}`)
    });
}

function imprimirNombre(persona) {
    var division = persona.split('').slice(1);
    division.forEach((str) => {
      let evenStr = '';
      let oddStr = '';
      for (let i = 0; i < str.length ; i++) {
        i % 2 ? oddStr += str[i] : evenStr += str[i];
      }
      function comparar(a, b) {
        return a - b;
      }
      console.log(`${evenStr.sort(comparar)} ${oddStr.sort(comparar)}`)
    });
  }
*/
  function separaLineas(input) {
    return input.split('\n');
  }
  
  function palabrasParesEImpares(unasolalinea) {
    const separarLetras = unasolalinea.split('');
    const pares = [];
    const impares = [];
    separarLetras.forEach((letra, index) => {
      if (index % 2 === 1) {
        pares.push(letra);
      } else {
        impares.push(letra);
      }
    });
    return `${impares.join('')} ${pares.join('')}`;
  }
    const lineasSeparas = separaLineas(input);
    const resultado = lineasSeparas.map((linea) => palabrasParesEImpares(linea)).join('\n');
  
    console.log(resultado)