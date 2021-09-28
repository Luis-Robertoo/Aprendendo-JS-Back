const notas = [10, 9, 8, 7, 6]

const novasnotas = notas.map(nota => nota <= 9 ? ++nota : nota)

console.log(novasnotas)
console.log('====================')

function atualiza(nota){
    if(nota <= 9){
        return nota += 1
    } else {
        return nota
    }
}

const novas = notas.map(atualiza)

console.log(novas)