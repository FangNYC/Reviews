/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/ReviewItem.jsx":
/*!**********************************************!*\
  !*** ./client/src/components/ReviewItem.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReviewItem = function (_React$Component) {
  _inherits(ReviewItem, _React$Component);

  function ReviewItem(props) {
    _classCallCheck(this, ReviewItem);

    var _this = _possibleConstructorReturn(this, (ReviewItem.__proto__ || Object.getPrototypeOf(ReviewItem)).call(this, props));

    _this.state = {
      truncate: false
      // shortText: this.props.review.review_description.substring(0, 280) + "...",
      // reviewText: this.props.review.review_description
    };
    _this.clickHandler = _this.clickHandler.bind(_this);
    _this.showAlert = _this.showAlert.bind(_this);
    return _this;
  }

  _createClass(ReviewItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.review.review_description.length > 280) {
        this.setState({
          truncate: true
        });
      }
    }
  }, {
    key: "clickHandler",
    value: function clickHandler(event) {
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
  }, {
    key: "showAlert",
    value: function showAlert(event) {
      event.preventDefault();
      alert("Thank you for flagging this review! This is not how the real AirBnB page does this, but that would have been too complicated given our numerous components. Thank you for understanding.");
    }
  }, {
    key: "render",
    value: function render() {
      var renderText = this.state.truncate === true ? _react2.default.createElement(
        "div",
        null,
        this.props.review.review_description.substring(0, 280) + "...",
        " ",
        _react2.default.createElement(
          "a",
          { href: "", onClick: this.clickHandler },
          "Read more"
        ),
        " "
      ) : _react2.default.createElement(
        "div",
        null,
        this.props.review.review_description
      );

      var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var date = new Date(this.props.review.review_date);
      var month = monthNames[date.getUTCMonth()];

      var newSrc = this.props.review.photo_url + "?random=1";

      return _react2.default.createElement(
        "div",
        { className: "reviewItemContainer" },
        _react2.default.createElement(
          "div",
          { className: "reviewItemHeader" },
          _react2.default.createElement(
            "span",
            { className: "reviewItemHeaderPhotoSpan" },
            _react2.default.createElement("img", {
              src: newSrc,
              className: "reviewItemHeaderPhoto"
            })
          ),
          _react2.default.createElement(
            "span",
            { className: "reviewItemHeaderInfo" },
            this.props.review.display_name,
            " ",
            _react2.default.createElement("br", null),
            month,
            " ",
            this.props.review.review_date.slice(0, 4)
          ),
          _react2.default.createElement(
            "span",
            { className: "reviewItemHeaderFlag" },
            _react2.default.createElement(
              "a",
              { href: "/" },
              _react2.default.createElement("img", {
                src: "http://imgur.com/8ELuIV8.png",
                className: "reviewItemHeaderFlagImg",
                onClick: this.showAlert
              })
            )
          )
        ),
        renderText
      );
    }
  }]);

  return ReviewItem;
}(_react2.default.Component);

exports.default = ReviewItem;

/***/ }),

/***/ "./client/src/components/ReviewList.jsx":
/*!**********************************************!*\
  !*** ./client/src/components/ReviewList.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ReviewItem = __webpack_require__(/*! ./ReviewItem.jsx */ "./client/src/components/ReviewItem.jsx");

var _ReviewItem2 = _interopRequireDefault(_ReviewItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReviewList = function (_React$Component) {
  _inherits(ReviewList, _React$Component);

  function ReviewList(props) {
    _classCallCheck(this, ReviewList);

    var _this = _possibleConstructorReturn(this, (ReviewList.__proto__ || Object.getPrototypeOf(ReviewList)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(ReviewList, [{
    key: "render",
    value: function render() {
      var review = this.props.reviews.map(function (review, index) {
        return _react2.default.createElement(_ReviewItem2.default, { key: index, review: review });
      });

      return _react2.default.createElement(
        "div",
        { className: "reviewListContainer" },
        review
      );
    }
  }]);

  return ReviewList;
}(_react2.default.Component);

exports.default = ReviewList;

/***/ }),

/***/ "./client/src/components/Search.jsx":
/*!******************************************!*\
  !*** ./client/src/components/Search.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _StarsModel = __webpack_require__(/*! ./StarsModel.jsx */ "./client/src/components/StarsModel.jsx");

var _StarsModel2 = _interopRequireDefault(_StarsModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = {
      query: '',
      starsLoaded: false,
      avgRating: 0,
      ratingsLoaded: false,
      totalRatings: 0
    };
    _this.searchQuery = _this.searchQuery.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.starsLoaded = _this.starsLoaded.bind(_this);
    _this.reviewsLoaded = _this.reviewsLoaded.bind(_this);
    return _this;
  }

  _createClass(Search, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.ratings !== prevProps.ratings) {
        this.starsLoaded(this.props.ratings);
      }
      if (this.props.reviews !== prevProps.reviews) {
        this.reviewsLoaded(this.props.reviews);
      }
    }
  }, {
    key: 'starsLoaded',
    value: function starsLoaded(ratings) {
      var sum = 0;
      for (var key in ratings[0]) {
        sum += Number(ratings[0][key]);
      }
      var avg = sum / 6;
      this.setState({
        starsLoaded: true,
        avgRating: avg
      });
    }
  }, {
    key: 'reviewsLoaded',
    value: function reviewsLoaded(reviews) {
      this.setState({
        ratingsLoaded: true,
        totalRatings: reviews.length
      });
    }
  }, {
    key: 'searchQuery',
    value: function searchQuery(event) {
      this.setState({
        query: event.target.value
      });
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(event) {
      if (event.key == 'Enter') {
        event.preventDefault();
        this.props.searchReviews(this.state.query);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'searchContainer' },
        _react2.default.createElement(
          'span',
          { className: 'totalReviewsDiv' },
          _react2.default.createElement(
            'h2',
            null,
            this.state.ratingsLoaded ? this.state.totalRatings : 0,
            ' Reviews ',
            _react2.default.createElement(_StarsModel2.default, { rating: this.state.starsLoaded ? this.state.avgRating : 0, dimensions: '25px' })
          )
        ),
        _react2.default.createElement(
          'span',
          { className: 'searchBarDiv' },
          _react2.default.createElement('img', { src: 'http://imgur.com/npblqeD.png', className: 'magnifyImg' }),
          _react2.default.createElement('input', {
            className: 'searchBar',
            type: 'search',
            placeholder: 'Search reviews',
            onChange: this.searchQuery,
            value: this.state.query,
            onKeyPress: this.handleKeyPress
          })
        )
      );
    }
  }]);

  return Search;
}(_react2.default.Component);

exports.default = Search;

/***/ }),

/***/ "./client/src/components/Stars.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/Stars.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _StarsModel = __webpack_require__(/*! ./StarsModel.jsx */ "./client/src/components/StarsModel.jsx");

var _StarsModel2 = _interopRequireDefault(_StarsModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stars = function (_React$Component) {
  _inherits(Stars, _React$Component);

  function Stars(props) {
    _classCallCheck(this, Stars);

    var _this = _possibleConstructorReturn(this, (Stars.__proto__ || Object.getPrototypeOf(Stars)).call(this, props));

    _this.state = {
      isLoaded: false,
      ratings: []
    };
    _this.ratingsLoaded = _this.ratingsLoaded.bind(_this);
    return _this;
  }

  _createClass(Stars, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.ratings !== prevProps.ratings) {
        this.ratingsLoaded(this.props.ratings);
      }
    }
  }, {
    key: "ratingsLoaded",
    value: function ratingsLoaded(ratings) {
      this.setState({
        isLoaded: true,
        ratings: ratings
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "starsContainer" },
        _react2.default.createElement(
          "span",
          { className: "floatLeft50" },
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "span",
              { className: "floatLeft50" },
              "Accuracy"
            ),
            _react2.default.createElement(
              "span",
              { className: "floatRight50" },
              _react2.default.createElement(_StarsModel2.default, {
                rating: this.state.isLoaded ? Number(this.state.ratings[0].accuracy) : 0,
                dimensions: "15px"
              })
            )
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "span",
              { className: "floatLeft50" },
              "Communication"
            ),
            _react2.default.createElement(
              "span",
              { className: "floatRight50" },
              _react2.default.createElement(_StarsModel2.default, {
                rating: this.state.isLoaded ? Number(this.state.ratings[0].communication) : 0,
                dimensions: "15px"
              })
            )
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "span",
              { className: "floatLeft50" },
              "Cleanliness"
            ),
            _react2.default.createElement(
              "span",
              { className: "floatRight50" },
              _react2.default.createElement(_StarsModel2.default, {
                rating: this.state.isLoaded ? Number(this.state.ratings[0].cleanliness) : 0,
                dimensions: "15px"
              })
            )
          )
        ),
        _react2.default.createElement(
          "span",
          { className: "floatRight50" },
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "span",
              { className: "floatLeft50" },
              "Location"
            ),
            _react2.default.createElement(
              "span",
              { className: "floatRight50" },
              _react2.default.createElement(_StarsModel2.default, {
                rating: this.state.isLoaded ? Number(this.state.ratings[0].location) : 0,
                dimensions: "15px"
              })
            )
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "span",
              { className: "floatLeft50" },
              "Check-in"
            ),
            _react2.default.createElement(
              "span",
              { className: "floatRight50" },
              _react2.default.createElement(_StarsModel2.default, {
                rating: this.state.isLoaded ? Number(this.state.ratings[0].check_in) : 0,
                dimensions: "15px"
              })
            )
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "span",
              { className: "floatLeft50" },
              "Value"
            ),
            _react2.default.createElement(
              "span",
              { className: "floatRight50" },
              _react2.default.createElement(_StarsModel2.default, {
                rating: this.state.isLoaded ? Number(this.state.ratings[0].value) : 0,
                dimensions: "15px"
              })
            )
          )
        )
      );
    }
  }]);

  return Stars;
}(_react2.default.Component);

