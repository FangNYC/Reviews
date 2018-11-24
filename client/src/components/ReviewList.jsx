import React from "react";
import ReviewItem from "./ReviewItem.jsx";

export default class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const review = this.props.reviews.map((review, index) => {
      return <ReviewItem key={index} review={review} />;
    });

    return <div className="reviewListContainer">{review}</div>;
  }
}
