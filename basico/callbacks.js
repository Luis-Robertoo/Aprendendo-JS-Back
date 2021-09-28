const nomes = ['ana', 'ju', 'leo', 'paula']

nomes.forEach(imprime)

function imprime(nome, pos){
    console.log(nome,' ', pos)
}

console.log('==============')

nomes.forEach(nome => {
    console.log(nome)
})
