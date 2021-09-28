const cliente = {
    nome: 'Maria',
    idade: 29,
    cpf: '485963217589',
    email: 'Maria@email.com',
    telefone: ['5511985741263', '5511974839476']
}

cliente.telefone.forEach(num => console.log(Number(num)))