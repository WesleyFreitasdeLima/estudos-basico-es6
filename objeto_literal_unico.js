let assinatura = {
    idCliente: 1000,
    descricao: 'Acesso a internet',
    status() {
        console.log('Ativo')
    }
}

console.log(assinatura.descricao);

let y = assinatura;
y.descricao = 'Internet + TV + Telefone';

console.log(y.descricao);