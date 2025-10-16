const { DataTypes } = require('sequelize');
const sequelize = require('../connection/db');

const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  titolo: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  descrizione: {
    type: DataTypes.STRING(1000),
    allowNull: true
  },
  stato: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  scadenza: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'tasks',
  timestamps: false
});

module.exports = Task;
