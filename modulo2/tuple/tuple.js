"use strict";
let pessoas;
pessoas = ['pedro', 'pedro2', 10];
let listaFrutas = ['1', '2', '3', '4', '...'];
console.log(...listaFrutas);
let listaFrutas2 = [5, ...listaFrutas];
console.log(...listaFrutas2);
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['glaucia'], [10]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Pedro', 'Fagundes'));
console.log(criarPessoa('Pedro', 'Henrique', 'Fagundes'));
