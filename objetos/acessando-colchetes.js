const cliente = {
    nome: 'Maria',
    idade:29,
    cpf: '485963217589',
    email: 'Maria@email.com'
}

const chave = 'nome'

console.log(cliente[chave])

const chaves = ['nome', 'idade', 'cpf', 'email']

chaves.forEach(chave => console.log(cliente[chave]))

