process.stdin.setEncoding('utf8');

// Variáveis globais para armazenar a maior palavra e o resultado das contagens.
let maiorString = ''; // Guarda a maior palavra encontrada.
let resultado = []; // Armazena as contagens das palavras por linha.

// Função para contar os caracteres de cada palavra em uma linha de texto.
function contarCaracters (valor) {
    let retorno = ''; // Variável que acumula o resultado da contagem das palavras.
    const removeEnter = valor.trim().replace('\n', ''); // Remove todas as quebras de linha.
    const separarEmArray = removeEnter.split(' '); // Divide a linha em um array de palavras.

    // Itera sobre o array 'separarEmArray', que contém as palavras da linha.
for (let i = 0; i < separarEmArray.length; i++) {

    // Se for a primeira palavra da linha (índice 0), inicializa 'retorno' com o comprimento dessa palavra
    if (i === 0) {
        retorno = `${separarEmArray[i].length}`; // 'retorno' agora recebe o comprimento da primeira palavra
    } else {
        // Se não for a primeira palavra, adiciona o comprimento da palavra atual a 'retorno', separando com um hífen
        retorno = `${retorno}-${separarEmArray[i].length}`; // Exemplo: "5-5" se as palavras tiverem comprimento 5
    }

    // Verifica se o comprimento da palavra atual é maior ou igual ao comprimento da maior palavra encontrada até agora
    if (separarEmArray[i].length >= maiorString.length) {
        maiorString = separarEmArray[i]; // Se a palavra for maior ou igual à maior encontrada, atualiza 'maiorString'
    }
}

    return retorno;
}

process.stdin.on('data', function(data) {
    // Verifica se a entrada de dados é igual a 0
    if (data == 0) {
        // Se a entrada for 0, imprime os resultados das contagens de caracteres armazenados
        for (let i = 0; i < resultado.length; i++) {
            console.log(resultado[i]);  // Imprime cada linha do resultado
        }

        // Imprime a maior string encontrada
        console.log(`A maior string é: ${maiorString}`);
        
        // Interrompe a leitura de dados
        process.stdin.pause();
    }

    // Processa a entrada, chamando a função que conta os caracteres das palavras
    resultado.push(contarCaracters(data));
});

