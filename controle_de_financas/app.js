class Despesa {
    constructor(data, tipo, descricao, valor) {
        this.data = data;
        this.tipo = tipo;
        this.descricao = descricao;
        this.valor = parseFloat(valor);
    }

    validarDados() {
        // Laço que acessa todos os campos fornecidos e valida se estão preenchidos correntamente, caso contrário retorna false
        for (let indice in this) {
            if (this[indice] === null || this[indice] === undefined || this[indice] === '') {
                return false
            }
        }

        // Caso todos os campos estiverem OK
        return true;
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
        let id = this.geraProximoId();
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

    if (despesa.validarDados() === false) {

        document.getElementById('titulo_validacao').className = 'modal-title text-danger';
        document.getElementById('titulo_validacao').innerHTML = `<i class="fas fa-exclamation-triangle"></i> Erro ao inserir registro`;
        document.getElementById('mensagem_validacao').innerHTML = `Existem campos obrigatórios que não foram preenchidos.`;
        document.getElementById('botao_validacao').className = 'btn btn-danger';
        document.getElementById('botao_validacao').innerHTML = `Voltar e corrigir`;
        $('#modalValidacaoGravacao').modal('show');

    } else {
        db.gravar(despesa);

        document.getElementById('titulo_validacao').className = 'modal-title text-success';
        document.getElementById('titulo_validacao').innerHTML = `<i class="fas fa-check-circle"></i> Registro inserido com sucesso`;
        document.getElementById('mensagem_validacao').innerHTML = `Dispesa cadastrada com sucesso!`;
        document.getElementById('botao_validacao').className = 'btn btn-success';
        document.getElementById('botao_validacao').innerHTML = `Voltar`;
        $('#modalValidacaoGravacao').modal('show');

    }

}

function limparCamposPreenchidos() {
    let inputs = document.getElementsByClassName('form-control');

    for (const index in inputs) {
        inputs[index].value = '';
    }
}