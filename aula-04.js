// Define uma constante 'quantidade' com o valor 10
const quantidade = 10;
// Inicializa a variável 'soma' com o valor 1
let soma = 1;

// Inicia um loop 'for' que irá iterar 'quantidade' vezes (de 0 a 9)
for (let i = 0; i < quantidade; i++) {
    // Imprime o valor atual de 'i' no console
    console.log(i);
    // Adiciona o valor atual de 'i' à variável 'soma'
    soma = soma + i; // ou soma += i;
}

// Após o loop, imprime a mensagem 'ACABOU' seguida do valor final de 'soma'
console.log('ACABOU', soma);
