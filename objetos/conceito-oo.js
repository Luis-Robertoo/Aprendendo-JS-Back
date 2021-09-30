class Pessoa {
    constructor(nome, sobrenome, cpf, email){
        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = cpf
        this.email = email
    }

    exibirnomecompleto(){
        console.log(` ${this.nome} ${this.sobrenome} `)
    }
}

class Programador extends Pessoa {
    constructor(nome, sobrenome, cpf, email, linguagem){
        super(nome, sobrenome, cpf, email)
        this.linguagem = linguagem
    }
}

let luis = new Programador('Luis', 'Roberto', '1199952367894', 'luis@email.com', 'JavaScript')

luis.exibirnomecompleto()
