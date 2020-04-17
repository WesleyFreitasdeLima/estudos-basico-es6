// Notação de classe
class Produto {
    constructor(descricao, preco) {
        this.descricao = descricao;
        this.preco = parseFloat(preco);
    }

    verDescricao() {
        console.log(`${this.descricao} por apenas R$${ this.preco }`);
    }
}

let produto = new Produto('Notebook', 1000);
produto.verDescricao();

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Notação de objeto literal
let produtoLiteral = {
    descricao: 'Notebook',
    preco: 1000,
    verDescricao() {
        console.log(`${this.descricao} por apenas R$${ this.preco }`);
    }
};

produtoLiteral.verDescricao();