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

class ClientePoupa extends Cliente{
    constructor(nome, email, cpf, saldo, saldopoupa){
        super(nome, email, cpf, saldo)
        this.saldopoupa = saldopoupa
    }

    depositapoupa(valor){
        this.saldopoupa += valor
    }

    exibesaldos(){
        console.log(`O valor na conta normal é ${this.saldo} e na poupança é ${this.saldopoupa}`)
    }
}

joao = new ClientePoupa('joao', 'joao@email.com', '4128745963214', 50, 100)

console.log(joao)
joao.depositar(50)
joao.depositapoupa(100)
console.log(joao)
joao.exibesaldos()


