/* REMEMBER TO DELETE DROP DATABSE FROM SCHEMA.SQL WHEN EVERYTHING IS WORKING */
const Sequelize = require('sequelize');
const config = require('../../config.js');

const db = new Sequelize(`postgres://maria:${config.password}@localhost:5432/${config.database}`);
db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db;