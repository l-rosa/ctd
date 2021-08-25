// Room 10

// Lucas Augusto Figueiredo Rosa
// João Gimenes
// Vanessa Bressan
// Matheus Silva Pinto
// Manuel Pinero

// 1. Crie uma função podeSubir() que receba dois parâmetros: 
// altura da pessoa;
// se está acompanhada.

// Deve retornar um valor booleano (TRUE, FALSE) que indique se a pessoa pode subir ou não, baseado nas seguintes condições:
// A pessoa deve medir mais de 1.40m e menos de 2 metros.
// Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
// Se a pessoa medir menos de 1.20m, não poderá subir, nem acompanhada.

function podeSubir1 (altura, acompanhada){

    if (altura>1.4 && altura<2){
        return true;
    }
    else if (altura<1.4 && altura>1.2 && acompanhada===true){
        return true;
    }
    // else if (altura < 1.2){
    //     return false;  
    // }
    else{
        return false;
    }
}

//Testes
// console.log(podeSubir2(2.5,true))
// console.log(podeSubir2(2.5,false))
// console.log(podeSubir2(1.5,true))
// console.log(podeSubir2(1.5,false))
// console.log(podeSubir2(1.3,true))
// console.log(podeSubir2(1.3,"nao"))
// console.log(podeSubir2(1.3,false))
// console.log(podeSubir2(0.5,true))
// console.log(podeSubir2(0.5,false))

// 2. Modifique a função podeSubir(), de modo que ela exiba uma 
// mensagem de autorização ou de impedimento no acesso ao brinquedo 
// dependendo se a pessoa se enquadra ou não nas condições do exercício anterior.
// Por exemplo:
// Em caso de autorização, exiba a mensagem: “Acesso autorizado” ou “Acesso autorizado somente com acompanhante”;
// Em caso de impedimento, exiba a mensagem: “Acesso negado.”

function podeSubir2 (altura, acompanhada){

    if (altura>1.4 && altura<2){
        console.log("Acesso Autorizado: ")
        return true;
    }
    else if (altura<1.4 && altura>1.2 && acompanhada===true){
        console.log("Acesso autorizado somente com acompanhante: ")
        return true;
    }
    // else if (altura < 1.2){
    //     return false;  
    // }
    else{
        console.log("Acesso negado: ")
        return false;
    }
}

//Testes
// console.log(podeSubir2(2.5,true))
// console.log(podeSubir2(2.5,false))
// console.log(podeSubir2(1.5,true))
// console.log(podeSubir2(1.5,false))
// console.log(podeSubir2(1.3,true))
// console.log(podeSubir2(sim,"nao"))
// console.log(podeSubir2(1.3,false))
// console.log(podeSubir2(0.5,true))
// console.log(podeSubir2(0.5,false))