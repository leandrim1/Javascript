// Função test1: Ela vai imprimir 'test1' após 200ms
const test1 = (callback) => {
    setTimeout(() => {
        console.log('test1');
    }, 200)
}
// Função test2: Ela vai imprimir 'test2' após 600ms e, após isso, chama o callback
const test2 = (callback) => {
    setTimeout(() => {
        console.log('test2');
        callback()
    }, 600)
}
// Função test3: Ela vai imprimir 'test3' após 300ms
const test3 = (callback) => {
    setTimeout(() => {
        console.log('test3');
    }, 300)
}
// Função test4: Ela vai imprimir 'test4' após 1ms
const test4 = (callback) => {
    setTimeout(() => {
        console.log('test4');
    }, 1)
}
// Função callback que será chamada dentro do test2
const funcaoCallBack = () => {
    console.log('SALVOU O USUARIO');
}

test1();
console.log(1+1);
test2(funcaoCallBack);
test3(); 
console.log(2+2); 
test4();