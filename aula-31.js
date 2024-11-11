const lista = [ // Lista de objetos com nome e idade
    {
        nome: 'Jose',
        idade: 53,
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

const buscarPessoa = (pessoa) => pessoa.nome === 'Jose';

const novaPessoa = lista.find(buscarPessoa);

console.log(novaPessoa)