const schema = require('./schema.js');
const data = require('./generateData.js');
const Listing = schema.listingSchema;
const User = schema.userSchema;
const Booking = schema.bookingSchema;
const Review = schema.reviewSchema;
const fs = require('fs');
const Json2csvParser = require('json2csv').Parser;
const listingStream = fs.createWriteStream('./data/listings.csv');
const userStream = fs.createWriteStream('./data/users.csv');
const bookingStream = fs.createWriteStream('./data/bookings.csv');
const reviewStream = fs.createWriteStream('./data/reviews.csv');

Listing.sync({force: true})
  .then(
    async() => {
      console.time('listingWrite');
      let options = {
        header: false
      };
      let json2csvParser = new Json2csvParser(options);
      for (var i = 0; i < 1000; i++) {
        await new Promise(resolve => {
          resolve(data.bulkListings);
        })
        .then(async result => {
          let csv = json2csvParser.parse(result);
          listingStream.write(csv);
        })
        .catch((err) => {
          console.error(err);
        })
      }
      listingStream.end();
      console.timeEnd('listingWrite');
    }
  )
  .catch((err) => {
    console.error(err);
  })

User.sync({force: true})
  .then(
    async() => {
      console.time('userWrite');
      let options = {
        header: false
      };
      let json2csvParser = new Json2csvParser(options);
      for (var i = 0; i < 1000; i++) {
        await new Promise(resolve => {
          resolve(data.bulkUsers);
        })
        .then(async result => {
          let csv = json2csvParser.parse(result);
          userStream.write(csv);
        })
        .catch((err) => {
          console.error(err);
        })
      }
      userStream.end();
      console.timeEnd('userWrite');
    }
  )
  .catch((err) => {
    console.error(err);
  })

Booking.sync({force: true})
  .then(
    async() => {
      console.time('bookingWrite');
      let options = {
        header: false
      };
      let json2csvParser = new Json2csvParser(options);
      for (var i = 0; i < 1000; i++) {
        await new Promise(resolve => {
          resolve(data.bulkBookings);
        })
        .then(async result => {
          let csv = json2csvParser.parse(result);
          bookingStream.write(csv);
        })
        .catch((err) => {
          console.error(err);
        })
      }
      bookingStream.end();
      console.timeEnd('bookingWrite');
    }
  )
  .catch((err) => {
    console.error(err);
  })

Review.sync({force: true})
.then(
  async() => {
    console.time('reviewWrite');
    let options = {
      header: false
    };
    let json2csvParser = new Json2csvParser(options);
    for (var i = 0; i < 1000; i++) {
      await new Promise(resolve => {
        resolve(data.bulkReviews);
      })
      .then(async result => {
        let csv = json2csvParser.parse(result);
        reviewStream.write(csv);
      })
      .catch((err) => {
        console.error(err);
      })
    }
    reviewStream.end();
    console.timeEnd('reviewWrite');
  }
)
.catch((err) => {
  console.error(err);
})

// const used = process.memoryUsage().heapUsed / 1024 / 1024;