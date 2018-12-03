webpackHotUpdate("static/development/pages/index.js",{

/***/ "./data/UIStore.js":
/*!*************************!*\
  !*** ./data/UIStore.js ***!
  \*************************/
/*! exports provided: onSidebarResize, sidebarWidth$, trackColDeltas$, trackColWidth$, artistColDeltas$, artistColWidth$, selectedPlaylistChanges$, selectedPlaylist$, onChangeSearchQuery, searchQuery$ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSidebarResize", function() { return onSidebarResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarWidth$", function() { return sidebarWidth$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackColDeltas$", function() { return trackColDeltas$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackColWidth$", function() { return trackColWidth$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "artistColDeltas$", function() { return artistColDeltas$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "artistColWidth$", function() { return artistColWidth$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedPlaylistChanges$", function() { return selectedPlaylistChanges$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedPlaylist$", function() { return selectedPlaylist$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onChangeSearchQuery", function() { return onChangeSearchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchQuery$", function() { return searchQuery$; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xstream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xstream */ "./node_modules/xstream/index.js");
/* harmony import */ var xstream__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xstream__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_recompose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/recompose */ "./util/recompose.js");




var _createEventHandler = Object(_util_recompose__WEBPACK_IMPORTED_MODULE_2__["createEventHandler"])(),
    onSidebarResize = _createEventHandler.handler,
    sidebarDeltas$ = _createEventHandler.stream;


var sidebarWidth$ = sidebarDeltas$.fold(function (acc, x) {
  return acc + x;
}, 200);
var trackColDeltas$ = xstream__WEBPACK_IMPORTED_MODULE_1___default.a.create();
var trackColWidth$ = trackColDeltas$.fold(function (acc, x) {
  return acc + x;
}, 200);
var artistColDeltas$ = xstream__WEBPACK_IMPORTED_MODULE_1___default.a.create();
var artistColWidth$ = artistColDeltas$.fold(function (acc, x) {
  return acc + x;
}, 200);
var selectedPlaylistChanges$ = xstream__WEBPACK_IMPORTED_MODULE_1___default.a.create();
var selectedPlaylist$ = selectedPlaylistChanges$.startWith("2WZ0wCi4anVUgXnYtF9HG3");

var _createEventHandler2 = Object(_util_recompose__WEBPACK_IMPORTED_MODULE_2__["createEventHandler"])(),
    onChangeSearchQuery = _createEventHandler2.handler,
    searchQueryChanges$ = _createEventHandler2.stream;


var searchQuery$ = searchQueryChanges$.startWith("");

/***/ })

})
//# sourceMappingURL=index.js.a5492c9141f54e5ffcca.hot-update.js.map