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
        Object.defineProperties(this, {
            nome: {
                get: () => nome,
                set: (value) => nome = value,
            },
            senha: {
                get: () => senha,
                set: (value) => {
                    if (value.length < 4) {
                        throw new TypeError('Precisa de pelo menos 4 letras')
                    }
                    senha = value
                }
            },
            email: {
                get: () => email,
                set: (value) => email = value,
            }
        })
    }
}

const usuario = new user ('emails', 'senhas', 'nomes');
usuario.senha = 'daffa';

console.log(usuario.senha);