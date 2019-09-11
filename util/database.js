const Sequelize = require('sequelize');

const sequelize = new Sequelize('dS2ts95hNp', 'dS2ts95hNp', 'BijOOTiQbT', {
  dialect: 'mysql',
  host: 'remotemysql.com'
});

module.exports = sequelize;
