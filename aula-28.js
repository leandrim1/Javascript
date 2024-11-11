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

// Função que recebe um objeto
const converterObjeto = (objeto) => {
    // Retorna um novo objeto com a propriedade 'nomeIdade', que concatena nome e idade
    return {
        ...objeto, // Copia todas as propriedades do objeto original (nome, idade)
        nomeIdade: `${objeto.nome} + ${objeto.idade}` // Adiciona a nova propriedade 'nomeIdade' como string concatenada
    }
}

// Aplica a função 'converterObjeto' a cada elemento da lista, criando uma nova lista com os objetos modificados
console.log(lista.map(converterObjeto)); 