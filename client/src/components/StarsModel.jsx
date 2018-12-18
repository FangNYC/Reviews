import React from "react";
import Ratings from "react-ratings-declarative";

const starsModel = props => {
  return (
    <Ratings
      rating={props.rating}
      widgetDimensions={props.dimensions}
      widgetSpacings="5px"
    >
      <Ratings.Widget widgetRatedColor="#008489" />
      <Ratings.Widget widgetRatedColor="#008489" />
      <Ratings.Widget widgetRatedColor="#008489" />
      <Ratings.Widget widgetRatedColor="#008489" />
      <Ratings.Widget widgetRatedColor="#008489" />
    </Ratings>
  );
};

module.exports = starsModel;
