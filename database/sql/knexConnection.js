// Initial draft set up of knex // not yet set up
const pg = require('pg');

var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : 'ec2-18-223-209-234.us-east-2.compute.amazonaws.com',
    user     : 'postgres',
    password : '0237100t',  
    database : 'staybnb_knex',
  }
  // connection: 'postgres://10.380:5432'
});

module.exports = knex;