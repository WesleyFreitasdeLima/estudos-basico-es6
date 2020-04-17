// Object Prototype
// Em JS todos os objetos descendem de Object, e Object descende de Function

// Objeto literal
let a1 = {
    cor: 'Braco',
    modelo: 'Airbus a380',
    levantarVoo: function() {
        console.log('Levantar voo');
    }
}

// Função construtora
let AviaoF = function() {
    this.cor = 'Azul';
    this.modelo = 'Boeing 787';
    this.levantarVoo = function() {
        console.log('Levantar voo');
    }
}
let a2 = new AviaoF();

// Classe
class AviaoC {
    constructor() {
        this.cor = 'Cinza';
        this.modelo = 'Embraer E-Jets';
    }

    levantarVoo() {
        console.log('Levantar voo');
    }
}
let a3 = new AviaoC();


console.log(a1);
console.log(a2);
console.log(a3);