// main 
// Carica le variabili d'ambiente

require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./src/route/route');
const port = process.env.PORT || 3000;

// Database connection
const sequelize = require('./src/connection/db');

// Middleware
app.use(express.json());
app.use('/api', routes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});