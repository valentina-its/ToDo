require('dotenv').config();
const { Sequelize } = require('sequelize');

// Configurazione della connessione al database usando le variabili d'ambiente
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

// Funzione per testare la connessione
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connessione al database stabilita con successo.');
  } catch (error) {
    console.error('Impossibile connettersi al database:', error);
  }
};

// Esegui il test della connessione
testConnection();

module.exports = sequelize;
