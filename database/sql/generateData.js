const DateGenerator = require('random-date-generator');
const faker = require('faker');

let listingArray = [];
for (var i = 1; i < 1001; i++) {
  listingArray.push({
    description: faker.lorem.words()
  });
}

let userArray = [];
for (var i = 1; i < 1001; i++) {
  userArray.push({
    username: faker.internet.userName(),
    display_name: faker.name.firstName(),
    photo_url: faker.image.imageUrl(),
    profile_url: faker.internet.url()
  })
}

let bookingArray = [];
for (var i = 1; i < 10001; i++) {
  let startDate = new Date(2014, 1, 1);
  let endDate = new Date(2018, 12, 31);
  let days = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
  // define random start and end dates for the stay
  let randomStartDate = DateGenerator.getRandomDateInRange(startDate, endDate);
  let randomEndDate = new Date(randomStartDate);
  randomEndDate.setDate(randomEndDate.getDate() + days);
  let stringRandomStartDate = JSON.stringify(randomStartDate);
  let stringRandomEndDate = JSON.stringify(randomEndDate);
  let shortRandomStartDate = stringRandomStartDate.slice(1, 11);
  let shortRandomEndDate = stringRandomEndDate.slice(1, 11);
  
  let randomListingsId = Math.floor(Math.random() * (1000000 - 1 + 1)) + 1;
  let randomUsersId = Math.floor(Math.random() * (1000000 - 1 + 1)) + 1;
  
  bookingArray.push({
    listings_id: randomListingsId,
    users_id: randomUsersId,
    stay_start: shortRandomStartDate,
    stay_end: shortRandomEndDate
  })
}

let reviewArray = [];
for (var i = 1; i < 10001; i++) {
  let startDate = new Date(2014, 1, 1);
  let endDate = new Date(2018, 12, 31);
  let randomDate = DateGenerator.getRandomDateInRange(startDate, endDate);
  let stringRandomDate = JSON.stringify(randomDate);
  let shortRandomDate = stringRandomDate.slice(1, 11);

  reviewArray.push({
    bookings_id: Math.floor(Math.random() * (10000001 - 1 + 1)) + 1,
    review_date: shortRandomDate,
    review: faker.lorem.paragraph(),
    accuracy: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
    communication: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
    cleanliness: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
    location: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
    check_in: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
    value: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
  })
}

exports.bulkListings = listingArray;
exports.bulkUsers = userArray;
exports.bulkBookings = bookingArray;
exports.bulkReviews = reviewArray;