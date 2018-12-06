webpackHotUpdate("static/development/pages/index.js",{

/***/ "./data/UIStore.js":
/*!*************************!*\
  !*** ./data/UIStore.js ***!
  \*************************/
/*! exports provided: onResizeSidebar, sidebarWidth$, onResizeTrackCol, trackColWidth$, onResizeArtistCol, artistColWidth$, onSelectPlaylist, selectedPlaylistChanges$, selectedPlaylist$, onChangeSearchQuery, searchQueryChanges$, searchQuery$ */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedPlaylistChanges$", function() { return selectedPlaylistChanges$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedPlaylist$", function() { return selectedPlaylist$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onChangeSearchQuery", function() { return onChangeSearchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchQueryChanges$", function() { return searchQueryChanges$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchQuery$", function() { return searchQuery$; });
/* harmony import */ var _util_recompose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/recompose */ "./util/recompose.js");


var _createEventHandler = Object(_util_recompose__WEBPACK_IMPORTED_MODULE_0__["createEventHandler"])(),
    onResizeSidebar = _createEventHandler.handler,
    sidebarDeltas$ = _createEventHandler.stream;


var sidebarWidth$ = sidebarDeltas$.fold(function (acc, x) {
  return acc + x;
}, 200);

var _createEventHandler2 = Object(_util_recompose__WEBPACK_IMPORTED_MODULE_0__["createEventHandler"])(),
    onResizeTrackCol = _createEventHandler2.handler,
    trackColDeltas$ = _createEventHandler2.stream;


var trackColWidth$ = trackColDeltas$.fold(function (acc, x) {
  return acc + x;
}, 200);

var _createEventHandler3 = Object(_util_recompose__WEBPACK_IMPORTED_MODULE_0__["createEventHandler"])(),
    onResizeArtistCol = _createEventHandler3.handler,
    artistColDeltas$ = _createEventHandler3.stream;


var artistColWidth$ = artistColDeltas$.fold(function (acc, x) {
  return acc + x;
}, 200);

var _createEventHandler4 = Object(_util_recompose__WEBPACK_IMPORTED_MODULE_0__["createEventHandler"])(),
    onSelectPlaylist = _createEventHandler4.handler,
    selectedPlaylistChanges$ = _createEventHandler4.stream;


var selectedPlaylist$ = selectedPlaylistChanges$.startWith("all");

var _createEventHandler5 = Object(_util_recompose__WEBPACK_IMPORTED_MODULE_0__["createEventHandler"])(),
    onChangeSearchQuery = _createEventHandler5.handler,
    searchQueryChanges$ = _createEventHandler5.stream;


var searchQuery$ = searchQueryChanges$.startWith("");

/***/ })

})
//# sourceMappingURL=index.js.dc5ccc63334df905165e.hot-update.js.map