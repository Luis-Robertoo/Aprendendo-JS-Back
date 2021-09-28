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

let relatorio = '\n'
for (let info in cliente){
    
    let tipo = typeof(cliente[info])
    if (tipo === 'string' || tipo === 'number'){
        relatorio += `${info}: ${cliente[info]} \n`
    }
}
console.log(relatorio)