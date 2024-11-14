const propriedadePadrao = (valorInicial) => ({
    value: valorInicial,
    writable: true,
    configurable: false,
    enumerable: true,
})

class produto {
    nome;
    preco;
    descricao;
    codigo;
    qntdEstoque;


    alterarPreco(novoPreco) {
        if (novoPreco >= 0) {
            this.preco = novoPreco;
        } 
    }

    adicionarEstoque(quantidade) {
        this.qntdEstoque += quantidade;
    }

    removerEstoque(quantidade) {
        const novoEstoque = this.qntdEstoque - quantidade;
        if (novoEstoque >= 0) {
            this.qntdEstoque = novoEstoque;
        }
    }

    constructor (nome, descricao, codigo) {
        this.nome = nome;
        this.descricao = descricao;
        this.codigo = codigo;
        this.preco = 0;
        this.qntdEstoque = 0;
    }
}

class Smartphone extends produto {
    marca;
    modelo;
    sistema_operacional;

    descricao() {
        return `
            nome: ${this.nome} \n
            preco: ${this.preco} \n
            descricao: ${this.descricao} \n
            codigo: ${this.codigo} \n
            qntdEstoque: ${this.qntdEstoque} \n
            marca: ${this.marca} \n
            modelo: ${this.modelo} \n
            sistema_operacional: ${this.sistema_operacional} \n
        `
    }

    constructor(nome, descricao, codigo, marca, modelo, sistema_operacional) {
        super(nome, descricao, codigo);
        this.marca = marca;
        this.modelo = modelo;
        this.sistema_operacional = sistema_operacional;
    }
}

const smartphone1 = new Smartphone (
    'Iphone', 
    'Preto', 
    '2341', 
    'apple', 
    'Se', 
    'iOS15'
);

smartphone1.alterarPreco(300.30);
smartphone1.adicionarEstoque(5);

smartphone1.removerEstoque(1);

console.log(smartphone1);
