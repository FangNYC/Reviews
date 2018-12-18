import React from "react";
import StarsModel from "./StarsModel.jsx";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      starsLoaded: false,
      avgRating: 0,
      ratingsLoaded: false,
      totalRatings: 0
    };
    this.searchQuery = this.searchQuery.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.starsLoaded = this.starsLoaded.bind(this);
    this.reviewsLoaded = this.reviewsLoaded.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.ratings !== prevProps.ratings) {
      this.starsLoaded(this.props.ratings);
    }
    if (this.props.reviews !== prevProps.reviews) {
      this.reviewsLoaded(this.props.reviews);
    }
  }

  starsLoaded(ratings) {
    let sum = 0;
    for (var key in ratings[0]) {
      sum += Number(ratings[0][key]);
    }
    let avg = sum / 6;
    this.setState({
      starsLoaded: true,
      avgRating: avg
    });
  }

  reviewsLoaded(reviews) {
    this.setState({
      ratingsLoaded: true,
      totalRatings: reviews.length
    });
  }

  searchQuery(event) {
    this.setState({
      query: event.target.value
    });
  }

  handleKeyPress(event) {
    if (event.key == "Enter") {
      event.preventDefault();
      this.props.searchReviews(this.state.query);
    }
  }

  render() {
    return (
      <div className="searchContainer">
        <span className="totalReviewsDiv">
          <h2>
            {this.state.ratingsLoaded ? this.state.totalRatings : 0} Reviews{" "}
            <StarsModel
              rating={this.state.starsLoaded ? this.state.avgRating : 0}
              dimensions="25px"
            />
          </h2>
        </span>
        <span className="searchBarDiv">
          <img src="http://imgur.com/npblqeD.png" className="magnifyImg" />
          <input
            className="searchBar"
            type="search"
            placeholder="Search reviews"
            onChange={this.searchQuery}
            value={this.state.query}
            onKeyPress={this.handleKeyPress}
          />
        </span>
      </div>
    );
  }
}
