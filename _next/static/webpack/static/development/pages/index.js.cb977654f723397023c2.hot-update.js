webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _data_PlaylistStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/PlaylistStore */ "./data/PlaylistStore.js");
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Tag */ "./components/Tag.js");
/* harmony import */ var _CollectionListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CollectionListItem */ "./components/CollectionListItem.js");
/* harmony import */ var _data_UIStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/UIStore */ "./data/UIStore.js");
/* harmony import */ var _ResizeHandle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ResizeHandle */ "./components/ResizeHandle.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Table */ "./components/Table.js");
var _jsxFileName = "/Users/byron/dev/tagify/components/App.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.playlistStore = new _data_PlaylistStore__WEBPACK_IMPORTED_MODULE_3__["default"]();
    window.playlistStore = _this.playlistStore;
    _this.uiStore = new _data_UIStore__WEBPACK_IMPORTED_MODULE_6__["default"]();
    window.uiStore = _this.uiStore;
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: "100vh",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "header"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "flex",
          alignItems: "stretch",
          flex: "1 0 0%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "flex",
          alignItems: "stretch",
          width: this.uiStore.state.sidebarWidth,
          position: "relative"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          flexGrow: "1",
          overflow: "auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, [{
        id: "all",
        name: "All songs"
      }].concat(_toConsumableArray(this.playlistStore.playlists)).map(function (p) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CollectionListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: p.id,
          selected: p.id === _this2.playlistStore.searchState.selectedPlaylistId,
          onClick: function onClick() {
            return _this2.playlistStore.searchState.selectedPlaylistId = p.id;
          },
          name: p.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResizeHandle__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onResize: function onResize(delta) {
          _this2.uiStore.state.sidebarWidth = _this2.uiStore.state.sidebarWidth + delta;
        },
        style: {
          position: "absolute",
          right: -5,
          width: 5,
          top: 0,
          height: "100vh",
          background: "gray"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          overflow: "auto",
          paddingLeft: this.uiStore.state.panelGutter
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Table__WEBPACK_IMPORTED_MODULE_9__["default"], {
        uiStore: this.uiStore,
        playlistStore: this.playlistStore,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)));

/***/ })

})
//# sourceMappingURL=index.js.cb977654f723397023c2.hot-update.js.map