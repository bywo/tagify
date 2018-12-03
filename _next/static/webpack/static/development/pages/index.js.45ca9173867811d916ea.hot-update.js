webpackHotUpdate("static/development/pages/index.js",{

/***/ "./data/api.js":
/*!*********************!*\
  !*** ./data/api.js ***!
  \*********************/
/*! exports provided: createPlaylist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPlaylist", function() { return createPlaylist; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createPlaylist(_x, _x2, _x3) {
  return _createPlaylist.apply(this, arguments);
}

function _createPlaylist() {
  _createPlaylist = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(fetch, userId, playlistName) {
    var resp;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://api.spotify.com/v1/users/".concat(userId, "/playlists"), {
              method: "POST",
              body: JSON.stringify({
                name: playlistName,
                description: "Created by Tagify."
              })
            });

          case 2:
            resp = _context.sent;

            if (resp.ok) {
              _context.next = 5;
              break;
            }

            throw new Error("Couldn't create tag");

          case 5:
            return _context.abrupt("return", resp.json());

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _createPlaylist.apply(this, arguments);
}

/***/ })

})
//# sourceMappingURL=index.js.45ca9173867811d916ea.hot-update.js.map