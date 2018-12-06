webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./data/analytics.js":
/*!***************************!*\
  !*** ./data/analytics.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var xstream_extra_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xstream/extra/debounce */ "./node_modules/xstream/extra/debounce.js");
/* harmony import */ var xstream_extra_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xstream_extra_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserStore */ "./data/UserStore.js");
/* harmony import */ var _UIStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UIStore */ "./data/UIStore.js");
/* harmony import */ var _PlaylistStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlaylistStore */ "./data/PlaylistStore.js");





react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].initialize("UA-130563636-1", {
  debug: "development" !== "production"
});
_UserStore__WEBPACK_IMPORTED_MODULE_2__["user$"].addListener({
  next: function next(u) {
    react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].set({
      userId: u.id
    });
  }
});
_UIStore__WEBPACK_IMPORTED_MODULE_3__["selectedPlaylistChanges$"].addListener({
  next: function next(playlistId) {
    react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].event({
      category: "Navigation",
      action: "Selected playlist",
      label: playlistId
    });
  }
});
_PlaylistStore__WEBPACK_IMPORTED_MODULE_4__["addTagEvents$"].addListener({
  next: function next(_ref) {
    var trackId = _ref.trackId;
    react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].event({
      category: "Organization",
      action: "Tagged a track",
      label: trackId
    });
  }
});
_PlaylistStore__WEBPACK_IMPORTED_MODULE_4__["removeTagEvents$"].addListener({
  next: function next(_ref2) {
    var trackId = _ref2.trackId;
    react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].event({
      category: "Organization",
      action: "Untagged a track",
      label: trackId
    });
  }
});
_PlaylistStore__WEBPACK_IMPORTED_MODULE_4__["createAndAddTagEvents$"].addListener({
  next: function next(_ref3) {
    var playlistName = _ref3.playlistName;
    react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].event({
      category: "Organization",
      action: "Create tag",
      label: playlistName
    });
  }
});
_UIStore__WEBPACK_IMPORTED_MODULE_3__["searchQueryChanges$"].compose(xstream_extra_debounce__WEBPACK_IMPORTED_MODULE_1___default()(500)).addListener({
  next: function next(query) {
    react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].event({
      category: "Navigation",
      action: "Filter tracks",
      label: query
    });
  }
});

if (global.window) {
  window.onerror = function (message) {
    react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].exception({
      description: message
    });
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=_app.js.b2686237e02f929bff24.hot-update.js.map