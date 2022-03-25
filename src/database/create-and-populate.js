
import sqlite3 from 'sqlite3'
sqlite3.verbose()
// Serve para fixar um caminho do meu database
import { dirname } from'path'
import { fileURLToPath } from 'url'
const filePath = dirname(fileURLToPath(import.meta.url)) + '/database.db'


const db = new sqlite3.Database(filePath);

//==== Clientes
const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "IDADE" varchar(64),
    "GENERO" varchar(64),
    "CPF" varchar(64),
    "AUTORIZACAO" varchar(64)
  );`;

const ADD_CLIENTES_DATA = `
INSERT INTO CLIENTES (NOME,  IDADE, GENERO, CPF, AUTORIZACAO)
VALUES 
    ('Roberto Oliveira', '25', 'Masculino','11987654265', 'Sim'),
    ('Roberta Oliveira', '23', 'Feminino','11987654265', 'Sim');
   

 `

function criaTabelaClt() {
    db.run(CLIENTES_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de cliente " + error.message);
    });
}

function populaTabelaClt() {
    db.run(ADD_CLIENTES_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de clientes"  + error.message);
    });
}




db.serialize( ()=> {
    criaTabelaClt();
    populaTabelaClt();
});