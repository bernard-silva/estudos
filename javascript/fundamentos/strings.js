const escola = "Cod3r"                  // essa string tem indice de 0 a 4

console.log(escola.charAt(3))           // 3º indíce da string, retorna 3
console.log(escola.charAt(5))           // não existem o 5º indice, não retorna nada
console.log(escola.charCodeAt(3))       // pela tabela unicode retorna 51 ou "&#51;" em HTML
console.log(escola.indexOf('3'))        // retorna 3

console.log(escola.substring(1))        // conta a partir do 1º índice, retorna "oder"
console.log(escola.substring(0, 3))     // conta a partir do índice 0, mas não conta o índice 3, retorna "Cod"

// Um Literal é quando informamos um valor diretamente guardar em uma variável, 'Escola ' por exemplo: 
console.log('Escola '.concat(escola).concat('!'))   // concatena e retorna "Escola Cod3r!"
console.log('Escola ' + escola + '!')               // concatena e retorna "Escola Cod3r!"
console.log(escola.replace(3, 'e'))                 // retorna "Coder"
console.log(escola.replace(/\d/, 'e'))              // usando regex, mesmo retorno
console.log(escola.replace(/\w/g, 'e'))             // usando regex, retorna "eeeee"

console.log('Ana, Maria, Pedro'.split(','))         // split separa a string nos locais onde tem a vírgula 
                                                    // e retorno o array [ 'Ana', ' Maria', ' Pedro' ]
console.log('Ana, Maria, Pedro'.split(/,/))         // usando regex, mesmo retorno


