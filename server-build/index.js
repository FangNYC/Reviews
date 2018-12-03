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
    host: '3.16.27.159',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1Jldmlld0l0ZW0uanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SZXZpZXdMaXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvU2VhcmNoLmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvU3RhcnMuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9TdGFyc01vZGVsLmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9zcWwva25leENvbm5lY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlcnZlci9tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia25leFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJhdGluZ3MtZGVjbGFyYXRpdmVcIiJdLCJuYW1lcyI6WyJSZXZpZXdJdGVtIiwicHJvcHMiLCJzdGF0ZSIsInRydW5jYXRlIiwiY2xpY2tIYW5kbGVyIiwiYmluZCIsInNob3dBbGVydCIsInJldmlldyIsInJldmlld19kZXNjcmlwdGlvbiIsImxlbmd0aCIsInNldFN0YXRlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwicmVuZGVyVGV4dCIsInN1YnN0cmluZyIsIm1vbnRoTmFtZXMiLCJkYXRlIiwiRGF0ZSIsInJldmlld19kYXRlIiwibW9udGgiLCJnZXRVVENNb250aCIsIm5ld1NyYyIsInBob3RvX3VybCIsImRpc3BsYXlfbmFtZSIsInNsaWNlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZXZpZXdMaXN0IiwicmV2aWV3cyIsIm1hcCIsImluZGV4IiwiU2VhcmNoIiwicXVlcnkiLCJzdGFyc0xvYWRlZCIsImF2Z1JhdGluZyIsInJhdGluZ3NMb2FkZWQiLCJ0b3RhbFJhdGluZ3MiLCJzZWFyY2hRdWVyeSIsImhhbmRsZUtleVByZXNzIiwicmV2aWV3c0xvYWRlZCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwicmF0aW5ncyIsInN1bSIsImtleSIsIk51bWJlciIsImF2ZyIsInRhcmdldCIsInZhbHVlIiwic2VhcmNoUmV2aWV3cyIsIlN0YXJzIiwiaXNMb2FkZWQiLCJhY2N1cmFjeSIsImNvbW11bmljYXRpb24iLCJjbGVhbmxpbmVzcyIsImxvY2F0aW9uIiwiY2hlY2tfaW4iLCJzdGFyc01vZGVsIiwicmF0aW5nIiwiZGltZW5zaW9ucyIsIm1vZHVsZSIsImV4cG9ydHMiLCJSZXZpZXdzIiwic2VhcmNoIiwic2hvd1NlYXJjaCIsImdldEFsbFJldmlld3MiLCJnZXRSYXRpbmdzIiwicXVlcnlTdHJpbmciLCJ3aW5kb3ciLCJsaXN0aW5nSUQiLCJwYXJhbXMiLCJpZCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsImRhdGEiLCJjYXRjaCIsImNvbnNvbGUiLCJlcnJvciIsInBnIiwicmVxdWlyZSIsImtuZXgiLCJjbGllbnQiLCJjb25uZWN0aW9uIiwiaG9zdCIsInVzZXIiLCJwYXNzd29yZCIsImRhdGFiYXNlIiwicG9zdFJldmlldyIsInVwZGF0ZVJldmlldyIsImRlbGV0ZVJldmlldyIsInJlcSIsInJlcyIsInNlbmQiLCJyZXNwb25zZSIsImJvZHkiLCJib29raW5nc19pZCIsImdldExvYWRlciIsImFwcCIsInNvdXJjZSIsInBhdGgiLCJqb2luIiwiX19kaXJuYW1lIiwidXNlIiwiYm9keVBhcnNlciIsImpzb24iLCJleHByZXNzIiwic3RhdGljIiwiYWxsIiwibmV4dCIsImhlYWRlciIsInJvdXRlciIsImxpc3RlbiIsImxvZyIsImRiIiwiY2FsbGJhY2siLCJzZWxlY3QiLCJmcm9tIiwibGVmdEpvaW4iLCJ3aGVyZSIsIndoZXJlTm90TnVsbCIsIm9yZGVyQnkiLCJlcnIiLCJpbnNlcnQiLCJTUUxxdWVyeSIsInVwZGF0ZSIsInJldmlld0lEIiwiZGVsIiwiUm91dGVyIiwiY29udHJvbGxlciIsInBvc3QiLCJwdXQiLCJkZWxldGUiLCJSZWFjdERPTVNlcnZlciIsInJlbmRlclRvU3RyaW5nIiwiaW5kZXhGaWxlIiwicmVzb2x2ZSIsImZzIiwicmVhZEZpbGUiLCJzdGF0dXMiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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MUMsR0FBOUQsWUFESyxDQUFQO0FBR0MsR0FSSDtBQVNELENBdEJEOztBQXdCQXRDLE9BQU9DLE9BQVAsR0FBaUJrRCxNQUFqQixDOzs7Ozs7Ozs7OztBQy9DQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxzRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc2VydmVyL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXZpZXdJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRydW5jYXRlOiBmYWxzZSxcbiAgICAgIC8vIHNob3J0VGV4dDogdGhpcy5wcm9wcy5yZXZpZXcucmV2aWV3X2Rlc2NyaXB0aW9uLnN1YnN0cmluZygwLCAyODApICsgXCIuLi5cIixcbiAgICAgIC8vIHJldmlld1RleHQ6IHRoaXMucHJvcHMucmV2aWV3LnJldmlld19kZXNjcmlwdGlvblxuICAgIH07XG4gICAgdGhpcy5jbGlja0hhbmRsZXIgPSB0aGlzLmNsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2hvd0FsZXJ0ID0gdGhpcy5zaG93QWxlcnQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLnJldmlldy5yZXZpZXdfZGVzY3JpcHRpb24ubGVuZ3RoID4gMjgwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdHJ1bmNhdGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNsaWNrSGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMuc3RhdGUudHJ1bmNhdGUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0cnVuY2F0ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdHJ1bmNhdGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNob3dBbGVydChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWxlcnQoXG4gICAgICBcIlRoYW5rIHlvdSBmb3IgZmxhZ2dpbmcgdGhpcyByZXZpZXchIFRoaXMgaXMgbm90IGhvdyB0aGUgcmVhbCBBaXJCbkIgcGFnZSBkb2VzIHRoaXMsIGJ1dCB0aGF0IHdvdWxkIGhhdmUgYmVlbiB0b28gY29tcGxpY2F0ZWQgZ2l2ZW4gb3VyIG51bWVyb3VzIGNvbXBvbmVudHMuIFRoYW5rIHlvdSBmb3IgdW5kZXJzdGFuZGluZy5cIlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcmVuZGVyVGV4dCA9XG4gICAgICB0aGlzLnN0YXRlLnRydW5jYXRlID09PSB0cnVlID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHt0aGlzLnByb3BzLnJldmlldy5yZXZpZXdfZGVzY3JpcHRpb24uc3Vic3RyaW5nKDAsIDI4MCkgKyBcIi4uLlwifXtcIiBcIn1cbiAgICAgICAgICA8YSBocmVmPVwiXCIgb25DbGljaz17dGhpcy5jbGlja0hhbmRsZXJ9PlxuICAgICAgICAgICAgUmVhZCBtb3JlXG4gICAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2Pnt0aGlzLnByb3BzLnJldmlldy5yZXZpZXdfZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICApO1xuXG4gICAgY29uc3QgbW9udGhOYW1lcyA9IFtcbiAgICAgIFwiSmFudWFyeVwiLFxuICAgICAgXCJGZWJydWFyeVwiLFxuICAgICAgXCJNYXJjaFwiLFxuICAgICAgXCJBcHJpbFwiLFxuICAgICAgXCJNYXlcIixcbiAgICAgIFwiSnVuZVwiLFxuICAgICAgXCJKdWx5XCIsXG4gICAgICBcIkF1Z3VzdFwiLFxuICAgICAgXCJTZXB0ZW1iZXJcIixcbiAgICAgIFwiT2N0b2JlclwiLFxuICAgICAgXCJOb3ZlbWJlclwiLFxuICAgICAgXCJEZWNlbWJlclwiXG4gICAgXTtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5wcm9wcy5yZXZpZXcucmV2aWV3X2RhdGUpO1xuICAgIGNvbnN0IG1vbnRoID0gbW9udGhOYW1lc1tkYXRlLmdldFVUQ01vbnRoKCldO1xuXG4gICAgY29uc3QgbmV3U3JjID0gdGhpcy5wcm9wcy5yZXZpZXcucGhvdG9fdXJsICsgXCI/cmFuZG9tPTFcIjtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlld0l0ZW1Db250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdJdGVtSGVhZGVyXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmV2aWV3SXRlbUhlYWRlclBob3RvU3BhblwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e25ld1NyY31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmV2aWV3SXRlbUhlYWRlclBob3RvXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJldmlld0l0ZW1IZWFkZXJJbmZvXCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5yZXZpZXcuZGlzcGxheV9uYW1lfSA8YnIgLz5cbiAgICAgICAgICAgIHttb250aH0ge3RoaXMucHJvcHMucmV2aWV3LnJldmlld19kYXRlLnNsaWNlKDAsIDQpfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZXZpZXdJdGVtSGVhZGVyRmxhZ1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cImh0dHA6Ly9pbWd1ci5jb20vOEVMdUlWOC5wbmdcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJldmlld0l0ZW1IZWFkZXJGbGFnSW1nXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dBbGVydH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7cmVuZGVyVGV4dH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZXZpZXdJdGVtIGZyb20gXCIuL1Jldmlld0l0ZW0uanN4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJldmlld0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcmV2aWV3ID0gdGhpcy5wcm9wcy5yZXZpZXdzLm1hcCgocmV2aWV3LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIDxSZXZpZXdJdGVtIGtleT17aW5kZXh9IHJldmlldz17cmV2aWV3fSAvPjtcbiAgICB9KTtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInJldmlld0xpc3RDb250YWluZXJcIj57cmV2aWV3fTwvZGl2PjtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdGFyc01vZGVsIGZyb20gJy4vU3RhcnNNb2RlbC5qc3gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcXVlcnk6ICcnLFxuICAgICAgc3RhcnNMb2FkZWQ6IGZhbHNlLFxuICAgICAgYXZnUmF0aW5nOiAwLFxuICAgICAgcmF0aW5nc0xvYWRlZDogZmFsc2UsXG4gICAgICB0b3RhbFJhdGluZ3M6IDBcbiAgICB9XG4gICAgdGhpcy5zZWFyY2hRdWVyeSA9IHRoaXMuc2VhcmNoUXVlcnkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUtleVByZXNzID0gdGhpcy5oYW5kbGVLZXlQcmVzcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhcnNMb2FkZWQgPSB0aGlzLnN0YXJzTG9hZGVkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXZpZXdzTG9hZGVkID0gdGhpcy5yZXZpZXdzTG9hZGVkLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHRoaXMucHJvcHMucmF0aW5ncyAhPT0gcHJldlByb3BzLnJhdGluZ3MpIHtcbiAgICAgIHRoaXMuc3RhcnNMb2FkZWQodGhpcy5wcm9wcy5yYXRpbmdzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMucmV2aWV3cyAhPT0gcHJldlByb3BzLnJldmlld3MpIHtcbiAgICAgIHRoaXMucmV2aWV3c0xvYWRlZCh0aGlzLnByb3BzLnJldmlld3MpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJzTG9hZGVkKHJhdGluZ3MpIHtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBmb3IgKHZhciBrZXkgaW4gcmF0aW5nc1swXSkge1xuICAgICAgc3VtICs9IE51bWJlcihyYXRpbmdzWzBdW2tleV0pXG4gICAgfVxuICAgIGxldCBhdmcgPSBzdW0gLyA2O1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3RhcnNMb2FkZWQ6IHRydWUsXG4gICAgICBhdmdSYXRpbmc6IGF2Z1xuICAgIH0pO1xuICB9XG5cbiAgcmV2aWV3c0xvYWRlZChyZXZpZXdzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICByYXRpbmdzTG9hZGVkOiB0cnVlLFxuICAgICAgdG90YWxSYXRpbmdzOiByZXZpZXdzLmxlbmd0aFxuICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoUXVlcnkoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHF1ZXJ5OiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlS2V5UHJlc3MoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09ICdFbnRlcicpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnByb3BzLnNlYXJjaFJldmlld3ModGhpcy5zdGF0ZS5xdWVyeSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoQ29udGFpbmVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvdGFsUmV2aWV3c0RpdlwiPlxuICAgICAgICAgIDxoMj57dGhpcy5zdGF0ZS5yYXRpbmdzTG9hZGVkID8gdGhpcy5zdGF0ZS50b3RhbFJhdGluZ3MgOiAwfSBSZXZpZXdzIDxTdGFyc01vZGVsIHJhdGluZz17dGhpcy5zdGF0ZS5zdGFyc0xvYWRlZCA/IHRoaXMuc3RhdGUuYXZnUmF0aW5nIDogMH0gZGltZW5zaW9ucz0nMjVweCcvPjwvaDI+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VhcmNoQmFyRGl2XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vaW1ndXIuY29tL25wYmxxZUQucG5nXCIgY2xhc3NOYW1lPVwibWFnbmlmeUltZ1wiLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaEJhclwiXG4gICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHJldmlld3NcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2VhcmNoUXVlcnl9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdWVyeX1cbiAgICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlS2V5UHJlc3N9XG4gICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTdGFyc01vZGVsIGZyb20gXCIuL1N0YXJzTW9kZWwuanN4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzTG9hZGVkOiBmYWxzZSxcbiAgICAgIHJhdGluZ3M6IFtdXG4gICAgfTtcbiAgICB0aGlzLnJhdGluZ3NMb2FkZWQgPSB0aGlzLnJhdGluZ3NMb2FkZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5yYXRpbmdzICE9PSBwcmV2UHJvcHMucmF0aW5ncykge1xuICAgICAgdGhpcy5yYXRpbmdzTG9hZGVkKHRoaXMucHJvcHMucmF0aW5ncyk7XG4gICAgfVxuICB9XG5cbiAgcmF0aW5nc0xvYWRlZChyYXRpbmdzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0xvYWRlZDogdHJ1ZSxcbiAgICAgIHJhdGluZ3M6IHJhdGluZ3NcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGFyc0NvbnRhaW5lclwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdExlZnQ1MFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdExlZnQ1MFwiPkFjY3VyYWN5PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRSaWdodDUwXCI+XG4gICAgICAgICAgICAgIDxTdGFyc01vZGVsXG4gICAgICAgICAgICAgICAgcmF0aW5nPXtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNMb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgPyBOdW1iZXIodGhpcy5zdGF0ZS5yYXRpbmdzWzBdLmFjY3VyYWN5KVxuICAgICAgICAgICAgICAgICAgICA6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGltZW5zaW9ucz1cIjE1cHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdExlZnQ1MFwiPkNvbW11bmljYXRpb248L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdFJpZ2h0NTBcIj5cbiAgICAgICAgICAgICAgPFN0YXJzTW9kZWxcbiAgICAgICAgICAgICAgICByYXRpbmc9e1xuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0xvYWRlZFxuICAgICAgICAgICAgICAgICAgICA/IE51bWJlcih0aGlzLnN0YXRlLnJhdGluZ3NbMF0uY29tbXVuaWNhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgOiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnM9XCIxNXB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRMZWZ0NTBcIj5DbGVhbmxpbmVzczwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0UmlnaHQ1MFwiPlxuICAgICAgICAgICAgICA8U3RhcnNNb2RlbFxuICAgICAgICAgICAgICAgIHJhdGluZz17XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzTG9hZGVkXG4gICAgICAgICAgICAgICAgICAgID8gTnVtYmVyKHRoaXMuc3RhdGUucmF0aW5nc1swXS5jbGVhbmxpbmVzcylcbiAgICAgICAgICAgICAgICAgICAgOiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnM9XCIxNXB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0UmlnaHQ1MFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdExlZnQ1MFwiPkxvY2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRSaWdodDUwXCI+XG4gICAgICAgICAgICAgIDxTdGFyc01vZGVsXG4gICAgICAgICAgICAgICAgcmF0aW5nPXtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNMb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgPyBOdW1iZXIodGhpcy5zdGF0ZS5yYXRpbmdzWzBdLmxvY2F0aW9uKVxuICAgICAgICAgICAgICAgICAgICA6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGltZW5zaW9ucz1cIjE1cHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdExlZnQ1MFwiPkNoZWNrLWluPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRSaWdodDUwXCI+XG4gICAgICAgICAgICAgIDxTdGFyc01vZGVsXG4gICAgICAgICAgICAgICAgcmF0aW5nPXtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNMb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgPyBOdW1iZXIodGhpcy5zdGF0ZS5yYXRpbmdzWzBdLmNoZWNrX2luKVxuICAgICAgICAgICAgICAgICAgICA6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGltZW5zaW9ucz1cIjE1cHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdExlZnQ1MFwiPlZhbHVlPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRSaWdodDUwXCI+XG4gICAgICAgICAgICAgIDxTdGFyc01vZGVsXG4gICAgICAgICAgICAgICAgcmF0aW5nPXtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNMb2FkZWQgPyBOdW1iZXIodGhpcy5zdGF0ZS5yYXRpbmdzWzBdLnZhbHVlKSA6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGltZW5zaW9ucz1cIjE1cHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJhdGluZ3MgZnJvbSAncmVhY3QtcmF0aW5ncy1kZWNsYXJhdGl2ZSc7XG5cbmNvbnN0IHN0YXJzTW9kZWwgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmF0aW5ncyByYXRpbmc9e3Byb3BzLnJhdGluZ30gd2lkZ2V0RGltZW5zaW9ucz17cHJvcHMuZGltZW5zaW9uc30gd2lkZ2V0U3BhY2luZ3M9XCI1cHhcIj5cbiAgICAgIDxSYXRpbmdzLldpZGdldCB3aWRnZXRSYXRlZENvbG9yPVwiIzAwODQ4OVwiLz5cbiAgICAgIDxSYXRpbmdzLldpZGdldCB3aWRnZXRSYXRlZENvbG9yPVwiIzAwODQ4OVwiLz5cbiAgICAgIDxSYXRpbmdzLldpZGdldCB3aWRnZXRSYXRlZENvbG9yPVwiIzAwODQ4OVwiLz5cbiAgICAgIDxSYXRpbmdzLldpZGdldCB3aWRnZXRSYXRlZENvbG9yPVwiIzAwODQ4OVwiLz5cbiAgICAgIDxSYXRpbmdzLldpZGdldCB3aWRnZXRSYXRlZENvbG9yPVwiIzAwODQ4OVwiLz5cbiAgICA8L1JhdGluZ3M+XG4gIClcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhcnNNb2RlbDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL2NvbXBvbmVudHMvU2VhcmNoLmpzeFwiO1xuaW1wb3J0IFN0YXJzIGZyb20gXCIuL2NvbXBvbmVudHMvU3RhcnMuanN4XCI7XG5pbXBvcnQgUmV2aWV3TGlzdCBmcm9tIFwiLi9jb21wb25lbnRzL1Jldmlld0xpc3QuanN4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJldmlld3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcmV2aWV3czogW10sXG4gICAgICBzZWFyY2g6IFtdLFxuICAgICAgcmF0aW5nczogW10sXG4gICAgICBzaG93U2VhcmNoOiBmYWxzZVxuICAgIH07XG4gICAgdGhpcy5nZXRBbGxSZXZpZXdzID0gdGhpcy5nZXRBbGxSZXZpZXdzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWFyY2hSZXZpZXdzID0gdGhpcy5zZWFyY2hSZXZpZXdzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRSYXRpbmdzID0gdGhpcy5nZXRSYXRpbmdzLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldEFsbFJldmlld3MoKTtcbiAgICB0aGlzLmdldFJhdGluZ3MoKTtcbiAgfVxuXG4gIGdldEFsbFJldmlld3MoKSB7XG4gICAgbGV0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICBsZXQgbGlzdGluZ0lEID0gcXVlcnlTdHJpbmcuc2xpY2UoNCk7XG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBpZDogbGlzdGluZ0lEXG4gICAgICB9XG4gICAgfTtcblxuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiL3Jldmlld3NcIiwgcGFyYW1zKVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHJldmlld3M6IGRhdGFcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaFJldmlld3MocXVlcnkpIHtcbiAgICBsZXQgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgIGxldCBsaXN0aW5nSUQgPSBxdWVyeVN0cmluZy5zbGljZSg0KTtcbiAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGlkOiBsaXN0aW5nSUQsXG4gICAgICAgIHF1ZXJ5OiBgJSR7cXVlcnl9JWBcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCIvc2VhcmNoXCIsIHBhcmFtcylcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzZWFyY2g6IGRhdGEsXG4gICAgICAgICAgc2hvd1NlYXJjaDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZ2V0UmF0aW5ncygpIHtcbiAgICBsZXQgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgIGxldCBsaXN0aW5nSUQgPSBxdWVyeVN0cmluZy5zbGljZSg0KTtcbiAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGlkOiBsaXN0aW5nSURcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCIvcmF0aW5nc1wiLCBwYXJhbXMpXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgaWYgKGRhdGFbMF0uYWNjdXJhY3kgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJhdGluZ3M6IGRhdGFcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWFyY2hcbiAgICAgICAgICBzZWFyY2hSZXZpZXdzPXt0aGlzLnNlYXJjaFJldmlld3N9XG4gICAgICAgICAgcmF0aW5ncz17dGhpcy5zdGF0ZS5yYXRpbmdzfVxuICAgICAgICAgIHJldmlld3M9e3RoaXMuc3RhdGUucmV2aWV3c31cbiAgICAgICAgLz5cbiAgICAgICAgPFN0YXJzIHJhdGluZ3M9e3RoaXMuc3RhdGUucmF0aW5nc30gLz5cbiAgICAgICAgPFJldmlld0xpc3RcbiAgICAgICAgICByZXZpZXdzPXtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd1NlYXJjaCA/IHRoaXMuc3RhdGUuc2VhcmNoIDogdGhpcy5zdGF0ZS5yZXZpZXdzXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBSZWFjdERPTS5yZW5kZXIoPFJldmlld3MgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmV2aWV3c1wiKSk7XG4iLCIvLyBJbml0aWFsIGRyYWZ0IHNldCB1cCBvZiBrbmV4IC8vIG5vdCB5ZXQgc2V0IHVwXG5jb25zdCBwZyA9IHJlcXVpcmUoJ3BnJyk7XG5cbnZhciBrbmV4ID0gcmVxdWlyZSgna25leCcpKHtcbiAgY2xpZW50OiAncGcnLFxuICBjb25uZWN0aW9uOiB7XG4gICAgaG9zdCAgICAgOiAnMy4xNi4yNy4xNTknLFxuICAgIHVzZXIgICAgIDogJ3Bvc3RncmVzJyxcbiAgICBwYXNzd29yZCA6ICcwMjM3MTAwdCcsICBcbiAgICBkYXRhYmFzZSA6ICdzdGF5Ym5iX2tuZXgnLFxuICB9XG4gIC8vIGNvbm5lY3Rpb246ICdwb3N0Z3JlczovLzEwLjM4MDo1NDMyJ1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0ga25leDsiLCJjb25zdCB7XG4gIGdldEFsbFJldmlld3MsXG4gIHBvc3RSZXZpZXcsXG4gIHVwZGF0ZVJldmlldyxcbiAgZGVsZXRlUmV2aWV3LFxuICBnZXRSYXRpbmdzLFxuICBzZWFyY2hcbn0gPSByZXF1aXJlKFwiLi9tb2RlbC5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldEFsbFJldmlld3M6IChyZXEsIHJlcykgPT4ge1xuICAgIGdldEFsbFJldmlld3MocmVxLnF1ZXJ5LmlkLCByZXNwb25zZSA9PiB7XG4gICAgICByZXMuc2VuZChyZXNwb25zZSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgcG9zdFJldmlldzogKHJlcSwgcmVzKSA9PiB7XG4gICAgcGFyYW1zID0gW1xuICAgICAgcmVxLmJvZHkuYm9va2luZ3NfaWQsXG4gICAgICByZXEuYm9keS5yZXZpZXdfZGF0ZSxcbiAgICAgIHJlcS5ib2R5LnJldmlld19kZXNjcmlwdGlvbixcbiAgICAgIHJlcS5ib2R5LmFjY3VyYWN5LFxuICAgICAgcmVxLmJvZHkuY29tbXVuaWNhdGlvbixcbiAgICAgIHJlcS5ib2R5LmNsZWFubGluZXNzLFxuICAgICAgcmVxLmJvZHkubG9jYXRpb24sXG4gICAgICByZXEuYm9keS5jaGVja19pbixcbiAgICAgIHJlcS5ib2R5LnZhbHVlXG4gICAgXTtcbiAgICBwb3N0UmV2aWV3KHBhcmFtcywgcmVzcG9uc2UgPT4ge1xuICAgICAgcmVzLnNlbmQoXCJSZXZpZXcgaXMgcG9zdGVkIVwiKTtcbiAgICB9KTtcbiAgfSxcblxuICB1cGRhdGVSZXZpZXc6IChyZXEsIHJlcykgPT4ge1xuICAgIHBhcmFtcyA9IFtcbiAgICAgIHJlcS5xdWVyeS5pZCxcbiAgICAgIHJlcS5ib2R5LnJldmlldyxcbiAgICAgIHJlcS5ib2R5LmFjY3VyYWN5LFxuICAgICAgcmVxLmJvZHkuY29tbXVuaWNhdGlvbixcbiAgICAgIHJlcS5ib2R5LmNsZWFubGluZXNzLFxuICAgICAgcmVxLmJvZHkubG9jYXRpb24sXG4gICAgICByZXEuYm9keS5jaGVja19pbixcbiAgICAgIHJlcS5ib2R5LnZhbHVlXG4gICAgXTtcbiAgICB1cGRhdGVSZXZpZXcocGFyYW1zLCByZXNwb25zZSA9PiB7XG4gICAgICByZXMuc2VuZChcIlJldmlldyBpcyB1cGRhdGVkIVwiKTtcbiAgICB9KTtcbiAgfSxcblxuICBkZWxldGVSZXZpZXc6IChyZXEsIHJlcykgPT4ge1xuICAgIGRlbGV0ZVJldmlldyhyZXEucXVlcnkuaWQsIHJlc3BvbnNlID0+IHtcbiAgICAgIHJlcy5zZW5kKFwiUmV2aWV3IGlzIGRlbGV0ZWQhXCIpO1xuICAgIH0pO1xuICB9LFxuXG4gIGdldFJhdGluZ3M6IChyZXEsIHJlcykgPT4ge1xuICAgIGdldFJhdGluZ3MocmVxLnF1ZXJ5LmlkLCByZXNwb25zZSA9PiB7XG4gICAgICByZXMuc2VuZChyZXNwb25zZSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgc2VhcmNoOiAocmVxLCByZXMpID0+IHtcbiAgICBzZWFyY2gocmVxLnF1ZXJ5LmlkLCByZXEucXVlcnkucXVlcnksIHJlc3BvbnNlID0+IHtcbiAgICAgIHJlcy5zZW5kKHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfSxcblxuICBnZXRMb2FkZXI6IChyZXEsIHJlcykgPT4ge1xuICAgIHJlcy5zZW5kKCdsb2FkZXJpby1hY2IyMDg1ZmJmMGVjNzZjODJkNjNmNWZmMGFhMDVjZicpO1xuICB9XG59O1xuIiwiLy8gaW1wb3J0IFwibmV3cmVsaWNcIjtcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gXCJib2R5LXBhcnNlclwiO1xuaW1wb3J0IGNvcnMgZnJvbSBcImNvcnNcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBSZWFjdERPTVNlcnZlciBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHJvdXRlciBmcm9tIFwiLi9yb3V0ZXIuanNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG4vLyBpbXBvcnQgQXBwIGZyb20gJy4uL2NsaWVudC9zcmMvaW5kZXguanMnO1xuXG4vLyBjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuLy8gY29uc3QgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XG4vLyBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuLy8gY29uc3QgY29ycyA9IHJlcXVpcmUoJ2NvcnMnKTtcblxuLy8gY29uc3QgZGIgPSByZXF1aXJlKCcuLi9kYXRhYmFzZS9ub3NxbC9pbmRleC5qcycpO1xuLy8gY29uc3Qgcm91dGVyID0gcmVxdWlyZSgnLi9yb3V0ZXIuanMnKTtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuY29uc3Qgc291cmNlID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL2NsaWVudC9kaXN0LycpO1xuXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoc291cmNlKSk7XG4vLyBhcHAudXNlKGV4cHJlc3Muc3RhdGljKCcvVXNlcnMvbWFyaWEvRG9jdW1lbnRzL0hSL1Jldmlld3MvY2xpZW50L2Rpc3QvJykpO1xuXG5hcHAudXNlKGNvcnMoKSk7XG5hcHAuYWxsKFwiLypcIiwgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHJlcy5oZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiwgXCIqXCIpO1xuICBuZXh0KCk7XG59KTtcblxuYXBwLnVzZShcIi9cIiwgcm91dGVyKTtcblxuYXBwLmxpc3Rlbig3MDAwLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiTGlzdGVuaW5nIG9uIHBvcnQgNzAwMFwiKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cy5hcHAgPSBhcHA7XG4iLCJjb25zdCBkYiA9IHJlcXVpcmUoXCIuLi9kYXRhYmFzZS9zcWwva25leENvbm5lY3Rpb24uanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIGdldEFsbFJldmlld3M6IChsaXN0aW5nSUQsIGNhbGxiYWNrKSA9PiB7XG4gICAgLy8gY29uc3QgU1FMcXVlcnkgPSBgU0VMRUNUIHIucmV2aWV3X2Rlc2NyaXB0aW9uLCB1LnVfaWQsIHUucGhvdG9fdXJsLCB1LmRpc3BsYXlfbmFtZSwgci5yZXZpZXdfZGF0ZSBGUk9NIGJvb2tpbmdzIGIgSU5ORVIgSk9JTiByZXZpZXdzIHIgT04gci5ib29raW5nc19pZCA9IGIuYl9pZCBBTkQgYi5saXN0aW5nc19pZCA9IDkxXG4gICAgLy8gUklHSFQgSk9JTiB1c2VycyB1IE9OIGIudXNlcnNfaWQgPSB1LnVfaWRgO1xuICAgIC8vIHNlbGVjdCByLnJldmlld19kZXNjcmlwdGlvbiwgdS5waG90b191cmwsIHUuZGlzcGxheV9uYW1lLCByLnJldmlld19kYXRlIGZyb20gYm9va2luZ3MgYiBsZWZ0IGpvaW4gcmV2aWV3cyByIG9uIHIuYm9va2luZ3NfaWQgPSBiLmJfaWQgbGVmdCBqb2luIHVzZXJzIHUgb24gYi51c2Vyc19pZCA9IHUudV9pZCB3aGVyZSBiLmxpc3RpbmdzX2lkID0gMTtcbiAgICBkYi5zZWxlY3QoXG4gICAgICBcInJldmlld3MucmV2aWV3X2Rlc2NyaXB0aW9uXCIsXG4gICAgICBcInVzZXJzLnBob3RvX3VybFwiLFxuICAgICAgXCJ1c2Vycy5kaXNwbGF5X25hbWVcIixcbiAgICAgIFwicmV2aWV3cy5yZXZpZXdfZGF0ZVwiXG4gICAgKVxuICAgICAgLmZyb20oXCJib29raW5nc1wiKVxuICAgICAgLmxlZnRKb2luKFwicmV2aWV3c1wiLCBcInJldmlld3MuYm9va2luZ3NfaWRcIiwgXCJib29raW5ncy5iX2lkXCIpXG4gICAgICAubGVmdEpvaW4oXCJ1c2Vyc1wiLCBcImJvb2tpbmdzLnVzZXJzX2lkXCIsIFwidXNlcnMudV9pZFwiKVxuICAgICAgLndoZXJlKFwiYm9va2luZ3MubGlzdGluZ3NfaWRcIiwgbGlzdGluZ0lEKVxuICAgICAgLndoZXJlTm90TnVsbChcInJldmlld3MucmV2aWV3X2Rlc2NyaXB0aW9uXCIpXG4gICAgICAub3JkZXJCeShcInJldmlld3MucmV2aWV3X2RhdGVcIiwgXCJkZXNjXCIpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcbiAgfSxcblxuICBwb3N0UmV2aWV3OiAocGFyYW1zLCBjYWxsYmFjaykgPT4ge1xuICAgIC8vIGNvbnN0IFNRTHF1ZXJ5ID0gYElOU0VSVCBJTlRPIFJldmlld3NcbiAgICAvLyAoYm9va2luZ3NfaWQsIHJldmlld19kYXRlLCByZXZpZXcsIGFjY3VyYWN5LCBjb21tdW5pY2F0aW9uLCBjbGVhbmxpbmVzcywgXFxgbG9jYXRpb25cXGAsIFxcYGNoZWNrX2luXFxgLCBcXGB2YWx1ZVxcYClcbiAgICAvLyBWQUxVRVNcbiAgICAvLyAoPywgPywgPywgPywgPywgPywgPywgPywgPylgO1xuICAgIGRiKFwicmV2aWV3c1wiKVxuICAgICAgLmluc2VydCh7XG4gICAgICAgIGJvb2tpbmdzX2lkOiBwYXJhbXNbMF0sXG4gICAgICAgIHJldmlld19kYXRlOiBwYXJhbXNbMV0sXG4gICAgICAgIHJldmlld19kZXNjcmlwdGlvbjogcGFyYW1zWzJdLFxuICAgICAgICBhY2N1cmFjeTogcGFyYW1zWzNdLFxuICAgICAgICBjb21tdW5pY2F0aW9uOiBwYXJhbXNbNF0sXG4gICAgICAgIGNsZWFubGluZXNzOiBwYXJhbXNbNV0sXG4gICAgICAgIGxvY2F0aW9uOiBwYXJhbXNbNl0sXG4gICAgICAgIGNoZWNrX2luOiBwYXJhbXNbN10sXG4gICAgICAgIHZhbHVlOiBwYXJhbXNbOF1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBjYWxsYmFjayhcInJldmlldyBpcyBwb3N0ZWRcIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuICB9LFxuXG4gIHVwZGF0ZVJldmlldzogKHBhcmFtcywgY2FsbGJhY2spID0+IHtcbiAgICBjb25zdCBTUUxxdWVyeSA9IGBVUERBVEUgUmV2aWV3c1xuICAgIFNFVCBib29raW5nc19pZCA9ID8sXG4gICAgICAgIHJldmlld19kYXRlID0gPyxcbiAgICAgICAgcmV2aWV3ID0gPyxcbiAgICAgICAgYWNjdXJhY3kgPSA/LFxuICAgICAgICBjb21tdW5pY2F0aW9uID0gPyxcbiAgICAgICAgY2xlYW5saW5lc3MgPSA/LFxuICAgICAgICBcXGBsb2NhdGlvblxcYCA9ID8sXG4gICAgICAgIFxcYGNoZWNrX2luXFxgID0gPyxcbiAgICAgICAgXFxgdmFsdWVcXGAgPSA/XG4gICAgV0hFUkUgcl9pZCA9ID9gO1xuICAgIGRiKFwicmV2aWV3c1wiKVxuICAgICAgLndoZXJlKFwicl9pZFwiLCBcIj1cIiwgcGFyYW1zWzBdKVxuICAgICAgLnVwZGF0ZSh7XG4gICAgICAgIHJldmlld19kZXNjcmlwdGlvbjogcGFyYW1zWzFdLFxuICAgICAgICBhY2N1cmFjeTogcGFyYW1zWzJdLFxuICAgICAgICBjb21tdW5pY2F0aW9uOiBwYXJhbXNbM10sXG4gICAgICAgIGNsZWFubGluZXNzOiBwYXJhbXNbNF0sXG4gICAgICAgIGxvY2F0aW9uOiBwYXJhbXNbNV0sXG4gICAgICAgIGNoZWNrX2luOiBwYXJhbXNbNl0sXG4gICAgICAgIHZhbHVlOiBwYXJhbXNbN11cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBjYWxsYmFjayhcInJldmlldyBpcyB1cGRhdGVkXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcbiAgfSxcblxuICBkZWxldGVSZXZpZXc6IChyZXZpZXdJRCwgY2FsbGJhY2spID0+IHtcbiAgICBkYihcInJldmlld3NcIilcbiAgICAgIC53aGVyZShcInJfaWRcIiwgcmV2aWV3SUQpXG4gICAgICAuZGVsKClcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNhbGxiYWNrKFwicmV2aWV3IGlzIGRlbGV0ZWRcIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuICB9LFxuXG4gIGdldFJhdGluZ3M6IChsaXN0aW5nSUQsIGNhbGxiYWNrKSA9PiB7XG4gICAgLy8gbGV0IFNRTHF1ZXJ5ID0gYFNFTEVDVCBBVkcoYWNjdXJhY3kpIEFTIGFjY3VyYWN5LCBBVkcoY29tbXVuaWNhdGlvbikgQVMgY29tbXVuaWNhdGlvbiwgQVZHKGNsZWFubGluZXNzKSBhcyBjbGVhbmxpbmVzcywgQVZHKFxcYGxvY2F0aW9uXFxgKSBhcyBsb2NhdGlvbiwgQVZHKFxcYGNoZWNrX2luXFxgKSBhcyBjaGVja2luLCBBVkcoXFxgdmFsdWVcXGApIGFzIHZhbHVlXG4gICAgLy8gRlJPTSBSZXZpZXdzXG4gICAgLy8gSU5ORVIgSk9JTiBCb29raW5nc1xuICAgIC8vIE9OIFJldmlld3MuYm9va2luZ3NfaWQgPSBCb29raW5ncy5iX2lkXG4gICAgLy8gTEVGVCBKT0lOIFVzZXJzXG4gICAgLy8gT04gQm9va2luZ3MudXNlcnNfaWQgPSBVc2Vycy51X2lkXG4gICAgLy8gV0hFUkUgQm9va2luZ3MubGlzdGluZ3NfaWQgPSAke2xpc3RpbmdJRH07YDtcbiAgICAvLyBkYi5xdWVyeShTUUxxdWVyeSwgKGVycm9yLCByZXNwb25zZSkgPT4ge1xuICAgIC8vICAgaWYgKGVycm9yKSB7XG4gICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgY2FsbGJhY2socmVzcG9uc2UpO1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuICAgIGRiKFwiYm9va2luZ3NcIilcbiAgICAgIC5hdmcoeyBhY2N1cmFjeTogXCJhY2N1cmFjeVwiIH0pXG4gICAgICAuYXZnKHsgY29tbXVuaWNhdGlvbjogXCJjb21tdW5pY2F0aW9uXCIgfSlcbiAgICAgIC5hdmcoeyBjbGVhbmxpbmVzczogXCJjbGVhbmxpbmVzc1wiIH0pXG4gICAgICAuYXZnKHsgbG9jYXRpb246IFwibG9jYXRpb25cIiB9KVxuICAgICAgLmF2Zyh7IGNoZWNrX2luOiBcImNoZWNrX2luXCIgfSlcbiAgICAgIC5hdmcoeyB2YWx1ZTogXCJ2YWx1ZVwiIH0pXG4gICAgICAubGVmdEpvaW4oXCJyZXZpZXdzXCIsIFwicmV2aWV3cy5ib29raW5nc19pZFwiLCBcImJvb2tpbmdzLmJfaWRcIilcbiAgICAgIC5sZWZ0Sm9pbihcInVzZXJzXCIsIFwiYm9va2luZ3MudXNlcnNfaWRcIiwgXCJ1c2Vycy51X2lkXCIpXG4gICAgICAud2hlcmUoXCJib29raW5ncy5saXN0aW5nc19pZFwiLCBsaXN0aW5nSUQpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgfSk7XG4gIH0sXG5cbiAgc2VhcmNoOiAobGlzdGluZ0lELCBxdWVyeSwgY2FsbGJhY2spID0+IHtcbiAgICBkYi5zZWxlY3QoXG4gICAgICBcInJldmlld3MucmV2aWV3X2Rlc2NyaXB0aW9uXCIsXG4gICAgICBcInVzZXJzLnBob3RvX3VybFwiLFxuICAgICAgXCJ1c2Vycy5kaXNwbGF5X25hbWVcIixcbiAgICAgIFwicmV2aWV3cy5yZXZpZXdfZGF0ZVwiXG4gICAgKVxuICAgICAgLmZyb20oXCJyZXZpZXdzXCIpXG4gICAgICAud2hlcmUoXCJib29raW5ncy5saXN0aW5nc19pZFwiLCBsaXN0aW5nSUQpXG4gICAgICAubGVmdEpvaW4oXCJib29raW5nc1wiLCBcInJldmlld3MuYm9va2luZ3NfaWRcIiwgXCJib29raW5ncy5iX2lkXCIpXG4gICAgICAud2hlcmUoXCJyZXZpZXdzLnJldmlld19kZXNjcmlwdGlvblwiLCBcImxpa2VcIiwgcXVlcnkpXG4gICAgICAubGVmdEpvaW4oXCJ1c2Vyc1wiLCBcImJvb2tpbmdzLnVzZXJzX2lkXCIsIFwidXNlcnMudV9pZFwiKVxuICAgICAgLm9yZGVyQnkoXCJyZXZpZXdzLnJldmlld19kYXRlXCIsIFwiZGVzY1wiKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBSZWFjdERPTVNlcnZlciBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCBSZXZpZXdzIGZyb20gJy4uL2NsaWVudC9zcmMvaW5kZXguanN4JztcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIuanMnO1xuLy8gY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbi8vIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG4vLyBjb25zdCBjb250cm9sbGVyID0gcmVxdWlyZSgnLi9jb250cm9sbGVyLmpzJyk7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnJvdXRlci5nZXQoJy9yZXZpZXdzJywgY29udHJvbGxlci5nZXRBbGxSZXZpZXdzKTtcbnJvdXRlci5nZXQoJy9yYXRpbmdzJywgY29udHJvbGxlci5nZXRSYXRpbmdzKTtcbnJvdXRlci5nZXQoJy9zZWFyY2gnLCBjb250cm9sbGVyLnNlYXJjaCk7XG5yb3V0ZXIucG9zdCgnL3Jldmlld3MnLCBjb250cm9sbGVyLnBvc3RSZXZpZXcpO1xucm91dGVyLnB1dCgnL3Jldmlld3MnLCBjb250cm9sbGVyLnVwZGF0ZVJldmlldyk7XG5yb3V0ZXIuZGVsZXRlKCcvcmV2aWV3cycsIGNvbnRyb2xsZXIuZGVsZXRlUmV2aWV3KTtcbnJvdXRlci5nZXQoJy9sb2FkZXJpby1hY2IyMDg1ZmJmMGVjNzZjODJkNjNmNWZmMGFhMDVjZicsIGNvbnRyb2xsZXIuZ2V0TG9hZGVyKVxuXG5jb25zdCBzb3VyY2UgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vY2xpZW50L2Rpc3QvaW5kZXguaHRtbCcpO1xuXG5yb3V0ZXIuZ2V0KCcvKicsIChyZXEsIHJlcykgPT4ge1xuXG4gIC8vIG1ha2UgREIgY2FsbHMgd2l0aCByZXEucXVlcnkuaWRcbiAgLy8gZGF0YSA9IHt9LCBzdG9yZSBpdCBpbiB0aGVyZVxuXG4gIC8vIGxldCBjb21wb25lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFJldmlld3MsIHByb3BzKTtcbiAgLy8gY29uc3QgYXBwID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoY29tcG9uZW50KTtcblxuICBjb25zdCBhcHAgPSBSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0cmluZyg8UmV2aWV3cyAvPik7XG4gIFxuICBjb25zdCBpbmRleEZpbGUgPSBwYXRoLnJlc29sdmUoc291cmNlKTtcbiAgLy8gY29uc3QgaW5kZXhGaWxlID0gcGF0aC5yZXNvbHZlKCcvVXNlcnMvbWFyaWEvRG9jdW1lbnRzL0hSL1Jldmlld3MvY2xpZW50L2Rpc3QvaW5kZXguaHRtbCcpO1xuXG4gIGZzLnJlYWRGaWxlKGluZGV4RmlsZSwgJ3V0ZjgnLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgaWYgKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignU29tZXRoaW5nIHdlbnQgd3Jvbmc6JywgZXJyKTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCgnT29wcywgYmV0dGVyIGx1Y2sgbmV4dCB0aW1lIScpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzLnNlbmQoXG4gICAgICBkYXRhLnJlcGxhY2UoJzxkaXYgaWQ9XCJyZXZpZXdzXCI+PC9kaXY+JywgYDxkaXYgaWQ9XCJyZXZpZXdzXCI+JHthcHB9PC9kaXY+YClcbiAgICAgICk7XG4gICAgfSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtuZXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yYXRpbmdzLWRlY2xhcmF0aXZlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=