CREATE SCHEMA `spotify`;
USE spotify;

CREATE TABLE usuarios (
usuario_id INT PRIMARY KEY AUTO_INCREMENT,
usuario_nome VARCHAR(45) NOT NULL,
usuario_nascimento DATE NOT NULL,
usuario_sexo VARCHAR(1) NOT NULL,
usuario_email VARCHAR(150) NOT NULL,
usuario_senha VARCHAR(45) NOT NULL
);

CREATE TABLE artistas (
artista_id INT PRIMARY KEY AUTO_INCREMENT,
artista_nome VARCHAR(45) NOT NULL,
artista_sobrenome VARCHAR(100)
);

CREATE TABLE generos (
genero_id INT PRIMARY KEY AUTO_INCREMENT,
genero_tipo VARCHAR(45)
);

CREATE TABLE playlist (
playlist_id INT PRIMARY KEY AUTO_INCREMENT,
playlist_titulo VARCHAR(45),
playlist_qtd_cancoes INT(11),
playlist_data_criacao DATETIME,
usuario_id INT,
CONSTRAINT FKusuarios
FOREIGN KEY (usuario_id)
REFERENCES usuarios(usuario_id)
);

CREATE TABLE albuns(
album_id INT PRIMARY KEY AUTO_INCREMENT,
album_titulo VARCHAR(45),
artista_id INT,
CONSTRAINT FKartista
FOREIGN KEY (artista_id)
REFERENCES artistas(artista_id)
);

CREATE TABLE cancoes (
cancoes_id INT PRIMARY KEY AUTO_INCREMENT,
cancoes_titulo VARCHAR(45),
cancoes_duracao DOUBLE,
cancoes_qtd_reproducao INT,
cancoes_qtd_likes INT,
album_id INT,
CONSTRAINT FKalbum
FOREIGN KEY (album_id)
REFERENCES albuns(album_id)
);

CREATE TABLE playlist_cancao (
playlist_cancao_id INT AUTO_INCREMENT PRIMARY KEY,
cancoes_id INT,
playlist_id INT,
CONSTRAINT FKcancoes
FOREIGN KEY (cancoes_id)
REFERENCES cancoes(cancoes_id),
CONSTRAINT FKplaylist
FOREIGN KEY (playlist_id)
REFERENCES playlist(playlist_id)
);

CREATE TABLE genero_cancoes (
genero_cancao_id INT PRIMARY KEY AUTO_INCREMENT,
cancoes_id INT,
genero_id INT,
CONSTRAINT FKcancao
FOREIGN KEY (cancoes_id)
REFERENCES cancoes(cancoes_id),
CONSTRAINT FKgenero
FOREIGN KEY (genero_id)
REFERENCES generos(genero_id)
);

INSERT INTO usuarios ();


/*
Alcilene Reis
Rafael Camargo
Lucas A Figueiredo
Matheus Rodrigues
Rodolfo Alves
Eduardo Russo
*/




