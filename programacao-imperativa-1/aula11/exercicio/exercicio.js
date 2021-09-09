// 1 & 2)

let filmes1 = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]

// function converterParaMaiusculas(array){
//     array[0] = array[0].toUpperCase()
//     array[1] = array[1].toUpperCase()
//     array[2] = array[2].toUpperCase()
//     array[3] = array[3].toUpperCase()
//     array[4] = array[4].toUpperCase()
//     return array;
// }

function converterParaMaiusculas(array){
    for (i=0; i<array.length; i++){
        array[i] = array[i].toUpperCase();
    }
    return array;
}

// console.log(converterParaMaiusculas (filmes1));

// 3)

let filmes2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

// function passagemDeElementos(array1,array2){
//     array1.push(array2.pop().toUpperCase())
//     array1.push(array2.pop().toUpperCase())
//     array1.push(array2.pop().toUpperCase())
//     array1.push(array2.pop().toUpperCase())
//     array1.push(array2.pop().toUpperCase())
//     return array1;
// }

function passagemDeElementos(array1,array2){
    while (array2 != ""){
        array1.push(array2.pop().toUpperCase())
    }
    return array1;
}

// console.log(passagemDeElementos(converterParaMaiusculas (filmes1),filmes2))

// 4)

function passagemDeElementos2(array1,array2){
    while (array2 != ""){
        array1.push(array2.pop().toUpperCase())
    }

    let variavel_removida = array1.pop()

    return array1;
}

console.log(passagemDeElementos2(converterParaMaiusculas (filmes1),filmes2))

// 5) 