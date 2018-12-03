webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CollectionListItem.js":
/*!******************************************!*\
  !*** ./components/CollectionListItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ "./theme.js");
var _jsxFileName = "/Users/byron/dev/tagify/components/CollectionListItem.js";



function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var name = _ref.name,
      selected = _ref.selected,
      rest = _objectWithoutProperties(_ref, ["name", "selected"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", _extends({
    style: {
      padding: "0 ".concat(_theme__WEBPACK_IMPORTED_MODULE_2__["default"].spacing.m, "px")
    }
  }, rest, {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["654590600", [_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.darkTextMedEmphasis, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.primaryLight, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.primary, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.lightTextHighEmphasis]]]) + " " + (rest.className != null && rest.className || "root ".concat(selected ? "selected" : "")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      padding: "".concat(_theme__WEBPACK_IMPORTED_MODULE_2__["default"].spacing.s, "px ").concat(_theme__WEBPACK_IMPORTED_MODULE_2__["default"].spacing.m, "px"),
      borderRadius: _theme__WEBPACK_IMPORTED_MODULE_2__["default"].borderRadius.s
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["654590600", [_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.darkTextMedEmphasis, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.primaryLight, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.primary, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.lightTextHighEmphasis]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "654590600",
    css: ".root.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{color:".concat(_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.darkTextMedEmphasis, ";}.root.__jsx-style-dynamic-selector:hover div.__jsx-style-dynamic-selector{background:").concat(_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.primaryLight, ";}.root.selected.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{background:").concat(_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.primary, ";color:").concat(_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.lightTextHighEmphasis, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ieXJvbi9kZXYvdGFnaWZ5L2NvbXBvbmVudHMvQ29sbGVjdGlvbkxpc3RJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CTyxBQUc4QyxBQUlLLEFBSUEsbUNBUDFDLEtBSUEsQUFJcUMsbUNBQ3JDIiwiZmlsZSI6Ii9Vc2Vycy9ieXJvbi9kZXYvdGFnaWZ5L2NvbXBvbmVudHMvQ29sbGVjdGlvbkxpc3RJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRoZW1lIGZyb20gXCIuLi90aGVtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBuYW1lLCBzZWxlY3RlZCwgLi4ucmVzdCB9KSA9PiAoXG4gIDxkaXZcbiAgICBjbGFzc05hbWU9e2Byb290ICR7c2VsZWN0ZWQgPyBcInNlbGVjdGVkXCIgOiBcIlwifWB9XG4gICAgc3R5bGU9e3tcbiAgICAgIHBhZGRpbmc6IGAwICR7dGhlbWUuc3BhY2luZy5tfXB4YCxcbiAgICB9fVxuICAgIHsuLi5yZXN0fVxuICA+XG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy5zfXB4ICR7dGhlbWUuc3BhY2luZy5tfXB4YCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMucyxcbiAgICAgIH19XG4gICAgPlxuICAgICAge25hbWV9XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5yb290IGRpdiB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmRhcmtUZXh0TWVkRW1waGFzaXN9O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJvb3Q6aG92ZXIgZGl2IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5wcmltYXJ5TGlnaHR9O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJvb3Quc2VsZWN0ZWQgZGl2IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMubGlnaHRUZXh0SGlnaEVtcGhhc2lzfTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbik7XG4iXX0= */\n/*@ sourceURL=/Users/byron/dev/tagify/components/CollectionListItem.js */"),
    dynamic: [_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.darkTextMedEmphasis, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.primaryLight, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.primary, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.lightTextHighEmphasis],
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.6cc37d7fcc63bccf7111.hot-update.js.map