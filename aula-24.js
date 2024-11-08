// Função sleep que cria uma Promise que resolve após 'ms' milissegundos
const sleep = async (ms) => {
// A Promise resolve após o tempo 'ms' usando setTimeout
    return new Promise(resolve => setTimeout(resolve, ms))
}

// Função aguardarComRetorno que aguarda 3 segundos e retorna o número 30
const aguardarComRetorno = async () => {
    await sleep(3000);
    return 30;
}

// Função aguardar que orquestra o fluxo assíncrono
const aguardar = async () => {
    // Primeiramente, imprime o resultado da operação 2**2 (2 elevado a 2)
    console.log('PASSOU', 2 ** 2);  // Imprime: 'PASSOU 4'
    // Chama aguardarComRetorno, que aguarda 3 segundos e retorna 30
    const resultado = await aguardarComRetorno();  
    console.log('resultado', resultado);  // Imprime: 'resultado 30' 
    // Após aguardarComRetorno, o código segue com mais logagens
    console.log('PASSOU', 3 ** 3);  // Imprime: 'PASSOU 27' (3 elevado a 3)
    console.log('PASSOU', 4 ** 4);  // Imprime: 'PASSOU 256' (4 elevado a 4)
    console.log('PASSOU', 5 ** 5);  // Imprime: 'PASSOU 3125' (5 elevado a 5)
}

// Chama a função aguardar
aguardar();