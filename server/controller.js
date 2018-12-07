const {
  getAllReviews,
  postReview,
  updateReview,
  deleteReview,
  getRatings,
  search
} = require("./model.js");
const Promise = require("bluebird");
const redis = require("redis");
const client = redis.createClient();

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

module.exports = {
  getAllReviews: (req, res) => {
    const id = req.query.id;
    getAllReviews(id, response => {
      client.set(id, JSON.stringify(response), redis.print);
      res.send(response);
    });
  },

  postReview: (req, res) => {
    params = [
      req.body.bookings_id,
      req.body.review_date,
      req.body.review_description,
      req.body.accuracy,
      req.body.communication,
      req.body.cleanliness,
      req.body.location,
      req.body.check_in,
      req.body.value
    ];
    postReview(params, response => {
      res.send("Review is posted!");
    });
  },

  updateReview: (req, res) => {
    params = [
      req.query.id,
      req.body.review,
      req.body.accuracy,
      req.body.communication,
      req.body.cleanliness,
      req.body.location,
      req.body.check_in,
      req.body.value
    ];
    updateReview(params, response => {
      res.send("Review is updated!");
    });
  },

  deleteReview: (req, res) => {
    deleteReview(req.query.id, response => {
      res.send("Review is deleted!");
    });
  },

  getRatings: (req, res) => {
    getRatings(req.query.id, response => {
      res.send(response);
    });
  },

  search: (req, res) => {
    search(req.query.id, req.query.query, response => {
      res.send(response);
    });
  },

  getLoader: (req, res) => {
    res.send("loaderio-250f1ae91d40811d73dc9120f18b0db5");
  },

  cache: (req, res, next) => {
    return client
      .getAsync(req.query.id)
      .then(data => {
        if (data != null) {
          res.send(JSON.parse(data));
        } else {
          next();
        }
      })
      .catch(err => {
        console.error(err);
      });
  }
};
