const db = require("../database/sql/knexConnection.js");

module.exports = {

  getAllReviews: (listingID, callback) => {
    // select r.review_description, u.photo_url, u.display_name, r.review_date from bookings b left join reviews r on r.bookings_id = b.b_id left join users u on b.users_id = u.u_id where b.listings_id = 1;
    db.select(
      "reviews.review_description",
      "users.photo_url",
      "users.display_name",
      "reviews.review_date"
    )
      .from("bookings")
      .leftJoin("reviews", "reviews.bookings_id", "bookings.b_id")
      .leftJoin("users", "bookings.users_id", "users.u_id")
      .where("bookings.listings_id", listingID)
      .whereNotNull("reviews.review_description")
      .orderBy("reviews.review_date", "desc")
      .then(res => {
        callback(res);
      })
      .catch(err => {
        console.error(err);
      });
  },

  postReview: (params, callback) => {
    db("reviews")
      .insert({
        bookings_id: params[0],
        review_date: params[1],
        review_description: params[2],
        accuracy: params[3],
        communication: params[4],
        cleanliness: params[5],
        location: params[6],
        check_in: params[7],
        value: params[8]
      })
      .then(res => {
        callback("review is posted");
      })
      .catch(err => {
        console.error(err);
      });
  },

  updateReview: (params, callback) => {
    db("reviews")
      .where("r_id", "=", params[0])
      .update({
        review_description: params[1],
        accuracy: params[2],
        communication: params[3],
        cleanliness: params[4],
        location: params[5],
        check_in: params[6],
        value: params[7]
      })
      .then(res => {
        callback("review is updated");
      })
      .catch(err => {
        console.error(err);
      });
  },

  deleteReview: (reviewID, callback) => {
    db("reviews")
      .where("r_id", reviewID)
      .del()
      .then(res => {
        callback("review is deleted");
      })
      .catch(err => {
        console.error(err);
      });
  },

  getRatings: (listingID, callback) => {
    // db("bookings")
    db.raw(`select avg(accuracy) as accuracy, avg(communication) as communication, avg(cleanliness) as cleanliness, avg(location) as location, avg(check_in) as check_in, avg(value) as value from bookings left join reviews on reviews.bookings_id = bookings.b_id left join users on bookings.users_id = users.u_id where bookings.listings_id = ${listingID}`)
      // .avg({ accuracy: "accuracy" })
      // .avg({ communication: "communication" })
      // .avg({ cleanliness: "cleanliness" })
      // .avg({ location: "location" })
      // .avg({ check_in: "check_in" })
      // .avg({ value: "value" })
      // .leftJoin("reviews", "reviews.bookings_id", "bookings.b_id")
      // .leftJoin("users", "bookings.users_id", "users.u_id")
      // .where("bookings.listings_id", listingID)
      .then(res => {
        callback(res.rows);
      });
  },

  search: (listingID, query, callback) => {
    db.select(
      "reviews.review_description",
      "users.photo_url",
      "users.display_name",
      "reviews.review_date"
    )
      .from("reviews")
      .where("bookings.listings_id", listingID)
      .leftJoin("bookings", "reviews.bookings_id", "bookings.b_id")
      .where("reviews.review_description", "like", query)
      .leftJoin("users", "bookings.users_id", "users.u_id")
      .orderBy("reviews.review_date", "desc")
      .then(res => {
        callback(res);
      })
      .catch(err => {
        console.error(err);
      });
  }
};
