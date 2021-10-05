// ** Micro desafio - Passo 1 **
// Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number)
// e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.

function aluno (nome, qtdeFaltas, notas){
    this.nome = nome;
    this.faltas = qtdeFaltas;
    this.notas = [notas];
}

var lucas = new aluno ("lucas",3,9.5)

console.log(lucas)

module.exports = aluno