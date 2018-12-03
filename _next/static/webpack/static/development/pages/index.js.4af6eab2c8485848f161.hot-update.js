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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3491579817", [_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.darkTextMedEmphasis, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.primaryLight, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.darkTextHighEmphasis, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.primary, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.lightTextHighEmphasis]]]) + " " + (rest.className != null && rest.className || "root ".concat(selected ? "selected" : "")),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3491579817", [_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.darkTextMedEmphasis, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.primaryLight, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.darkTextHighEmphasis, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.primary, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.lightTextHighEmphasis]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3491579817",
    css: ".root.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{color:".concat(_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.darkTextMedEmphasis, ";}.root.__jsx-style-dynamic-selector:hover div.__jsx-style-dynamic-selector{background:").concat(_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.primaryLight, ";color:").concat(_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.darkTextHighEmphasis, ";}.root.selected.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{background:").concat(_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.primary, ";color:").concat(_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.lightTextHighEmphasis, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ieXJvbi9kZXYvdGFnaWZ5L2NvbXBvbmVudHMvQ29sbGVjdGlvbkxpc3RJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CTyxBQUc4QyxBQUlLLEFBS0EsbUNBUjFDLEtBSXFDLEFBS0EsbUNBSnJDLEFBS0EiLCJmaWxlIjoiL1VzZXJzL2J5cm9uL2Rldi90YWdpZnkvY29tcG9uZW50cy9Db2xsZWN0aW9uTGlzdEl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3RoZW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IG5hbWUsIHNlbGVjdGVkLCAuLi5yZXN0IH0pID0+IChcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT17YHJvb3QgJHtzZWxlY3RlZCA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9YH1cbiAgICBzdHlsZT17e1xuICAgICAgcGFkZGluZzogYDAgJHt0aGVtZS5zcGFjaW5nLm19cHhgLFxuICAgIH19XG4gICAgey4uLnJlc3R9XG4gID5cbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnN9cHggJHt0aGVtZS5zcGFjaW5nLm19cHhgLFxuICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5zLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7bmFtZX1cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLnJvb3QgZGl2IHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZGFya1RleHRNZWRFbXBoYXNpc307XG4gICAgICAgIH1cblxuICAgICAgICAucm9vdDpob3ZlciBkaXYge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLnByaW1hcnlMaWdodH07XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmRhcmtUZXh0SGlnaEVtcGhhc2lzfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yb290LnNlbGVjdGVkIGRpdiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpZ2h0VGV4dEhpZ2hFbXBoYXNpc307XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuIl19 */\n/*@ sourceURL=/Users/byron/dev/tagify/components/CollectionListItem.js */"),
    dynamic: [_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.darkTextMedEmphasis, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.primaryLight, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.darkTextHighEmphasis, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.primary, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.lightTextHighEmphasis],
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.4af6eab2c8485848f161.hot-update.js.map