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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xstream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xstream */ "./node_modules/xstream/index.js");
/* harmony import */ var xstream__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xstream__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_recompose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/recompose */ "./util/recompose.js");
/* harmony import */ var _data_UIStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/UIStore */ "./data/UIStore.js");
var _jsxFileName = "/Users/byron/dev/tagify/components/SearchBar.js";





/* harmony default export */ __webpack_exports__["default"] = (Object(_util_recompose__WEBPACK_IMPORTED_MODULE_3__["componentFromStream"])(function () {
  return _data_UIStore__WEBPACK_IMPORTED_MODULE_4__["searchQuery$"].map(function (searchQuery) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      value: searchQuery,
      onChange: function onChange(e) {
        _data_UIStore__WEBPACK_IMPORTED_MODULE_4__["onChangeSearchQuery"](e.target.value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    });
  });
}));

/***/ })

})
//# sourceMappingURL=index.js.1782e33bdf3372f675a3.hot-update.js.map