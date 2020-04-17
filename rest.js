// Contexto Rest - Juntar estrutura de dados

function soma(...parametros) {
    let resultado = 0;

    console.log(parametros);

    parametros.forEach((valor, indice) => {
        resultado += valor;
    });

    return resultado;
}
console.log(soma(3, 8, 5, 7, -8, 10, 115));


function multiplicacao(multiplicador, ...valores) {
    // Primeiro numero informado será o multiplicador
    console.log(`Nosso multiplicador será ${multiplicador}`);

    // Os demais serão os multiplicando
    console.log(`Nossos multiplicandos serão ${valores}`);

    valores.forEach((valor) => console.log(`Multiplicando ${multiplicador} por ${valor} dá ${multiplicador * valor}`));
}
multiplicacao(5, 7, 12, 3, 49);