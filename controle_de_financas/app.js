class Despesa {
    constructor(data, tipo, descricao, valor) {
        this.data = data;
        this.tipo = tipo;
        this.descricao = descricao;
        this.valor = parseFloat(valor);
    }
}

class DataBase {
    constructor() {
        this.geraPrimeiroId();
    }

    // Gera o primeiro ID caso nao exista registros no LocalStorage
    geraPrimeiroId() {
        let id = localStorage.getItem('id');
        if (id === null) {
            localStorage.setItem('id', 0);
        }
    }

    // Gera o proximo numero do ID de registro, incrementando de um e um
    geraProximoId() {
        let proximoId = parseInt(localStorage.getItem('id')) + 1;
        return proximoId;
    }

    // Grava despesa no Local Storage
    gravar(d) {
        // Armazena despesa
        let id =  this.geraProximoId();
        localStorage.setItem(id, JSON.stringify(d));

        // Atualiza ultimo ID registrado
        localStorage.setItem('id', id);
    }
}



let db = new DataBase();

function cadastrarDispesa() {

    let data = document.getElementById('inputData');
    let tipo = document.getElementById('inputTipo');
    let descricao = document.getElementById('inputDescricao');
    let valor = document.getElementById('inputValor');

    let despesa = new Despesa(
        data.value,
        tipo.value,
        descricao.value,
        valor.value);

    db.gravar(despesa);

}