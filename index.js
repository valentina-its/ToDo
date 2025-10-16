// main 
// import express
const express = require('express');
const app = express();
const routes = require('./src/route/route');
const port = 3000;

app.use(express.json()); // Per parsare il body delle richieste JSON
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});