const schema = require('./schema.js');
const Listing = schema.listingSchema;
const User = schema.userSchema;
const Booking = schema.bookingSchema;
const Review = schema.reviewSchema;
let DateGenerator = require('random-date-generator');
const faker = require('faker');
const data = require('./generateData.js');

Listing.sync({force: true})
  .then(
    async() => {
      let startTime = new Date();
      for (var i = 0; i < 100; i++) {
        await new Promise(resolve => {
          resolve(data.bulkListings);
        })
        .then(async data => {await Listing.bulkCreate(data)})
      }
      let endTime = new Date();
      let timeDiff = Math.abs(endTime.getTime() - startTime.getTime()) / 1000;
      console.log(timeDiff);
    }
  )
  .catch((err) => {
    console.error(err);
  })

// User.sync({force: true})
//   .then(() => {
//     for (var i = 1; i < 1000001; i++) {
//       User.create({
//         u_id: i, 
//         username: faker.internet.userName(),
//         display_name: faker.name.firstName(),
//         photo_url: faker.image.imageUrl(),
//         profile_url: 'https://www.airbnb.com/users/show/'.concat(i)
//       })
//     }
//   })
//   .catch((err) => {
//     console.error(err);
//   })

// Booking.sync({force: true})
//   .then(() => {
//     for (var i = 1; i < 10000001; i++) {
//       let startDate = new Date(2014, 1, 1);
//       let endDate = new Date(2018, 12, 31);
//       let days = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
//       // define random start and end dates for the stay
//       let randomStartDate = DateGenerator.getRandomDateInRange(startDate, endDate);
//       let randomEndDate = new Date(randomStartDate);
//       randomEndDate.setDate(randomEndDate.getDate() + days);
//       let stringRandomStartDate = JSON.stringify(randomStartDate);
//       let stringRandomEndDate = JSON.stringify(randomEndDate);
//       let shortRandomStartDate = stringRandomStartDate.slice(1, 11);
//       let shortRandomEndDate = stringRandomEndDate.slice(1, 11);

//       let randomListingsId = Math.floor(Math.random() * (4000 - 1 + 1)) + 1;
//       let randomUsersId = Math.floor(Math.random() * (4000 - 1 + 1)) + 1;

//       Booking.create({
//         b_id: i,
//         stay_start: shortRandomStartDate,
//         stay_end: shortRandomEndDate,
//         listings_id: randomListingsId,
//         users_id: randomUsersId
//       })
//     }
//   })
//   .catch((err) => {
//     console.error(err);
//   })

// Review.sync({force: true})
//   .then(() => {
//     for (var i = 0; i < 10000001; i ++) {
//       let startDate = new Date(2014, 1, 1);
//       let endDate = new Date(2018, 12, 31);
//       let randomDate = DateGenerator.getRandomDateInRange(startDate, endDate);
//       let stringRandomDate = JSON.stringify(randomDate);
//       let shortRandomDate = stringRandomDate.slice(1, 11);
//       Review.create({
//         r_id: i,
//         review_date: shortRandomDate,
//         review: faker.lorem.paragraph,
//         accuracy: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
//         communication: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
//         cleanliness: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
//         location: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
//         check_in: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
//         value: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
//         bookings_id: Math.floor(Math.random() * (10000001 - 1 + 1)) + 1
//       })
//     }
//   })
//   .catch((err) => {
//     console.error(err);
//   })