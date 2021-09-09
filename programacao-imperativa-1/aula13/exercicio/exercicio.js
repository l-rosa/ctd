
// ****************** tópico 2.
// let Banco = {
//     titular: 'Abigael Natte',
//     // this.titular.sobreNome = 
//     numeroDaConta: 5486273622,
//     tipoDaConta: 'Conta Corrente',
//     saldo: 27771
// };

// console.log (Banco.titular)


// ****************** tópico 3.
// function Banco (Titular, numeroDaConta, tipoDaConta, saldo) {
//     this.titular = {
//         nomeCompleto: Titular,
//         sobreNome: Titular.split(' ')[1],
//         nome: Titular.split(' ')[0]
//     };
//     this.numeroDaConta = numeroDaConta;
//     this.tipoDaConta = tipoDaConta;
//     this.saldo = saldo;
// };


// ****************** tópico 4.
// let cliente1 = new Banco ('Abigael Natte',5486273622,'Conta Corrente',27771)
// let cliente2 = new Banco ('Ramon Connell',1183971869,'Conta Poupança',8675)
// let cliente3 = new Banco ('Jarret Lafuente',9582019689,'Conta Poupança',27363)
// let cliente4 = new Banco ('Ansel Ardley',1761924656,'Conta Poupança',32415)
// let cliente5 = new Banco ('Jacki Shurmer',7401971607,'Conta Poupança',18789)
// let cliente6 = new Banco ('Jobi Mawtus',630841470,'Conta Corrente',28776)
// let cliente7 = new Banco ('Thomasin Latour',4223508636,'Conta Corrente',2177)
// let cliente8 = new Banco ('Lonnie Verheijden',185979521,'Conta Poupança',25994)
// let cliente9 = new Banco ('Alonso Wannan',3151956165,'Conta Corrente',7601)
// let cliente10 = new Banco ('Bendite Huggett',2138105881,'Conta Poupança',33196)

// console.log (cliente1);

// ****************** tópico 5.

// function Banco (Titular, numeroDaConta, tipoDaConta, saldo) {
//     this.clientes = {
//         titular: {
//             nomeCompleto: Titular,
//             sobreNome: Titular.split(' ')[1],
//             nome: Titular.split(' ')[0],
//         },
//         numeroDaConta: numeroDaConta,
//         tipoDaConta: tipoDaConta,
//         saldo: saldo,
//     }
// };

// let banco = [{}]

// let cliente = new Banco ('Abigael Natte',5486273622,'Conta Corrente',27771)
// banco.push(cliente)
// cliente = new Banco ('Ramon Connell',1183971869,'Conta Poupança',8675)
// banco.push(cliente)
// cliente = new Banco ('Jarret Lafuente',9582019689,'Conta Poupança',27363)
// banco.push(cliente)
// cliente = new Banco ('Ansel Ardley',1761924656,'Conta Poupança',32415)
// banco.push(cliente)
// cliente = new Banco ('Jacki Shurmer',7401971607,'Conta Poupança',18789)
// banco.push(cliente)
// cliente = new Banco ('Jobi Mawtus',630841470,'Conta Corrente',28776)
// banco.push(cliente)
// cliente = new Banco ('Thomasin Latour',4223508636,'Conta Corrente',2177)
// banco.push(cliente)
// cliente = new Banco ('Lonnie Verheijden',185979521,'Conta Poupança',25994)
// banco.push(cliente)
// cliente = new Banco ('Alonso Wannan',3151956165,'Conta Corrente',7601)
// banco.push(cliente)
// cliente = new Banco ('Bendite Huggett',2138105881,'Conta Poupança',33196)
// banco.push(cliente)


// // console.log (cliente);
// console.log (banco[3].clientes.titular.nomeCompleto);

// ****************** tópico 6.
// function Banco (Titular, numeroDaConta, tipoDaConta, saldo) {
//     this.clientes = {
//         titular: {
//             nomeCompleto: Titular,
//             sobreNome: Titular.split(' ')[1],
//             nome: Titular.split(' ')[0],
//         },
//         numeroDaConta: numeroDaConta,
//         tipoDaConta: tipoDaConta,
//         saldo: saldo,

//         consultarCliente: function (busca) {
//             for (i=1; i<banco.length; i++) {
//                 if (banco[i].clientes.titular.nomeCompleto == busca) {
//                     return i;
//                 }
//             }
//         }
//     }
// };

// let banco = [{}]

// let cliente = new Banco ('Abigael Natte',5486273622,'Conta Corrente',27771)
// banco.push(cliente)
// cliente = new Banco ('Ramon Connell',1183971869,'Conta Poupança',8675)
// banco.push(cliente)
// cliente = new Banco ('Jarret Lafuente',9582019689,'Conta Poupança',27363)
// banco.push(cliente)
// cliente = new Banco ('Ansel Ardley',1761924656,'Conta Poupança',32415)
// banco.push(cliente)
// cliente = new Banco ('Jacki Shurmer',7401971607,'Conta Poupança',18789)
// banco.push(cliente)
// cliente = new Banco ('Jobi Mawtus',630841470,'Conta Corrente',28776)
// banco.push(cliente)
// cliente = new Banco ('Thomasin Latour',4223508636,'Conta Corrente',2177)
// banco.push(cliente)
// cliente = new Banco ('Lonnie Verheijden',185979521,'Conta Poupança',25994)
// banco.push(cliente)
// cliente = new Banco ('Alonso Wannan',3151956165,'Conta Corrente',7601)
// banco.push(cliente)
// cliente = new Banco ('Bendite Huggett',2138105881,'Conta Poupança',33196)
// banco.push(cliente)

