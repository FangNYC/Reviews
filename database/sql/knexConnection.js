const config = require("./dbConfig.js");

const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: config.user,
    password: config.password,
    database: "staybnb_knex"
  }
});

module.exports = knex;
