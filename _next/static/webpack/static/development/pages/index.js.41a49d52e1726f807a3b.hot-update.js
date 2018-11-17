webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Table.js":
/*!*****************************!*\
  !*** ./components/Table.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var _ResizeHandle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ResizeHandle */ "./components/ResizeHandle.js");
/* harmony import */ var _TableRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TableRow */ "./components/TableRow.js");
/* harmony import */ var random_material_color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! random-material-color */ "./node_modules/random-material-color/dist/randomColor.js");
/* harmony import */ var random_material_color__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(random_material_color__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/byron/dev/tagify/components/Table.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Table =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table(props) {
    var _this;

    _classCallCheck(this, Table);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Table).call(this, props));
    _this._cache = new react_virtualized__WEBPACK_IMPORTED_MODULE_3__["CellMeasurerCache"]({
      fixedWidth: true,
      minHeight: 25,
      keyMapper: function keyMapper(rowIndex) {
        var track = _this.props.playlistStore.filteredTracks[rowIndex].track;
        return track.uri;
      }
    });
    Object(mobx__WEBPACK_IMPORTED_MODULE_2__["reaction"])(function () {
      return _this.props.uiStore.state.trackColWidth + _this.props.uiStore.state.artistColWidth + _this.props.uiStore.mainPanelWidth;
    }, function () {
      _this._cache.clearAll();
    }); // reaction(
    //   () => this.props.playlistStore.filteredTracks,
    //   () => {
    //     console.log("filteredtracks reaction");
    //     // this._cache.clearAll();
    //     this.listRef && this.listRef.forceUpdate();
    //   }
    // );

    Object(mobx__WEBPACK_IMPORTED_MODULE_2__["reaction"])(function () {
      return _this.props.playlistStore.searchState.query;
    }, function () {
      console.log("query reaction");

      _this._cache.clearAll();

      _this.listRef && _this.listRef.forceUpdate();
    });
    return _this;
  }

  _createClass(Table, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log("render");

      if (this.props.playlistStore.searchState.numFetches) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, "Loading...", this.props.playlistStore.searchState.numFetches);
      }

      var filteredList = this.props.playlistStore.filteredTracks;
      var tagsByTrack = this.props.playlistStore.tagsByTrack;
      var playlistsById = this.props.playlistStore.playlistsById;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: this.props.playlistStore.searchState.query,
        onChange: function onChange(e) {
          _this2.props.playlistStore.searchState.query = e.target.value;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "flex"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          position: "relative",
          width: this.props.uiStore.state.trackColWidth
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Title", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResizeHandle__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onResize: function onResize(delta) {
          return _this2.props.uiStore.state.trackColWidth += delta;
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
          lineNumber: 83
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          position: "relative",
          width: this.props.uiStore.state.artistColWidth
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Artist", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResizeHandle__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onResize: function onResize(delta) {
          return _this2.props.uiStore.state.artistColWidth += delta;
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
          lineNumber: 104
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "Tags")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_3__["List"], {
        ref: function ref(_ref2) {
          return _this2.listRef = _ref2;
        },
        width: this.props.uiStore.mainPanelWidth,
        height: this.props.uiStore.state.windowHeight - 100,
        deferredMeasurementCache: this._cache,
        rowCount: filteredList.length,
        rowHeight: this._cache.rowHeight,
        rowRenderer: function rowRenderer(_ref) {
          var key = _ref.key,
              index = _ref.index,
              parent = _ref.parent,
              style = _ref.style;
          var t = filteredList[index];
          var identifier = t.track.uri;
          var tags = tagsByTrack[identifier].map(function (playlistId) {
            return _this2.tagSelectOptionsMap[playlistId];
          });
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: t.track.uri,
            style: style,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
            style: style,
            index: index,
            parent: parent,
            cellMeasurerCache: _this2._cache,
            track: t.track,
            tags: tags,
            tagOptions: _this2.tagSelectOptions,
            trackColWidth: _this2.props.uiStore.state.trackColWidth,
            artistColWidth: _this2.props.uiStore.state.artistColWidth,
            addTag: _this2.props.playlistStore.addTag,
            removeTag: _this2.props.playlistStore.removeTag,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 136
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }));
    }
  }, {
    key: "tagSelectOptions",
    get: function get() {
      return _.map(this.playlistStore.playlistsById, function (p, id) {
        return {
          label: p.name,
          value: id,
          color: random_material_color__WEBPACK_IMPORTED_MODULE_6___default.a.getColor({
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

  return Table;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Object(mobx__WEBPACK_IMPORTED_MODULE_2__["decorate"])(Table, {
  tagSelectOptions: mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
  tagSelectOptionsMap: mobx__WEBPACK_IMPORTED_MODULE_2__["computed"]
});
/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(Table));

/***/ })

})
//# sourceMappingURL=index.js.41a49d52e1726f807a3b.hot-update.js.map