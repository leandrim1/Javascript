// Object.defineProperties
// Object.defineProperty

const propriedadePadrao = (valorInicial) => ({
    value: valorInicial,
    writable: true, // se estiver true => usuario.nome = 'novo nome'
    configurable: false, // se estiver true => posso deletar o nome
    enumerable: true, // se estiver true => ele será exibido no objeto
})

class user { 
 
    constructor(email, senha, nome) {
        this.senha = senha;
        this.email = email;
        Object.defineProperties(this, {
            nome: propriedadePadrao(nome),
            senha: propriedadePadrao(senha),
            email: propriedadePadrao(email),
        })
    }
}

const usuario = new user ('emails', 'senhas', 'nomes');
usuario.nome = 'Novo nome';

console.log(usuario);