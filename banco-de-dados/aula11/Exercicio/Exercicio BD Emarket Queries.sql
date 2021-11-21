/* Grupo 6
Alcilene Pereira Reis
Murillo Zuffo
Juliana Silva
Lucas A Figueiredo Rosa
Wesley Claudinei Lubke
*/

USE emarket;

/*1) Queremos ter uma lista de todas as categorias.*/

SELECT * FROM categorias;

/*2) Como as categorias não possuem imagens, você está interessado em obter apenas um Nome e descrição da lista de categorias.*/

SELECT CategoriaNome, Descricao FROM categorias;

/*3) Obtenha uma lista dos produtos.*/

SELECT * FROM produtos;

/*4) Existem produtos descontinuados? (Descontinuado = 1).*/

SELECT * FROM produtos WHERE Descontinuado LIKE 1;

/*5) Na sexta-feira, você deve se reunir com o fornecedor nr. 8. Quais são os produtos que eles fornecem?*/

SELECT * FROM produtos WHERE ProvedorID LIKE 8;

/*6) Queremos saber todos os produtos cujo preço unitário se encontra entre 10 e 22.*/

SELECT ProdutoID, ProdutoNome, ProvedorID, PrecoUnitario FROM produtos WHERE PrecoUnitario BETWEEN 10 AND 22;

/*7) Fica definido que um produto deve ser solicitado ao fornecedor se suas unidades em estoque forem inferiores ao nível de reabastecimento. Existem produtos a solicitar?*/

SELECT ProdutoID, ProdutoNome, ProvedorID, PrecoUnitario, UnidadesEstoque, NivelReabastecimento FROM produtos WHERE UnidadesEstoque < NivelReabastecimento;

/*8) Você quer saber todos os produtos da lista anterior, mas que as unidades pedidas sejam iguais a zero.*/

SELECT ProdutoID, ProdutoNome, ProvedorID, PrecoUnitario, UnidadesEstoque, NivelReabastecimento, UnidadesPedidas FROM produtos WHERE UnidadesEstoque < NivelReabastecimento AND UnidadesPedidas LIKE 0; 

/* CLIENTES */

/*1)Obtenha uma lista de todos os clientes com contato, empresa, cargo, País. Classifique a lista por país.*/

SELECT * FROM clientes ORDER BY PAIS ASC;

/*2)Queremos atender todos os clientes que possuem o título de  “Proprietário". Esse título estará em inglês (Owner).*/

SELECT * FROM clientes WHERE Titulo LIKE 'Owner';

/*3) A operadora de telefonia atendeu um cliente e não lembra o nome dele. Sabe apenas que começa com "C". Podemos ajudá-lo a obter uma lista com todos os contatos que começam com a letra C?*/

SELECT * FROM clientes WHERE Contato LIKE 'C%';

/*FATURAS*/

/* 1) Obtenha uma lista de todas as faturas, ordenadas por data da fatura em ordem ascendente. */

SELECT * FROM faturas ORDER BY DataFatura ASC;

/* 2) Agora é necessário uma lista de faturas com o país de envio "EUA" e que a FormaeEnvio seja diferente de 3.*/

SELECT * FROM faturas WHERE PaisEnvio LIKE 'USA' AND FormaEnvio != 3;

/* 3) O cliente 'GOURL' fez um pedido? 
SIM, 9 pedidos.
*/

SELECT * FROM faturas WHERE ClienteID LIKE 'GOURL';

/* 4) Você deseja visualizar todas as faturas dos funcionários 2, 3, 5, 8 e 9.*/

SELECT * FROM faturas WHERE EmpregadoID LIKE 2 OR EmpregadoID LIKE 3 OR EmpregadoID LIKE 5 OR EmpregadoID LIKE 8 OR EmpregadoID LIKE 9;

/* Queries I - Parte II */

/* Produtos */

/* 1) Obtenha a lista de todos os produtos em ordem decrescente por preço unitário. */

SELECT * FROM produtos ORDER BY PrecoUnitario DESC;

/* 2) Obtenha a lista dos 5 melhores produtos cujo preço unitário é o mais "Caro". */

SELECT * FROM produtos ORDER BY PrecoUnitario DESC LIMIT 5;

/* 3) Obtenha um top 10 dos produtos com mais unidades em estoque. */

SELECT * FROM produtos ORDER BY UnidadesEstoque DESC LIMIT 10;

/* DetalheFatura */

/* 1) Obtenha uma lista de FaturaId, Produto, Quantidade.  */

SELECT FaturaID, ProdutoID, Quantidade FROM detalhefatura;

/* 2) Classifique a lista acima por Quantidade decrescente. */

SELECT FaturaID, ProdutoID, Quantidade FROM detalhefatura ORDER BY Quantidade DESC;

/* 3) Filtre a mesma lista apenas para os produtos cuja quantidade esteja entre 50 e 100. */

SELECT FaturaID, ProdutoID, Quantidade FROM detalhefatura WHERE Quantidade BETWEEN 50 AND 100;

/* 4) Em outra nova consulta, obtenha uma lista com os seguintes nomes de coluna: Número da fatura (FaturaId), Produto (ProdutoId), Total (Preço Unitário * Quantidade) */

SELECT FaturaID as 'Número da fatura', ProdutoID as 'Produto', Quantidade*PrecoUnitario as 'Total' FROM detalhefatura;



SELECT * FROM detalhefatura;
SELECT detalhefatura.FaturaID, detalhefatura.ProdutoID, produtos.ProdutoNome, detalhefatura.PrecoUnitario, detalhefatura.Quantidade, detalhefatura.Desconto FROM detalhefatura INNER JOIN produtos ON detalhefatura.ProdutoID = produtos.ProdutoID ORDER BY detalhefatura.FaturaID;
SELECT * FROM produtos WHERE ProdutoID LIKE 21;

