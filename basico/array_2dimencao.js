
const alunos = ['joao', 'juliana', 'caio','ana']

const media = [10, 7, 9, 6]

let notaaluno = [alunos, media]

console.log(notaaluno[0][2][0])

for(let i = 0; i < alunos.length; i++){
    console.log(`${notaaluno[0][i]} tem a nota ${notaaluno[1][i]}`)
    console.log('=================')
}