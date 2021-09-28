const notas = [10, 6.5, 8, 7.5]

let soma = 0 

//const incrementa = valor => soma += valor
//notas.forEach(incrementa)

 function fufu(para){
    console.log(para)
}

notas.forEach((valor, indice) => {
    soma += valor
    console.log(`estou no indice ${indice} e a soma atual é ${soma}`)
 })

const media = soma / notas.length
console.log(`À media é ${media}`)

console.log('=================')

notas.forEach(fufu)

