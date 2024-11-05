// Define a constante CONSUMO_AUTOMOVEL que representa o consumo de combustível em km/L
const CONSUMO_AUTOMOVEL = 12;

// Função que calcula o gasto de combustível com base no tempo e na velocidade média
function gastoCombustivel(tempoGasto, velocidadeMedia) {
    // Calcula a distância percorrida usando a fórmula: distância = velocidade * tempo
    const distancia = velocidadeMedia * tempoGasto;
    // Calcula o consumo de combustível com base na distância e no consumo do automóvel
    const consumoFinal = distancia / CONSUMO_AUTOMOVEL;

    // Retorna o consumo final formatado com 3 casas decimais
    return consumoFinal.toFixed(3);
}

// Chamadas da função para calcular e imprimir o gasto de combustível
console.log(gastoCombustivel(10, 85)); // Gasto para 10 horas a 85 km/h
console.log(gastoCombustivel(2, 92));  // Gasto para 2 horas a 92 km/h
console.log(gastoCombustivel(22, 67)); // Gasto para 22 horas a 67 km/h
