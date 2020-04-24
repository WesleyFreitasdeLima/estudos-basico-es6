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

    recuperarTodosRegistros() {


        // Pega o ultimo ID registrado, que indica tbm a quantidade total de registros
        let total_registros = parseInt(localStorage.getItem('id'));

        // Array que vai armazenar a lista de todas as depesas
        let despesas = [];

        // Recupera todas despesas armazenada no localStorage
        for (let id = 1; id <= total_registros; id++) {

            // Converte o JSON armazenado para obj literal
            let despesa = JSON.parse(localStorage.getItem(id));

            // Pula indices removidos
            if (despesa === null) {
                continue;
            }

            // Armazena despesa no array
            despesas.push(despesa);

        }

        return despesas;

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
        document.getElementById('mensagem_validacao').innerHTML = `Despesa cadastrada com sucesso!`;
        document.getElementById('botao_validacao').className = 'btn btn-success';
        document.getElementById('botao_validacao').innerHTML = `Voltar`;
        $('#modalValidacaoGravacao').modal('show');

        limparCamposPreenchidos();

    }

}

function carregaListaDispesa() {
    // Armazena lista de despesas
    let despesas = db.recuperarTodosRegistros();

    // Selecionado o elemento tbody da tabela 'tabela_lista_despesas'
    let lista_despesas = document.getElementById('lista_despesas');

    if (despesas.length > 0) {

        // Percorre array 'despesas' e lista dinamicamente cada despesa
        despesas.forEach((despesa) => {

            // Cria o <tr> da despesa
            let linha = lista_despesas.insertRow();

            // Cria o <td> da data da despesa
            linha.insertCell(0).innerHTML = despesa.data;

            // Cria o <td> do tipo da despesa
            switch (parseInt(despesa.tipo)) {
                case 1:
                    despesa.tipo = 'Alimentação';
                    break;
                case 2:
                    despesa.tipo = 'Educação';
                    break;
                case 3:
                    despesa.tipo = 'Saúde';
                    break;
                case 4:
                    despesa.tipo = 'Transporte';
                    break;
                default:
                    despesa.tipo = 'Outros';
                    break;
            }
            linha.insertCell(1).innerHTML = despesa.tipo;

            // Cria o <td> da descrição da despesa   
            linha.insertCell(2).innerHTML = despesa.descricao;

            // Cria o <td> do valor da despesa
            linha.insertCell(3).innerHTML = `R$${despesa.valor.toFixed(2)}`;

            // Cria o <td> com as opções de ação
            linha.insertCell(4).innerHTML = '';

        })

    } else {

        lista_despesas.innerHTML = '<tr><td colspan=4>Nenhuma despesa cadastrada<td></tr>';

    }

}

function limparCamposPreenchidos() {

    let inputs = document.getElementsByClassName('form-control');

    for (let indice in inputs) {
        inputs[indice].value = '';
    }

}