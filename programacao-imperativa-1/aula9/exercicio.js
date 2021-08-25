// Lucas Augusto Figueiredo Rosa
//
// 1 - Escreva uma função utilizando uma estrutura básica de IF/ELSE que verifique uma senha. 
//      A senha válida é o número 1234. Devem ser impressas as seguintes mensagens:
// 	- ACESSO PERMITIDO caso a senha seja válida.
// 	- ACESSO NEGADO caso a senha seja inválida.

function verificaSenha (senha){
    if (senha === 1234){
        console.log("ACESSO PERMITIDO")
    }
    else{
        console.log("ACESSO NEGADO")
    }
}
	
// 2 - Escreva uma função utilizando a estrutura IF/ELSE-IF/ELSE que receba dois inteiros e 
//     diga qual deles é o maior, qual deles é menor OU se são iguais.

function maior (num1, num2){
    if (num1>num2){
        console.log('O número '+ num1 + ' é maior que o número '+ num2)
    }
    else if (num2>num1){
        console.log('O número '+ num2 + ' é maior que o número '+ num1)
    }
    else{
        console.log('Os números são iguais.')
    }
}

maior (9,8)

// 3 - Escreva um programa utilizando a estrutura de switch que imprima o mês de acordo com o número fornecido.
// 	- Exemplo: quando envio o número 9, o retorno será: 'SETEMBRO'

let mes=120;
switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Opção Inválida");
}

// 4 - Reescreva função do exercício 1, utilizando o operador ternário.

function verificaSenha2 (senha2){
    senha2 === 1234 ? console.log("ACESSO PERMITIDO") : console.log("ACESSO NEGADO")
}

// Olá, você foi contratado para executar este projeto. É importante que você analise, 
// entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida 
// com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. 
// - Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

function microondas (Item,tempo){

    let nomeDoItem = ["Pipoca", "Macarrão", "Carne", "Feijão", "Brigadeiro"]

    switch (Item) {
        case 1:
            if (tempo < 10){
                console.log("Tempo Insuficiente para o item: ", nomeDoItem[Item-1])
            }
            else if (tempo > 30){
                console.log("kabumm")
            }
            else if (tempo > 20){
                console.log("A comida queimou.")
            }
            else {
                console.log("Prato:", nomeDoItem[Item-1], ", pronto, bom apetite!!!")
            }
            break;
        case 2:
            if (tempo < 8){
                console.log("Tempo Insuficiente para o item: ", nomeDoItem[Item-1])
            }
            else if (tempo > 24){
                console.log("kabumm")
            }
            else if (tempo > 16){
                console.log("A comida queimou.")
            }
            else {
                console.log("Prato:", nomeDoItem[Item-1], ", pronto, bom apetite!!!")
            }
            break;
        case 3:
            if (tempo < 15){
                console.log("Tempo Insuficiente para o item: ", nomeDoItem[Item-1])
            }
            else if (tempo > 45){
                console.log("kabumm")
            }
            else if (tempo > 30){
                console.log("A comida queimou.")
            }
            else {
                console.log("Prato:", nomeDoItem[Item-1], ", pronto, bom apetite!!!")
            }
            break;
        case 4:
            if (tempo < 12){
                console.log("Tempo Insuficiente para o item: ", nomeDoItem[Item-1])
            }
            else if (tempo > 36){
                console.log("kabumm")
            }
            else if (tempo > 24){
                console.log("A comida queimou.")
            }
            else {
                console.log("Prato:", nomeDoItem[Item-1], "pronto, bom apetite!!!")
            }
            break;
        case 5:
            if (tempo < 8){
                console.log("Tempo Insuficiente para o item: ", nomeDoItem[Item-1])
            }
            else if (tempo > 24){
                console.log("kabumm")
            }
            else if (tempo > 16){
                console.log("A comida queimou.")
            }
            else {
                console.log("Prato:", nomeDoItem[Item-1], ", pronto, bom apetite!!!")
            }
            break;
        default:
            console.log("Prato inexistente")
    }
}