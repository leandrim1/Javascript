// Função que calcula a soma de todos os números entre dois valores,
// excluindo aqueles que são múltiplos de 13.
function multiplos13(valor1, valor2) {

    // Variáveis para armazenar o maior e o menor valor
    let maior = 0;
    let menor = 0;
    // Variável para armazenar a soma
    let soma = 0;

    // Verifica qual valor é maior e qual é menor
    if (valor1 > valor2) {
        maior = valor1; // atribui o maior valor
        menor = valor2; // atribui o menor valor
    } else {
        maior = valor2; // atribui o maior valor
        menor = valor1; // atribui o menor valor
    }

    // Loop que itera de 'menor' até 'maior'
    for (menor; menor <= maior; menor++) {
        // Verifica se 'menor' não é um múltiplo de 13
        if (menor % 13 !== 0) {
            // Adiciona 'menor' à soma se não for múltiplo de 13
            soma += menor;
        }
    }

    // Retorna a soma final
    return soma;
}

// Chama a função com os valores 100 e 200 e imprime o resultado
console.log(multiplos13(100, 200));
