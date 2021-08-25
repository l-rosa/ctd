
// Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.
function adicionar (num1,num2){
    return num1+num2;
}
// Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.
function subtracao (num1,num2){
    return num1-num2;
}
// Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.
function multiplicacao (num1,num2){
    return num1*num2;
}
// Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.
function divisao (num1,num2){
    return num1/num2;
}
// No seu arquivo calculadora.js,  a partir das 4 funções feitas anteriormente, crie um console.log no qual você irá colocar uma string para indicar que abaixo dela você começará a testar as funções, por exemplo:
console.log ("-------------- Teste de Operações / Calculadora --------------")
// Execute a função que soma e a função que subtrai, passando quaisquer dois números como argumentos. Mostrar resultados no console.
console.log (adicionar(5,4))
console.log (subtracao(5,4))
// Execute a função que multiplica, passando quaisquer dois números como argumentos. Mostre o resultado no console.
console.log (multiplicacao(5,4))
// Execute a função que faz divisão, passando quaisquer dois números como argumentos. Mostre o resultado no console.
console.log (divisao(5,4))
// Execute a função que faz divisão, passando agora o número zero como um dos dois argumentos. Mostre o resultado no console.
console.log (divisao(5,0))

// Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.
function quadradoDoNumero(num3){
    return multiplicacao(num3,num3);
}
// Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
function mediaDeTresNumeros(num4,num5,num6){
    return divisao(adicionar(adicionar(num4,num5),num6),3)
}
console.log(mediaDeTresNumeros(1,2,3))

// Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.
function calculaPorcentagem(num4,num5){
    return multiplicacao(divisao(num5,100),num4)
}
console.log(calculaPorcentagem(300,15))

// Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.
function geradorDePorcentagem(num4,num5){
    return multiplicacao(divisao(num4,num5),100)
}
console.log(geradorDePorcentagem(2,200))