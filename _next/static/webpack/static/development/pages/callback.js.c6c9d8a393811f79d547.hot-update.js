webpackHotUpdate("static/development/pages/callback.js",{

/***/ "./data/UserStore.js":
/*!***************************!*\
  !*** ./data/UserStore.js ***!
  \***************************/
/*! exports provided: onToken, token$, fetch$, user$ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onToken", function() { return onToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "token$", function() { return token$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch$", function() { return fetch$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user$", function() { return user$; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xstream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xstream */ "./node_modules/xstream/index.js");
/* harmony import */ var xstream__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xstream__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xstream_extra_dropRepeats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xstream/extra/dropRepeats */ "./node_modules/xstream/extra/dropRepeats.js");
/* harmony import */ var xstream_extra_dropRepeats__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xstream_extra_dropRepeats__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./db */ "./data/db.js");
/* harmony import */ var _util_recompose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/recompose */ "./util/recompose.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var tokenFromDb$ = xstream__WEBPACK_IMPORTED_MODULE_1___default.a.fromPromise(_db__WEBPACK_IMPORTED_MODULE_3__["default"].misc.get("token"));
tokenFromDb$.addListener({
  next: function next(token) {
    console.log("token from db", token);
  }
});

var _createEventHandler = Object(_util_recompose__WEBPACK_IMPORTED_MODULE_4__["createEventHandler"])(),
    onToken = _createEventHandler.handler,
    tokenSets$ = _createEventHandler.stream;


tokenSets$.addListener({
  next: function next(token) {
    _db__WEBPACK_IMPORTED_MODULE_3__["default"].misc.put(token, "token");
  }
});
var token$ = xstream__WEBPACK_IMPORTED_MODULE_1___default.a.combine(tokenFromDb$, tokenSets$.startWith(undefined)).map(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      fromDb = _ref2[0],
      fromSet = _ref2[1];

  return fromSet !== undefined ? fromSet : fromDb;
}).compose(xstream_extra_dropRepeats__WEBPACK_IMPORTED_MODULE_2___default()()).startWith(undefined); // TODO: Subject that works when we subscribe late

var fetch$ = token$.filter(function (token) {
  return token != null;
}).map(function (token) {
  function f(_x) {
    return _f.apply(this, arguments);
  }

  function _f() {
    _f = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url) {
      var options,
          resp,
          retryAfter,
          _args = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
              options.headers = options.headers || {};
              options.headers.Authorization = "Bearer ".concat(token);
              _context.next = 5;
              return fetch(url, options);

            case 5:
              resp = _context.sent;

              if (!(resp.status === 429)) {
                _context.next = 10;
                break;
              }

              retryAfter = resp.headers.get("retry-after") || "1";
              console.log("rate limited, retrying in", retryAfter);
              return _context.abrupt("return", new Promise(function (resolve) {
                setTimeout(function () {
                  resolve(f(url, options));
                }, parseInt(retryAfter, 10) * 1000);
              }));

            case 10:
              if (resp.status === 401) {
                // bad token
                tokenSets$.shamefullySendNext(null);
              }

              return _context.abrupt("return", resp);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    return _f.apply(this, arguments);
  }

  return f;
}).remember();
fetch$.addListener({
  next: function next(f) {
    console.log("new fetch!", f);
  }
});
var user$ = fetch$.filter(function (f) {
  return !!f;
}).map(
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(fetch) {
    var resp, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("https://api.spotify.com/v1/me");

          case 2:
            resp = _context2.sent;
            _context2.next = 5;
            return resp.json();

          case 5:
            data = _context2.sent;
            return _context2.abrupt("return", data);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x2) {
    return _ref3.apply(this, arguments);
  };
}()).map(xstream__WEBPACK_IMPORTED_MODULE_1___default.a.fromPromise).flatten().remember();

/***/ })

})
//# sourceMappingURL=callback.js.c6c9d8a393811f79d547.hot-update.js.map