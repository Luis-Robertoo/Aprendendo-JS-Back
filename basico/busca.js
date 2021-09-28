
const alunos = ['joao', 'juliana', 'caio','ana']

const media = [10, 7, 9, 6]

let notaaluno = [alunos, media]

/*const exibealuno = (nomealuno) => {
    if (notaaluno[0].includes(nomealuno)){
        let indice = notaaluno[0].indexOf(nomealuno)
        return notaaluno[0][indice] + ' sua media é ' + notaaluno[1][indice]
    } else {
        return 'nome não encontrado'
    }
}

console.log(alunos.indexOf('pedro'))*/

const exibe = nomea => {
    if(notaaluno[0].indexOf(nomea) !== -1){
        let indice = notaaluno[0].indexOf(nomea)
        return `${notaaluno[0][indice]} sua media é ${notaaluno[1][indice]}`
    } else {
        return 'nome não encontrado'
    }
}

console.log(exibe('pedro'))