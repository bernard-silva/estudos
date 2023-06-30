// Atribuição por Valor VS Atribuição por Referência

// por Valor:
let a = 3
let b = a
b++
console.log(`a = ${a}, b = ${b}`) // retorna a = 3, b = 4. Atribuição por valor primitivo (number, boolean) cada varivável tem o seu valor

// por Referência:
const c = { nome: 'Bernard' }
const d = c
d.nome = 'Silva'
console.log(`c = ${c}, d = ${d}`) // retorna { nome: 'Silva' } { nome: 'Silva' }. 
// Pois essa atribuição copia a referência do endereço de memória onde o valor está, e não o valor propriamente dito


let valor               // variável não inicializada
console.log(valor)      // retona undefined
// console.log(valor2)  // retorna "ReferenceError: valor2 is not defined", pois "valor2" não foi declarada 

valor = null            // ausência de valor (não tem nenhum valor e não aponta para nenhum endereço na memória)
// caso deseje zerar algum valor, indicado é utilizar o null. Ou ter um valor padrão para ser inicializada
console.log(valor)      // retorna null
// console.log(valor.toString()) // retorna "TypeError: Cannot read property 'toString' of null", 
// pois o nulo não tem nenhuma referência ao toString 

const produto = {}      // um objeto guarda a referência de um campo na memória
console.log(produto.preco)  // preco não existe dentro do produto, mas não dá erro, pois o produto está setado
// console.log(produto.preco.a) // retorna "TypeError: Cannot read property 'a' of undefined", pois o 'preco' não está setado
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto)
// delete produto.preco // essa seria uma forma de tirar um atributo de um objeto
console.log(produto)

produto.preco = null // sem preço, para algo que não foi definido o preço ainda. Ou 0 se o produto for gratuito e tiver preço 0 mesmo. 
console.log(!!produto)
console.log(produto)