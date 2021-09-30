class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibesaldo(){
        console.log(`O saldo é ${this.saldo}`)
    }
}

const joao = new Cliente('joao', 'joao@email.com', '45685291783', 42)
joao.depositar(18)
console.log(joao)
joao.exibesaldo()