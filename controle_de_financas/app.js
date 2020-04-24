class Despesa {
    constructor(data, tipo, descricao, valor) {
        this.data = data;
        this.tipo = tipo;
        this.descricao = descricao;
        this.valor = parseFloat(valor);
    }

    // Verifica se todos os campos foram fornecidos
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

    // Grava despesa no localStorage
    gravar(d) {
        // Armazena despesa
        let id = this.geraProximoId();
        localStorage.setItem(id, JSON.stringify(d));

        // Atualiza ultimo ID registrado
        localStorage.setItem('id', id);
    }

    // Recupera todos registro do localStorage e retorna em array
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

            // Insere o id da despesa no objeto despesa
            despesa.id = id;

            // Armazena despesa no array
            despesas.push(despesa);

        }

        return despesas;

    }

    // Recupera todos registro do localStorage, filtra a despesa de acordo com os filtros dos inputs e retorna em array 
    pesquisar(despesa) {

        let despesas_filtradas = this.recuperarTodosRegistros();

        if (despesa.data) {
            despesas_filtradas = despesas_filtradas.filter(d => d.data === despesa.data);
        }

        if (despesa.tipo) {
            despesas_filtradas = despesas_filtradas.filter(d => d.tipo === despesa.tipo);
        }

        if (despesa.descricao) {
            despesas_filtradas = despesas_filtradas.filter(d => d.descricao === despesa.descricao);
        }

        if (despesa.valor) {
            despesas_filtradas = despesas_filtradas.filter(d => d.valor === despesa.valor);
        }

        return despesas_filtradas;
    }

    // Excluí despesa do localStorage
    excluir(id) {

        let id_existe = localStorage.getItem(id);

        // Caso o id não exista retorna false
        if (id_existe === null) {
            return false;
        }

        // Remove do localStoge de acordo o id informado
        localStorage.removeItem(id);
        return true;

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

function carregaListaDispesas(despesas = Array()) {

    // Caso não seja informado nenhuma lista de referencia na chamada da função, carrega as despesas registradas no localStorage
    if (despesas.length === 0) {
        despesas = db.recuperarTodosRegistros();
    }

    // Selecionado o elemento <tbody> da tabela 'tabela_lista_despesas'
    let lista_despesas = document.getElementById('lista_despesas');

    // Caso ele contenha alguma despesa a ser exibida ele faz o tratamento, do contrário exibe a mensagem que não há registros.
    if (despesas.length > 0) {

        // Limpa valores antigos da tabela
        lista_despesas.innerHTML = '';

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

            // Cria o <td> com o botão de exclusão
            let btn = document.createElement('button');
            btn.id = `id_despesa_${despesa.id}`;
            btn.className = 'btn btn-sm btn-danger';
            btn.innerHTML = '<i class="fas fa-trash-alt"></i> Excluir';
            btn.onclick = function() {
                // Obtém o id da despesa a ser removida
                let id = this.id.replace('id_despesa_', '');
                excluirDespesa(id);
            };
            linha.insertCell(4).append(btn);

        })

    } else {

        lista_despesas.innerHTML = '<tr><td colspan=4>Nenhum registro encontrado<td></tr>';

    }

}

function excluirDespesa(id) {

    // Exclui o registro do localStorage de acordo com o id informado
    if (db.excluir(id) === true) {

        // Exibe o modal de validação
        document.getElementById('titulo_validacao').className = 'modal-title text-success';
        document.getElementById('titulo_validacao').innerHTML = `<i class="fas fa-check-circle"></i> Registro excluido com sucesso`;
        document.getElementById('mensagem_validacao').innerHTML = `Despesa excluida com sucesso!`;
        document.getElementById('botao_validacao').className = 'btn btn-success';
        document.getElementById('botao_validacao').innerHTML = `Voltar`;
        $('#modalValidacaoExclusao').modal('show');

    } else {

        // Exibe o modal de validação
        document.getElementById('titulo_validacao').className = 'modal-title text-danger';
        document.getElementById('titulo_validacao').innerHTML = `<i class="fas fa-exclamation-triangle"></i> Erro ao excluir registro`;
        document.getElementById('mensagem_validacao').innerHTML = `Erro ao excluir registro.`;
        document.getElementById('botao_validacao').className = 'btn btn-danger';
        document.getElementById('botao_validacao').innerHTML = `Voltar`;
        $('#modalValidacaoExclusao').modal('show');

    }

    // Recarrega a lista de despesa
    carregaListaDispesas();

}

function pesquisarDespesa() {

    // Armena os valores dos input dos filtros
    let data = document.getElementById('filtroData').value;
    let tipo = document.getElementById('filtroTipo').value;
    let descricao = document.getElementById('filtroDescricao').value;
    let valor = document.getElementById('filtroValor').value;
    let despesa = new Despesa(data, tipo, descricao, valor);

    // Armazena lista de despesas filtradas
    let despesas_filtradas = db.pesquisar(despesa);

    // Exibe no <tbody> da tabela 'tabela_lista_despesas' os registros filtrados
    carregaListaDispesas(despesas_filtradas);

}

function limparCamposPreenchidos() {

    // Obtem todos os inputs da classe 'form-control' e armaneza em um array
    let inputs = document.getElementsByClassName('form-control');

    // Percorre o array dos inputs e limpa os valores preenchidos de cada input processado
    for (let indice in inputs) {
        inputs[indice].value = '';
    }

}