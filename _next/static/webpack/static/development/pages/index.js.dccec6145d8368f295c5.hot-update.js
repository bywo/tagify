webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TableHeader.js":
/*!***********************************!*\
  !*** ./components/TableHeader.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xstream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xstream */ "./node_modules/xstream/index.js");
/* harmony import */ var xstream__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xstream__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ResizeHandle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResizeHandle */ "./components/ResizeHandle.js");
/* harmony import */ var _util_recompose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/recompose */ "./util/recompose.js");
/* harmony import */ var _data_UIStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/UIStore */ "./data/UIStore.js");
var _jsxFileName = "/Users/byron/dev/tagify/components/TableHeader.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/* harmony default export */ __webpack_exports__["default"] = (Object(_util_recompose__WEBPACK_IMPORTED_MODULE_3__["componentFromStream"])(function () {
  return xstream__WEBPACK_IMPORTED_MODULE_1___default.a.combine(_data_UIStore__WEBPACK_IMPORTED_MODULE_4__["trackColWidth$"], _data_UIStore__WEBPACK_IMPORTED_MODULE_4__["artistColWidth$"]).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        trackColWidth = _ref2[0],
        artistColWidth = _ref2[1];

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: "flex"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        position: "relative",
        width: trackColWidth
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Title", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResizeHandle__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onResize: _data_UIStore__WEBPACK_IMPORTED_MODULE_4__["onResizeTrackCol"],
      style: {
        position: "absolute",
        right: 0,
        width: 5,
        top: 0,
        height: "100%",
        background: "gray"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        position: "relative",
        width: artistColWidth
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Artist", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResizeHandle__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onResize: _data_UIStore__WEBPACK_IMPORTED_MODULE_4__["onResizeArtistCol"],
      style: {
        position: "absolute",
        right: 0,
        width: 5,
        top: 0,
        height: "100%",
        background: "gray"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "Tags"));
  });
}));

/***/ })

})
//# sourceMappingURL=index.js.dccec6145d8368f295c5.hot-update.js.map