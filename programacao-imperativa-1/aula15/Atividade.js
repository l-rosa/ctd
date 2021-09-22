//Grupo 2
//Marcos Pires
//Lucas Rosa
//Julio Roncal
//Lucas Fontenele

function Pessoa(nome, genero, altura) {
    this.nome = nome
    this.genero = genero
    this.altura = altura
}

let lista = [{}];

let abigael = new Pessoa("Abigael", "F", 1.55)
let ramon = new Pessoa("Romon", "M", 1.78)
let jarret = new Pessoa("Jarret", "M", 1.68)
let ansel = new Pessoa("Ansel", "M", 1.65)
let jacki = new Pessoa("Jacki", "F", 1.60)
let jobi = new Pessoa("Jobi", "F", 1.72)
let thomasin = new Pessoa("Thomasin", "M", 1.82)
let lonnie  = new Pessoa("Lonnie", "F", 1.79)
let alonso = new Pessoa("Alonso", "M", 1.90)
let bendite = new Pessoa("Bendite", "F", 1.77)
let maria = new Pessoa("Maria", "F", 1.53)
let sebatiao = new Pessoa("Sebastião", "M", 1.61)
let rodolfo = new Pessoa("Rodolfo", "M", 1.84)
let gisele = new Pessoa("Gisele", "F", 1.69)
let ivonete = new Pessoa("Ivonete", "F", 1.78)

const usuarios = [abigael, ramon, jarret, ansel, jacki, jobi, thomasin, lonnie, alonso, bendite, maria, sebatiao, rodolfo, gisele, ivonete]

let maior = 0;

let menor = 9999999;

let media = 0;

let pessoas = usuarios.forEach(function(usuarios){
    if (usuarios.altura > maior){
        maior = usuarios.altura
    }
    if (usuarios.altura < menor){
        menor = usuarios.altura
    }

})

console.log("Maior Altura:",maior,"Menor Altura:", menor)

let mulheres = usuarios.filter(function(usuarios){
    return usuarios.genero === "F"
})

let contador = 0;
let MediaMulheres = 0;

let mediaMulheres = mulheres.forEach(function(mulheres){
    MediaMulheres += mulheres.altura;
    contador += 1;
})

console.log("Número de Mulheres:",contador,"Somatório das Idades =", MediaMulheres,"Média das Idades das Mulheres:",MediaMulheres/contador)

let homens = usuarios.filter(function(usuarios){
    return usuarios.genero === "M"
})

console.log("Quantidade de Homens:",homens.length)
