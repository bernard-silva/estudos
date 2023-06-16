const peso1 = 1.0                       // tipo number
const peso2 = Number('2.0')             // função Number convertendo String

console.log(peso1, peso2)               
console.log(Number.isInteger(peso1))    // validando se é um valor inteiro
console.log(Number.isInteger(peso2))    // validando se é um valor inteiro

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))           // função para fixar 2 casas decimais. Resultado: 7.87
console.log(media.toString(2))          // toString() com o valor 2 converte em binário. 
                                        // Resultado: 111.11011110111110011101101100100010110100001110010101
console.log(typeof media)               // a constante é do tipo number (iniciando com n minúsculo)
console.log(typeof Number)              // já Number é uma função. Resultado: Function



