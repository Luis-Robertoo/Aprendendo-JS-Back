function cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const jose = new cliente('jose', '45674185299','jose@email.com', 42)
const maria = new cliente('maria', '47896585233', 'maria@email.com',40)

maria.depositar(12)


console.log(jose, maria)