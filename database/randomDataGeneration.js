let DateGenerator = require('random-date-generator');
const loremIpsum = require('lorem-ipsum');

let bookings_id = Math.floor(Math.random() * 100);

DateGenerator.getRandomDate();
let startDate = new Date(2018, 1, 1);
let endDate = new Date(2018, 12, 31);
let dateTime = JSON.stringify(DateGenerator.getRandomDateInRange(startDate, endDate));
let date = dateTime.slice(1, 11);

let review = loremIpsum({
  count: 1,
  units: 'paragraphs',
  sentenceLowerBound: 5,
  sentenceUpperBound: 15,
  paragraphLowerBound: 1,
  paragraphUpperBound: 10,      
})
let accuracy = Math.floor(Math.random() * 6);
let communication = Math.floor(Math.random() * 6);
let cleanliness = Math.floor(Math.random() * 6);
let location = Math.floor(Math.random() * 6);
let checkIn = Math.floor(Math.random() * 6);
let value = Math.floor(Math.random() * 6);

