// Initial draft set up of knex // not yet set up
const pg = require('pg');

var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : 'localhost',
    user     : 'maria',
    password : '0237100t',  
    database : 'staybnb_knex',
  }
});

module.exports = knex;