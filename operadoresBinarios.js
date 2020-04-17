//in
let frutas = new Array('maça', 'banana', 'mamão', 'abacaxi', 'limao');
console.log(0 in frutas); // retorna true
console.log(3 in frutas); // retorna true
console.log(6 in frutas); // retorna false

// Objetos predefinidos
console.log('PI' in Math);
let minhaString = new String('gauzer');
console.log('length' in minhaString);

// Objetos personalizados
let meuCarro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 1994
};
console.log(meuCarro);
console.log("marca" in meuCarro);
console.log("modelo" in meuCarro);

// instaceof
let dia = new Date(2020, 03, 30);
console.log(dia instanceof Date);