// Define a constante QUANTIDADE que indica quantos números ímpares queremos imprimir
const QUANTIDADE = 6;

// Função que encontra e imprime os próximos números ímpares a partir do valor dado
function numerosImpares(valor) {
    // Inicializa o contador para números ímpares encontrados
    let contar = 0;
    // Armazena o valor inicial para começar a busca
    let novoValor = valor;

    // Loop que continua até encontrarmos QUANTIDADE de números ímpares
    while (contar < QUANTIDADE) {
        // Verifica se novoValor é ímpar
        if (novoValor % 2 !== 0) {
            // Se for ímpar, imprime o número no console
            console.log(novoValor);
            // Incrementa o contador de números ímpares encontrados
            contar++;
        }

        // Incrementa novoValor para verificar o próximo número na próxima iteração
        novoValor++;
    }
}

// Chama a função com o valor 8, iniciando a busca por números ímpares
numerosImpares(8);
