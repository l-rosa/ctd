// ** Micro desafio - Passo 4 **
// Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos
// nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade
// lista de estudantes do objeto curso.

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

function adicionarAluno (Curso,notaApr,faltaMax,nomeAluno,qtdeFalta,nota) {
    let addaluno = new curso (Curso, notaApr, faltaMax, nomeAluno, qtdeFalta, nota);
    sala.push(addaluno);
}

adicionarAluno("Front-End", 8, 8, "Ana", 2, 9.9)
console.log(sala[1].listaDeEstudantes.nome)

module.exports = curso;
