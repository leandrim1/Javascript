/*const idade = 18; //Definindo idade da pessoa
let podeEntrar = false; //Definando podeEntrar como falso

if(idade >= 18) { //Se a idade for maior que 18 ele pode entrar.
    podeEntrar = true;
} else {  //Se for falso retorna NAO ENTRA.
    console.log('NAO ENTRA!!!')
}

console.log('usuario pode entrar', podeEntrar);*/

const idade = 18;
const nome = 'Julio';

if (idade >= 18 || nome === 'Julio') { // Idade maior que 18 ou entao o nome seja Julio.
    console.log('ENTROU')
} else {
    console.log('NAO ENTRA!!!')
}