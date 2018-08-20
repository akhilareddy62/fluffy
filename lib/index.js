"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import React from "react";
// import ReactDOM from "react-dom";
var Box = function (_React$Component) {
  _inherits(Box, _React$Component);

  function Box() {
    _classCallCheck(this, Box);

    return _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).apply(this, arguments));
  }

  _createClass(Box, [{
    key: "render",
    value: function render() {
      var styles = {
        backgroundColor: this.props.bgColor,
        height: "100px",
        width: "100px"
      };

      return React.createElement("div", { style: styles });
    }
  }]);

  return Box;
}(React.Component);

var Button = function (_React$Component2) {
  _inherits(Button, _React$Component2);

  function Button() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this2), _this2.handleButtonClick = function () {
      console.log("clicked");
      _this2.props.handleClick("clicked", "blue");
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      console.log("Button props: ", this.props);
      return React.createElement(
        "button",
        { onClick: this.handleButtonClick },
        this.props.label
      );
    }
  }]);

  return Button;
}(React.Component);

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App() {
    var _ref2;

    var _temp2, _this3, _ret2;

    _classCallCheck(this, App);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_ref2 = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref2, [this].concat(args))), _this3), _this3.state = {
      label: "click mee",
      bgColor: "red"
    }, _this3.listenButtonClick = function (label, color) {
      var newState = {
        label: label,
        bgColor: color
      };

      _this3.setState(newState);
    }, _temp2), _possibleConstructorReturn(_this3, _ret2);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Button, {
          label: this.state.label,
          handleClick: this.listenButtonClick
        }),
        React.createElement("br", null),
        React.createElement(Box, { bgColor: this.state.bgColor })
      );
    }
  }]);

  return App;
}(React.Component);

var containerNode = document.getElementById('container');

ReactDOM.render(React.createElement(App, null), containerNode);