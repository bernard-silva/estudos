var a = 3
let b = 4 // priorize let ao invés de var.

var a = 30 // é possível declarar var novamente, mesmo não havendo sentido para isso.
b = 40 

console.log(a, b)

a = 300
b = 400

console.log(a, b)

// Sempre priorize const ao invés de variaveis (let ou var), tudo que não for variar no código, opte por const.
const c = 5
// c = 50  // aqui ocorre erro "TypeError: Assignment to constant variable",
            // pois não é possível variar o valor de uma constante.
console.log(c)