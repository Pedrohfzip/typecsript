//Variaveis [Type Annotation]
let nome: string = 'Pedro'
console.log(nome)

//Arrays [Type Annotation]
let animais: string[] = ['Dog', 'cat', 'fish']
console.log(animais)

//Objetos [Type Annotation]
let carro: {
    nome: string,
    ano: number,
    preco: number

}

carro = {nome: 'Fusca', ano: 2000, preco: 5000}
console.log(carro.nome)

//Functions [Type Annotation]

function multiplicarNumero(num1: number, num2: number){
    return num1 * num2;
}

console.log(multiplicarNumero(10,10))