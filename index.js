// main 
// Carica le variabili d'ambiente
require('dotenv').config();

// import express
const express = require('express');
const app = express();
const routes = require('./src/route/route');
const port = process.env.PORT || 3000;

// Importa la connessione al database
const sequelize = require('./src/connection/db');

app.use(express.json()); // Per parsare il body delle richieste JSON
app.use('/api', routes);

// Avvia il server
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});