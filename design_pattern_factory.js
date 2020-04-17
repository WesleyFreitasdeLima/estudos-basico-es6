// Funções Factory
// Combinam a chamada de funções com o retorno de obj literais
// Servem para criação de objetos de forma dinamica em tempo de execução

// Exemplo: coleção de bicicletas

let BicicletaFactory = function(cor, marcha, aro) {
    // Lógica
    // Requisição HTTP
    // Resposta HTTP em JSON
    return {
        cor,
        marcha,
        aro,
        pedalar() {
            console.log('Pedalando');
        }
    }
}

let bicicleta = BicicletaFactory('Vemelha', 18, 26);
console.log(bicicleta);
bicicleta.pedalar();

let bicicleta2 = BicicletaFactory('Azul', 12, 20);
console.log(bicicleta2);
bicicleta2.pedalar();