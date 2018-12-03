webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme */ "./theme.js");
/* harmony import */ var _util_recompose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/recompose */ "./util/recompose.js");
/* harmony import */ var _data_UserStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/UserStore */ "./data/UserStore.js");
var _jsxFileName = "/Users/byron/dev/tagify/components/Header.js";




/* harmony default export */ __webpack_exports__["default"] = (Object(_util_recompose__WEBPACK_IMPORTED_MODULE_2__["componentFromStream"])(function () {
  return _data_UserStore__WEBPACK_IMPORTED_MODULE_3__["user$"].map(function (u) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        background: _theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.primary,
        color: _theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.lightTextHighEmphasis
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "Tagify Welcome, ", u.display_name);
  });
}));

/***/ })

})
//# sourceMappingURL=index.js.ab4562e129fe57d037ba.hot-update.js.map