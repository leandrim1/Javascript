var horaInicio = 8; // Hora inicial do agendamento (8h)
var intervaloMinutos = 20; // Intervalo de 20 minutos entre as entrevistas
var total_entrevistados = 0; // Contador de entrevistados já agendados
const horaFinal = 11; // Hora final do agendamento (11h)

var entrevistados = [
    "Joao Mariano", "Leandro", "Marcos", "Andreia",
    "Fabiano", "Pedro", "Alex", "Otavio", "Marta",
    "Andre"
]

entrevistados.sort(); //Ordena os entrevistados alfabeticamente

// Loop para iterar sobre as horas, de 8h até 11h (exceto 12h e 13h)
for (let i = horaInicio; i <= horaFinal; i++) {
     // Pula as horas de 12h e 13h
    if (i == 12 || i == 13){
        continue
    }
    // Loop interno para iterar sobre os minutos, com incrementos de 20 minutos
    for (let j = 0; j < 60; j = j + intervaloMinutos) {
        total_entrevistados++; // Incrementa o contador de entrevistados
        if (j == 0){ // Se for o minuto 0 (início de cada hora)
        console.log(i + ":" + j + "0", ":", entrevistados[total_entrevistados - 1]);
        } 
        else { // Se não for o minuto 0
            console.log(i + ":" + j, ":", entrevistados[total_entrevistados - 1]);
        }   
    }
}