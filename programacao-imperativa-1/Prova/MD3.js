// ** Micro desafio - Passo 3 **
// Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso
// (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes
// (um array composto pelos alunos criados no passo 1).

function curso (nomedocurso, notadeaprovacao, faltasmaximas, nome, qtdefaltas, notas){
    this.curso = {
        nomeDoCurso: nomedocurso,
        notaDeAprovacao: notadeaprovacao,
        faltasMaximas: faltasmaximas,
    }
    this.listaDeEstudantes = {
        nome: nome,
        faltas: qtdefaltas,
        notas: [notas],
        calcularMedia: function (busca) {
            var soma = 0;
            var contador = 0;
            for (i=0; i<sala.length; i++){
                if(sala[i].listaDeEstudantes.nome == busca) {
                    for (j=0; j<sala[i].listaDeEstudantes.notas.length; j++) {
                        soma += sala[i].listaDeEstudantes.notas[j];
                        contador += 1;
                    }
                }
            }
            return soma/contador;
        }
    }
}

// ** TESTES FUNCIONAIS ABAIXO

let lucas = new curso ("Nome do Curso", 7, 7, "lucas",3,9.5);
lucas.listaDeEstudantes.notas.push(5)

let sala = [lucas]

console.log(sala[0].listaDeEstudantes.nome)
console.log(sala[0].listaDeEstudantes.calcularMedia("lucas"));

module.exports = curso;