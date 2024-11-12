const lista = [ // Lista de objetos com nome e idade
    {
        nome: 'Jose',
        idade: 17,
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

const resultadoSome = lista.some((objeto) => objeto.idade > 50);
const resultadoEvery = lista.every((objeto) => objeto.idade > 18);

console.log('resultadoSome:', resultadoSome)
console.log('resultadoEvery:', resultadoEvery)