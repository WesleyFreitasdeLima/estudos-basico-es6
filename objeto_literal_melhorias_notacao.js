let nome = 'Wesley';
let idade = 27;
let sexo = 'M';
let profissao = 'Analista de Sistemas';

let objeto = {
    nome: nome,
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    exibirResumo: function() {
        console.log(`${this.nome} tem ${this.idade} anos, é do sexo ${this.sexo} e sua profissão é: ${this.profissao}`)
    }
}

console.log(objeto);
objeto.exibirResumo();

///////////////////////////////////////////////////////

let objeto2 = {
    nome, // nome = nome da variavel / valor = valor da variavel
    idade,
    sexo,
    profissao,
    exibirResumo() {
        console.log(`${this.nome} tem ${this.idade} anos, é do sexo ${this.sexo} e sua profissão é: ${this.profissao}`)
    }
}

console.log(objeto2);
objeto2.exibirResumo();

objeto2.profissao = 'Faxineiro';
objeto2.cidade = 'Itu';
objeto2.saudacao = () => console.log('E ai');
console.log(objeto2);
objeto2.exibirResumo();
objeto2.saudacao();

///////////////////////////////////////////////////////