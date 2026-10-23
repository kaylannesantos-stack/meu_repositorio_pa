const listaDeAlunos = [
    {nome: 'Ana', nota: 5.0},
    {nome: 'Bruno', nota: 10.0},
    {nome: 'Maria', nota: 2.0},
    {nome: 'Marta', nota: 7.0},
    {nome: 'Cecilia', nota: 6.0}
]

console.log('\nMoste todas os alunos, seu nome e suas nostas: ')
for (const u of listaDeAlunos)
    console.log(`Aluno ${u.nome} Nota: ${u.nota}`)

console.log('\nMostre a média geral da turma: ')

const soma =  listaDeAlunos.reduce((soma,atual) => soma + atual.nota, 0);
media = soma / 5
console.log(`Média da turma: ${media}`)

console.log('\nMostre apenas o nome dos alunos com nota maior ou igual a 7.0: ')
console.log('\nNotas de Alunos maiores ou igual a 7')

for (const a of listaDeAlunos)
    if (a.nota >= 7){
        console.log(`Aluno ${a.nome} Nota: ${a.nota}`)
    }


console.log('\nMostre o nome e nota do aluno Bruno: ')
for (const a of listaDeAlunos)
    if (a.nota == 10){
        console.log(`Aluno ${a.nome} Nota: ${a.nota}`)
    }