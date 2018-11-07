const { getAllReviews, postReview, updateReview, deleteReview, getRatings, search } = require('./model.js');

module.exports = {
  getAllReviews: (req, res) => {
    getAllReviews(req.query.id, (response) => {
      res.send(response);
    });
  },

  postReview: (req, res) => {
    params = [req.body.bookings_id, req.body.review_date, req.body.review, req.body.accuracy, req.body.communication, req.body.cleanliness, req.body.location, req.body.check_in, req.body.value];
    postReview(params, (response) => {
      res.send('Review is posted!');
    });
  },

  updateReview: (req, res) => {
    params = [req.body.bookings_id, req.body.review_date, req.body.review, req.body.accuracy, req.body.communication, req.body.cleanliness, req.body.location, req.body.check_in, req.body.value, req.body.r_id];
    updateReview(params, (response) => {
      res.send('Review is updated!');
    })
  },

  deleteReview: (req, res) => {
    deleteReview(req.query.id, (response) => {
      res.send('Review is deleted!');
    })
  },

  getRatings: (req, res) => {
    getRatings(req.query.id, (response) => {
      res.send(response);
    });
  },

  search: (req, res) => {
    search(req.query.id, req.query.query, (response) => {
      res.send(response);
    });
  },
};
