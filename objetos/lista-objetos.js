const cliente = {
    nome: 'Maria',
    idade: 29,
    cpf: '485963217589',
    email: 'Maria@email.com',
    telefone: ['5511985741263', '5511974839476'],
    dependentes: []
}

cliente.dependentes.push({
    nome: 'sara silva',
    datanasc: '20/03/2011',
    parentesco: 'filha',

})

cliente.dependentes.push({
    nome: 'samia maria',
    datanasc: '04/01/2014',
    parentesco: 'filha',

})

cliente.dependentes.push({
    nome: 'mary jane',
    datanasc: '04/01/1989',
    parentesco: 'esposa',

})

const parente = 'filha'

const filhanova = cliente.dependentes.filter(atual => atual.datanasc==='04/01/2014')

const tipoparente = cliente.dependentes.filter(filha => filha.parentesco===parente)

let teste = []
tipoparente.forEach((atual, ind) => teste.push(atual.nome))

console.log(teste)