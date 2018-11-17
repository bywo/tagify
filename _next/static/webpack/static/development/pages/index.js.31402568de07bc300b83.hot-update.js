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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var react_select_lib_Creatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select/lib/Creatable */ "./node_modules/react-select/lib/Creatable.js");
/* harmony import */ var react_select_lib_Creatable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select_lib_Creatable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var random_material_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! random-material-color */ "./node_modules/random-material-color/dist/randomColor.js");
/* harmony import */ var random_material_color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(random_material_color__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/byron/dev/tagify/components/TableRow.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var TableRow =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TableRow, _React$Component);

  function TableRow() {
    _classCallCheck(this, TableRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(TableRow).apply(this, arguments));
  }

  _createClass(TableRow, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log("willMount");
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      console.log("shouldUpdate", this.props.track.name, nextProps.track.name);

      if (this.props.track.uri !== nextProps.track.uri) {
        return true;
      }

      if (this.props.tags.length !== nextProps.tags.length) {
        return true;
      }

      if (this.props.trackColWidth !== nextProps.trackColWidth) {
        return true;
      }

      if (this.props.artistColWidth !== nextProps.artistColWidth) {
        return true;
      }

      if (this.props.style.height !== nextProps.style.height) {
        return true;
      }

      console.log("return false");
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_1__["CellMeasurer"], {
        cache: this.props.cellMeasurerCache,
        columnIndex: 0,
        rowIndex: this.props.index,
        parent: this.props.parent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "flex",
          borderBottom: "solid 1px gray",
          alignItems: "baseline"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          flexShrink: "0",
          width: this.props.trackColWidth,
          padding: "4px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, this.props.track.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          flexShrink: "0",
          width: this.props.artistColWidth,
          padding: "4px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, this.props.track.artists.map(function (a, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          key: a.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, a.name, index !== _this.props.track.artists.length - 1 ? ", " : null);
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          flexGrow: "1",
          padding: "4px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select_lib_Creatable__WEBPACK_IMPORTED_MODULE_2___default.a, {
        isMulti: true,
        isSearchable: true,
        options: this.props.tagOptions,
        value: this.props.tags,
        onChange: function onChange(selectedOptions) {
          _this.props.cellMeasurerCache.clear(_this.props.index);

          var added = _.difference(selectedOptions, _this.props.tags);

          var deleted = _.difference(_this.props.tags, selectedOptions);

          added.forEach(function (_ref) {
            var playlistId = _ref.value;

            _this.props.addTag(_this.props.track.uri, playlistId);
          });
          deleted.forEach(function (_ref2) {
            var playlistId = _ref2.value;

            _this.props.removeTag(_this.props.track.uri, playlistId);
          });
        },
        styles: {
          multiValue: function multiValue(styles, _ref3) {
            var data = _ref3.data;
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
          lineNumber: 85
        },
        __self: this
      }))));
    }
  }]);

  return TableRow;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.31402568de07bc300b83.hot-update.js.map