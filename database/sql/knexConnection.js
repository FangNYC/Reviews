// Initial draft set up of knex // not yet set up
const pg = require('pg');

var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : 'ec2-18-224-56-58.us-east-2.compute.amazonaws.com',
    user     : 'postgres',
    password : '0237100t',  
    database : 'staybnb_knex',
  }
});

module.exports = knex;