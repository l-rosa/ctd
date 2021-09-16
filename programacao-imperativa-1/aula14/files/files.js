
// criar customers.txt -> a partir do texto
// importar o módulo de gerenciamento de arquivo: fs nativo do node
const fs = require ('fs');

// módulo nativo, npm init para iniciar um projeto node
// npm install para criar a referencia nativa do node

// console.log(fs.readFileSync(_dirname + '/texto.txt' ))

let customers = fs.readFileSync('./customers.txt', 'utf-8')

console.log(customers)