exports.default = Stars;

/***/ }),

/***/ "./client/src/components/StarsModel.jsx":
/*!**********************************************!*\
  !*** ./client/src/components/StarsModel.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRatingsDeclarative = __webpack_require__(/*! react-ratings-declarative */ "react-ratings-declarative");

var _reactRatingsDeclarative2 = _interopRequireDefault(_reactRatingsDeclarative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var starsModel = function starsModel(props) {
  return _react2.default.createElement(
    _reactRatingsDeclarative2.default,
    { rating: props.rating, widgetDimensions: props.dimensions, widgetSpacings: '5px' },
    _react2.default.createElement(_reactRatingsDeclarative2.default.Widget, { widgetRatedColor: '#008489' }),
    _react2.default.createElement(_reactRatingsDeclarative2.default.Widget, { widgetRatedColor: '#008489' }),
    _react2.default.createElement(_reactRatingsDeclarative2.default.Widget, { widgetRatedColor: '#008489' }),
    _react2.default.createElement(_reactRatingsDeclarative2.default.Widget, { widgetRatedColor: '#008489' }),
    _react2.default.createElement(_reactRatingsDeclarative2.default.Widget, { widgetRatedColor: '#008489' })
  );
};

module.exports = starsModel;

/***/ }),

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(/*! axios */ "axios");

var _axios2 = _interopRequireDefault(_axios);

var _Search = __webpack_require__(/*! ./components/Search.jsx */ "./client/src/components/Search.jsx");

var _Search2 = _interopRequireDefault(_Search);

var _Stars = __webpack_require__(/*! ./components/Stars.jsx */ "./client/src/components/Stars.jsx");

var _Stars2 = _interopRequireDefault(_Stars);

var _ReviewList = __webpack_require__(/*! ./components/ReviewList.jsx */ "./client/src/components/ReviewList.jsx");

var _ReviewList2 = _interopRequireDefault(_ReviewList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reviews = function (_React$Component) {
  _inherits(Reviews, _React$Component);

  function Reviews(props) {
    _classCallCheck(this, Reviews);

    var _this = _possibleConstructorReturn(this, (Reviews.__proto__ || Object.getPrototypeOf(Reviews)).call(this, props));

    _this.state = {
      reviews: [],
      search: [],
      ratings: [],
      showSearch: false
    };
    _this.getAllReviews = _this.getAllReviews.bind(_this);
    _this.searchReviews = _this.searchReviews.bind(_this);
    _this.getRatings = _this.getRatings.bind(_this);
    return _this;
  }

  _createClass(Reviews, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getAllReviews();
      this.getRatings();
    }
  }, {
    key: "getAllReviews",
    value: function getAllReviews() {
      var _this2 = this;

      var queryString = window.location.search;
      var listingID = queryString.slice(4);
      var params = {
        params: {
          id: listingID
        }
      };

      _axios2.default.get("/reviews", params).then(function (_ref) {
        var data = _ref.data;

        _this2.setState({
          reviews: data
        });
      }).catch(function (error) {
        console.error(error);
      });
    }
  }, {
    key: "searchReviews",
    value: function searchReviews(query) {
      var _this3 = this;

      var queryString = window.location.search;
      var listingID = queryString.slice(4);
      var params = {
        params: {
          id: listingID,
          query: "%" + query + "%"
        }
      };

      _axios2.default.get("/search", params).then(function (_ref2) {
        var data = _ref2.data;

        _this3.setState({
          search: data,
          showSearch: true
        });
      }).catch(function (error) {
        console.error(error);
      });
    }
  }, {
    key: "getRatings",
    value: function getRatings() {
      var _this4 = this;

      var queryString = window.location.search;
      var listingID = queryString.slice(4);
      var params = {
        params: {
          id: listingID
        }
      };

      _axios2.default.get("/ratings", params).then(function (_ref3) {
        var data = _ref3.data;

        if (data[0].accuracy !== null) {
          _this4.setState({
            ratings: data
          });
        }
      }).catch(function (error) {
        console.error(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_Search2.default, {
          searchReviews: this.searchReviews,
          ratings: this.state.ratings,
          reviews: this.state.reviews
        }),
        _react2.default.createElement(_Stars2.default, { ratings: this.state.ratings }),
        _react2.default.createElement(_ReviewList2.default, {
          reviews: this.state.showSearch ? this.state.search : this.state.reviews
        })
      );
    }
  }]);

  return Reviews;
}(_react2.default.Component);

// ReactDOM.render(<Reviews />, document.getElementById("reviews"));


exports.default = Reviews;

/***/ }),

/***/ "./database/sql/knexConnection.js":
/*!****************************************!*\
  !*** ./database/sql/knexConnection.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Initial draft set up of knex // not yet set up
var pg = __webpack_require__(/*! pg */ "pg");

var knex = __webpack_require__(/*! knex */ "knex")({
  client: 'pg',
  connection: {
    host: 'ec2-18-223-209-234.us-east-2.compute.amazonaws.com',
    user: 'postgres',
    password: '0237100t',
    database: 'staybnb_knex'
    // connection: 'postgres://10.380:5432'
  } });

module.exports = knex;

/***/ }),

/***/ "./server/controller.js":
/*!******************************!*\
  !*** ./server/controller.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! ./model.js */ "./server/model.js"),
    _getAllReviews = _require.getAllReviews,
    _postReview = _require.postReview,
    _updateReview = _require.updateReview,
    _deleteReview = _require.deleteReview,
    _getRatings = _require.getRatings,
    _search = _require.search;

module.exports = {
  getAllReviews: function getAllReviews(req, res) {
    _getAllReviews(req.query.id, function (response) {
      res.send(response);
    });
  },

  postReview: function postReview(req, res) {
    params = [req.body.bookings_id, req.body.review_date, req.body.review_description, req.body.accuracy, req.body.communication, req.body.cleanliness, req.body.location, req.body.check_in, req.body.value];
    _postReview(params, function (response) {
      res.send("Review is posted!");
    });
  },

  updateReview: function updateReview(req, res) {
    params = [req.query.id, req.body.review, req.body.accuracy, req.body.communication, req.body.cleanliness, req.body.location, req.body.check_in, req.body.value];
    _updateReview(params, function (response) {
      res.send("Review is updated!");
    });
  },

  deleteReview: function deleteReview(req, res) {
    _deleteReview(req.query.id, function (response) {
      res.send("Review is deleted!");
    });
  },

  getRatings: function getRatings(req, res) {
    _getRatings(req.query.id, function (response) {
      res.send(response);
    });
  },

  search: function search(req, res) {
    _search(req.query.id, req.query.query, function (response) {
      res.send(response);
    });
  },

  getLoader: function getLoader(req, res) {
    res.send('loaderio-acb2085fbf0ec76c82d63f5ff0aa05cf');
  }
};

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = __webpack_require__(/*! cors */ "cors");

var _cors2 = _interopRequireDefault(_cors);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _server2 = _interopRequireDefault(_server);

var _router = __webpack_require__(/*! ./router.js */ "./server/router.js");

var _router2 = _interopRequireDefault(_router);

var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import App from '../client/src/index.js';

// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const cors = require('cors');

// const db = require('../database/nosql/index.js');
// const router = require('./router.js');

var app = (0, _express2.default)(); // import "newrelic";

var source = _path2.default.join(__dirname, '../client/dist/');

app.use(_bodyParser2.default.json());
app.use(_express2.default.static(source));
// app.use(express.static('/Users/maria/Documents/HR/Reviews/client/dist/'));

