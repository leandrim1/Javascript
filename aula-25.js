const fatorial = (valor) => {
    if (valor === 0 || valor === 1) {
        return 1;
    }

    return valor * fatorial(valor - 1);
    // 4 * fatorial 3
    // 3 * fatorial 2
    // 2 * fatorial 1 -> 1
    // 1
}


console.log(fatorial(2));