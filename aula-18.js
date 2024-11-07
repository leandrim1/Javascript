const stringA = 'dafivnona'; // Imutavel pois não modifica.
const verdadeOuFalso = true; // false

// Arrays são mutáveis, ou seja, podemos alterar seu conteúdo.
const arrayTest = ['daew','daea','dapf'];

// Tentativa de modificar um caractere específico de uma string
stringA[4] = 'JULIO'; // Isso não funcionará pois não altera a stringA.

// O valor 'dafe' será adicionado ao final do array arrayTest
arrayTest.push('dafe');

// Resultado: ['daew', 'daea', 'dapf', 'dafe']
console.log(arrayTest);
// Resultado: 'dafivnona' (não foi alterada)
console.log(stringA);