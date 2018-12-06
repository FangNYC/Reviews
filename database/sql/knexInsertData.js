const knex = require("./knexConnection.js");
const data = require("./generateData.js");

all();

async function all() {
  await doAll();
}

async function doAll() {
  var listing = await listings();
  var user = await users();
  var booking = await bookings();
  var review = await reviews();
}

async function listings() {
  return new Promise(resolve => {
    (async () => {
      console.time("listingWrite");
      for (var i = 0; i < 1000; i++) {
        await new Promise(resolve => {
          resolve(data.createListings());
        })
          .then(result => {
            return knex.insert(result).into("listings");
          })
          .catch(err => {
            console.error(err);
          })
      }
      resolve()
      console.timeEnd("listingWrite");
    })();
  })
}

async function users() {
  return new Promise(resolve => {
    (async () => {
      console.time("userWrite");
      for (var i = 0; i < 1000; i++) {
        await new Promise(resolve => {
          resolve(data.createUsers());
        })
          .then(result => {
            return knex.insert(result).into("users");
          })
          .catch(err => {
            console.error(err);
          });
      }
      resolve();
      console.timeEnd("userWrite");
    })();
  });
}

async function bookings() {
  return new Promise(resolve => {
    (async () => {
      console.time("bookingWrite");
      for (var i = 0; i < 1000; i++) {
        await new Promise(resolve => {
          resolve(data.createBookings());
        })
          .then(result => {
            return knex.insert(result).into("bookings");
          })
          .catch(err => {
            console.error(err);
          });
      }
      resolve();
      console.timeEnd("bookingWrite");
    })();
  });
}

async function reviews() {
  return new Promise(resolve => {
    (async () => {
      console.time("reviewWrite");
      for (var i = 0; i < 10000; i++) {
        await new Promise(resolve => {
          resolve(data.createReviews());
        })
          .then(result => {
            return knex.insert(result).into("reviews");
          })
          .catch(err => {
            console.error(err);
          });
      }
      resolve();
      console.timeEnd("reviewWrite");
    })();
  });
}
