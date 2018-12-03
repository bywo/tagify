webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xstream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xstream */ "./node_modules/xstream/index.js");
/* harmony import */ var xstream__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xstream__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ResizeHandle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResizeHandle */ "./components/ResizeHandle.js");
/* harmony import */ var _MainPane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainPane */ "./components/MainPane.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Sidebar */ "./components/Sidebar.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../theme */ "./theme.js");
/* harmony import */ var _util_recompose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/recompose */ "./util/recompose.js");
/* harmony import */ var _data_PlaylistStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/PlaylistStore */ "./data/PlaylistStore.js");
/* harmony import */ var _data_UIStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/UIStore */ "./data/UIStore.js");
var _jsxFileName = "/Users/byron/dev/tagify/components/App.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












if (global.window) {
  window.playlist = _data_PlaylistStore__WEBPACK_IMPORTED_MODULE_8__;
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_util_recompose__WEBPACK_IMPORTED_MODULE_7__["componentFromStream"])(function () {
  var _createEventHandler = Object(_util_recompose__WEBPACK_IMPORTED_MODULE_7__["createEventHandler"])(),
      onSidebarResize = _createEventHandler.handler,
      sidebarDeltasInput$ = _createEventHandler.stream;

  _data_UIStore__WEBPACK_IMPORTED_MODULE_9__["sidebarDeltas$"].imitate(sidebarDeltasInput$);

  var _createEventHandler2 = Object(_util_recompose__WEBPACK_IMPORTED_MODULE_7__["createEventHandler"])(),
      onSelectPlaylist = _createEventHandler2.handler,
      selectedPlaylistInput$ = _createEventHandler2.stream;

  _data_UIStore__WEBPACK_IMPORTED_MODULE_9__["selectedPlaylistChanges$"].imitate(selectedPlaylistInput$);
  return xstream__WEBPACK_IMPORTED_MODULE_1___default.a.combine(_data_UIStore__WEBPACK_IMPORTED_MODULE_9__["sidebarWidth$"], _data_PlaylistStore__WEBPACK_IMPORTED_MODULE_8__["playlists$"], _data_UIStore__WEBPACK_IMPORTED_MODULE_9__["selectedPlaylist$"]).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 3),
        sidebarWidth = _ref2[0],
        playlists = _ref2[1],
        selectedPlaylist = _ref2[2];

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        height: "100vh",
        display: "flex",
        flexDirection: "column"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: "flex",
        alignItems: "stretch",
        flexGrow: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: "flex",
        alignItems: "stretch",
        width: sidebarWidth,
        flexShrink: "0",
        position: "relative"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: {
        flexGrow: "1",
        overflow: "auto"
      },
      playlists: playlists,
      selectedPlaylist: selectedPlaylist,
      onSelectPlaylist: onSelectPlaylist,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResizeHandle__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onResize: onSidebarResize,
      style: {
        position: "absolute",
        right: -5,
        width: 5,
        top: 0,
        height: "100%",
        background: "gray"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        overflow: "auto",
        paddingLeft: 20,
        flexGrow: 1,
        background: _theme__WEBPACK_IMPORTED_MODULE_6__["default"].colors.backgroundLight
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainPane__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }))));
  });
}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=index.js.daf7ee4ddfe7312fcbfb.hot-update.js.map