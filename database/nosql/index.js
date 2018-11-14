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
  rid: {type: Number, required: true},
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

ReviewSchema.statics.increment = (counter, callback) => {
  return this.collection.findAndModify({_id: counter}, [], {$inc: {"_id": 1}}, callback);
}

const Review = mongoose.model('Review', ReviewSchema);

// mongoose.Promise = Promise;
// db.on('error', (err) => {
//   console.log('Mongoose default connection error:', err);
// })
// db.once('open', () => {
//   console.log('Connected to db!');
// })

module.exports.db = db;
module.exports.Review = Review;