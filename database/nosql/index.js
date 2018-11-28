const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/staybnb')
const db = mongoose.connection;
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

const ListingSchema = new Schema({
  l_id: {type: Number, required: true},
  description: String
})

const ReviewSchema = new Schema({
  r_id: {type: Number, required: true},
  listingChild: ListingSchema,
  bookings_id: Number,
  review_date: String,
  review: String,
  accuracy: Number,
  communication: Number,
  cleanliness: Number,
  location: Number,
  check_in: Number,
  value: Number
})

const Review = mongoose.model('Review', ReviewSchema);

module.exports.db = db;
module.exports.Review = Review;