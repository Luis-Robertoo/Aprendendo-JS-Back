const salaJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaSala(notasdasala){

    const soma = notasdasala.reduce((acomulador, atual) => acomulador + atual) 
    const media = soma / notasdasala.length
    return media
}

function escreva(nome ,nomearray){
    console.log(`Media da sala de ${nome} = ${mediaSala(nomearray)}`)
}

escreva('Python', salaPython)
escreva('Java', salaJava)
escreva('JavaScript', salaJs)

const notas = [10, 6.5, 8, 7]

const media = notas.reduce((aco, atual) => aco + atual) / notas.length

console.log(media)





/*const num =[10, 8, 2, 5]

const soma = num.reduce((acomulador, atual, index,inicial) => {
    console.log(acomulador)
    console.log(atual)
    console.log(index)
    console.log(inicial)
    return acomulador + atual 
})
console.log('a soma é ', soma)*/