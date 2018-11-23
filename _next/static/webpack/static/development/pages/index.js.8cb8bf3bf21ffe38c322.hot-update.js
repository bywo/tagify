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
/* harmony import */ var _data_PlaylistStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/PlaylistStore */ "./data/PlaylistStore.js");
/* harmony import */ var _CollectionListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CollectionListItem */ "./components/CollectionListItem.js");
/* harmony import */ var _data_UIStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/UIStore */ "./data/UIStore.js");
/* harmony import */ var _ResizeHandle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ResizeHandle */ "./components/ResizeHandle.js");
/* harmony import */ var _MainPane__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MainPane */ "./components/MainPane.js");
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
    _this.playlistStore = new _data_PlaylistStore__WEBPACK_IMPORTED_MODULE_2__["default"]();
    window.playlistStore = _this.playlistStore;
    _this.uiStore = new _data_UIStore__WEBPACK_IMPORTED_MODULE_4__["default"]();
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
          display: "flex",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "header"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "flex",
          alignItems: "stretch",
          flexGrow: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
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
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          flexGrow: "1",
          overflow: "auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, [{
        id: "all",
        name: "All songs"
      }].concat(_toConsumableArray(this.playlistStore.playlists)).map(function (p) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CollectionListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: p.id,
          selected: p.id === _this2.playlistStore.searchState.selectedPlaylistId,
          onClick: function onClick() {
            return _this2.playlistStore.searchState.selectedPlaylistId = p.id;
          },
          name: p.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResizeHandle__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
          lineNumber: 67
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          overflow: "auto",
          paddingLeft: this.uiStore.state.panelGutter
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainPane__WEBPACK_IMPORTED_MODULE_6__["default"], {
        uiStore: this.uiStore,
        playlistStore: this.playlistStore,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)));

/***/ }),

/***/ "./components/BasicTable.js":
/*!**********************************!*\
  !*** ./components/BasicTable.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var _TableRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TableRow */ "./components/TableRow.js");
var _jsxFileName = "/Users/byron/dev/tagify/components/BasicTable.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var BasicTable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BasicTable, _React$Component);

  function BasicTable() {
    _classCallCheck(this, BasicTable);

    return _possibleConstructorReturn(this, _getPrototypeOf(BasicTable).apply(this, arguments));
  }

  _createClass(BasicTable, [{
    key: "render",
    value: function render() {
      var _this = this;

      var filteredList = this.props.playlistStore.filteredTracks;
      var tagsByTrack = this.props.playlistStore.tagsByTrack;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, filteredList.map(function (t) {
        var identifier = t.track.uri;
        var tags = tagsByTrack[identifier].map(function (playlistId) {
          return _this.props.tagSelectOptionsMap[playlistId];
        });
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableRow__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: t.track.uri,
          track: t.track,
          tags: tags,
          tagOptions: _this.props.tagSelectOptions,
          trackColWidth: _this.props.uiStore.state.trackColWidth,
          artistColWidth: _this.props.uiStore.state.artistColWidth,
          addTag: _this.props.playlistStore.addTag,
          removeTag: _this.props.playlistStore.removeTag,
          createTagWithTrack: _this.props.playlistStore.createTagWithTrack,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        });
      }));
    }
  }]);

  return BasicTable;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(BasicTable));

/***/ }),

/***/ "./components/MainPane.js":
/*!********************************!*\
  !*** ./components/MainPane.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BasicTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicTable */ "./components/BasicTable.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
var _jsxFileName = "/Users/byron/dev/tagify/components/MainPane.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// import Table from "./VirtualizedTable";




var MainPane =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MainPane, _React$Component);

  function MainPane() {
    _classCallCheck(this, MainPane);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainPane).apply(this, arguments));
  }

  _createClass(MainPane, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          uiStore = _this$props.uiStore,
          playlistStore = _this$props.playlistStore;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: playlistStore.searchState.query,
        onChange: function onChange(e) {
          playlistStore.searchState.query = e.target.value;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "flex"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          position: "relative",
          width: uiStore.state.trackColWidth
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Title", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ResizeHandle, {
        onResize: function onResize(delta) {
          return uiStore.state.trackColWidth += delta;
        },
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
          lineNumber: 25
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          position: "relative",
          width: uiStore.state.artistColWidth
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Artist", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ResizeHandle, {
        onResize: function onResize(delta) {
          return uiStore.state.artistColWidth += delta;
        },
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
          lineNumber: 44
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Tags")), playlistStore.searchState.numFetches ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Loading...", this.props.playlistStore.searchState.numFetches) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BasicTable__WEBPACK_IMPORTED_MODULE_1__["default"], {
        uiStore: uiStore,
        playlistStore: playlistStore,
        tagSelectOptions: this.tagSelectOptions,
        tagSelectOptionsMap: this.tagSelectOptionsMap,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }));
    }
  }, {
    key: "tagSelectOptions",
    get: function get() {
      return _.map(this.props.playlistStore.playlistsById, function (p, id) {
        return {
          label: p.name,
          value: id,
          color: randomMC.getColor({
            text: id
          })
        };
      });
    }
  }, {
    key: "tagSelectOptionsMap",
    get: function get() {
      return _.keyBy(this.tagSelectOptions, "value");
    }
  }]);

  return MainPane;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Object(mobx__WEBPACK_IMPORTED_MODULE_3__["decorate"])(MainPane, {
  tagSelectOptions: computed,
  tagSelectOptionsMap: computed
});
/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(MainPane));

