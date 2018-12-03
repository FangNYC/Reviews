// Initial draft set up of knex // not yet set up
const pg = require('pg');

var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : '3.16.27.159',
    user     : 'postgres',
    password : '0237100t',  
    database : 'staybnb_knex',
  }
  // connection: 'postgres://10.380:5432'
});

module.exports = knex;