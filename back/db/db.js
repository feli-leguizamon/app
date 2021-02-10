const Sequelize = require('sequelize');

const db = new Sequelize("postgres://localhost:5432/demo-react", {
    logging: false, // set to console.log to see the raw SQL queries
    operatorsAliases: Sequelize.Op, // set operators
  });

module.exports = db