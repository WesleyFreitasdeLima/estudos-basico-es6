// Desctructurig 
// Extrai valores de um array
let frutas = ['Abacaxi', 'Uva', 'Pera', 'Mamão'];
console.log(frutas);

// Pulando indices
let [a1, b1, , c1] = frutas;
console.log(a1, b1, c1);

// Atribuir valores padrões para campos undefined
let [a2, b2, c2, d2, e2 = 'Goiaba'] = frutas;
console.log(a2, b2, c2, d2, e2);

// Extrair valores de arrays multidimensionais
let coisas = [
    ['Abacaxi', 'Uva', 'Pera', 'Mamão'],
    ['Gauzer', 'Jiraya']
];
let [
    [, , nomFruta3],
    [, nome2]
] = coisas;
console.log(nomFruta3, nome2);