app.use((0, _cors2.default)());
app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/", _router2.default);

app.listen(7000, function () {
  console.log("Listening on port 7000");
});

module.exports.app = app;

/***/ }),

/***/ "./server/model.js":
/*!*************************!*\
  !*** ./server/model.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var db = __webpack_require__(/*! ../database/sql/knexConnection.js */ "./database/sql/knexConnection.js");

module.exports = {

  getAllReviews: function getAllReviews(listingID, callback) {
    // const SQLquery = `SELECT r.review_description, u.u_id, u.photo_url, u.display_name, r.review_date FROM bookings b INNER JOIN reviews r ON r.bookings_id = b.b_id AND b.listings_id = 91
    // RIGHT JOIN users u ON b.users_id = u.u_id`;
    // select r.review_description, u.photo_url, u.display_name, r.review_date from bookings b left join reviews r on r.bookings_id = b.b_id left join users u on b.users_id = u.u_id where b.listings_id = 1;
    db.select("reviews.review_description", "users.photo_url", "users.display_name", "reviews.review_date").from("bookings").leftJoin("reviews", "reviews.bookings_id", "bookings.b_id").leftJoin("users", "bookings.users_id", "users.u_id").where("bookings.listings_id", listingID).whereNotNull("reviews.review_description").orderBy("reviews.review_date", "desc").then(function (res) {
      callback(res);
    }).catch(function (err) {
      console.error(err);
    });
  },

  postReview: function postReview(params, callback) {
    // const SQLquery = `INSERT INTO Reviews
    // (bookings_id, review_date, review, accuracy, communication, cleanliness, \`location\`, \`check_in\`, \`value\`)
    // VALUES
    // (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    db("reviews").insert({
      bookings_id: params[0],
      review_date: params[1],
      review_description: params[2],
      accuracy: params[3],
      communication: params[4],
      cleanliness: params[5],
      location: params[6],
      check_in: params[7],
      value: params[8]
    }).then(function (res) {
      callback("review is posted");
    }).catch(function (err) {
      console.error(err);
    });
  },

  updateReview: function updateReview(params, callback) {
    var SQLquery = "UPDATE Reviews\n    SET bookings_id = ?,\n        review_date = ?,\n        review = ?,\n        accuracy = ?,\n        communication = ?,\n        cleanliness = ?,\n        `location` = ?,\n        `check_in` = ?,\n        `value` = ?\n    WHERE r_id = ?";
    db("reviews").where("r_id", "=", params[0]).update({
      review_description: params[1],
      accuracy: params[2],
      communication: params[3],
      cleanliness: params[4],
      location: params[5],
      check_in: params[6],
      value: params[7]
    }).then(function (res) {
      callback("review is updated");
    }).catch(function (err) {
      console.error(err);
    });
  },

  deleteReview: function deleteReview(reviewID, callback) {
    db("reviews").where("r_id", reviewID).del().then(function (res) {
      callback("review is deleted");
    }).catch(function (err) {
      console.error(err);
    });
  },

  getRatings: function getRatings(listingID, callback) {
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
    db("bookings").avg({ accuracy: "accuracy" }).avg({ communication: "communication" }).avg({ cleanliness: "cleanliness" }).avg({ location: "location" }).avg({ check_in: "check_in" }).avg({ value: "value" }).leftJoin("reviews", "reviews.bookings_id", "bookings.b_id").leftJoin("users", "bookings.users_id", "users.u_id").where("bookings.listings_id", listingID).then(function (res) {
      callback(res);
    });
  },

  search: function search(listingID, query, callback) {
    db.select("reviews.review_description", "users.photo_url", "users.display_name", "reviews.review_date").from("reviews").where("bookings.listings_id", listingID).leftJoin("bookings", "reviews.bookings_id", "bookings.b_id").where("reviews.review_description", "like", query).leftJoin("users", "bookings.users_id", "users.u_id").orderBy("reviews.review_date", "desc").then(function (res) {
      callback(res);
    }).catch(function (err) {
      console.error(err);
    });
  }
};

/***/ }),

/***/ "./server/router.js":
/*!**************************!*\
  !*** ./server/router.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _fs = __webpack_require__(/*! fs */ "fs");

var _fs2 = _interopRequireDefault(_fs);

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _server2 = _interopRequireDefault(_server);

var _index = __webpack_require__(/*! ../client/src/index.jsx */ "./client/src/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

var _controller = __webpack_require__(/*! ./controller.js */ "./server/controller.js");

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const express = require('express');
// const path = require('path');
// const controller = require('./controller.js');

var router = _express2.default.Router();

router.get('/reviews', _controller2.default.getAllReviews);
router.get('/ratings', _controller2.default.getRatings);
router.get('/search', _controller2.default.search);
router.post('/reviews', _controller2.default.postReview);
router.put('/reviews', _controller2.default.updateReview);
router.delete('/reviews', _controller2.default.deleteReview);
router.get('/loaderio-acb2085fbf0ec76c82d63f5ff0aa05cf', _controller2.default.getLoader);

var source = _path2.default.join(__dirname, '../client/dist/index.html');

router.get('/*', function (req, res) {

  // make DB calls with req.query.id
  // data = {}, store it in there

  // let component = React.createElement(Reviews, props);
  // const app = ReactDOMServer.renderToString(component);

  var app = _server2.default.renderToString(_react2.default.createElement(_index2.default, null));

  var indexFile = _path2.default.resolve(source);
  // const indexFile = path.resolve('/Users/maria/Documents/HR/Reviews/client/dist/index.html');

  _fs2.default.readFile(indexFile, 'utf8', function (err, data) {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }
    return res.send(data.replace('<div id="reviews"></div>', '<div id="reviews">' + app + '</div>'));
  });
});

