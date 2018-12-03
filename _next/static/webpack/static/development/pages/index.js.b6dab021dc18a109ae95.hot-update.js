webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme */ "./theme.js");
/* harmony import */ var _CollectionListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CollectionListItem */ "./components/CollectionListItem.js");
var _jsxFileName = "/Users/byron/dev/tagify/components/Sidebar.js";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function Sidebar(_ref) {
  var playlists = _ref.playlists,
      selectedPlaylist = _ref.selectedPlaylist,
      onSelectPlaylist = _ref.onSelectPlaylist,
      style = _ref.style;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _objectSpread({
      background: _theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.background,
      color: _theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.darkTextHighEmphasis,
      padding: "".concat(_theme__WEBPACK_IMPORTED_MODULE_1__["default"].spacing.l, "px 0")
    }, style),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, [{
    id: "all",
    name: "All songs"
  }].concat(_toConsumableArray(playlists)).map(function (p) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CollectionListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: p.id,
      selected: p.id === selectedPlaylist,
      onClick: function onClick() {
        onSelectPlaylist(p.id);
      },
      name: p.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    });
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.b6dab021dc18a109ae95.hot-update.js.map