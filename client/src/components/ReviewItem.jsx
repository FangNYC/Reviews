import React from "react";

export default class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      truncate: false,
      // shortText: this.props.review.review_description.substring(0, 280) + "...",
      // reviewText: this.props.review.review_description
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.showAlert = this.showAlert.bind(this);
  }

  componentDidMount() {
    if (this.props.review.review_description.length > 280) {
      this.setState({
        truncate: true
      });
    }
  }

  clickHandler(event) {
    event.preventDefault();
    if (this.state.truncate === true) {
      this.setState({
        truncate: false
      });
    } else {
      this.setState({
        truncate: true
      });
    }
  }

  showAlert(event) {
    event.preventDefault();
    alert(
      "Thank you for flagging this review! This is not how the real AirBnB page does this, but that would have been too complicated given our numerous components. Thank you for understanding."
    );
  }

  render() {
    const renderText =
      this.state.truncate === true ? (
        <div>
          {this.props.review.review_description.substring(0, 280) + "..."}{" "}
          <a href="" onClick={this.clickHandler}>
            Read more
          </a>{" "}
        </div>
      ) : (
        <div>{this.props.review.review_description}</div>
      );

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const date = new Date(this.props.review.review_date);
    const month = monthNames[date.getUTCMonth()];

    const newSrc = this.props.review.photo_url + "?random=1";

    return (
      <div className="reviewItemContainer">
        <div className="reviewItemHeader">
          <span className="reviewItemHeaderPhotoSpan">
            <img
              src={newSrc}
              className="reviewItemHeaderPhoto"
            />
          </span>
          <span className="reviewItemHeaderInfo">
            {this.props.review.display_name} <br />
            {month} {this.props.review.review_date.slice(0, 4)}
          </span>
          <span className="reviewItemHeaderFlag">
            <a href="/">
              <img
                src="http://imgur.com/8ELuIV8.png"
                className="reviewItemHeaderFlagImg"
                onClick={this.showAlert}
              />
            </a>
          </span>
        </div>
        {renderText}
      </div>
    );
  }
}
