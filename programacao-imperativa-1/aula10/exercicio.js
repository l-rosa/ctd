//O que esses códigos retornam? Grupo Sala 3

// 1. let numbers =[22, 33, 54, 66, 72]
// console.log(numbers[numbers.length])
// R: Quantidade de elementos dentro do array

// 2. let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
// console.log(grupoDeAmigos[1][0])
// R: Spiderman

// let str = “una string qualquer”
// let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
// console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])
// R: true

// O exercício a seguir é proposto:
// Usando apenas .pop() e .push()
// crie uma função que receba uma matriz de 4 elementos por parâmetro
// retorne uma matriz com os elementos invertidos em sua ordem:
// Então [1,2,3,4]
// retorna [4,3,2,1]


function matrizInvertida (array){
    arrayInvertido = [];
    arrayInvertido.push(array.pop());
    arrayInvertido.push(array.pop());
    arrayInvertido.push(array.pop());
    arrayInvertido.push(array.pop());
    console.log(arrayInvertido);
}

// teste = [1,2,3,4]
// matrizInvertida (teste)


// somarArray()
// Neste exercício, você criará uma função somarArray() que aceita um array de números e retorna a soma de todos eles.

function somarArray(array2) {
    soma = 0;
    for (var i=0; i<(array2.length); i++)
    {
        soma += array2[i];
    }
    console.log (soma)
}

// teste = [1,2,3,4]

// console.log(teste.length)

// somarArray(teste)


// Simulação Array.join()
// Neste exercício, você criará uma função chamada join que recebe um array e simula o comportamento do método Array.join().

let join = (["o", "l", "á"]);

console.log(join.join(''))

join = (["t","c","h","a","u"])

console.log(join.join(''))
