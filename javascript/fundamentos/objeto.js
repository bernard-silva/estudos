const prod1 = {}                    // declarando um objeto vazio
prod1.nome = 'Celular Ultra Mega'   // incluindo uma chave "nome" com um valor
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40      // evitar atributos com espaço

console.log(prod1) // retorno { nome: 'Celular Ultra Mega', preco: 4998.9, 'Desconto Legal': 0.4 }

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

'{ "nome": "Camisa Polo", "preco": 79.90}' // é um JSON, os atributos são delimitados por aspas duplas tanto chave quanto, apenas number/float pode ficar sem aspas 

console.log(prod2) // retorna { nome: 'Camisa Polo', preco: 79.9 }