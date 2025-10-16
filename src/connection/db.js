const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todo', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
