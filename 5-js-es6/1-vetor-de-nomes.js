//Criando um vetor 

const listNomes = ['Marta', 'José', 'Maria']

console.log('\nExibindo todos os elementos do vetor: ')
console.log(listNomes)

console.log('\nExibindo o primeiro elemento do vetor: ')
console.log(listNomes[0])

console.log('\nAdicionando um elemento no vetor: ')
listNomes.push('Kaylanne')
console.log(listNomes)

// -------- ------ ------ ------- -----

console.log('\nRemovendo um elemento específico no vetor: ')
listNomes.splice()
console.log(listNomes)

console.log('\nRemovendo o Primeirto elemento no vetor:')
listNomes.splice(2,1)
console.log(listNomes)
// A partur do índice 2, remover apenas um elemento.

console.log('\nRemovendo o último elemento no vetor: ')
listNomes.pop()
console.log(listNomes)