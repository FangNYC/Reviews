/* REMEMBER TO DELETE DROP DATABSE FROM SCHEMA.SQL WHEN EVERYTHING IS WORKING */
const Sequelize = require('sequelize');

const db = new Sequelize('postgres://maria:0237100t@localhost:5432/staybnb1');
db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db;