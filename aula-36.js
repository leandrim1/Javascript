const lista = [ // Lista de objetos com nome e idade
    {
        nome: 'Jose',
        idade: 17,
        cartoes: ['2144', '3325']
    },
    {
        nome: 'Joao',
        idade: 23,
        cartoes: ['2164', '3452']
    },
    {
        nome: 'Maria',
        idade: 32,
        cartoes: ['7542', '7656']
    },
    {
        nome: 'Fernanda',
        idade: 16,
        cartoes: ['2343', '4524']
    },
    {
        nome: 'Pedro',
        idade: 56,
        cartoes: ['3214', '5441']
    },
    {
        nome: 'Andre',
        idade: 35,
        cartoes: ['2454', '3421']
    },
]

const cartoes = lista.flatMap((cartao) => cartao.cartoes);

console.log(cartoes);