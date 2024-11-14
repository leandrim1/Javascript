class user {
    email;
    senha;
    nome;

    validarSenha (email, senha) {
        return email + senha === this.nome;
    }

    constructor (email, senha, nome) {
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }
}


class administrator extends user{
    permissoes;

    validarSenha (email, senha) {
        return email === this.email && senha === this.senha;
    }

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

const admin = new administrator ('email@email.com', 'senha', 'Jose', [1,6]);
const usuario = new user ('email@email.com', 'senha', 'nome');

const comprador = new Comprador ();

console.log(usuario.validarSenha('email@email.com', 'senha'));
console.log(admin.validarSenha('email@email.com', 'senha'));
