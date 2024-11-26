class empresa {
    empresa;

    constructor (empresa) {
        this.empresa = empresa;
    }
}

validarIdade = (idade) => {
    if (idade >= 18) {
        return carteiraAssinada = true;
    } else {
        return carteiraAssinada = false;
    }
}

class funcionario extends empresa{
    nome;
    idade;
    carteiraAssinada;
    cidade;
    bairro;
    rua;
    numero;

    constructor (empresa, nome, idade, carteiraAssinada, cidade, bairro, rua, numero) {
        super (empresa);
        this.nome = nome;
        this.idade = idade;
        this.carteiraAssinada = validarIdade (idade);
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua; 
        this.numero = numero;
    }
}

const funcionario1 = new funcionario (
    'EEAP',
    'PEDRO',
    '19',
    '',
    'LAGORA',
    'ALTRAPETE',
    'RUA OTADE DA ESEK',
    '312'
)

console.log(funcionario1)         