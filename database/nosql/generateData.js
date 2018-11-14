const DateGenerator = require('random-date-generator');
const faker = require('faker');

var listingCount = 1;
var reviewCount = 1;

module.exports.reviewCollection = () => {
  console.time('writeMongo');
  
  var dataArray = [];
  
  for (var i = 0; i < 10000; i++) {
    var listing = {};
    listing.l_id = listingCount;
    listing.description = faker.lorem.words();
  
    let startDate = new Date(2014, 1, 1);
    let endDate = new Date(2018, 12, 31);
    let randomDate = DateGenerator.getRandomDateInRange(startDate, endDate);
    let stringRandomDate = JSON.stringify(randomDate);
    let shortRandomDate = stringRandomDate.slice(1, 11);
  
    let newReview = {
      rid: reviewCount,
      listingChild: listing,
      bookings_id: 1,
      // userChild: user,
      // bookingChild: booking,
      bookings_id: Math.floor(Math.random() * (10000001 - 1 + 1)) + 1,
      review_date: shortRandomDate,
      review: faker.lorem.paragraph(),
      accuracy: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
      communication: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
      cleanliness: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
      location: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
      check_in: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
      value: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
    }
    dataArray.push(newReview);
    listingCount++;
    reviewCount++;
  }
  console.timeEnd('writeMongo');
  return dataArray;
}

