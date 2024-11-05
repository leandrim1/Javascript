// Declara uma constante 'salario' e atribui a ela uma string que representa um valor numérico
const salario = '103';

// Converte a string 'salario' para um número usando a função Number
const salarioNumero = Number(salario);

// Imprime o valor original da variável 'salario' (como string)
console.log('Salario:', salario); // Espera-se imprimir: Salario: 103

// Imprime o valor convertido para número (número)
console.log('Salario:', salarioNumero); // Espera-se imprimir: Salario: 103

// Imprime o valor numérico formatado com 2 casas decimais
console.log('Salario:', salarioNumero.toFixed(2)); // Espera-se imprimir: Salario: 103.00
