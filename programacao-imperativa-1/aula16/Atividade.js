//Minha Primeira Aplicação 2
// Lucas Rosa

// Cada espectador de um cinema respondeu a um
// questionário no qual constava sua idade e a sua opinião em
// relação ao filme: ótimo - 3, bom - 2, regular -1.
// Faça um programa que receba a idade e a opinião de 15
// espectadores, calcule e imprima:
// ● a média das idades das pessoas que responderam ótimo;
// ● a quantidade de pessoas que responderam regular;
// ● a porcentagem de pessoas que responderam bom entre todos os
// espectadores analisados.


function Pessoa(nome, idade, opiniao) {
    this.nome = nome
    this.idade = idade
    this.opiniao = opiniao
}

let abigael = new Pessoa("Abigael", 23, 2)
let ramon = new Pessoa("Romon", 51, 3)
let jarret = new Pessoa("Jarret", 35, 1)
let ansel = new Pessoa("Ansel", 27, 1)
let jacki = new Pessoa("Jacki", 46, 2)
let jobi = new Pessoa("Jobi", 11, 3)
let thomasin = new Pessoa("Thomasin", 15, 2)
let lonnie  = new Pessoa("Lonnie", 17, 3)
let alonso = new Pessoa("Alonso", 57, 1)
let bendite = new Pessoa("Bendite", 46, 2)
let maria = new Pessoa("Maria", 53, 3)
let sebatiao = new Pessoa("Sebastião", 63, 3)
let rodolfo = new Pessoa("Rodolfo", 42, 2)
let gisele = new Pessoa("Gisele", 32, 1)
let ivonete = new Pessoa("Ivonete", 42, 1)

const usuarios = [abigael, ramon, jarret, ansel, jacki, jobi, thomasin, lonnie, alonso, bendite, maria, sebatiao, rodolfo, gisele, ivonete]

let mediaIdades = usuarios.reduce((somatorio, usuario) => {return somatorio + usuario.idade}, 0)/usuarios.length;

console.log ("Media de Idade dos Votantes:",mediaIdades.toFixed(2))

let qtdeRegular = usuarios.filter(usuario => usuario.opiniao == 1)

console.log ("Qtde de Votos Regular:",qtdeRegular.length)

let porcBom = usuarios.filter(usuario => usuario.opiniao == 2)

console.log ("Porcentagem de Votos Bom:",((porcBom.length*100)/usuarios.length).toFixed(2))