module.exports = router;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("knex");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pg");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-ratings-declarative":
/*!********************************************!*\
  !*** external "react-ratings-declarative" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ratings-declarative");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1Jldmlld0l0ZW0uanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SZXZpZXdMaXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvU2VhcmNoLmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvU3RhcnMuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9TdGFyc01vZGVsLmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9zcWwva25leENvbm5lY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlcnZlci9tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia25leFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJhdGluZ3MtZGVjbGFyYXRpdmVcIiJdLCJuYW1lcyI6WyJSZXZpZXdJdGVtIiwicHJvcHMiLCJzdGF0ZSIsInRydW5jYXRlIiwiY2xpY2tIYW5kbGVyIiwiYmluZCIsInNob3dBbGVydCIsInJldmlldyIsInJldmlld19kZXNjcmlwdGlvbiIsImxlbmd0aCIsInNldFN0YXRlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwicmVuZGVyVGV4dCIsInN1YnN0cmluZyIsIm1vbnRoTmFtZXMiLCJkYXRlIiwiRGF0ZSIsInJldmlld19kYXRlIiwibW9udGgiLCJnZXRVVENNb250aCIsIm5ld1NyYyIsInBob3RvX3VybCIsImRpc3BsYXlfbmFtZSIsInNsaWNlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZXZpZXdMaXN0IiwicmV2aWV3cyIsIm1hcCIsImluZGV4IiwiU2VhcmNoIiwicXVlcnkiLCJzdGFyc0xvYWRlZCIsImF2Z1JhdGluZyIsInJhdGluZ3NMb2FkZWQiLCJ0b3RhbFJhdGluZ3MiLCJzZWFyY2hRdWVyeSIsImhhbmRsZUtleVByZXNzIiwicmV2aWV3c0xvYWRlZCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwicmF0aW5ncyIsInN1bSIsImtleSIsIk51bWJlciIsImF2ZyIsInRhcmdldCIsInZhbHVlIiwic2VhcmNoUmV2aWV3cyIsIlN0YXJzIiwiaXNMb2FkZWQiLCJhY2N1cmFjeSIsImNvbW11bmljYXRpb24iLCJjbGVhbmxpbmVzcyIsImxvY2F0aW9uIiwiY2hlY2tfaW4iLCJzdGFyc01vZGVsIiwicmF0aW5nIiwiZGltZW5zaW9ucyIsIm1vZHVsZSIsImV4cG9ydHMiLCJSZXZpZXdzIiwic2VhcmNoIiwic2hvd1NlYXJjaCIsImdldEFsbFJldmlld3MiLCJnZXRSYXRpbmdzIiwicXVlcnlTdHJpbmciLCJ3aW5kb3ciLCJsaXN0aW5nSUQiLCJwYXJhbXMiLCJpZCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsImRhdGEiLCJjYXRjaCIsImNvbnNvbGUiLCJlcnJvciIsInBnIiwicmVxdWlyZSIsImtuZXgiLCJjbGllbnQiLCJjb25uZWN0aW9uIiwiaG9zdCIsInVzZXIiLCJwYXNzd29yZCIsImRhdGFiYXNlIiwicG9zdFJldmlldyIsInVwZGF0ZVJldmlldyIsImRlbGV0ZVJldmlldyIsInJlcSIsInJlcyIsInNlbmQiLCJyZXNwb25zZSIsImJvZHkiLCJib29raW5nc19pZCIsImdldExvYWRlciIsImFwcCIsInNvdXJjZSIsInBhdGgiLCJqb2luIiwiX19kaXJuYW1lIiwidXNlIiwiYm9keVBhcnNlciIsImpzb24iLCJleHByZXNzIiwic3RhdGljIiwiYWxsIiwibmV4dCIsImhlYWRlciIsInJvdXRlciIsImxpc3RlbiIsImxvZyIsImRiIiwiY2FsbGJhY2siLCJzZWxlY3QiLCJmcm9tIiwibGVmdEpvaW4iLCJ3aGVyZSIsIndoZXJlTm90TnVsbCIsIm9yZGVyQnkiLCJlcnIiLCJpbnNlcnQiLCJTUUxxdWVyeSIsInVwZGF0ZSIsInJldmlld0lEIiwiZGVsIiwiUm91dGVyIiwiY29udHJvbGxlciIsInBvc3QiLCJwdXQiLCJkZWxldGUiLCJSZWFjdERPTVNlcnZlciIsInJlbmRlclRvU3RyaW5nIiwiaW5kZXhGaWxlIiwicmVzb2x2ZSIsImZzIiwicmVhZEZpbGUiLCJzdGF0dXMiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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RDFDLEdBQTlELFlBREssQ0FBUDtBQUdDLEdBUkg7QUFTRCxDQXRCRDs7QUF3QkF0QyxPQUFPQyxPQUFQLEdBQWlCa0QsTUFBakIsQzs7Ozs7Ozs7Ozs7QUMvQ0Esa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0QiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NlcnZlci9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV2aWV3SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0cnVuY2F0ZTogZmFsc2UsXG4gICAgICAvLyBzaG9ydFRleHQ6IHRoaXMucHJvcHMucmV2aWV3LnJldmlld19kZXNjcmlwdGlvbi5zdWJzdHJpbmcoMCwgMjgwKSArIFwiLi4uXCIsXG4gICAgICAvLyByZXZpZXdUZXh0OiB0aGlzLnByb3BzLnJldmlldy5yZXZpZXdfZGVzY3JpcHRpb25cbiAgICB9O1xuICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gdGhpcy5jbGlja0hhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNob3dBbGVydCA9IHRoaXMuc2hvd0FsZXJ0LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5yZXZpZXcucmV2aWV3X2Rlc2NyaXB0aW9uLmxlbmd0aCA+IDI4MCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRydW5jYXRlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLnN0YXRlLnRydW5jYXRlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdHJ1bmNhdGU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRydW5jYXRlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzaG93QWxlcnQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFsZXJ0KFxuICAgICAgXCJUaGFuayB5b3UgZm9yIGZsYWdnaW5nIHRoaXMgcmV2aWV3ISBUaGlzIGlzIG5vdCBob3cgdGhlIHJlYWwgQWlyQm5CIHBhZ2UgZG9lcyB0aGlzLCBidXQgdGhhdCB3b3VsZCBoYXZlIGJlZW4gdG9vIGNvbXBsaWNhdGVkIGdpdmVuIG91ciBudW1lcm91cyBjb21wb25lbnRzLiBUaGFuayB5b3UgZm9yIHVuZGVyc3RhbmRpbmcuXCJcbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHJlbmRlclRleHQgPVxuICAgICAgdGhpcy5zdGF0ZS50cnVuY2F0ZSA9PT0gdHJ1ZSA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5yZXZpZXcucmV2aWV3X2Rlc2NyaXB0aW9uLnN1YnN0cmluZygwLCAyODApICsgXCIuLi5cIn17XCIgXCJ9XG4gICAgICAgICAgPGEgaHJlZj1cIlwiIG9uQ2xpY2s9e3RoaXMuY2xpY2tIYW5kbGVyfT5cbiAgICAgICAgICAgIFJlYWQgbW9yZVxuICAgICAgICAgIDwvYT57XCIgXCJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdj57dGhpcy5wcm9wcy5yZXZpZXcucmV2aWV3X2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgKTtcblxuICAgIGNvbnN0IG1vbnRoTmFtZXMgPSBbXG4gICAgICBcIkphbnVhcnlcIixcbiAgICAgIFwiRmVicnVhcnlcIixcbiAgICAgIFwiTWFyY2hcIixcbiAgICAgIFwiQXByaWxcIixcbiAgICAgIFwiTWF5XCIsXG4gICAgICBcIkp1bmVcIixcbiAgICAgIFwiSnVseVwiLFxuICAgICAgXCJBdWd1c3RcIixcbiAgICAgIFwiU2VwdGVtYmVyXCIsXG4gICAgICBcIk9jdG9iZXJcIixcbiAgICAgIFwiTm92ZW1iZXJcIixcbiAgICAgIFwiRGVjZW1iZXJcIlxuICAgIF07XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMucHJvcHMucmV2aWV3LnJldmlld19kYXRlKTtcbiAgICBjb25zdCBtb250aCA9IG1vbnRoTmFtZXNbZGF0ZS5nZXRVVENNb250aCgpXTtcblxuICAgIGNvbnN0IG5ld1NyYyA9IHRoaXMucHJvcHMucmV2aWV3LnBob3RvX3VybCArIFwiP3JhbmRvbT0xXCI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdJdGVtQ29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3SXRlbUhlYWRlclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJldmlld0l0ZW1IZWFkZXJQaG90b1NwYW5cIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXtuZXdTcmN9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJldmlld0l0ZW1IZWFkZXJQaG90b1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZXZpZXdJdGVtSGVhZGVySW5mb1wiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMucmV2aWV3LmRpc3BsYXlfbmFtZX0gPGJyIC8+XG4gICAgICAgICAgICB7bW9udGh9IHt0aGlzLnByb3BzLnJldmlldy5yZXZpZXdfZGF0ZS5zbGljZSgwLCA0KX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmV2aWV3SXRlbUhlYWRlckZsYWdcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwOi8vaW1ndXIuY29tLzhFTHVJVjgucG5nXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXZpZXdJdGVtSGVhZGVyRmxhZ0ltZ1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zaG93QWxlcnR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3JlbmRlclRleHR9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmV2aWV3SXRlbSBmcm9tIFwiLi9SZXZpZXdJdGVtLmpzeFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXZpZXdMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHJldmlldyA9IHRoaXMucHJvcHMucmV2aWV3cy5tYXAoKHJldmlldywgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiA8UmV2aWV3SXRlbSBrZXk9e2luZGV4fSByZXZpZXc9e3Jldmlld30gLz47XG4gICAgfSk7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdMaXN0Q29udGFpbmVyXCI+e3Jldmlld308L2Rpdj47XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3RhcnNNb2RlbCBmcm9tICcuL1N0YXJzTW9kZWwuanN4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHF1ZXJ5OiAnJyxcbiAgICAgIHN0YXJzTG9hZGVkOiBmYWxzZSxcbiAgICAgIGF2Z1JhdGluZzogMCxcbiAgICAgIHJhdGluZ3NMb2FkZWQ6IGZhbHNlLFxuICAgICAgdG90YWxSYXRpbmdzOiAwXG4gICAgfVxuICAgIHRoaXMuc2VhcmNoUXVlcnkgPSB0aGlzLnNlYXJjaFF1ZXJ5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVLZXlQcmVzcyA9IHRoaXMuaGFuZGxlS2V5UHJlc3MuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXJzTG9hZGVkID0gdGhpcy5zdGFyc0xvYWRlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmV2aWV3c0xvYWRlZCA9IHRoaXMucmV2aWV3c0xvYWRlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICh0aGlzLnByb3BzLnJhdGluZ3MgIT09IHByZXZQcm9wcy5yYXRpbmdzKSB7XG4gICAgICB0aGlzLnN0YXJzTG9hZGVkKHRoaXMucHJvcHMucmF0aW5ncyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLnJldmlld3MgIT09IHByZXZQcm9wcy5yZXZpZXdzKSB7XG4gICAgICB0aGlzLnJldmlld3NMb2FkZWQodGhpcy5wcm9wcy5yZXZpZXdzKTtcbiAgICB9XG4gIH1cblxuICBzdGFyc0xvYWRlZChyYXRpbmdzKSB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgZm9yICh2YXIga2V5IGluIHJhdGluZ3NbMF0pIHtcbiAgICAgIHN1bSArPSBOdW1iZXIocmF0aW5nc1swXVtrZXldKVxuICAgIH1cbiAgICBsZXQgYXZnID0gc3VtIC8gNjtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0YXJzTG9hZGVkOiB0cnVlLFxuICAgICAgYXZnUmF0aW5nOiBhdmdcbiAgICB9KTtcbiAgfVxuXG4gIHJldmlld3NMb2FkZWQocmV2aWV3cykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcmF0aW5nc0xvYWRlZDogdHJ1ZSxcbiAgICAgIHRvdGFsUmF0aW5nczogcmV2aWV3cy5sZW5ndGhcbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaFF1ZXJ5KGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBxdWVyeTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUtleVByZXNzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PSAnRW50ZXInKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5wcm9wcy5zZWFyY2hSZXZpZXdzKHRoaXMuc3RhdGUucXVlcnkpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaENvbnRhaW5lclwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b3RhbFJldmlld3NEaXZcIj5cbiAgICAgICAgICA8aDI+e3RoaXMuc3RhdGUucmF0aW5nc0xvYWRlZCA/IHRoaXMuc3RhdGUudG90YWxSYXRpbmdzIDogMH0gUmV2aWV3cyA8U3RhcnNNb2RlbCByYXRpbmc9e3RoaXMuc3RhdGUuc3RhcnNMb2FkZWQgPyB0aGlzLnN0YXRlLmF2Z1JhdGluZyA6IDB9IGRpbWVuc2lvbnM9JzI1cHgnLz48L2gyPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlYXJjaEJhckRpdlwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL2ltZ3VyLmNvbS9ucGJscWVELnBuZ1wiIGNsYXNzTmFtZT1cIm1hZ25pZnlJbWdcIi8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2hCYXJcIlxuICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCByZXZpZXdzXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucXVlcnl9XG4gICAgICAgICAgICBvbktleVByZXNzPXt0aGlzLmhhbmRsZUtleVByZXNzfVxuICAgICAgICAgID48L2lucHV0PlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU3RhcnNNb2RlbCBmcm9tIFwiLi9TdGFyc01vZGVsLmpzeFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0xvYWRlZDogZmFsc2UsXG4gICAgICByYXRpbmdzOiBbXVxuICAgIH07XG4gICAgdGhpcy5yYXRpbmdzTG9hZGVkID0gdGhpcy5yYXRpbmdzTG9hZGVkLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHRoaXMucHJvcHMucmF0aW5ncyAhPT0gcHJldlByb3BzLnJhdGluZ3MpIHtcbiAgICAgIHRoaXMucmF0aW5nc0xvYWRlZCh0aGlzLnByb3BzLnJhdGluZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHJhdGluZ3NMb2FkZWQocmF0aW5ncykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNMb2FkZWQ6IHRydWUsXG4gICAgICByYXRpbmdzOiByYXRpbmdzXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhcnNDb250YWluZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRMZWZ0NTBcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRMZWZ0NTBcIj5BY2N1cmFjeTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0UmlnaHQ1MFwiPlxuICAgICAgICAgICAgICA8U3RhcnNNb2RlbFxuICAgICAgICAgICAgICAgIHJhdGluZz17XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzTG9hZGVkXG4gICAgICAgICAgICAgICAgICAgID8gTnVtYmVyKHRoaXMuc3RhdGUucmF0aW5nc1swXS5hY2N1cmFjeSlcbiAgICAgICAgICAgICAgICAgICAgOiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnM9XCIxNXB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRMZWZ0NTBcIj5Db21tdW5pY2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRSaWdodDUwXCI+XG4gICAgICAgICAgICAgIDxTdGFyc01vZGVsXG4gICAgICAgICAgICAgICAgcmF0aW5nPXtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNMb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgPyBOdW1iZXIodGhpcy5zdGF0ZS5yYXRpbmdzWzBdLmNvbW11bmljYXRpb24pXG4gICAgICAgICAgICAgICAgICAgIDogMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaW1lbnNpb25zPVwiMTVweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0TGVmdDUwXCI+Q2xlYW5saW5lc3M8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdFJpZ2h0NTBcIj5cbiAgICAgICAgICAgICAgPFN0YXJzTW9kZWxcbiAgICAgICAgICAgICAgICByYXRpbmc9e1xuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0xvYWRlZFxuICAgICAgICAgICAgICAgICAgICA/IE51bWJlcih0aGlzLnN0YXRlLnJhdGluZ3NbMF0uY2xlYW5saW5lc3MpXG4gICAgICAgICAgICAgICAgICAgIDogMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaW1lbnNpb25zPVwiMTVweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdFJpZ2h0NTBcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRMZWZ0NTBcIj5Mb2NhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0UmlnaHQ1MFwiPlxuICAgICAgICAgICAgICA8U3RhcnNNb2RlbFxuICAgICAgICAgICAgICAgIHJhdGluZz17XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzTG9hZGVkXG4gICAgICAgICAgICAgICAgICAgID8gTnVtYmVyKHRoaXMuc3RhdGUucmF0aW5nc1swXS5sb2NhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgOiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnM9XCIxNXB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRMZWZ0NTBcIj5DaGVjay1pbjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0UmlnaHQ1MFwiPlxuICAgICAgICAgICAgICA8U3RhcnNNb2RlbFxuICAgICAgICAgICAgICAgIHJhdGluZz17XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzTG9hZGVkXG4gICAgICAgICAgICAgICAgICAgID8gTnVtYmVyKHRoaXMuc3RhdGUucmF0aW5nc1swXS5jaGVja19pbilcbiAgICAgICAgICAgICAgICAgICAgOiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnM9XCIxNXB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRMZWZ0NTBcIj5WYWx1ZTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0UmlnaHQ1MFwiPlxuICAgICAgICAgICAgICA8U3RhcnNNb2RlbFxuICAgICAgICAgICAgICAgIHJhdGluZz17XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzTG9hZGVkID8gTnVtYmVyKHRoaXMuc3RhdGUucmF0aW5nc1swXS52YWx1ZSkgOiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnM9XCIxNXB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSYXRpbmdzIGZyb20gJ3JlYWN0LXJhdGluZ3MtZGVjbGFyYXRpdmUnO1xuXG5jb25zdCBzdGFyc01vZGVsID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJhdGluZ3MgcmF0aW5nPXtwcm9wcy5yYXRpbmd9IHdpZGdldERpbWVuc2lvbnM9e3Byb3BzLmRpbWVuc2lvbnN9IHdpZGdldFNwYWNpbmdzPVwiNXB4XCI+XG4gICAgICA8UmF0aW5ncy5XaWRnZXQgd2lkZ2V0UmF0ZWRDb2xvcj1cIiMwMDg0ODlcIi8+XG4gICAgICA8UmF0aW5ncy5XaWRnZXQgd2lkZ2V0UmF0ZWRDb2xvcj1cIiMwMDg0ODlcIi8+XG4gICAgICA8UmF0aW5ncy5XaWRnZXQgd2lkZ2V0UmF0ZWRDb2xvcj1cIiMwMDg0ODlcIi8+XG4gICAgICA8UmF0aW5ncy5XaWRnZXQgd2lkZ2V0UmF0ZWRDb2xvcj1cIiMwMDg0ODlcIi8+XG4gICAgICA8UmF0aW5ncy5XaWRnZXQgd2lkZ2V0UmF0ZWRDb2xvcj1cIiMwMDg0ODlcIi8+XG4gICAgPC9SYXRpbmdzPlxuICApXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YXJzTW9kZWw7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi9jb21wb25lbnRzL1NlYXJjaC5qc3hcIjtcbmltcG9ydCBTdGFycyBmcm9tIFwiLi9jb21wb25lbnRzL1N0YXJzLmpzeFwiO1xuaW1wb3J0IFJldmlld0xpc3QgZnJvbSBcIi4vY29tcG9uZW50cy9SZXZpZXdMaXN0LmpzeFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXZpZXdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJldmlld3M6IFtdLFxuICAgICAgc2VhcmNoOiBbXSxcbiAgICAgIHJhdGluZ3M6IFtdLFxuICAgICAgc2hvd1NlYXJjaDogZmFsc2VcbiAgICB9O1xuICAgIHRoaXMuZ2V0QWxsUmV2aWV3cyA9IHRoaXMuZ2V0QWxsUmV2aWV3cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VhcmNoUmV2aWV3cyA9IHRoaXMuc2VhcmNoUmV2aWV3cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0UmF0aW5ncyA9IHRoaXMuZ2V0UmF0aW5ncy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRBbGxSZXZpZXdzKCk7XG4gICAgdGhpcy5nZXRSYXRpbmdzKCk7XG4gIH1cblxuICBnZXRBbGxSZXZpZXdzKCkge1xuICAgIGxldCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgbGV0IGxpc3RpbmdJRCA9IHF1ZXJ5U3RyaW5nLnNsaWNlKDQpO1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgaWQ6IGxpc3RpbmdJRFxuICAgICAgfVxuICAgIH07XG5cbiAgICBheGlvc1xuICAgICAgLmdldChcIi9yZXZpZXdzXCIsIHBhcmFtcylcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICByZXZpZXdzOiBkYXRhXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICBzZWFyY2hSZXZpZXdzKHF1ZXJ5KSB7XG4gICAgbGV0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICBsZXQgbGlzdGluZ0lEID0gcXVlcnlTdHJpbmcuc2xpY2UoNCk7XG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBpZDogbGlzdGluZ0lELFxuICAgICAgICBxdWVyeTogYCUke3F1ZXJ5fSVgXG4gICAgICB9XG4gICAgfTtcblxuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiL3NlYXJjaFwiLCBwYXJhbXMpXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2VhcmNoOiBkYXRhLFxuICAgICAgICAgIHNob3dTZWFyY2g6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldFJhdGluZ3MoKSB7XG4gICAgbGV0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICBsZXQgbGlzdGluZ0lEID0gcXVlcnlTdHJpbmcuc2xpY2UoNCk7XG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBpZDogbGlzdGluZ0lEXG4gICAgICB9XG4gICAgfTtcblxuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiL3JhdGluZ3NcIiwgcGFyYW1zKVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIGlmIChkYXRhWzBdLmFjY3VyYWN5ICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByYXRpbmdzOiBkYXRhXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VhcmNoXG4gICAgICAgICAgc2VhcmNoUmV2aWV3cz17dGhpcy5zZWFyY2hSZXZpZXdzfVxuICAgICAgICAgIHJhdGluZ3M9e3RoaXMuc3RhdGUucmF0aW5nc31cbiAgICAgICAgICByZXZpZXdzPXt0aGlzLnN0YXRlLnJldmlld3N9XG4gICAgICAgIC8+XG4gICAgICAgIDxTdGFycyByYXRpbmdzPXt0aGlzLnN0YXRlLnJhdGluZ3N9IC8+XG4gICAgICAgIDxSZXZpZXdMaXN0XG4gICAgICAgICAgcmV2aWV3cz17XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dTZWFyY2ggPyB0aGlzLnN0YXRlLnNlYXJjaCA6IHRoaXMuc3RhdGUucmV2aWV3c1xuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gUmVhY3RET00ucmVuZGVyKDxSZXZpZXdzIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJldmlld3NcIikpO1xuIiwiLy8gSW5pdGlhbCBkcmFmdCBzZXQgdXAgb2Yga25leCAvLyBub3QgeWV0IHNldCB1cFxuY29uc3QgcGcgPSByZXF1aXJlKCdwZycpO1xuXG52YXIga25leCA9IHJlcXVpcmUoJ2tuZXgnKSh7XG4gIGNsaWVudDogJ3BnJyxcbiAgY29ubmVjdGlvbjoge1xuICAgIGhvc3QgICAgIDogJ2VjMi0xOC0yMjMtMjA5LTIzNC51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tJyxcbiAgICB1c2VyICAgICA6ICdwb3N0Z3JlcycsXG4gICAgcGFzc3dvcmQgOiAnMDIzNzEwMHQnLCAgXG4gICAgZGF0YWJhc2UgOiAnc3RheWJuYl9rbmV4JyxcbiAgfVxuICAvLyBjb25uZWN0aW9uOiAncG9zdGdyZXM6Ly8xMC4zODA6NTQzMidcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtuZXg7IiwiY29uc3Qge1xuICBnZXRBbGxSZXZpZXdzLFxuICBwb3N0UmV2aWV3LFxuICB1cGRhdGVSZXZpZXcsXG4gIGRlbGV0ZVJldmlldyxcbiAgZ2V0UmF0aW5ncyxcbiAgc2VhcmNoXG59ID0gcmVxdWlyZShcIi4vbW9kZWwuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRBbGxSZXZpZXdzOiAocmVxLCByZXMpID0+IHtcbiAgICBnZXRBbGxSZXZpZXdzKHJlcS5xdWVyeS5pZCwgcmVzcG9uc2UgPT4ge1xuICAgICAgcmVzLnNlbmQocmVzcG9uc2UpO1xuICAgIH0pO1xuICB9LFxuXG4gIHBvc3RSZXZpZXc6IChyZXEsIHJlcykgPT4ge1xuICAgIHBhcmFtcyA9IFtcbiAgICAgIHJlcS5ib2R5LmJvb2tpbmdzX2lkLFxuICAgICAgcmVxLmJvZHkucmV2aWV3X2RhdGUsXG4gICAgICByZXEuYm9keS5yZXZpZXdfZGVzY3JpcHRpb24sXG4gICAgICByZXEuYm9keS5hY2N1cmFjeSxcbiAgICAgIHJlcS5ib2R5LmNvbW11bmljYXRpb24sXG4gICAgICByZXEuYm9keS5jbGVhbmxpbmVzcyxcbiAgICAgIHJlcS5ib2R5LmxvY2F0aW9uLFxuICAgICAgcmVxLmJvZHkuY2hlY2tfaW4sXG4gICAgICByZXEuYm9keS52YWx1ZVxuICAgIF07XG4gICAgcG9zdFJldmlldyhwYXJhbXMsIHJlc3BvbnNlID0+IHtcbiAgICAgIHJlcy5zZW5kKFwiUmV2aWV3IGlzIHBvc3RlZCFcIik7XG4gICAgfSk7XG4gIH0sXG5cbiAgdXBkYXRlUmV2aWV3OiAocmVxLCByZXMpID0+IHtcbiAgICBwYXJhbXMgPSBbXG4gICAgICByZXEucXVlcnkuaWQsXG4gICAgICByZXEuYm9keS5yZXZpZXcsXG4gICAgICByZXEuYm9keS5hY2N1cmFjeSxcbiAgICAgIHJlcS5ib2R5LmNvbW11bmljYXRpb24sXG4gICAgICByZXEuYm9keS5jbGVhbmxpbmVzcyxcbiAgICAgIHJlcS5ib2R5LmxvY2F0aW9uLFxuICAgICAgcmVxLmJvZHkuY2hlY2tfaW4sXG4gICAgICByZXEuYm9keS52YWx1ZVxuICAgIF07XG4gICAgdXBkYXRlUmV2aWV3KHBhcmFtcywgcmVzcG9uc2UgPT4ge1xuICAgICAgcmVzLnNlbmQoXCJSZXZpZXcgaXMgdXBkYXRlZCFcIik7XG4gICAgfSk7XG4gIH0sXG5cbiAgZGVsZXRlUmV2aWV3OiAocmVxLCByZXMpID0+IHtcbiAgICBkZWxldGVSZXZpZXcocmVxLnF1ZXJ5LmlkLCByZXNwb25zZSA9PiB7XG4gICAgICByZXMuc2VuZChcIlJldmlldyBpcyBkZWxldGVkIVwiKTtcbiAgICB9KTtcbiAgfSxcblxuICBnZXRSYXRpbmdzOiAocmVxLCByZXMpID0+IHtcbiAgICBnZXRSYXRpbmdzKHJlcS5xdWVyeS5pZCwgcmVzcG9uc2UgPT4ge1xuICAgICAgcmVzLnNlbmQocmVzcG9uc2UpO1xuICAgIH0pO1xuICB9LFxuXG4gIHNlYXJjaDogKHJlcSwgcmVzKSA9PiB7XG4gICAgc2VhcmNoKHJlcS5xdWVyeS5pZCwgcmVxLnF1ZXJ5LnF1ZXJ5LCByZXNwb25zZSA9PiB7XG4gICAgICByZXMuc2VuZChyZXNwb25zZSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgZ2V0TG9hZGVyOiAocmVxLCByZXMpID0+IHtcbiAgICByZXMuc2VuZCgnbG9hZGVyaW8tYWNiMjA4NWZiZjBlYzc2YzgyZDYzZjVmZjBhYTA1Y2YnKTtcbiAgfVxufTtcbiIsIi8vIGltcG9ydCBcIm5ld3JlbGljXCI7XG5pbXBvcnQgYm9keVBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcbmltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgUmVhY3RET01TZXJ2ZXIgZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCByb3V0ZXIgZnJvbSBcIi4vcm91dGVyLmpzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuLy8gaW1wb3J0IEFwcCBmcm9tICcuLi9jbGllbnQvc3JjL2luZGV4LmpzJztcblxuLy8gY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbi8vIGNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xuLy8gY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbi8vIGNvbnN0IGNvcnMgPSByZXF1aXJlKCdjb3JzJyk7XG5cbi8vIGNvbnN0IGRiID0gcmVxdWlyZSgnLi4vZGF0YWJhc2Uvbm9zcWwvaW5kZXguanMnKTtcbi8vIGNvbnN0IHJvdXRlciA9IHJlcXVpcmUoJy4vcm91dGVyLmpzJyk7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IHNvdXJjZSA9IHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9jbGllbnQvZGlzdC8nKTtcblxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHNvdXJjZSkpO1xuLy8gYXBwLnVzZShleHByZXNzLnN0YXRpYygnL1VzZXJzL21hcmlhL0RvY3VtZW50cy9IUi9SZXZpZXdzL2NsaWVudC9kaXN0LycpKTtcblxuYXBwLnVzZShjb3JzKCkpO1xuYXBwLmFsbChcIi8qXCIsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICByZXMuaGVhZGVyKFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCIsIFwiKlwiKTtcbiAgbmV4dCgpO1xufSk7XG5cbmFwcC51c2UoXCIvXCIsIHJvdXRlcik7XG5cbmFwcC5saXN0ZW4oNzAwMCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIkxpc3RlbmluZyBvbiBwb3J0IDcwMDBcIik7XG59KTtcblxubW9kdWxlLmV4cG9ydHMuYXBwID0gYXBwO1xuIiwiY29uc3QgZGIgPSByZXF1aXJlKFwiLi4vZGF0YWJhc2Uvc3FsL2tuZXhDb25uZWN0aW9uLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICBnZXRBbGxSZXZpZXdzOiAobGlzdGluZ0lELCBjYWxsYmFjaykgPT4ge1xuICAgIC8vIGNvbnN0IFNRTHF1ZXJ5ID0gYFNFTEVDVCByLnJldmlld19kZXNjcmlwdGlvbiwgdS51X2lkLCB1LnBob3RvX3VybCwgdS5kaXNwbGF5X25hbWUsIHIucmV2aWV3X2RhdGUgRlJPTSBib29raW5ncyBiIElOTkVSIEpPSU4gcmV2aWV3cyByIE9OIHIuYm9va2luZ3NfaWQgPSBiLmJfaWQgQU5EIGIubGlzdGluZ3NfaWQgPSA5MVxuICAgIC8vIFJJR0hUIEpPSU4gdXNlcnMgdSBPTiBiLnVzZXJzX2lkID0gdS51X2lkYDtcbiAgICAvLyBzZWxlY3Qgci5yZXZpZXdfZGVzY3JpcHRpb24sIHUucGhvdG9fdXJsLCB1LmRpc3BsYXlfbmFtZSwgci5yZXZpZXdfZGF0ZSBmcm9tIGJvb2tpbmdzIGIgbGVmdCBqb2luIHJldmlld3MgciBvbiByLmJvb2tpbmdzX2lkID0gYi5iX2lkIGxlZnQgam9pbiB1c2VycyB1IG9uIGIudXNlcnNfaWQgPSB1LnVfaWQgd2hlcmUgYi5saXN0aW5nc19pZCA9IDE7XG4gICAgZGIuc2VsZWN0KFxuICAgICAgXCJyZXZpZXdzLnJldmlld19kZXNjcmlwdGlvblwiLFxuICAgICAgXCJ1c2Vycy5waG90b191cmxcIixcbiAgICAgIFwidXNlcnMuZGlzcGxheV9uYW1lXCIsXG4gICAgICBcInJldmlld3MucmV2aWV3X2RhdGVcIlxuICAgIClcbiAgICAgIC5mcm9tKFwiYm9va2luZ3NcIilcbiAgICAgIC5sZWZ0Sm9pbihcInJldmlld3NcIiwgXCJyZXZpZXdzLmJvb2tpbmdzX2lkXCIsIFwiYm9va2luZ3MuYl9pZFwiKVxuICAgICAgLmxlZnRKb2luKFwidXNlcnNcIiwgXCJib29raW5ncy51c2Vyc19pZFwiLCBcInVzZXJzLnVfaWRcIilcbiAgICAgIC53aGVyZShcImJvb2tpbmdzLmxpc3RpbmdzX2lkXCIsIGxpc3RpbmdJRClcbiAgICAgIC53aGVyZU5vdE51bGwoXCJyZXZpZXdzLnJldmlld19kZXNjcmlwdGlvblwiKVxuICAgICAgLm9yZGVyQnkoXCJyZXZpZXdzLnJldmlld19kYXRlXCIsIFwiZGVzY1wiKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG4gIH0sXG5cbiAgcG9zdFJldmlldzogKHBhcmFtcywgY2FsbGJhY2spID0+IHtcbiAgICAvLyBjb25zdCBTUUxxdWVyeSA9IGBJTlNFUlQgSU5UTyBSZXZpZXdzXG4gICAgLy8gKGJvb2tpbmdzX2lkLCByZXZpZXdfZGF0ZSwgcmV2aWV3LCBhY2N1cmFjeSwgY29tbXVuaWNhdGlvbiwgY2xlYW5saW5lc3MsIFxcYGxvY2F0aW9uXFxgLCBcXGBjaGVja19pblxcYCwgXFxgdmFsdWVcXGApXG4gICAgLy8gVkFMVUVTXG4gICAgLy8gKD8sID8sID8sID8sID8sID8sID8sID8sID8pYDtcbiAgICBkYihcInJldmlld3NcIilcbiAgICAgIC5pbnNlcnQoe1xuICAgICAgICBib29raW5nc19pZDogcGFyYW1zWzBdLFxuICAgICAgICByZXZpZXdfZGF0ZTogcGFyYW1zWzFdLFxuICAgICAgICByZXZpZXdfZGVzY3JpcHRpb246IHBhcmFtc1syXSxcbiAgICAgICAgYWNjdXJhY3k6IHBhcmFtc1szXSxcbiAgICAgICAgY29tbXVuaWNhdGlvbjogcGFyYW1zWzRdLFxuICAgICAgICBjbGVhbmxpbmVzczogcGFyYW1zWzVdLFxuICAgICAgICBsb2NhdGlvbjogcGFyYW1zWzZdLFxuICAgICAgICBjaGVja19pbjogcGFyYW1zWzddLFxuICAgICAgICB2YWx1ZTogcGFyYW1zWzhdXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY2FsbGJhY2soXCJyZXZpZXcgaXMgcG9zdGVkXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcbiAgfSxcblxuICB1cGRhdGVSZXZpZXc6IChwYXJhbXMsIGNhbGxiYWNrKSA9PiB7XG4gICAgY29uc3QgU1FMcXVlcnkgPSBgVVBEQVRFIFJldmlld3NcbiAgICBTRVQgYm9va2luZ3NfaWQgPSA/LFxuICAgICAgICByZXZpZXdfZGF0ZSA9ID8sXG4gICAgICAgIHJldmlldyA9ID8sXG4gICAgICAgIGFjY3VyYWN5ID0gPyxcbiAgICAgICAgY29tbXVuaWNhdGlvbiA9ID8sXG4gICAgICAgIGNsZWFubGluZXNzID0gPyxcbiAgICAgICAgXFxgbG9jYXRpb25cXGAgPSA/LFxuICAgICAgICBcXGBjaGVja19pblxcYCA9ID8sXG4gICAgICAgIFxcYHZhbHVlXFxgID0gP1xuICAgIFdIRVJFIHJfaWQgPSA/YDtcbiAgICBkYihcInJldmlld3NcIilcbiAgICAgIC53aGVyZShcInJfaWRcIiwgXCI9XCIsIHBhcmFtc1swXSlcbiAgICAgIC51cGRhdGUoe1xuICAgICAgICByZXZpZXdfZGVzY3JpcHRpb246IHBhcmFtc1sxXSxcbiAgICAgICAgYWNjdXJhY3k6IHBhcmFtc1syXSxcbiAgICAgICAgY29tbXVuaWNhdGlvbjogcGFyYW1zWzNdLFxuICAgICAgICBjbGVhbmxpbmVzczogcGFyYW1zWzRdLFxuICAgICAgICBsb2NhdGlvbjogcGFyYW1zWzVdLFxuICAgICAgICBjaGVja19pbjogcGFyYW1zWzZdLFxuICAgICAgICB2YWx1ZTogcGFyYW1zWzddXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY2FsbGJhY2soXCJyZXZpZXcgaXMgdXBkYXRlZFwiKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG4gIH0sXG5cbiAgZGVsZXRlUmV2aWV3OiAocmV2aWV3SUQsIGNhbGxiYWNrKSA9PiB7XG4gICAgZGIoXCJyZXZpZXdzXCIpXG4gICAgICAud2hlcmUoXCJyX2lkXCIsIHJldmlld0lEKVxuICAgICAgLmRlbCgpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBjYWxsYmFjayhcInJldmlldyBpcyBkZWxldGVkXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcbiAgfSxcblxuICBnZXRSYXRpbmdzOiAobGlzdGluZ0lELCBjYWxsYmFjaykgPT4ge1xuICAgIC8vIGxldCBTUUxxdWVyeSA9IGBTRUxFQ1QgQVZHKGFjY3VyYWN5KSBBUyBhY2N1cmFjeSwgQVZHKGNvbW11bmljYXRpb24pIEFTIGNvbW11bmljYXRpb24sIEFWRyhjbGVhbmxpbmVzcykgYXMgY2xlYW5saW5lc3MsIEFWRyhcXGBsb2NhdGlvblxcYCkgYXMgbG9jYXRpb24sIEFWRyhcXGBjaGVja19pblxcYCkgYXMgY2hlY2tpbiwgQVZHKFxcYHZhbHVlXFxgKSBhcyB2YWx1ZVxuICAgIC8vIEZST00gUmV2aWV3c1xuICAgIC8vIElOTkVSIEpPSU4gQm9va2luZ3NcbiAgICAvLyBPTiBSZXZpZXdzLmJvb2tpbmdzX2lkID0gQm9va2luZ3MuYl9pZFxuICAgIC8vIExFRlQgSk9JTiBVc2Vyc1xuICAgIC8vIE9OIEJvb2tpbmdzLnVzZXJzX2lkID0gVXNlcnMudV9pZFxuICAgIC8vIFdIRVJFIEJvb2tpbmdzLmxpc3RpbmdzX2lkID0gJHtsaXN0aW5nSUR9O2A7XG4gICAgLy8gZGIucXVlcnkoU1FMcXVlcnksIChlcnJvciwgcmVzcG9uc2UpID0+IHtcbiAgICAvLyAgIGlmIChlcnJvcikge1xuICAgIC8vICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIGNhbGxiYWNrKHJlc3BvbnNlKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcbiAgICBkYihcImJvb2tpbmdzXCIpXG4gICAgICAuYXZnKHsgYWNjdXJhY3k6IFwiYWNjdXJhY3lcIiB9KVxuICAgICAgLmF2Zyh7IGNvbW11bmljYXRpb246IFwiY29tbXVuaWNhdGlvblwiIH0pXG4gICAgICAuYXZnKHsgY2xlYW5saW5lc3M6IFwiY2xlYW5saW5lc3NcIiB9KVxuICAgICAgLmF2Zyh7IGxvY2F0aW9uOiBcImxvY2F0aW9uXCIgfSlcbiAgICAgIC5hdmcoeyBjaGVja19pbjogXCJjaGVja19pblwiIH0pXG4gICAgICAuYXZnKHsgdmFsdWU6IFwidmFsdWVcIiB9KVxuICAgICAgLmxlZnRKb2luKFwicmV2aWV3c1wiLCBcInJldmlld3MuYm9va2luZ3NfaWRcIiwgXCJib29raW5ncy5iX2lkXCIpXG4gICAgICAubGVmdEpvaW4oXCJ1c2Vyc1wiLCBcImJvb2tpbmdzLnVzZXJzX2lkXCIsIFwidXNlcnMudV9pZFwiKVxuICAgICAgLndoZXJlKFwiYm9va2luZ3MubGlzdGluZ3NfaWRcIiwgbGlzdGluZ0lEKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgIH0pO1xuICB9LFxuXG4gIHNlYXJjaDogKGxpc3RpbmdJRCwgcXVlcnksIGNhbGxiYWNrKSA9PiB7XG4gICAgZGIuc2VsZWN0KFxuICAgICAgXCJyZXZpZXdzLnJldmlld19kZXNjcmlwdGlvblwiLFxuICAgICAgXCJ1c2Vycy5waG90b191cmxcIixcbiAgICAgIFwidXNlcnMuZGlzcGxheV9uYW1lXCIsXG4gICAgICBcInJldmlld3MucmV2aWV3X2RhdGVcIlxuICAgIClcbiAgICAgIC5mcm9tKFwicmV2aWV3c1wiKVxuICAgICAgLndoZXJlKFwiYm9va2luZ3MubGlzdGluZ3NfaWRcIiwgbGlzdGluZ0lEKVxuICAgICAgLmxlZnRKb2luKFwiYm9va2luZ3NcIiwgXCJyZXZpZXdzLmJvb2tpbmdzX2lkXCIsIFwiYm9va2luZ3MuYl9pZFwiKVxuICAgICAgLndoZXJlKFwicmV2aWV3cy5yZXZpZXdfZGVzY3JpcHRpb25cIiwgXCJsaWtlXCIsIHF1ZXJ5KVxuICAgICAgLmxlZnRKb2luKFwidXNlcnNcIiwgXCJib29raW5ncy51c2Vyc19pZFwiLCBcInVzZXJzLnVfaWRcIilcbiAgICAgIC5vcmRlckJ5KFwicmV2aWV3cy5yZXZpZXdfZGF0ZVwiLCBcImRlc2NcIilcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNhbGxiYWNrKHJlcyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgUmVhY3RET01TZXJ2ZXIgZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgUmV2aWV3cyBmcm9tICcuLi9jbGllbnQvc3JjL2luZGV4LmpzeCc7XG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyLmpzJztcbi8vIGNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG4vLyBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuLy8gY29uc3QgY29udHJvbGxlciA9IHJlcXVpcmUoJy4vY29udHJvbGxlci5qcycpO1xuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5yb3V0ZXIuZ2V0KCcvcmV2aWV3cycsIGNvbnRyb2xsZXIuZ2V0QWxsUmV2aWV3cyk7XG5yb3V0ZXIuZ2V0KCcvcmF0aW5ncycsIGNvbnRyb2xsZXIuZ2V0UmF0aW5ncyk7XG5yb3V0ZXIuZ2V0KCcvc2VhcmNoJywgY29udHJvbGxlci5zZWFyY2gpO1xucm91dGVyLnBvc3QoJy9yZXZpZXdzJywgY29udHJvbGxlci5wb3N0UmV2aWV3KTtcbnJvdXRlci5wdXQoJy9yZXZpZXdzJywgY29udHJvbGxlci51cGRhdGVSZXZpZXcpO1xucm91dGVyLmRlbGV0ZSgnL3Jldmlld3MnLCBjb250cm9sbGVyLmRlbGV0ZVJldmlldyk7XG5yb3V0ZXIuZ2V0KCcvbG9hZGVyaW8tYWNiMjA4NWZiZjBlYzc2YzgyZDYzZjVmZjBhYTA1Y2YnLCBjb250cm9sbGVyLmdldExvYWRlcilcblxuY29uc3Qgc291cmNlID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL2NsaWVudC9kaXN0L2luZGV4Lmh0bWwnKTtcblxucm91dGVyLmdldCgnLyonLCAocmVxLCByZXMpID0+IHtcblxuICAvLyBtYWtlIERCIGNhbGxzIHdpdGggcmVxLnF1ZXJ5LmlkXG4gIC8vIGRhdGEgPSB7fSwgc3RvcmUgaXQgaW4gdGhlcmVcblxuICAvLyBsZXQgY29tcG9uZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChSZXZpZXdzLCBwcm9wcyk7XG4gIC8vIGNvbnN0IGFwcCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKGNvbXBvbmVudCk7XG5cbiAgY29uc3QgYXBwID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoPFJldmlld3MgLz4pO1xuICBcbiAgY29uc3QgaW5kZXhGaWxlID0gcGF0aC5yZXNvbHZlKHNvdXJjZSk7XG4gIC8vIGNvbnN0IGluZGV4RmlsZSA9IHBhdGgucmVzb2x2ZSgnL1VzZXJzL21hcmlhL0RvY3VtZW50cy9IUi9SZXZpZXdzL2NsaWVudC9kaXN0L2luZGV4Lmh0bWwnKTtcblxuICBmcy5yZWFkRmlsZShpbmRleEZpbGUsICd1dGY4JywgKGVyciwgZGF0YSkgPT4ge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1NvbWV0aGluZyB3ZW50IHdyb25nOicsIGVycik7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoJ09vcHMsIGJldHRlciBsdWNrIG5leHQgdGltZSEnKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5zZW5kKFxuICAgICAgZGF0YS5yZXBsYWNlKCc8ZGl2IGlkPVwicmV2aWV3c1wiPjwvZGl2PicsIGA8ZGl2IGlkPVwicmV2aWV3c1wiPiR7YXBwfTwvZGl2PmApXG4gICAgICApO1xuICAgIH0pO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrbmV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmF0aW5ncy1kZWNsYXJhdGl2ZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9