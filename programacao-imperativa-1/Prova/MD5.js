// ** Micro desafio - Passo 5 **
// Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true
// se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem
// que ter uma média igual ou acima da nota de aprovação e ter menos faltas que faltas
// máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.

function curso (nomedocurso, notadeaprovacao, faltasmaximas, nome, qtdefaltas, notas){
    this.curso = {
        nomeDoCurso: nomedocurso,
        notaDeAprovacao: notadeaprovacao,
        faltasMaximas: faltasmaximas,

        aprovado: function (busca2) {            
            for (i=0; i<sala.length; i++) {
                if(sala[i].listaDeEstudantes.nome == busca2) {
                    console.log(sala[i].listaDeEstudantes.nome)
                    console.log(i)
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
        }
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

adicionarAluno("Front-End", 8, 8, "Ana", 8, 9.9)
console.log(sala[1].listaDeEstudantes.nome)
console.log(sala[1].curso.notaDeAprovacao)
console.log(sala.length)
console.log("Aluno Aprovado?",sala[1].curso.aprovado("Ana"))


module.exports = curso;