// console.log(banco[2].clientes.consultarCliente('Abigael Natte'));

// ****************** tópico 7.
// function Banco (Titular, numeroDaConta, tipoDaConta, saldo) {
//     this.clientes = {
//         titular: {
//             nomeCompleto: Titular,
//             sobreNome: Titular.split(' ')[1],
//             nome: Titular.split(' ')[0],
//         },
//         numeroDaConta: numeroDaConta,
//         tipoDaConta: tipoDaConta,
//         saldo: saldo,

//         consultarCliente: function (busca) {
//             for (i=1; i<banco.length; i++) {
//                 if (banco[i].clientes.titular.nomeCompleto == busca) {
//                     return i;
//                 }
//             }
//         },

//         deposito: function (busca,valor) {
//             for (i=1; i<banco.length; i++) {
//                 if (banco[i].clientes.titular.nomeCompleto == busca) {
//                     banco[i].clientes.saldo += valor;
//                     console.log (banco[i].clientes.titular.nomeCompleto+ ", depósito realizado, seu novo saldo é: " + banco[i].clientes.saldo)
//                     return banco[i].clientes.saldo;
//                 }
//             }
//         }
//     }
// };

// let banco = [{}]

// let cliente = new Banco ('Abigael Natte',5486273622,'Conta Corrente',27771)
// banco.push(cliente)
// cliente = new Banco ('Ramon Connell',1183971869,'Conta Poupança',8675)
// banco.push(cliente)
// cliente = new Banco ('Jarret Lafuente',9582019689,'Conta Poupança',27363)
// banco.push(cliente)
// cliente = new Banco ('Ansel Ardley',1761924656,'Conta Poupança',32415)
// banco.push(cliente)
// cliente = new Banco ('Jacki Shurmer',7401971607,'Conta Poupança',18789)
// banco.push(cliente)
// cliente = new Banco ('Jobi Mawtus',630841470,'Conta Corrente',28776)
// banco.push(cliente)
// cliente = new Banco ('Thomasin Latour',4223508636,'Conta Corrente',2177)
// banco.push(cliente)
// cliente = new Banco ('Lonnie Verheijden',185979521,'Conta Poupança',25994)
// banco.push(cliente)
// cliente = new Banco ('Alonso Wannan',3151956165,'Conta Corrente',7601)
// banco.push(cliente)
// cliente = new Banco ('Bendite Huggett',2138105881,'Conta Poupança',33196)
// banco.push(cliente)

// console.log(banco[2].clientes.deposito('Abigael Natte',500));

// ****************** tópico 8
function Banco (Titular, numeroDaConta, tipoDaConta, saldo) {
    this.clientes = {
        titular: {
            nomeCompleto: Titular,
            sobreNome: Titular.split(' ')[1],
            nome: Titular.split(' ')[0],
        },
        numeroDaConta: numeroDaConta,
        tipoDaConta: tipoDaConta,
        saldo: saldo,

        consultarCliente: function (busca) {
            for (i=1; i<banco.length; i++) {
                if (banco[i].clientes.titular.nomeCompleto == busca) {
                    return i;
                }
            }
        },

        deposito: function (busca,valor) {
            for (i=1; i<banco.length; i++) {
                if (banco[i].clientes.titular.nomeCompleto == busca) {
                    banco[i].clientes.saldo += valor;
                    console.log (banco[i].clientes.titular.nomeCompleto+ ", depósito realizado, seu novo saldo é: " + banco[i].clientes.saldo)
                    return banco[i].clientes.saldo;
                }
            }
        },

        saque: function (busca,valor) {
            for (i=1; i<banco.length; i++) {
                if (banco[i].clientes.titular.nomeCompleto == busca) {
                    banco[i].clientes.saldo -= valor;
                    console.log (banco[i].clientes.titular.nomeCompleto+ ", extração feita com sucesso,, seu novo saldo é: " + banco[i].clientes.saldo)
                    return banco[i].clientes.saldo;
                }
            }
        }
    }
};

let banco = [{}]

let cliente = new Banco ('Abigael Natte',5486273622,'Conta Corrente',27771)
banco.push(cliente)
cliente = new Banco ('Ramon Connell',1183971869,'Conta Poupança',8675)
banco.push(cliente)
cliente = new Banco ('Jarret Lafuente',9582019689,'Conta Poupança',27363)
banco.push(cliente)
cliente = new Banco ('Ansel Ardley',1761924656,'Conta Poupança',32415)
banco.push(cliente)
cliente = new Banco ('Jacki Shurmer',7401971607,'Conta Poupança',18789)
banco.push(cliente)
cliente = new Banco ('Jobi Mawtus',630841470,'Conta Corrente',28776)
banco.push(cliente)
cliente = new Banco ('Thomasin Latour',4223508636,'Conta Corrente',2177)
banco.push(cliente)
cliente = new Banco ('Lonnie Verheijden',185979521,'Conta Poupança',25994)
banco.push(cliente)
cliente = new Banco ('Alonso Wannan',3151956165,'Conta Corrente',7601)
banco.push(cliente)
cliente = new Banco ('Bendite Huggett',2138105881,'Conta Poupança',33196)
banco.push(cliente)

console.log(banco[2].clientes.saque('Abigael Natte',100));