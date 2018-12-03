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
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme */ "./theme.js");
var _jsxFileName = "/Users/byron/dev/tagify/components/SearchBar.js";






/* harmony default export */ __webpack_exports__["default"] = (Object(_util_recompose__WEBPACK_IMPORTED_MODULE_3__["componentFromStream"])(function () {
  return _data_UIStore__WEBPACK_IMPORTED_MODULE_4__["searchQuery$"].map(function (searchQuery) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        background: _theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.backgroundLighter,
        padding: "".concat(_theme__WEBPACK_IMPORTED_MODULE_5__["default"].spacing.m, "px ").concat(_theme__WEBPACK_IMPORTED_MODULE_5__["default"].spacing.s, "px")
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      value: searchQuery,
      onChange: function onChange(e) {
        _data_UIStore__WEBPACK_IMPORTED_MODULE_4__["onChangeSearchQuery"](e.target.value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }));
  });
}));

/***/ })

})
//# sourceMappingURL=index.js.68975262b1d2e6002e3c.hot-update.js.map