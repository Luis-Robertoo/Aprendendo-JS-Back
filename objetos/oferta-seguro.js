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

/*
for (info in cliente){
    if(info === 'dependentes'){
        msg += `Olha percebi que você tem ${cliente[info].length} dependentes, que tal fazer um seguro?`
    }
}*/

function oferecerseguro(client){
    
    const dadosclientes = Object.keys(client)
    if(dadosclientes.includes('dependentes')){
        console.log(`Oi ${client.nome}, percebi que você tem ${client['dependentes'].length} dependentes, que tal fazer um seguro de vida?`)
    }
    /*const k = Object.keys(client)
    k.forEach(chave => chave==='dependentes' ? msg += `Olha percebi que você tem ${client[chave].length} dependentes, que tal fazer um seguro?` : '')*/
}
oferecerseguro(cliente)

const arraydaora = Object.values(cliente)
console.log(arraydaora[5])