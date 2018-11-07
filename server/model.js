const db = require('../database/index.js');

module.exports = {
  getAllReviews: (listingID, callback) => {
    const SQLquery = `SELECT *
    FROM Reviews
    INNER JOIN Bookings
    ON Reviews.bookings_id = Bookings.b_id
    LEFT JOIN Users
    ON Bookings.users_id = Users.u_id
    WHERE Bookings.listings_id = ${listingID}
    ORDER BY Reviews.review_date DESC;`;
    db.query(SQLquery, (error, response) => {
      if (error) {
        console.error(error);
      } else {
        callback(response);
      }
    });
  },

  postReview: (params, callback) => {    
    const SQLquery = `INSERT INTO Reviews
    (bookings_id, review_date, review, accuracy, communication, cleanliness, \`location\`, \`check-in\`, \`value\`)
    VALUES
    (?, ?, ?, ?, ?, ?, ?, ?, ?)`
    db.query(SQLquery, params, (error, response) => {
      if (error) {
        console.error(error);
      } else {
        callback(response);
      }
    })
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
        \`check-in\` = ?,
        \`value\` = ?
    WHERE r_id = ?`
    db.query(SQLquery, params, (error, response) => {
      if (error) {
        console.error(error);
      } else {
        callback(response);
      }
    })
  },

  deleteReview: (reviewId, callback) => {
    const SQLquery = `DELETE FROM Reviews
    WHERE r_id = ?`
    db.query(SQLquery, reviewId, (error, response) => {
      if (error) {
        console.error(error);
      } else {
        callback(response);
      }
    })
  },

  getRatings: (listingID, callback) => {
    let SQLquery = `SELECT AVG(accuracy) AS accuracy, AVG(communication) AS communication, AVG(cleanliness) as cleanliness, AVG(\`location\`) as location, AVG(\`check-in\`) as checkin, AVG(\`value\`) as value
    FROM Reviews
    INNER JOIN Bookings
    ON Reviews.bookings_id = Bookings.b_id
    LEFT JOIN Users
    ON Bookings.users_id = Users.u_id
    WHERE Bookings.listings_id = ${listingID};`;
    db.query(SQLquery, (error, response) => {
      if (error) {
        console.error(error);
      } else {
        callback(response);
      }
    });
  },

  search: (listingID, query, callback) => {
    const SQLquery = `SELECT *
    FROM Reviews
    INNER JOIN Bookings
    ON Reviews.bookings_id = Bookings.b_id
    LEFT JOIN Users
    ON Bookings.users_id = Users.u_id
    WHERE Bookings.listings_id = ${listingID}
    AND Reviews.review LIKE "${query}"
    ORDER BY Reviews.review_date DESC;`;

    db.query(SQLquery, (error, response) => {
      if (error) {
        console.error(error);
      } else {
        callback(response);
      }
    });
  },

};
