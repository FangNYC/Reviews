import React from "react";
import axios from "axios";
import Search from "./components/Search.jsx";
import Stars from "./components/Stars.jsx";
import ReviewList from "./components/ReviewList.jsx";

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      search: [],
      ratings: [],
      showSearch: false
    };
    this.getAllReviews = this.getAllReviews.bind(this);
    this.searchReviews = this.searchReviews.bind(this);
    this.getRatings = this.getRatings.bind(this);
  }

  componentDidMount() {
    this.getAllReviews();
    this.getRatings();
  }

  getAllReviews() {
    let queryString = window.location.search;
    let listingID = queryString.slice(4);
    let params = {
      params: {
        id: listingID
      }
    };

    axios
      .get("/reviews", params)
      .then(({ data }) => {
        this.setState({
          reviews: data
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  searchReviews(query) {
    let queryString = window.location.search;
    let listingID = queryString.slice(4);
    let params = {
      params: {
        id: listingID,
        query: `%${query}%`
      }
    };

    axios
      .get("/search", params)
      .then(({ data }) => {
        this.setState({
          search: data,
          showSearch: true
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  getRatings() {
    let queryString = window.location.search;
    let listingID = queryString.slice(4);
    let params = {
      params: {
        id: listingID
      }
    };

    axios
      .get("/ratings", params)
      .then(({ data }) => {
        if (data[0].accuracy !== null) {
          this.setState({
            ratings: data
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <Search
          searchReviews={this.searchReviews}
          ratings={this.state.ratings}
          reviews={this.state.reviews}
        />
        <Stars ratings={this.state.ratings} />
        <ReviewList
          reviews={
            this.state.showSearch ? this.state.search : this.state.reviews
          }
        />
      </div>
    );
  }
}

// ReactDOM.render(<Reviews />, document.getElementById("reviews"));
