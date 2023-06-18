const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
                Olá,
                ${nome}!
            `                                   // é possível pular linha usando Template String
console.log(concatenacao, template)

console.log(`1 + 1 = ${1 + 1}`)                 // é possivel colocar expressões

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)          // é possível chamar funções de dentro do Template String