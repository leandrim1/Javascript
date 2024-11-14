const qualquer = {
    abc: 'fafaw',
    sfaf: 'dawfa',
    dafdaf: 'dafaff',
    adwf: 'dafge'
}


const novoQualquer = {
    ...qualquer,
    final: 'FINAL'
}

const lista = [54, 324, 35, 134, 54, 132];
const lista2 = [5434, 43324, 765, 1334, 5436, 13752];

const listaJunta = [
    ...lista, ...lista2
]

//console.log(qualquer);
//console.log(novoQualquer);

console.log(listaJunta);
