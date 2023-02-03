let pessoas: [string, string, number] 
pessoas = ['pedro', 'pedro2', 10]



let listaFrutas: [string, ...string[]] = ['1','2','3','4','...']
console.log(...listaFrutas)

let listaFrutas2: [number, ...string[]] = [5,...listaFrutas]
console.log(...listaFrutas2)

function listarPessoas(nomes: string[],idades: number[]){
    return[...nomes, ...idades]
}

let resultado = listarPessoas(['glaucia'], [10])
console.log(resultado)



type Nome = 
        | [primeiroNome: string, sobrenome: string]
        | [primeiroNome:string, nomeMeio: string, sobrenome:string]


function criarPessoa(...nome: Nome){
    return [...nome]
}

console.log(criarPessoa('Pedro', 'Fagundes'))
console.log(criarPessoa('Pedro','Henrique', 'Fagundes'))