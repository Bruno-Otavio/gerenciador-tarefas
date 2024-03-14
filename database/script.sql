DROP DATABASE IF EXISTS gerenciador_tarefas;
CREATE DATABASE gerenciador_tarefas;
USE gerenciador_tarefas;

CREATE TABLE Usuarios(
    id integer primary key not null auto_increment,
    nome varchar(50) not null,
    email varchar(50) unique not null,
    senha varchar(100) not null
);

CREATE TABLE Tarefas(
    id integer primary key not null auto_increment,
    descricao varchar(100),
    data_vencimento datetime,
    status_tarefa varchar(25) not null,
    id_usuario integer not null
);

ALTER TABLE Tarefas ADD FOREIGN KEY (id_usuario) REFERENCES Usuarios(id);
