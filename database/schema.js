const db = require('./index.js');
const Sequelize = require('sequelize');

const Listing = db.define('listing', {
  l_id: {
    type: Sequelize.INTEGER, 
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING
})

const User = db.define('user', {
  u_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: Sequelize.STRING,
  display_name: Sequelize.STRING,
  photo_url: Sequelize.STRING,
  profile_url: Sequelize.STRING
})

const Booking = db.define('booking', {
  b_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  stay_start: Sequelize.STRING,
  stay_end: Sequelize.STRING
})

Booking.belongsTo(Listing, {foreignKey: 'listings_id'});
Booking.belongsTo(User, {foreignKey: 'users_id'});

const Review = db.define('review', {
  r_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  review_date: Sequelize.STRING,
  review: Sequelize.STRING,
  accuracy: Sequelize.SMALLINT,
  communication: Sequelize.SMALLINT,
  cleanliness: Sequelize.SMALLINT,
  location: Sequelize.SMALLINT,
  check_in: Sequelize.SMALLINT,
  value: Sequelize.SMALLINT
})

Review.belongsTo(Booking, {foreignKey: 'bookings_id'})

exports.listingSchema = Listing;
exports.userSchema = User;
exports.bookingSchema = Booking;
exports.reviewSchema = Review;