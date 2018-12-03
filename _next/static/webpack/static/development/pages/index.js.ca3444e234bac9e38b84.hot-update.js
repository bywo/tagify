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
/* harmony import */ var _util_recompose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/recompose */ "./util/recompose.js");
/* harmony import */ var _data_PlaylistStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/PlaylistStore */ "./data/PlaylistStore.js");
/* harmony import */ var _data_UIStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/UIStore */ "./data/UIStore.js");
var _jsxFileName = "/Users/byron/dev/tagify/components/App.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











if (global.window) {
  window.playlist = _data_PlaylistStore__WEBPACK_IMPORTED_MODULE_7__;
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_util_recompose__WEBPACK_IMPORTED_MODULE_6__["componentFromStream"])(function () {
  var _createEventHandler = Object(_util_recompose__WEBPACK_IMPORTED_MODULE_6__["createEventHandler"])(),
      onSidebarResize = _createEventHandler.handler,
      sidebarDeltasInput$ = _createEventHandler.stream;

  _data_UIStore__WEBPACK_IMPORTED_MODULE_8__["sidebarDeltas$"].imitate(sidebarDeltasInput$);

  var _createEventHandler2 = Object(_util_recompose__WEBPACK_IMPORTED_MODULE_6__["createEventHandler"])(),
      onSelectPlaylist = _createEventHandler2.handler,
      selectedPlaylistInput$ = _createEventHandler2.stream;

  _data_UIStore__WEBPACK_IMPORTED_MODULE_8__["selectedPlaylistChanges$"].imitate(selectedPlaylistInput$);
  return xstream__WEBPACK_IMPORTED_MODULE_1___default.a.combine(_data_UIStore__WEBPACK_IMPORTED_MODULE_8__["sidebarWidth$"], _data_PlaylistStore__WEBPACK_IMPORTED_MODULE_7__["playlists$"], _data_UIStore__WEBPACK_IMPORTED_MODULE_8__["selectedPlaylist$"]).map(function (_ref) {
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
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
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
        lineNumber: 40
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
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: {
        flexGrow: "1",
        overflow: "auto"
      },
      playlists: playlists,
      onSelectPlaylist: onSelectPlaylist,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
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
        lineNumber: 61
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        overflow: "auto",
        paddingLeft: 20,
        flexGrow: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainPane__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }))));
  });
}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

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
      padding: "4px 8px"
    }
  }, rest, {
    className: "jsx-3048482013" + " " + (rest.className != null && rest.className || "root ".concat(selected ? "selected" : "")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }), name, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3048482013",
    css: ".root.jsx-3048482013:hover{background:gray;}.root.selected.jsx-3048482013{background:black;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ieXJvbi9kZXYvdGFnaWZ5L2NvbXBvbmVudHMvQ29sbGVjdGlvbkxpc3RJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNnQixBQUd5QixBQUlDLGdCQUhuQixDQUljLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL2J5cm9uL2Rldi90YWdpZnkvY29tcG9uZW50cy9Db2xsZWN0aW9uTGlzdEl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoeyBuYW1lLCBzZWxlY3RlZCwgLi4ucmVzdCB9KSA9PiAoXG4gIDxkaXZcbiAgICBjbGFzc05hbWU9e2Byb290ICR7c2VsZWN0ZWQgPyBcInNlbGVjdGVkXCIgOiBcIlwifWB9XG4gICAgc3R5bGU9e3tcbiAgICAgIHBhZGRpbmc6IFwiNHB4IDhweFwiLFxuICAgIH19XG4gICAgey4uLnJlc3R9XG4gID5cbiAgICB7bmFtZX1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAucm9vdDpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IGdyYXk7XG4gICAgICB9XG5cbiAgICAgIC5yb290LnNlbGVjdGVkIHtcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcbiJdfQ== */\n/*@ sourceURL=/Users/byron/dev/tagify/components/CollectionListItem.js */",
    __self: this
  }));
});

/***/ }),

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme */ "./theme.js");
/* harmony import */ var _CollectionListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CollectionListItem */ "./components/CollectionListItem.js");
var _jsxFileName = "/Users/byron/dev/tagify/components/Sidebar.js";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function Sidebar(_ref) {
  var playlists = _ref.playlists,
      onSelectPlaylist = _ref.onSelectPlaylist,
      style = _ref.style;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _objectSpread({
      background: _theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.background,
      color: _theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.darkTextHighEmphasis
    }, style),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, [{
    id: "all",
    name: "All songs"
  }].concat(_toConsumableArray(playlists)).map(function (p) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CollectionListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: p.id,
      selected: p.id === selectedPlaylist,
      onClick: function onClick() {
        onSelectPlaylist(p.id);
      },
      name: p.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    });
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.ca3444e234bac9e38b84.hot-update.js.map