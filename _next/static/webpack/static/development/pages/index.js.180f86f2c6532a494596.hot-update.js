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
/* harmony import */ var xstream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xstream */ "./node_modules/xstream/index.js");
/* harmony import */ var xstream__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xstream__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var random_material_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! random-material-color */ "./node_modules/random-material-color/dist/randomColor.js");
/* harmony import */ var random_material_color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(random_material_color__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util_recompose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/recompose */ "./util/recompose.js");
/* harmony import */ var _data_PlaylistStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/PlaylistStore */ "./data/PlaylistStore.js");
/* harmony import */ var _data_UIStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/UIStore */ "./data/UIStore.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../theme */ "./theme.js");
/* harmony import */ var _BasicTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BasicTable */ "./components/BasicTable.js");
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SearchBar */ "./components/SearchBar.js");
/* harmony import */ var _TableHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TableHeader */ "./components/TableHeader.js");
var _jsxFileName = "/Users/byron/dev/tagify/components/MainPane.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









 // import Table from "./VirtualizedTable";




/* harmony default export */ __webpack_exports__["default"] = (Object(_util_recompose__WEBPACK_IMPORTED_MODULE_5__["componentFromStream"])(function () {
  var tagSelectOptions$ = _data_PlaylistStore__WEBPACK_IMPORTED_MODULE_6__["playlists$"].map(function (playlists) {
    return playlists.map(function (p) {
      return {
        label: p.name,
        value: p.id,
        color: random_material_color__WEBPACK_IMPORTED_MODULE_3___default.a.getColor({
          text: p.id
        })
      };
    });
  }).remember();
  var tagSelectOptionsMap$ = tagSelectOptions$.map(function (options) {
    return lodash__WEBPACK_IMPORTED_MODULE_4___default.a.keyBy(options, "value");
  }).remember();
  return xstream__WEBPACK_IMPORTED_MODULE_2___default.a.combine(_data_PlaylistStore__WEBPACK_IMPORTED_MODULE_6__["filteredTracks$"], _data_PlaylistStore__WEBPACK_IMPORTED_MODULE_6__["tagsByTrack$"], _data_PlaylistStore__WEBPACK_IMPORTED_MODULE_6__["tracksById$"], tagSelectOptions$, tagSelectOptionsMap$).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 5),
        filteredTracks = _ref2[0],
        tagsByTrack = _ref2[1],
        tracksById = _ref2[2],
        tagSelectOptions = _ref2[3],
        tagSelectOptionsMap = _ref2[4];

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableHeader__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BasicTable__WEBPACK_IMPORTED_MODULE_9__["default"], {
      filteredTracks: filteredTracks,
      tagsByTrack: tagsByTrack,
      tracksById: tracksById,
      tagSelectOptions: tagSelectOptions,
      tagSelectOptionsMap: tagSelectOptionsMap,
      addTag: function addTag(trackId, playlistId) {
        return _data_PlaylistStore__WEBPACK_IMPORTED_MODULE_6__["addTag"]({
          trackId: trackId,
          playlistId: playlistId
        });
      },
      removeTag: function removeTag(trackId, playlistId) {
        return _data_PlaylistStore__WEBPACK_IMPORTED_MODULE_6__["removeTag"]({
          trackId: trackId,
          playlistId: playlistId
        });
      },
      createAndAddTag: function createAndAddTag(trackId, playlistName) {
        return _data_PlaylistStore__WEBPACK_IMPORTED_MODULE_6__["createAndAddTag"]({
          trackId: trackId,
          playlistName: playlistName
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }));
  });
}));
/* <div
          style={{
            overflow: "auto",
            background: theme.colors.backgroundLight,
            ...this.props.style,
          }}
        > */

/***/ })

})
//# sourceMappingURL=index.js.180f86f2c6532a494596.hot-update.js.map