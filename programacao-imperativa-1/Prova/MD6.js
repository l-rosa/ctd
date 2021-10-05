// ** Micro desafio - Passo 6 **
// Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de
// booleanos com os resultados se os alunos aprovaram ou não.

function curso (nomedocurso, notadeaprovacao, faltasmaximas, nome, qtdefaltas, notas){
    this.curso = {
        nomeDoCurso: nomedocurso,
        notaDeAprovacao: notadeaprovacao,
        faltasMaximas: faltasmaximas,

        aprovado: function (busca2) {            
            for (i=0; i<sala.length; i++) {
                if(sala[i].listaDeEstudantes.nome == busca2) {
                    var corte = sala[i].curso.notaDeAprovacao
                    var faltasm = sala[i].curso.faltasMaximas
                    var faltasr = sala[i].listaDeEstudantes.faltas
                    var mediar = sala[i].listaDeEstudantes.calcularMedia(sala[i].listaDeEstudantes.nome)
                    if (mediar > corte && faltasr < faltasm) {
                        return true;
                    }
                    else if (mediar > 1.1*corte && faltasr == faltasm) {
                        return true;
                    }
                    else{
                        return false;
                    }
                }
            }
        },
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

function adicionarAluno (Curso,notaApr,faltaMax,nomeAluno,qtdeFalta,nota) {
    let addaluno = new curso (Curso, notaApr, faltaMax, nomeAluno, qtdeFalta, nota);
    sala.push(addaluno);
}

adicionarAluno("Front-End", 8, 8, "Ana", 8, 9.9)

function avaliarAprovacao() {
    var array = []
    for (i=0; i<sala.length; i++) {
        array.push(sala[i].curso.aprovado(sala[i].listaDeEstudantes.nome))
    }
    return array;
}

var aprovacao = avaliarAprovacao();

console.log(aprovacao.length)

module.exports = curso;