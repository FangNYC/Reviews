const DateGenerator = require("random-date-generator");
const faker = require("faker");

module.exports.createListings = () => {
  let listingArray = [];
  for (var i = 0; i < 1000; i++) {
    listingArray.push({
      listing_description: faker.lorem.words()
    });
  }
  return listingArray;
};

module.exports.createUsers = () => {
  let userArray = [];
  for (var i = 0; i < 1000; i++) {
    userArray.push({
      username: faker.internet.userName(),
      display_name: faker.name.firstName(),
      photo_url: "https://picsum.photos/100/?random&t=" + new Date().getTime(),
      profile_url: faker.internet.url()
    });
  }
  return userArray;
};

module.exports.createBookings = () => {
  let bookingArray = [];
  for (var i = 0; i < 10000; i++) {
    let startDate = new Date(2014, 1, 1);
    let endDate = new Date(2018, 12, 31);
    let days = Math.ceil(Math.random() * 7);
    // define random start and end dates for the stay
    let randomStartDate = DateGenerator.getRandomDateInRange(
      startDate,
      endDate
    );
    let randomEndDate = new Date(randomStartDate);
    randomEndDate.setDate(randomEndDate.getDate() + days);
    let stringRandomStartDate = JSON.stringify(randomStartDate);
    let stringRandomEndDate = JSON.stringify(randomEndDate);
    let shortRandomStartDate = stringRandomStartDate.slice(1, 11);
    let shortRandomEndDate = stringRandomEndDate.slice(1, 11);

    let randomListingsId = Math.ceil(Math.random() * 1000000);
    let randomUsersId = Math.ceil(Math.random() * 1000000);

    bookingArray.push({
      listings_id: randomListingsId,
      users_id: randomUsersId,
      stay_start: shortRandomStartDate,
      stay_end: shortRandomEndDate
    });
  }
  return bookingArray;
};

module.exports.createReviews = () => {
  let reviewArray = [];
  for (var i = 0; i < 1000; i++) {
    let startDate = new Date(2014, 1, 1);
    let endDate = new Date(2018, 12, 31);
    let randomDate = DateGenerator.getRandomDateInRange(startDate, endDate);
    let stringRandomDate = JSON.stringify(randomDate);
    let shortRandomDate = stringRandomDate.slice(1, 11);

    reviewArray.push({
      bookings_id: Math.ceil(Math.random() * 10000000),
      review_date: shortRandomDate,
      review_description: faker.lorem.paragraph(),
      accuracy: Math.ceil(Math.random() * 5),
      communication: Math.ceil(Math.random() * 5),
      cleanliness: Math.ceil(Math.random() * 5),
      location: Math.ceil(Math.random() * 5),
      check_in: Math.ceil(Math.random() * 5),
      value: Math.ceil(Math.random() * 5)
    });
  }
  return reviewArray;
};
