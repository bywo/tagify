webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SearchBar.js":
/*!*********************************!*\
  !*** ./components/SearchBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_recompose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/recompose */ "./util/recompose.js");
/* harmony import */ var _data_UIStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/UIStore */ "./data/UIStore.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme */ "./theme.js");
var _jsxFileName = "/Users/byron/dev/tagify/components/SearchBar.js";




/* harmony default export */ __webpack_exports__["default"] = (Object(_util_recompose__WEBPACK_IMPORTED_MODULE_1__["componentFromStream"])(function () {
  return _data_UIStore__WEBPACK_IMPORTED_MODULE_2__["searchQuery$"].map(function (searchQuery) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        background: _theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.backgroundLighter,
        padding: "".concat(_theme__WEBPACK_IMPORTED_MODULE_3__["default"].spacing.l, "px ").concat(_theme__WEBPACK_IMPORTED_MODULE_3__["default"].spacing.m, "px")
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        color: _theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.darkTextMedEmphasis
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "Filter by title or artist:", " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      value: searchQuery,
      onChange: function onChange(e) {
        _data_UIStore__WEBPACK_IMPORTED_MODULE_2__["onChangeSearchQuery"](e.target.value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }));
  });
}));

/***/ })

})
//# sourceMappingURL=index.js.809e1121700b70c98af7.hot-update.js.map