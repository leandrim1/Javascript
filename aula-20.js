// Função que realiza o cálculo
function calcular(valor) {
    // Se o valor for igual a 0
    if (valor == 0) {
        // Lança um erro com a mensagem 'Nao pode ser 0'
        throw new Error ('Nao pode ser 0');
    }
    // Se não for 0, retorna o valor dividido por 2
    return valor / 2;
}
// Tenta executar a função calcular com o argumento 0
try {
    const resultado = calcular(0); // Aqui vai lançar um erro 
    console.log('resultado:', resultado);
    // Quando ocorre um erro dentro do try, o controle passa para o catch
} catch (error) {
    // Exibe a mensagem do erro: 'Nao pode ser 0'
    console.log(error.message)
}
// Mesmo após o erro ser tratado, a execução do código continua normalmente
console.log('continua')
