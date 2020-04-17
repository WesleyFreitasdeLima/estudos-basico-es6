class Animal {
    constructor(cor, tamanho, peso) {
        this.cor = cor;
        this.tamanho = tamanho;
        this.peso = peso;
    }

    dormir() {
        console.log('Animal dormindo');
    }
}

class Passaro extends Animal {
    constructor(bico, cor, tamanho, peso) {
        super(cor, tamanho, peso);
        this.bico = bico;
    }

    voar() {
        console.log('Passaro voando');
    }
}

class Papagaio extends Passaro {
    constructor(sabeFalar, bico, cor, tamanho, peso) {
        super(bico, cor, tamanho, peso);
        this.sabeFalar = sabeFalar;
    }

    falar() {
        console.log('Pagaio falando');
    }
}

let papagaio = new Papagaio(true, 'Grande', 'Verde', '30cm', '700kg');
console.log(papagaio);

let papagaio2 = new Papagaio(false, 'Pequeno', 'Azul', '10cm', '500g');
console.log(papagaio2);