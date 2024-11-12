class Pessoa {
    nome;
    idade;
    filhos;

    // Método para retornar a quantidade de filhos
    quantosFilhos(){
        // Verifica se a pessoa tem filhos (se o array 'filhos' não é vazio)
        if (this.filhos) {
            return this.filhos.length; // Retorna o número de filhos (tamanho do array 'filhos')
        }
        return 0; 
    }

    // Construtor que inicializa os atributos 'nome', 'idade' e 'filhos'
    constructor (nome, idade, filhos) {
        this.nome = nome; // Atribui o nome ao atributo 'nome'
        this.idade = idade; // Atribui a idade ao atributo 'idade'
        this.filhos = filhos; // Atribui o filhos ao atributo 'filhos'
    }
}

// Criando os filhos com o nome e a idade
const filho1 = new Pessoa('Gustavo', 13);
const filho2 = new Pessoa('Gabriela', 10);

// Criando a pessoa principal com nome "Jose", 54 anos e com filhos.
const pessoa = new Pessoa('Jose', 54, [filho1, filho2]);

console.log('quantos filhos: ', pessoa.quantosFilhos());
console.log(pessoa);