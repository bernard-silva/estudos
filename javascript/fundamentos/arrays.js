const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])             // retorna 7.7 9.2
console.log(valores[4])                         // retorna undefined (pois não há valor para o array no índice 4)

valores[4] = 10                                 // adicionado valor 10 no índice 4 do array
console.log(valores)                            // retorna [ 7.7, 8.9, 6.3, 9.2, 10 ]
console.log(valores.length)                     // tamanho atual do array é 5 (índices, de 0 a 4)

valores.push({ id: 3 }, false, null, 'teste')   // push adiciona novos valores no final do array
console.log(valores)                            // retorna [ 7.7, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null, 'teste']

console.log(valores.pop())                      // remove o último elemento do array. Retorna teste
delete valores[0]                               // deleta o valor do array conforme índice
console.log(valores)                            // retorna array atual, onde indica um índice vazio [ <1 empty item>, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null ]

console.log(typeof valores)                     // o array é do tipo Object