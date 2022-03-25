// Importando o framework
import express from "express";
import database from './database/sqlite-db.js';
import clienteController from "./controllers/cliente-controller.js";
const app = express()
app.use(express.json())
clienteController(app,database)
export default app
