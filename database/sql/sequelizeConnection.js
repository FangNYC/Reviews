const Sequelize = require("sequelize");
const config = require("./dbConfig.js");

const db = new Sequelize(
  `postgres://${config.user}:${config.password}@localhost:5432/staybnb}`
);
db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = db;
