// Testing out Knex - not fully set up yet

var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : 'localhost',
    user     : 'maria',
    password : '0237100t',
    database : 'reviews',
  }
});

var pg = require('knex')({
  client: 'pg',
  // connection: process.env.PG_CONNECTION_STRING,
  // searchPath: ['knex', 'public'],
})