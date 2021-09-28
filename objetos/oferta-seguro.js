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
let msg = ''
for (info in cliente){
    if(info === 'dependentes'){
        const dependente = cliente[info]
        msg += `Olha percebi que você tem ${dependente.length} dependentes, que tal fazer um seguro?`
    }
}

console.log(msg)