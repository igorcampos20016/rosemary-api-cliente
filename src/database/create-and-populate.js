/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
import sqlite3 from 'sqlite3'
sqlite3.verbose()
// Serve para fixar um caminho do meu database
import { dirname } from'path'
import { fileURLToPath } from 'url'
const filePath = dirname(fileURLToPath(import.meta.url)) + '/database.db'

// Criando o arquivo e/ou abrindo a "conexão" do meu database
const db = new sqlite3.Database(filePath);

//==== Clientes
const CLIENTE_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
    "ID_CLIENTE" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "IDADE" varchar(64),
    "GENERO" varchar(64),
    "CPF" varchar(64),
    "AUTORIZACAO" varchar(64)
  );`;

const ADD_CLIENTE_DATA = `
INSERT INTO CLIENTES (NOME,  IDADE, GENERO, CPF, AUTORIZACAO)
VALUES 
    ('Roberto Oliveira', '25', 'Masculino','11987654265', 'Sim'),
    ('Roberta Oliveira', '23', 'Feminino','11987654265', 'Sim');
    ('Rafael Oliveira', '26', 'Feminino','11987654265', 'Sim');

 `

function criaTabelaClt() {
    db.run(CLIENTE_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de cliente " + error.message);
    });
}

function populaTabelaClt() {
    db.run(ADD_CLIENTE_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de clientes"  + error.message);
    });
}




db.serialize( ()=> {
    criaTabelaClt();
    populaTabelaClt();
});