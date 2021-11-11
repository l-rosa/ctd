-- Criar e usar o Banco de Dados
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS cardapio;
USE cardapio;

-- -----------------------------------------------------
-- Tabela cardapio.categorias

CREATE TABLE IF NOT EXISTS cardapio.categorias (
idCategoria INT(11) NOT NULL AUTO_INCREMENT,
nome VARCHAR(20) NULL,
url_imagem VARCHAR(250) NULL,
PRIMARY KEY (idCategoria));


-- -------------------------------------------
-- -----------------------------------------------------
-- Tabela cardapio.produtos

CREATE TABLE IF NOT EXISTS cardapio.produtos (
idProduto INT NOT NULL AUTO_INCREMENT,
idCategoria INT NOT NULL,
nome VARCHAR(100) NULL,
descricao VARCHAR(300) NULL,
imagem VARCHAR(250) NULL,
valor DECIMAL(5,2) NULL,
PRIMARY KEY (idProduto),
CONSTRAINT FKId_Cat
FOREIGN KEY  (idCategoria)
REFERENCES cardapio.categorias(idCategoria));
-- -----------------------------------------------------
-- Tabela cardapio.clientes

CREATE TABLE IF NOT EXISTS cardapio.clientes (
idCliente INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(50) NULL,
sobrenome VARCHAR(100) NULL,
cpf CHAR NULL,
nrCelular CHAR(15) NULL,
email VARCHAR(150) NULL,
PRIMARY KEY (idCliente));
  
  -- -----------------------------------------------------
-- Tabela cardapio.pedidos

CREATE TABLE IF NOT EXISTS cardapio.pedidos (
idPedido INT NOT NULL AUTO_INCREMENT,
idProduto INT NOT NULL,
idCliente INT NOT NULL,
quantidade INT NULL,
precoTotal DECIMAL(7,2) NULL,
PRIMARY KEY (idPedido),
CONSTRAINT FKId_Prod
FOREIGN KEY  (idProduto)
REFERENCES cardapio.produtos(idProduto),
CONSTRAINT FKId_Cli
FOREIGN KEY  (idCliente)
REFERENCES cardapio.clientes(idCliente));
-- -----------------------------------------------------
-- Tabela cardapio.vendas

CREATE TABLE IF NOT EXISTS cardapio.vendas (
idVenda INT(11) NOT NULL AUTO_INCREMENT,
idPedido int NOT NULL,
data_atual DATE,
hora_atual TIME,
Total DECIMAL(7,2) NULL,
PRIMARY KEY (idVenda),
CONSTRAINT FKId_Ped
FOREIGN KEY  (idPedido)
REFERENCES cardapio.pedidos(idPedido));

INSERT INTO categorias (nome, url_imagem)
VALUE ('Comida Baiana', 'https://fr.toluna.com/dpolls_images/2017/11/26/45e90738-5254-4754-8b54-1cae51bffac2_x365.jpg');

INSERT INTO categorias (nome, url_imagem)
VALUE ('Bebida Baiana', 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2157&q=80
');

SELECT * FROM categorias