function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function Clientepoup(nome, cpf, email, saldo, saldopoup){
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldopoup = saldopoup
} 

const ju = new Clientepoup('ju', '42678945631', 'ju@email.com', 42, 100)

console.log(ju)

Clientepoup.prototype.depositapoup = function(deposito){
    this.saldopoup += deposito
}

ju.depositapoup(55)

console.log(ju.saldopoup)