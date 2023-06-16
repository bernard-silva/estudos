console.log(7 / 0)                  // retorna Infinity
console.log("10" / 2)               // mesmo sendo string retorna 5
console.log("Show!" * 2)            // algumas linguagens exibem 2 vezes a string, porém em JS retorna NaN
console.log(0.1 + 0.7)              // retorna 0.799... ao invés de 0.8 devido a especificação IEEE sobre ponto flutuante, 
                                    // onde é mais rapido o processamento e a MAIORIA DAS LINGUAGENS SEGUEM, mesmo não sendo totalmente precisa
// console.log(10.toString())       // não é possivel chamar um literal diretamente por uma função
console.log((10).toString())        // retorna 10
console.log(typeof (10).toString()) // retorna string
console.log((10.345).toFixed(2))    // retorna 10.35