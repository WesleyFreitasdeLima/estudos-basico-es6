// Objetos à partir de funções construtoras
// Modelo antigo usado para implementar OO em JS
const Carro = function() {

    // Atributos públicos
    this.cor = 'Amarelo';
    this.modelo = 'Camaro';
    this.velocidadeAtual = 0;
    this.velocidadeAtual = 0;

    // Atributos privados
    let velocidadeMaxima = 180;
    let kmRodados = 0;


    // Métodos publicos
    this.acelerar = function() {
        let velocidade = this.getVelocidadeAtual() + 50;
        if (velocidade > velocidadeMaxima) {
            velocidade = velocidadeMaxima;
        }
        this.setVelocidadeAtual(velocidade);

        setQuilometrosRodados(0.05);
        console.log(`Quilometros Rodados: ${kmRodados}km`);
    }

    this.getVelocidadeAtual = function() {
        return this.velocidadeAtual;
    }

    this.setVelocidadeAtual = function(velocidadeAtual) {
        this.velocidadeAtual = velocidadeAtual;
    }

    // Métodos privados
    let setQuilometrosRodados = function(km) {
        kmRodados = kmRodados + km;
    }

}

let carro = new Carro();
console.log(carro);

console.log(carro.velocidadeAtual);

carro.acelerar();
console.log(carro.velocidadeAtual);

carro.acelerar();
console.log(carro.velocidadeAtual);

carro.acelerar();
console.log(carro.velocidadeAtual);

carro.acelerar();
console.log(carro.velocidadeAtual);

carro.acelerar();
console.log(carro.velocidadeAtual);