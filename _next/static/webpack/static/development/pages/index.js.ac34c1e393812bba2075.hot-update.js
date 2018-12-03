webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TableRow.js":
/*!********************************!*\
  !*** ./components/TableRow.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TableRow; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select_lib_Creatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select/lib/Creatable */ "./node_modules/react-select/lib/Creatable.js");
/* harmony import */ var react_select_lib_Creatable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select_lib_Creatable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
var _jsxFileName = "/Users/byron/dev/tagify/components/TableRow.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var MultiValue = react_select__WEBPACK_IMPORTED_MODULE_3__["components"].MultiValue,
    SelectContainer = react_select__WEBPACK_IMPORTED_MODULE_3__["components"].SelectContainer;

var TableRow =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TableRow, _React$Component);

  function TableRow() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TableRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TableRow)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      hover: false,
      menuOpen: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseEnter", function (e) {
      console.log("mouseenter", e.target);

      if (e.target === _this.root) {
        _this.setState({
          hover: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseLeave", function (e) {
      console.log("mouseleave", e.target);

      if (e.target === _this.root) {
        _this.setState({
          hover: false
        });
      }
    });

    return _this;
  }

  _createClass(TableRow, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextState.hover !== this.state.hover) {
        return true;
      }

      var _this$props = this.props,
          track = _this$props.track,
          tags = _this$props.tags,
          trackColWidth = _this$props.trackColWidth,
          artistColWidth = _this$props.artistColWidth;

      if (track.uri !== nextProps.track.uri) {
        return true;
      }

      if (tags.length !== nextProps.tags.length) {
        return true;
      }

      if (trackColWidth !== nextProps.trackColWidth) {
        return true;
      }

      if (artistColWidth !== nextProps.artistColWidth) {
        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        ref: function ref(el) {
          return _this2.root = el;
        },
        style: {
          display: "flex",
          borderBottom: "solid 1px gray",
          alignItems: "baseline"
        },
        onMouseOver: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          flexShrink: "0",
          width: this.props.trackColWidth,
          padding: "4px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, this.props.track.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          flexShrink: "0",
          width: this.props.artistColWidth,
          padding: "4px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, this.props.track.artists.map(function (a, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          key: a.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, a.name, index !== _this2.props.track.artists.length - 1 ? ", " : null);
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          flexGrow: "1",
          padding: "4px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, this.state.hover || this.state.menuOpen ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select_lib_Creatable__WEBPACK_IMPORTED_MODULE_2___default.a, {
        isMulti: true,
        isSearchable: true,
        options: this.props.tagOptions,
        value: this.props.tags,
        onMenuOpen: function onMenuOpen() {
          _this2.setState({
            menuOpen: true
          });
        },
        onMenuClose: function onMenuClose() {
          _this2.setState({
            menuOpen: false
          });
        },
        onChange: function onChange(selectedOptions) {
          {
            /* this.props.cellMeasurerCache.clear(this.props.index); */
          }

          var added = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.difference(selectedOptions, _this2.props.tags);

          var deleted = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.difference(_this2.props.tags, selectedOptions);

          added.filter(function (option) {
            return option.__isNew__;
          }).forEach(function (_ref) {
            var label = _ref.label;

            _this2.props.createTagWithTrack(_this2.props.track.uri, label);
          });
          added.filter(function (option) {
            return !option.__isNew__;
          }).forEach(function (_ref2) {
            var playlistId = _ref2.value;

            _this2.props.addTag(_this2.props.track.uri, playlistId);
          });
          deleted.forEach(function (_ref3) {
            var playlistId = _ref3.value;

            _this2.props.removeTag(_this2.props.track.uri, playlistId);
          });
        },
        styles: {
          multiValue: function multiValue(styles, _ref4) {
            var data = _ref4.data;
            return _objectSpread({}, styles, {
              backgroundColor: data.color
            });
          },
          multiValueLabel: function multiValueLabel(styles) {
            return _objectSpread({}, styles, {
              color: "white"
            });
          },
          multiValueRemove: function multiValueRemove(styles) {
            return _objectSpread({}, styles, {
              color: "white"
            });
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          padding: "2px 81px 2px 8px",
          border: "solid 1px hsl(0,0%,80%)",
          borderRadius: "4px",
          minHeight: 38
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, this.props.tags.map(function (tag) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: tag.value,
          style: {
            borderRadius: "2px",
            color: "white",
            fontSize: "85%",
            overflow: "hidden",
            padding: "3px 25px 3px 3px",
            paddingLeft: "6px",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            boxSizing: "border-box",
            background: tag.color,
            margin: "2px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }, tag.label);
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          padding: "2px 0",
          margin: "2px",
          width: 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "\u2060"))));
    }
  }]);

  return TableRow;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.ac34c1e393812bba2075.hot-update.js.map