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
        background: _theme__WEBPACK_IMPORTED_MODULE_1__["default"].primary
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "Tagify Welcome, ", u.display_name);
  });
}));

/***/ }),

/***/ "./theme.js":
/*!******************!*\
  !*** ./theme.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  spacing: {
    s: 4,
    m: 8,
    l: 16,
    xl: 32
  },
  fontSizes: {
    s: 12,
    m: 16,
    l: 20
  },
  colors: {
    primary: "#437a50",
    primaryLight: "#71a97c",
    primaryDark: "#154d27",
    background: "#E1E2E1",
    backgroundLight: "#F5F5F6",
    darkTextHighEmphasis: "rgba(0, 0, 0, 0.87)",
    darkTextMedEmphasis: "rgba(0, 0, 0, 0.60)",
    darkTextLowEmphasis: "rgba(0, 0, 0, 0.38)",
    lightTextHighEmphasis: "rgba(255, 255, 255, 0.87)",
    lightTextMedEmphasis: "rgba(255, 255, 255, 0.60)",
    lightTextLowEmphasis: "rgba(255, 255, 255, 0.38)"
  }
});

/***/ })

})
//# sourceMappingURL=index.js.487488cbbbe813b13e8d.hot-update.js.map