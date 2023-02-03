enum Idiomas{
    Portugues,
    Ingles
}

console.log(Idiomas)

enum Dia{
    Segunda = 'SEG',
    Terca = 'TER',
    Quarta = 'QUA'
}

console.log(Dia)

const enum Comida {
    Hamburguer = 'Humburguer',
    Massa = 'Massa',
    Pizza = 'Pizza'
}

function comida(c: Comida){
    return `Comidas boas ${c}`
}


console.log(comida(Comida.Pizza))


enum Tarefa{
    Todo,
    Progress,
    Done
}

const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    desc: 'Concluida'
}

if(concluidaTarefa.status === Tarefa.Done){
    console.log('Concluida')
}