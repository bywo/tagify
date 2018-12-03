webpackHotUpdate("static/development/pages/index.js",{

/***/ "./data/UIStore.js":
/*!*************************!*\
  !*** ./data/UIStore.js ***!
  \*************************/
/*! exports provided: onResizeSidebar, sidebarWidth$, onResizeTrackCol, trackColWidth$, onResizeArtistCol, artistColWidth$, onSelectPlaylist, selectedPlaylist$, onChangeSearchQuery, searchQuery$ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onResizeSidebar", function() { return onResizeSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarWidth$", function() { return sidebarWidth$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onResizeTrackCol", function() { return onResizeTrackCol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackColWidth$", function() { return trackColWidth$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onResizeArtistCol", function() { return onResizeArtistCol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "artistColWidth$", function() { return artistColWidth$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSelectPlaylist", function() { return onSelectPlaylist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedPlaylist$", function() { return selectedPlaylist$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onChangeSearchQuery", function() { return onChangeSearchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchQuery$", function() { return searchQuery$; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xstream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xstream */ "./node_modules/xstream/index.js");
/* harmony import */ var xstream__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xstream__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_recompose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/recompose */ "./util/recompose.js");




var _createEventHandler = Object(_util_recompose__WEBPACK_IMPORTED_MODULE_2__["createEventHandler"])(),
    onResizeSidebar = _createEventHandler.handler,
    sidebarDeltas$ = _createEventHandler.stream;


var sidebarWidth$ = sidebarDeltas$.fold(function (acc, x) {
  return acc + x;
}, 200);

var _createEventHandler2 = Object(_util_recompose__WEBPACK_IMPORTED_MODULE_2__["createEventHandler"])(),
    onResizeTrackCol = _createEventHandler2.handler,
    trackColDeltas$ = _createEventHandler2.stream;


var trackColWidth$ = trackColDeltas$.fold(function (acc, x) {
  return acc + x;
}, 200);

var _createEventHandler3 = Object(_util_recompose__WEBPACK_IMPORTED_MODULE_2__["createEventHandler"])(),
    onResizeArtistCol = _createEventHandler3.handler,
    artistColDeltas$ = _createEventHandler3.stream;


var artistColWidth$ = artistColDeltas$.fold(function (acc, x) {
  return acc + x;
}, 200);

var _createEventHandler4 = Object(_util_recompose__WEBPACK_IMPORTED_MODULE_2__["createEventHandler"])(),
    onSelectPlaylist = _createEventHandler4.handler,
    selectedPlaylistChanges$ = _createEventHandler4.stream;


var selectedPlaylist$ = selectedPlaylistChanges$.startWith("all");

var _createEventHandler5 = Object(_util_recompose__WEBPACK_IMPORTED_MODULE_2__["createEventHandler"])(),
    onChangeSearchQuery = _createEventHandler5.handler,
    searchQueryChanges$ = _createEventHandler5.stream;


var searchQuery$ = searchQueryChanges$.startWith("");

/***/ })

})
//# sourceMappingURL=index.js.7c5957f5093b68445390.hot-update.js.map