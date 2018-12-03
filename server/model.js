const db = require("../database/sql/knexConnection.js");

module.exports = {

  getAllReviews: (listingID, callback) => {
    // const SQLquery = `SELECT r.review_description, u.u_id, u.photo_url, u.display_name, r.review_date FROM bookings b INNER JOIN reviews r ON r.bookings_id = b.b_id AND b.listings_id = 91
    // RIGHT JOIN users u ON b.users_id = u.u_id`;
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
    // const SQLquery = `INSERT INTO Reviews
    // (bookings_id, review_date, review, accuracy, communication, cleanliness, \`location\`, \`check_in\`, \`value\`)
    // VALUES
    // (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
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
    const SQLquery = `UPDATE Reviews
    SET bookings_id = ?,
        review_date = ?,
        review = ?,
        accuracy = ?,
        communication = ?,
        cleanliness = ?,
        \`location\` = ?,
        \`check_in\` = ?,
        \`value\` = ?
    WHERE r_id = ?`;
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
    // let SQLquery = `SELECT AVG(accuracy) AS accuracy, AVG(communication) AS communication, AVG(cleanliness) as cleanliness, AVG(\`location\`) as location, AVG(\`check_in\`) as checkin, AVG(\`value\`) as value
    // FROM Reviews
    // INNER JOIN Bookings
    // ON Reviews.bookings_id = Bookings.b_id
    // LEFT JOIN Users
    // ON Bookings.users_id = Users.u_id
    // WHERE Bookings.listings_id = ${listingID};`;
    // db.query(SQLquery, (error, response) => {
    //   if (error) {
    //     console.error(error);
    //   } else {
    //     callback(response);
    //   }
    // });
    db("bookings")
      .avg({ accuracy: "accuracy" })
      .avg({ communication: "communication" })
      .avg({ cleanliness: "cleanliness" })
      .avg({ location: "location" })
      .avg({ check_in: "check_in" })
      .avg({ value: "value" })
      .leftJoin("reviews", "reviews.bookings_id", "bookings.b_id")
      .leftJoin("users", "bookings.users_id", "users.u_id")
      .where("bookings.listings_id", listingID)
      .then(res => {
        callback(res);
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
