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

class Avestruz extends Passaro {
    constructor(bico, cor, tamanho, peso) {
        super(bico, cor, tamanho, peso)
    }

    enterrarCabeca() {
        console.log('Enterrando a cabeça');
    }

    // Sobrescrevendo o metodo da classe pai
    voar() {
        console.log('Não sabe voar');
    }
}

let papagaio = new Papagaio(true, 'Grande', 'Verde', '30cm', '700kg');
console.log(papagaio);
papagaio.falar();
papagaio.voar();

let avestruz = new Avestruz('Grande', 'Preto', '2,5 metros', '50 Kg');
console.log(avestruz);

avestruz.enterrarCabeca();
avestruz.voar();