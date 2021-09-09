let dadosEntrada = {
    name:"Christopher",
    profissao:"Programador",
    idade:25,
    linguagens:["PHP","Javascript","Dart"],
    disponibilidadeParaViajar:true,
    ramoProfissional: {
        anosDeExperiencia: 12,
        nivel: "Senior"
    },
    saudacao: function() {
        return 'Oi Mundo';
    },

    calculo: function() {
        return this.idade - this.ramoProfissional.anosDeExperiencia
    }
}

console.log(dadosEntrada.ramoProfissional.anosDeExperiencia)

console.log(dadosEntrada.saudacao())

console.log(dadosEntrada.calculo())