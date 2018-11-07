let DateGenerator = require('random-date-generator');
DateGenerator.getRandomDate(); // random date

let startDate = new Date(2017, 2, 2);
let endDate = new Date(2017, 3, 3);
let dateTime = JSON.stringify(DateGenerator.getRandomDateInRange(startDate, endDate)); // random date in range
let date = dateTime.slice(1, 11);
