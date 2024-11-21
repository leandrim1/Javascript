class pessoa {
    peso;
    altura;


    constructor (peso, altura) {
        this.peso = peso;
        this.altura = altura;
    }
}

class imc extends pessoa {
    imc;
    classificacao;


    constructor (peso, altura, imc, classificacao){
        super (peso, altura);
            this.imc = this.peso / (this.altura * this.altura).toFixed(2);
            this.classificacao = '';
                
                if (this.imc < 18.5) {
                    this.classificacao = 'Abaixo do peso';
                } else if (this.imc >= 18.5) {
                    this.classificacao = 'Peso normal';
                } else if (this.imc > 25 && this.imc < 29.9) {
                    this.classificacao = 'Sobrepeso';
                } else {
                    this.classificacao = 'Obesidade';
                }
    }
}


const pessoa1 = new imc (
    50,
    1.61,
    '',
    ''
)


console.log(pessoa1);