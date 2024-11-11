const lista = [ // Lista de objetos com nome e idade
    {
        nome: 'Jose',
        idade: 53
    },
    {
        nome: 'Joao',
        idade: 23
    },
    {
        nome: 'Maria',
        idade: 32
    },
    {
        nome: 'Fernanda',
        idade: 16
    },
    {
        nome: 'Pedro',
        idade: 56
    },
    {
        nome: 'Andre',
        idade: 35,
    },
]

// for (let i = 0; i < lista.length; i++){
//     console.log(lista[i])
// }

let soma = 0;

const somaIdade = (objeto) => {
    soma += objeto.idade
}

lista.forEach(somaIdade);

console.log('Soma:', soma)