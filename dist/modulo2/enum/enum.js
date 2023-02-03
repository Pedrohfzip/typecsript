"use strict";
var Idiomas;
(function (Idiomas) {
    Idiomas[Idiomas["Portugues"] = 0] = "Portugues";
    Idiomas[Idiomas["Ingles"] = 1] = "Ingles";
})(Idiomas || (Idiomas = {}));
console.log(Idiomas);
var Dia;
(function (Dia) {
    Dia["Segunda"] = "SEG";
    Dia["Terca"] = "TER";
    Dia["Quarta"] = "QUA";
})(Dia || (Dia = {}));
console.log(Dia);
function comida(c) {
    return `Comidas boas ${c}`;
}
console.log(comida("Pizza"));
var Tarefa;
(function (Tarefa) {
    Tarefa[Tarefa["Todo"] = 0] = "Todo";
    Tarefa[Tarefa["Progress"] = 1] = "Progress";
    Tarefa[Tarefa["Done"] = 2] = "Done";
})(Tarefa || (Tarefa = {}));
const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    desc: 'Concluida'
};
if (concluidaTarefa.status === Tarefa.Done) {
    console.log('Concluida');
}
