import React from "react";
import StarsModel from "./StarsModel.jsx";

export default class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      ratings: []
    };
    this.ratingsLoaded = this.ratingsLoaded.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.ratings !== prevProps.ratings) {
      this.ratingsLoaded(this.props.ratings);
    }
  }

  ratingsLoaded(ratings) {
    this.setState({
      isLoaded: true,
      ratings: ratings
    });
  }

  render() {
    return (
      <div className="starsContainer">
        <span className="floatLeft50">
          <div>
            <span className="floatLeft50">Accuracy</span>
            <span className="floatRight50">
              <StarsModel
                rating={
                  this.state.isLoaded
                    ? Number(this.state.ratings[0].accuracy)
                    : 0
                }
                dimensions="15px"
              />
            </span>
          </div>
          <div>
            <span className="floatLeft50">Communication</span>
            <span className="floatRight50">
              <StarsModel
                rating={
                  this.state.isLoaded
                    ? Number(this.state.ratings[0].communication)
                    : 0
                }
                dimensions="15px"
              />
            </span>
          </div>
          <div>
            <span className="floatLeft50">Cleanliness</span>
            <span className="floatRight50">
              <StarsModel
                rating={
                  this.state.isLoaded
                    ? Number(this.state.ratings[0].cleanliness)
                    : 0
                }
                dimensions="15px"
              />
            </span>
          </div>
        </span>

        <span className="floatRight50">
          <div>
            <span className="floatLeft50">Location</span>
            <span className="floatRight50">
              <StarsModel
                rating={
                  this.state.isLoaded
                    ? Number(this.state.ratings[0].location)
                    : 0
                }
                dimensions="15px"
              />
            </span>
          </div>
          <div>
            <span className="floatLeft50">Check-in</span>
            <span className="floatRight50">
              <StarsModel
                rating={
                  this.state.isLoaded
                    ? Number(this.state.ratings[0].check_in)
                    : 0
                }
                dimensions="15px"
              />
            </span>
          </div>
          <div>
            <span className="floatLeft50">Value</span>
            <span className="floatRight50">
              <StarsModel
                rating={
                  this.state.isLoaded ? Number(this.state.ratings[0].value) : 0
                }
                dimensions="15px"
              />
            </span>
          </div>
        </span>
      </div>
    );
  }
}
