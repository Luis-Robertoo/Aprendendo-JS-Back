const cliente = {
    nome: 'Maria',
    idade: 29,
    cpf: '485963217589',
    email: 'Maria@email.com',
    sobepeso: peso => cliente.peso -= peso
}

cliente.telefone = '11974852364'

cliente['peso'] = 75.9

cliente.peso = 70

cliente.sobepeso(5)

delete cliente.telefone

console.log(cliente.telefone)

