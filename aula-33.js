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

const funcaoReduce = (acc, objeto) => {
    return {
        ...acc, // Copia as propriedades do acumulador
        [objeto.nome]: { // Cria uma chave com o nome da pessoa
            idade: objeto.idade // Adiciona a chave 'idade' com o valor correspondente
        }
    }
}

// Aplica a função reduce para transformar o array em um único objeto
const pessoas = lista.reduce(funcaoReduce, {});

const chaves = Object.keys(pessoas);

const listaDeVolta = chaves.map((chave) => ({
    nome: chave,
    idade: pessoas[chave].idade
}))

//console.log(pessoas);

//console.log(chaves);

console.log(listaDeVolta)