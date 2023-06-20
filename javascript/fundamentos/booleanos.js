let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1					// é number, porém se utilizarmos "!!" (dupla negação lógica) podemos tonar como um verdadeiro/falso
console.log(!!isAtivo)      // dupla negação retorna o valor original. Retorna true

console.log('os verdadeiros...')	// resolvem para true
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)				// valor quando dividido por 0 retorna Infinity
console.log(!!(isAtivo = true))

console.log('os falsos...')			// resolvem para false
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)					// Not a Number, resolve para false
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))
console.log(!!('' || null || 0 || 'epa' || 'teste'))	// quando tem "ou" entre verdadeiro e falso, se true, ao encontrar o primeiro valor verdadeiro retorna true
console.log('' || null || 0 || 'epa' || 'teste')        // quando tem "ou" entre verdadeiro e falso, se true, sempre retorna o primeiro valor verdadeira. Retorna "epa" 

let nome = 'Lucas'
console.log(nome || 'Desconhecido')     // o "ou" também já foi muito utilizado como recurso para ter um valor padrão caso
nome = ''
console.log(nome || 'Desconhecido')     // quando o primeiro valor é false nome='', o retorna o valor padrão, no caso "Desconhecido"

