const mensagem = 'rodrigues';
const mensagem2 = 'gomes';

// .length: Imprime o tamanho da string (quantidade de caracteres).
console.log('Tamanho:', mensagem.length);
// .concat: Junta as duas strings 'mensagem' e 'mensagem2'.
console.log('Concat:', mensagem.concat(mensagem2));
// .substring: Seleciona a partir de um ponto ate o outro ponto.
console.log('Substring:', mensagem.substring(3,6));
// Usa o operador + para concatenar as duas strings diretamente
console.log('Concat:', mensagem + mensagem2);
// Interpola as variáveis dentro de uma string
console.log('ES:', `leandro ${mensagem} ${mensagem2}`);
// .split: Consegue quebrar a string.
console.log('Quebrar em array:', mensagem.split('o'));

// Converte a string 'mensagem' para letras maiúsculas
console.log('UP:', mensagem.toUpperCase());
// Converte a string 'mensagem' para letras minúsculas
console.log('DOWN:', mensagem.toLowerCase());
// Substitui a string 'mensagem' por 'leandro'
console.log('Replace:', mensagem.replace('rodrigues', 'leandro'));








