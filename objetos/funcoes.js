const cliente = {
    nome: 'Maria',
    idade: 29,
    cpf: '485963217589',
    email: 'Maria@email.com',
    telefone: ['5511985741263', '5511974839476'],
    dependentes: [
        {
            nome: 'sara silva',
            datanasc: '20/03/2011',
            parentesco: 'filha',  },
        {
            nome: 'mary jane',
            datanasc: '04/01/1989',
            parentesco: 'esposa',
        }
    ],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(40)
console.log(cliente.saldo)
