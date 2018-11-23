webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var random_material_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! random-material-color */ "./node_modules/random-material-color/dist/randomColor.js");
/* harmony import */ var random_material_color__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(random_material_color__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _BasicTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BasicTable */ "./components/BasicTable.js");
/* harmony import */ var _ResizeHandle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ResizeHandle */ "./components/ResizeHandle.js");
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






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
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: playlistStore.searchState.query,
        onChange: function onChange(e) {
          playlistStore.searchState.query = e.target.value;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "flex"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          position: "relative",
          width: uiStore.state.trackColWidth
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Title", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResizeHandle__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onResize: function onResize(delta) {
          uiStore.state.trackColWidth += delta;
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
          lineNumber: 49
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          position: "relative",
          width: uiStore.state.artistColWidth
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Artist", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResizeHandle__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onResize: function onResize(delta) {
          uiStore.state.artistColWidth += delta;
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
          lineNumber: 70
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Tags")), playlistStore.searchState.numFetches ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Loading...", playlistStore.searchState.numFetches) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BasicTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
        uiStore: uiStore,
        playlistStore: playlistStore,
        tagSelectOptions: this.tagSelectOptions,
        tagSelectOptionsMap: this.tagSelectOptionsMap,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }));
    }
  }, {
    key: "tagSelectOptions",
    get: function get() {
      var playlistStore = this.props.playlistStore;
      return lodash__WEBPACK_IMPORTED_MODULE_5___default.a.map(playlistStore.playlistsById, function (p, id) {
        return {
          label: p.name,
          value: id,
          color: random_material_color__WEBPACK_IMPORTED_MODULE_4___default.a.getColor({
            text: id
          })
        };
      });
    }
  }, {
    key: "tagSelectOptionsMap",
    get: function get() {
      return lodash__WEBPACK_IMPORTED_MODULE_5___default.a.keyBy(this.tagSelectOptions, "value");
    }
  }]);

  return MainPane;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(MainPane, "propTypes", {
  playlistStore: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({}).isRequired,
  uiStore: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({}).isRequired
});

Object(mobx__WEBPACK_IMPORTED_MODULE_3__["decorate"])(MainPane, {
  tagSelectOptions: mobx__WEBPACK_IMPORTED_MODULE_3__["computed"],
  tagSelectOptionsMap: mobx__WEBPACK_IMPORTED_MODULE_3__["computed"]
});
/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(MainPane));

/***/ })

})
//# sourceMappingURL=index.js.1197692ad32b472b62b9.hot-update.js.map