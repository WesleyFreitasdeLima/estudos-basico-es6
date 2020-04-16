// Desctructurig 
// Extrai valores de um objeto
let produto = {
    descricao: 'Notebook',
    preco: 1800,
    detalhes: {
        fabricante: 'abc',
        modelo: 'xyz'
    }
}

// Extrai os valores do campos informados para as variaveis 
let { descricao, preco } = produto;
console.log(descricao, preco);

// Extrai valores de atributos
let { detalhes: { fabricante, modelo } } = produto;
console.log(fabricante, modelo);

// Extrai os valores do campos informados para as variaveis com outros nomes
let { descricao: d, preco: p } = produto;
console.log(d, p);

// Define valores default
let { descricao: dd, preco: pp, desconto = 5 } = produto;
console.log(dd, pp, desconto);