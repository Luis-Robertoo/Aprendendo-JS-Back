const cliente = {
    nome:'Luis',
    idade:23,
    cpf:'28964753158',
    email:'luis@email.com',
    falar: (texto) => {console.log(texto)}
}

cliente.falar(`cliente ${cliente.nome} falando`)

