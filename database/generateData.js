let DateGenerator = require('random-date-generator');
const faker = require('faker');
const pg = require('pg');

let connectionString = 'postgres://maria:0237100t@localhost:5432/staybnb'
let pgClient = new pg.Client(connectionString);

pgClient.connect();

let startTime = new Date();
for (var i = 1; i < 100001; i++) {
  const value = [faker.lorem.words()];
  const query = 'INSERT INTO listings (name) values($1)';
  pgClient.query(query, value)
    .then(result => {})
    .catch(err => console.error(err))
}

let endTime = new Date();
let timeDiff = Math.abs(endTime.getTime() - startTime.getTime()) / 1000;
console.log(timeDiff);


// let listingArray = [];
// for (var i = 1; i < 100001; i++) {
//   listingArray.push({name: faker.lorem.words()});
// }

// exports.bulkListings = listingArray;