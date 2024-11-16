class user {
    nome;
    idade;
    email;

    constructor (nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
};

class Smartphone extends user {
    marca_Smartphone;
    modelo_Smartphone;
    cor_Smartphone;
    sistema_Smartphone;

    descricao() {
        return `
            nome: ${this.nome} \n
            idade: ${this.idade} \n
            email: ${this.email} \n
            marca_Smartphone: ${this.marca_Smartphone} \n
            modelo_Smartphone: ${this.modelo_Smartphone} \n
            cor_Smartphone: ${this.cor_Smartphone} \n
            sistema_Smartphone: ${this.sistema_Smartphone} \n
        `
    }

    constructor (nome, idade, email, marca_Smartphone, modelo_Smartphone, cor_Smartphone, sistema_Smartphone) {
        super(nome, idade, email);
        this.marca_Smartphone = marca_Smartphone;
        this.modelo_Smartphone = modelo_Smartphone;
        this.cor_Smartphone = cor_Smartphone;
        this.sistema_Smartphone = sistema_Smartphone;
    }
};

const Celular = new Smartphone (
    'Joao',
    '19 anos',
    'email@email.com',
    'Iphone', 
    'apple', 
    'preto', 
    '5'
);

console.log (Celular);