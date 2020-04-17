// Todos apontam para Object.prototype por padrão no JS
Object.prototype.attr0 = '0';

let animal = {
    attr1: 'a'
}

let vertebrado = {
    // Herança
    __proto__: animal,
    attr2: 'b'
}

let ave = {
    // Herança
    __proto__: vertebrado,
    attr2: 'x',
    attr3: 'c'
}

console.log(ave.attr3, ave.attr2, ave.attr1, ave.attr0);