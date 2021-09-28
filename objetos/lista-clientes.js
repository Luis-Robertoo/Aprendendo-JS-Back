const clientes = [
    {
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
                datanasc: '04/01/2005',
                parentesco: 'filha',
            }
        ]
    },
    {
        nome: 'jose',
        idade: 23,
        cpf: '485967897589',
        email: 'Jose@email.com',
        telefone: ['5511985555263', '5511974847876'],
        dependentes: [
            {
                nome: 'joana silva',
                datanasc: '20/03/2011',
                parentesco: 'filha',  },
            {
                nome: 'peter parker',
                datanasc: '04/01/2010',
                parentesco: 'filho',
            }
        ]
    }

]

const listadependetes = [...clientes[0].dependentes]

console.log(listadependetes)

let a = [
            [
                [1, 2, 3, 4],
                [21, 22, 23, 24]
            ],
        [5, 6, 7, 8]
        ]

let espa = [...a[0],...a[1]]

console.table(espa)