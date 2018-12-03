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
      padding: "".concat(_theme__WEBPACK_IMPORTED_MODULE_2__["default"].spacing.s, " ").concat(_theme__WEBPACK_IMPORTED_MODULE_2__["default"].spacing.m)
    }
  }, rest, {
    className: "jsx-1286658671" + " " + (rest.className != null && rest.className || "root ".concat(selected ? "selected" : "")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      padding: "".concat(_theme__WEBPACK_IMPORTED_MODULE_2__["default"].spacing.s, " ").concat(_theme__WEBPACK_IMPORTED_MODULE_2__["default"].spacing.m)
    },
    className: "jsx-1286658671",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1286658671",
    css: ".root.jsx-1286658671:hover{background:gray;}.root.selected.jsx-1286658671{background:black;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ieXJvbi9kZXYvdGFnaWZ5L2NvbXBvbmVudHMvQ29sbGVjdGlvbkxpc3RJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCTyxBQUcyQixBQUlDLGdCQUhuQixDQUljLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL2J5cm9uL2Rldi90YWdpZnkvY29tcG9uZW50cy9Db2xsZWN0aW9uTGlzdEl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3RoZW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IG5hbWUsIHNlbGVjdGVkLCAuLi5yZXN0IH0pID0+IChcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT17YHJvb3QgJHtzZWxlY3RlZCA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9YH1cbiAgICBzdHlsZT17e1xuICAgICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy5zfSAke3RoZW1lLnNwYWNpbmcubX1gLFxuICAgIH19XG4gICAgey4uLnJlc3R9XG4gID5cbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnN9ICR7dGhlbWUuc3BhY2luZy5tfWAsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtuYW1lfVxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAucm9vdDpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogZ3JheTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yb290LnNlbGVjdGVkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuIl19 */\n/*@ sourceURL=/Users/byron/dev/tagify/components/CollectionListItem.js */",
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.698151a804440556bd79.hot-update.js.map