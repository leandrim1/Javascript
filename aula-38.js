class user {
    email;
    senha;
    nome;

    constructor (email, senha, nome) {
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }
}


class administrator extends user{
    permissoes;

    constructor (email, senha, nome, permissoes) {
        super (email, senha, nome);
        this.email = email;
        this.senha = senha;
        this.nome = nome;
        this.permissoes = permissoes;
    }
}

class Comprador extends user {
    compras;
}

const admin = new administrator ('daubfia@email.com', 'senha', 'Jose', [1,6]);

const comprador = new Comprador ();

console.log(admin)
console.log(comprador)
