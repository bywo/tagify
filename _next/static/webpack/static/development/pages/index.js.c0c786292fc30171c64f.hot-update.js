webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/BasicTable.js":
/*!**********************************!*\
  !*** ./components/BasicTable.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BasicTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TableRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableRow */ "./components/TableRow.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ "./theme.js");
var _jsxFileName = "/Users/byron/dev/tagify/components/BasicTable.js";

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





var BasicTable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BasicTable, _React$Component);

  function BasicTable() {
    _classCallCheck(this, BasicTable);

    return _possibleConstructorReturn(this, _getPrototypeOf(BasicTable).apply(this, arguments));
  }

  _createClass(BasicTable, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          filteredTracks = _this$props.filteredTracks,
          tagsByTrack = _this$props.tagsByTrack,
          tracksById = _this$props.tracksById,
          tagSelectOptions = _this$props.tagSelectOptions,
          tagSelectOptionsMap = _this$props.tagSelectOptionsMap,
          addTag = _this$props.addTag,
          removeTag = _this$props.removeTag,
          createAndAddTag = _this$props.createAndAddTag;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: _objectSpread({
          padding: _theme__WEBPACK_IMPORTED_MODULE_2__["default"].spacing.l,
          overflow: "auto"
        }, this.props.style),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, filteredTracks.map(function (identifier) {
        var t = tracksById[identifier];
        var tagsForTrack = tagsByTrack[identifier];
        var tags = tagsForTrack ? tagsForTrack.map(function (playlistId) {
          return tagSelectOptionsMap[playlistId];
        }) : [];

        if (!t) {
          return null;
        }

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableRow__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: identifier,
          track: t,
          tags: tags,
          tagOptions: tagSelectOptions,
          trackColWidth: 200,
          artistColWidth: 200,
          addTag: addTag,
          removeTag: removeTag,
          createAndAddTag: createAndAddTag,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        });
      }));
    }
  }]);

  return BasicTable;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.c0c786292fc30171c64f.hot-update.js.map