/***/ }),

/***/ "./components/Table.js":
false,

/***/ "./components/TableRow.js":
/*!********************************!*\
  !*** ./components/TableRow.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TableRow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select_lib_Creatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select/lib/Creatable */ "./node_modules/react-select/lib/Creatable.js");
/* harmony import */ var react_select_lib_Creatable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_select_lib_Creatable__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/byron/dev/tagify/components/TableRow.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var TableRow =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TableRow, _React$Component);

  function TableRow() {
    _classCallCheck(this, TableRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(TableRow).apply(this, arguments));
  }

  _createClass(TableRow, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.track.uri !== nextProps.track.uri) {
        return true;
      }

      if (this.props.tags.length !== nextProps.tags.length) {
        return true;
      }

      if (this.props.trackColWidth !== nextProps.trackColWidth) {
        return true;
      }

      if (this.props.artistColWidth !== nextProps.artistColWidth) {
        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "flex",
          borderBottom: "solid 1px gray",
          alignItems: "baseline"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          flexShrink: "0",
          width: this.props.trackColWidth,
          padding: "4px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, this.props.track.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          flexShrink: "0",
          width: this.props.artistColWidth,
          padding: "4px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, this.props.track.artists.map(function (a, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          key: a.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, a.name, index !== _this.props.track.artists.length - 1 ? ", " : null);
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          flexGrow: "1",
          padding: "4px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select_lib_Creatable__WEBPACK_IMPORTED_MODULE_1___default.a, {
        isMulti: true,
        isSearchable: true,
        options: this.props.tagOptions,
        value: this.props.tags,
        onChange: function onChange(selectedOptions) {
          _this.props.cellMeasurerCache.clear(_this.props.index);

          var added = _.difference(selectedOptions, _this.props.tags);

          var deleted = _.difference(_this.props.tags, selectedOptions);

          added.filter(function (option) {
            return option.__isNew__;
          }).forEach(function (_ref) {
            var label = _ref.label;

            _this.props.createTagWithTrack(_this.props.track.uri, label);
          });
          added.filter(function (option) {
            return !option.__isNew__;
          }).forEach(function (_ref2) {
            var playlistId = _ref2.value;

            _this.props.addTag(_this.props.track.uri, playlistId);
          });
          deleted.forEach(function (_ref3) {
            var playlistId = _ref3.value;

            _this.props.removeTag(_this.props.track.uri, playlistId);
          });
        },
        styles: {
          multiValue: function multiValue(styles, _ref4) {
            var data = _ref4.data;
            return _objectSpread({}, styles, {
              backgroundColor: data.color
            });
          },
          multiValueLabel: function multiValueLabel(styles) {
            return _objectSpread({}, styles, {
              color: "white"
            });
          },
          multiValueRemove: function multiValueRemove(styles) {
            return _objectSpread({}, styles, {
              color: "white"
            });
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })));
    }
  }]);

  return TableRow;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./components/Tag.js":
false,

/***/ "./node_modules/dom-helpers/class/addClass.js":
false,

/***/ "./node_modules/dom-helpers/class/hasClass.js":
false,

/***/ "./node_modules/dom-helpers/class/removeClass.js":
false,

/***/ "./node_modules/murmurhash-js/index.js":
false,

/***/ "./node_modules/murmurhash-js/murmurhash2_gc.js":
false,

/***/ "./node_modules/murmurhash-js/murmurhash3_gc.js":
false,

/***/ "./node_modules/random-material-color/dist/randomColor.js":
false,

/***/ "./node_modules/react-select/dist/react-select.esm.js":
false,

/***/ "./node_modules/react-transition-group/CSSTransition.js":
false,

/***/ "./node_modules/react-transition-group/ReplaceTransition.js":
false,

/***/ "./node_modules/react-transition-group/Transition.js":
false,

/***/ "./node_modules/react-transition-group/TransitionGroup.js":
false,

/***/ "./node_modules/react-transition-group/index.js":
false,

/***/ "./node_modules/react-transition-group/utils/ChildMapping.js":
false,

/***/ "./node_modules/react-transition-group/utils/PropTypes.js":
false

})
//# sourceMappingURL=index.js.8cb8bf3bf21ffe38c322.hot-update.js.map