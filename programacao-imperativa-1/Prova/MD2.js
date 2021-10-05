// ** Micro desafio - Passo 2 **
// Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas.
// Também terá um método chamado faltas, que simplesmente aumenta o número de faltas
// em 1.

function aluno (nome, qtdeFaltas, notas){
    this.alunos = {
        nome: nome,
        faltas: qtdeFaltas,
        notas: [notas],
        calcularMedia: function (busca) {
            var soma = 0;
            var contador = 0;
            for (i=0; i<sala.length; i++){
                if(sala[i].alunos.nome == busca) {
                    for (j=0; j<sala[i].alunos.notas.length; j++) {
                        soma += sala[i].alunos.notas[j];
                        contador += 1;
                    }
                }
            }
            return soma/contador;
        }
    }

}

// ** TESTES FUNCIONAIS ABAIXO

let lucas = new aluno ("lucas",3,9.5);
lucas.alunos.notas.push(5)

let sala = [lucas]

console.log(sala[0].alunos.nome)
console.log(sala[0].alunos.calcularMedia("lucas"));

module.exports = aluno