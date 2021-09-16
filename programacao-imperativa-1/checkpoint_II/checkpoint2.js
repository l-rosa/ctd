//1.
// function soma(a=1, b=3)
// {return a+b;}

// console.log(soma())
// console.log(soma(3))
// console.log(soma(1,2))

//3.
// let numeros = [10, 8, 7, 99, 0, 1, 6]
// console.log(numeros.sort(function(a,b){ return b-a;}))

//4.
// var z=0;
// for (var i=20; i<50; i+=10){
//     z+=i;
// }
// console.log(z)

//7.
// linha 1: Cria um array com nome frutasAmarelas
// linha 2: Cria um array com nome frutasVermelhas
// linha 3: Cria um array contendo frutasVerdes
// linha 5: Atribui a um novo array de nome frutasVermelhas1, o array frutasVermelhas convertido para Caixa Alta (Upper Case)
// linha 6: reúne num array de nome todasFrutas, os conteúdos dos arrays: frutasAmarelas, frutasVermelhas1 e frutasVerdes em sequência
// linha 7: Exibe no console o novo array criado no passo anterior todasFrutas.

// let frutasAmarelas=['Melão','Mamão','Limão siciliano'];
// let frutasVermelhas=['Morango', 'Cereja', 'Maça red'];
// let frutasVerdes=['Limão', 'Kiwi', 'Maçã verde'];

// frutasVermelhas1=frutasVermelhas.map(fruta => fruta.toUpperCase());
// console.log(frutasVermelhas1)
// let todasFrutas=[...frutasAmarelas,...frutasVermelhas1,...frutasVerdes];
// console.log(todasFrutas);

//8.
// readFileSync(): função que realiza a abertura e leitura de arquivo conforme a rota e condificação como parâmetros
// writeFileSync(): função que realiza a abertura e escrita de arquivo conforme a rota/nome do arquivo e caracteres a serem inseridos, apagando seu conteúdo inicial
// appendFileSync(): função que realiza a abertura e escrita de arquivo conforme a rota/nome do arquivo e caracteres a serem inseridos, continuando a escrita a partir do finally, sem apága-lo

//9.
// let valor=5;
// let fatorial=1;
// for (let i = valor; i > 1; i--) {
//     fatorial*=i;
// }
// console.log("Fatorial = "+fatorial);

// 10.
// let frutasAmarelas=['Melão','Mamão','Limão'];
// let [fruta1,fruta2,fruta3]= frutasAmarelas;

// console.log(fruta1)
// console.log(fruta2)
// console.log(fruta3)
// console.log(frutasAmarelas)

//13.
// let x=5;
// let y = x++ + ++x;
// console.log ("y= "+y);
// x=3;
// y=x*(x + 1)*x++;
// x=5;
// y=3
// y*= x+1
// console.log ("y= "+x);
// console.log ("y= "+y);

//15.
// for (var i=0; i<50; i+=10){
//     console.log(i);
// }
// console.log(i);

//17.
// let x=50;
// let resto=50%2;
// resposta = resto ==0? 'Par':'Impar';
// console.log(resposta);

// formulário de resposta entregue:
// https://docs.google.com/forms/d/e/1FAIpQLSd5dqxXPgPfwaHfGwHENk3D1Ob3zT-UdSz8QEIizo9RIKwGWg/viewscore?viewscore=AE0zAgAZGy-o3raUhudgQgJ4wrDpBcFw-aJwaH7w24igzjthwtg4CZ_eazgV3dWW8uSus6Q