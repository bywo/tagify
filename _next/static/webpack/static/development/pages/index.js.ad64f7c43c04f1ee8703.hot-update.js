webpackHotUpdate("static/development/pages/index.js",{

/***/ "./data/PlaylistStore.js":
/*!*******************************!*\
  !*** ./data/PlaylistStore.js ***!
  \*******************************/
/*! exports provided: addTag, playlists$, tagsByTrack$, tracksById$, filteredTracks$, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTag", function() { return addTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playlists$", function() { return playlists$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagsByTrack$", function() { return tagsByTrack$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tracksById$", function() { return tracksById$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filteredTracks$", function() { return filteredTracks$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlaylistStore; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var xstream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xstream */ "./node_modules/xstream/index.js");
/* harmony import */ var xstream__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xstream__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xstream_extra_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xstream/extra/debounce */ "./node_modules/xstream/extra/debounce.js");
/* harmony import */ var xstream_extra_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xstream_extra_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var xstream_extra_sampleCombine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xstream/extra/sampleCombine */ "./node_modules/xstream/extra/sampleCombine.js");
/* harmony import */ var xstream_extra_sampleCombine__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xstream_extra_sampleCombine__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var xstream_extra_flattenConcurrently__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xstream/extra/flattenConcurrently */ "./node_modules/xstream/extra/flattenConcurrently.js");
/* harmony import */ var xstream_extra_flattenConcurrently__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(xstream_extra_flattenConcurrently__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./db */ "./data/db.js");
/* harmony import */ var _UserStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserStore */ "./data/UserStore.js");
/* harmony import */ var _UIStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UIStore */ "./data/UIStore.js");
/* harmony import */ var _util_recompose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/recompose */ "./util/recompose.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }











var resyncPlaylistsInterval = 1000 * 60 * 10; // 10 minutes

var _createEventHandler = Object(_util_recompose__WEBPACK_IMPORTED_MODULE_10__["createEventHandler"])(),
    addTag = _createEventHandler.handler,
    addTagEvents$ = _createEventHandler.stream;


var addedTags$ = addTagEvents$.compose(xstream_extra_sampleCombine__WEBPACK_IMPORTED_MODULE_4___default()(_UserStore__WEBPACK_IMPORTED_MODULE_8__["fetch$"])).map(
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var _ref3, _ref3$, trackId, playlistId, fetch, resp;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref3 = _slicedToArray(_ref, 2), _ref3$ = _ref3[0], trackId = _ref3$.trackId, playlistId = _ref3$.playlistId, fetch = _ref3[1];
            _context.next = 3;
            return fetch("https://api.spotify.com/v1/playlists/".concat(playlistId, "/tracks"), {
              method: "POST",
              body: JSON.stringify({
                uris: [trackId]
              })
            });

          case 3:
            resp = _context.sent;

            if (!resp.ok) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", {
              trackId: trackId,
              playlistId: playlistId
            });

          case 6:
            throw new Error("failed to add");

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}()).map(xstream__WEBPACK_IMPORTED_MODULE_2___default.a.fromPromise).compose(xstream_extra_flattenConcurrently__WEBPACK_IMPORTED_MODULE_5___default.a);
addedTags$.addListener({
  next: function () {
    var _next2 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref4) {
      var trackId, playlistId, pt;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              trackId = _ref4.trackId, playlistId = _ref4.playlistId;
              _context2.next = 3;
              return _db__WEBPACK_IMPORTED_MODULE_7__["default"].playlistTracks.get(playlistId);

            case 3:
              pt = _context2.sent;

              if (!pt.trackIds.includes(trackId)) {
                pt.trackIds.push(trackId);
              }

              _context2.next = 7;
              return _db__WEBPACK_IMPORTED_MODULE_7__["default"].playlistTracks.put(pt);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function next(_x2) {
      return _next2.apply(this, arguments);
    };
  }()
});

function fetchPlaylists(_x3) {
  return _fetchPlaylists.apply(this, arguments);
}

function _fetchPlaylists() {
  _fetchPlaylists = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(fetch) {
    var url,
        resp,
        _ref18,
        next,
        items,
        ret,
        _args8 = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            url = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : "https://api.spotify.com/v1/me/playlists?limit=50";
            _context8.next = 3;
            return fetch(url);

          case 3:
            resp = _context8.sent;
            _context8.next = 6;
            return resp.json();

          case 6:
            _ref18 = _context8.sent;
            next = _ref18.next;
            items = _ref18.items;
            ret = items;

            if (!next) {
              _context8.next = 16;
              break;
            }

            _context8.t0 = items;
            _context8.next = 14;
            return fetchPlaylists(fetch, next);

          case 14:
            _context8.t1 = _context8.sent;
            ret = _context8.t0.concat.call(_context8.t0, _context8.t1);

          case 16:
            return _context8.abrupt("return", ret);

          case 17:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));
  return _fetchPlaylists.apply(this, arguments);
}

function savePlaylistsToDb(_x4) {
  return _savePlaylistsToDb.apply(this, arguments);
}

function _savePlaylistsToDb() {
  _savePlaylistsToDb = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(playlists) {
    var playlistIds;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return _db__WEBPACK_IMPORTED_MODULE_7__["default"].playlists.bulkPut(playlists.map(function (p, index) {
              return _objectSpread({}, p, {
                index: index
              });
            }));

          case 2:
            playlistIds = playlists.map(function (p) {
              return p.id;
            });
            _context9.next = 5;
            return _db__WEBPACK_IMPORTED_MODULE_7__["default"].playlists.where("id").noneOf(playlistIds).delete();

          case 5:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  }));
  return _savePlaylistsToDb.apply(this, arguments);
}

var validFetch$ = _UserStore__WEBPACK_IMPORTED_MODULE_8__["fetch$"].filter(function (f) {
  return !!f;
});
var invalidFetch$ = _UserStore__WEBPACK_IMPORTED_MODULE_8__["fetch$"].filter(function (f) {
  return !f;
});
var intervalAfterValidFetch = validFetch$.map(function () {
  console.log("interval before flatten");
  return xstream__WEBPACK_IMPORTED_MODULE_2___default.a.periodic(resyncPlaylistsInterval).startWith(0);
}).flatten().endWhen(invalidFetch$); // whenever we have a valid fetch token, refresh playlists

var playlistFetches$ = xstream__WEBPACK_IMPORTED_MODULE_2___default.a.combine(validFetch$, intervalAfterValidFetch).map(function (_ref5) {
  var _ref6 = _slicedToArray(_ref5, 1),
      fetch = _ref6[0];

  console.log("fetching playlists");
  return fetchPlaylists(fetch);
}).map(xstream__WEBPACK_IMPORTED_MODULE_2___default.a.fromPromise).flatten();
playlistFetches$.addListener({
  next: function next(ps) {
    if (ps) {
      // HACK. try switching to xstream
      console.log("fetched playlists", ps);
      savePlaylistsToDb(ps);
    }
  }
});
var playlistChanges$ = xstream__WEBPACK_IMPORTED_MODULE_2___default.a.create({
  start: function start(listener) {
    _db__WEBPACK_IMPORTED_MODULE_7__["default"].playlists.hook("creating", function () {
      return listener.next();
    });
    _db__WEBPACK_IMPORTED_MODULE_7__["default"].playlists.hook("updating", function (modifications) {
      if (lodash__WEBPACK_IMPORTED_MODULE_6___default.a.size(modifications) > 0) {
        listener.next();
      }
    });
    _db__WEBPACK_IMPORTED_MODULE_7__["default"].playlists.hook("deleting", function () {
      return listener.next();
    });
  },
  stop: function stop() {}
});
_db__WEBPACK_IMPORTED_MODULE_7__["default"].playlists.hook("deleting",
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(key) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log("playlist deleting");

            lodash__WEBPACK_IMPORTED_MODULE_6___default.a.defer(function () {
              return _db__WEBPACK_IMPORTED_MODULE_7__["default"].playlistTracks.where("id").equals(key).delete();
            });

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function (_x5) {
    return _ref7.apply(this, arguments);
  };
}());
var playlists$ = playlistChanges$.startWith(undefined).compose(xstream_extra_debounce__WEBPACK_IMPORTED_MODULE_3___default()(30)).map(function () {
  if (true) {
    console.log("get from db");
    return _db__WEBPACK_IMPORTED_MODULE_7__["default"].playlists.toCollection().sortBy("index");
  }

  return Promise.resolve([]);
}).map(xstream__WEBPACK_IMPORTED_MODULE_2___default.a.fromPromise).flatten().remember();
playlists$.addListener({
  next: function next(playlists) {
    console.log("playlists", playlists);
  }
});
var playlistTrackChanges$ = xstream__WEBPACK_IMPORTED_MODULE_2___default.a.create({
  start: function start(listener) {
    _db__WEBPACK_IMPORTED_MODULE_7__["default"].playlistTracks.hook("creating", function () {
      return listener.next();
    });
    _db__WEBPACK_IMPORTED_MODULE_7__["default"].playlistTracks.hook("updating", function (modifications) {
      if (lodash__WEBPACK_IMPORTED_MODULE_6___default.a.size(modifications) > 0) {
        listener.next();
      }
    });
    _db__WEBPACK_IMPORTED_MODULE_7__["default"].playlistTracks.hook("deleting", function () {
      return listener.next();
    });
  },
  stop: function stop() {}
});
var playlistTracks$ = playlistTrackChanges$.startWith(undefined).compose(xstream_extra_debounce__WEBPACK_IMPORTED_MODULE_3___default()(30)).map(function () {
  if (true) {
    console.log("get from db");
    return _db__WEBPACK_IMPORTED_MODULE_7__["default"].playlistTracks.toArray();
  }

  return Promise.resolve([]);
}).map(xstream__WEBPACK_IMPORTED_MODULE_2___default.a.fromPromise).flatten().remember();
playlistTracks$.addListener({
  next: function next(pt) {
    console.log("playlisttracks", pt);
  }
});
var allTracks$ = playlistTracks$.map(function (playlistTracks) {
  return lodash__WEBPACK_IMPORTED_MODULE_6___default.a.uniq(lodash__WEBPACK_IMPORTED_MODULE_6___default.a.flatten(lodash__WEBPACK_IMPORTED_MODULE_6___default.a.map(playlistTracks, "trackIds")));
}).remember();
allTracks$.addListener({
  next: function next(pt) {
    console.log("allTracks", pt);
  }
});

function fetchPlaylistTracks(_x6, _x7, _x8) {
  return _fetchPlaylistTracks.apply(this, arguments);
}

function _fetchPlaylistTracks() {
  _fetchPlaylistTracks = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(fetch, playlistId, url) {
    var resp, _ref19, next, items, ret;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return fetch(url);

          case 2:
            resp = _context10.sent;
            _context10.next = 5;
            return resp.json();

          case 5:
            _ref19 = _context10.sent;
            next = _ref19.next;
            items = _ref19.items;
            ret = items;

            if (!next) {
              _context10.next = 15;
              break;
            }

            _context10.t0 = items;
            _context10.next = 13;
            return fetchPlaylistTracks(fetch, playlistId, next);

          case 13:
            _context10.t1 = _context10.sent;
            ret = _context10.t0.concat.call(_context10.t0, _context10.t1);

          case 15:
            return _context10.abrupt("return", ret);

          case 16:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this);
  }));
  return _fetchPlaylistTracks.apply(this, arguments);
}

function fetchAndSavePlaylistTracks(_x9, _x10, _x11, _x12) {
  return _fetchAndSavePlaylistTracks.apply(this, arguments);
}

function _fetchAndSavePlaylistTracks() {
  _fetchAndSavePlaylistTracks = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(fetch, playlistId, snapshotId, url) {
    var tracks;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return fetchPlaylistTracks(fetch, playlistId, url);

          case 2:
            tracks = _context11.sent;
            _context11.next = 5;
            return _db__WEBPACK_IMPORTED_MODULE_7__["default"].tracks.bulkPut(tracks.map(function (t) {
              return t.track;
            }));

          case 5:
            _context11.next = 7;
            return _db__WEBPACK_IMPORTED_MODULE_7__["default"].playlistTracks.put({
              id: playlistId,
              snapshot_id: snapshotId,
              trackIds: tracks.map(function (t) {
                return t.track.uri;
              })
            });

          case 7:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, this);
  }));
  return _fetchAndSavePlaylistTracks.apply(this, arguments);
}

playlistFetches$.compose(xstream_extra_sampleCombine__WEBPACK_IMPORTED_MODULE_4___default()(playlistTracks$, _UserStore__WEBPACK_IMPORTED_MODULE_8__["fetch$"])).addListener({
  next: function next(_ref8) {
    var _ref9 = _slicedToArray(_ref8, 3),
        playlists = _ref9[0],
        playlistTracks = _ref9[1],
        fetch = _ref9[2];

    console.log("after playlist fetch");
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = playlists[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var p = _step.value;

        if (!lodash__WEBPACK_IMPORTED_MODULE_6___default.a.find(playlistTracks, {
          id: p.id,
          snapshot_id: p.snapshot_id
        })) {
          console.log("couldn't find", p.id, p.snapshot_id);
          fetchAndSavePlaylistTracks(fetch, p.id, p.snapshot_id, p.tracks.href);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
});
var tagsByTrack$ = playlistTracks$.map(function (playlistTracks) {
  var ret = {};
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = playlistTracks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _ref11 = _step2.value;
      var id = _ref11.id,
          trackIds = _ref11.trackIds;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = trackIds[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var trackId = _step3.value;

          if (!ret[trackId]) {
            ret[trackId] = [];
          }

          if (!ret[trackId].includes(id)) {
            ret[trackId].push(id);
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return ret;
}).remember();
tagsByTrack$.addListener({
  next: function next(t) {
    console.log("tagsByTrack", t);
  }
});
var trackChanges$ = xstream__WEBPACK_IMPORTED_MODULE_2___default.a.create({
  start: function start(listener) {
    _db__WEBPACK_IMPORTED_MODULE_7__["default"].tracks.hook("creating", function () {
      return listener.next();
    });
    _db__WEBPACK_IMPORTED_MODULE_7__["default"].tracks.hook("updating", function (modifications) {
      if (lodash__WEBPACK_IMPORTED_MODULE_6___default.a.size(modifications) > 0) {
        listener.next();
      }
    });
    _db__WEBPACK_IMPORTED_MODULE_7__["default"].tracks.hook("deleting", function () {
      return listener.next();
    });
  },
  stop: function stop() {}
});
var tracksById$ = trackChanges$.startWith(undefined).compose(xstream_extra_debounce__WEBPACK_IMPORTED_MODULE_3___default()(30)).map(
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
  var tracks;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          if (false) {}

          _context4.next = 3;
          return _db__WEBPACK_IMPORTED_MODULE_7__["default"].tracks.toArray();

        case 3:
          tracks = _context4.sent;
          return _context4.abrupt("return", lodash__WEBPACK_IMPORTED_MODULE_6___default.a.keyBy(tracks, "uri"));

        case 5:
          return _context4.abrupt("return", Promise.resolve({}));

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  }, _callee4, this);
}))).map(xstream__WEBPACK_IMPORTED_MODULE_2___default.a.fromPromise).flatten().remember();
tracksById$.addListener({
  next: function next(t) {
    console.log("tracksById", t);
  }
});
var filteredTracks$ = xstream__WEBPACK_IMPORTED_MODULE_2___default.a.combine(_UIStore__WEBPACK_IMPORTED_MODULE_9__["selectedPlaylist$"], playlistTracks$, allTracks$).map(function (_ref13) {
  var _ref14 = _slicedToArray(_ref13, 3),
      selectedPlaylist = _ref14[0],
      playlistTracks = _ref14[1],
      allTracks = _ref14[2];

  if (selectedPlaylist === "all") {
    return allTracks;
  }

  return playlistTracks.find(function (pt) {
    return pt.id === selectedPlaylist;
  }).trackIds;
}).remember();
filteredTracks$.addListener({
  next: function next(t) {
    console.log("filteredTracks", t);
  },
  error: function error(e) {
    console.error(e.stack);
  }
});

var PlaylistStore =
/*#__PURE__*/
function () {
  function PlaylistStore() {
    var _this = this;

    _classCallCheck(this, PlaylistStore);

    _defineProperty(this, "addTag",
    /*#__PURE__*/
    function () {
      var _ref15 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(trackUri, playlistId) {
        var resp, add, dispose;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return fetch("https://api.spotify.com/v1/playlists/".concat(playlistId, "/tracks"), {
                  method: "POST",
                  body: JSON.stringify({
                    uris: [trackUri]
                  })
                });

              case 2:
                resp = _context5.sent;

                if (resp.ok) {
                  add = function add() {
                    return _this.tracksByPlaylist[playlistId].push(trackUri);
                  };

                  if (_this.tracksByPlaylist[playlistId]) {
                    add();
                  } else {
                    // we're probably fetching the playlist
                    dispose = Object(mobx__WEBPACK_IMPORTED_MODULE_1__["autorun"])(function () {
                      if (_this.tracksByPlaylist[playlistId]) {
                        dispose();
                        add();
                      }
                    });
                  }
                } else {}

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x13, _x14) {
        return _ref15.apply(this, arguments);
      };
    }());

    _defineProperty(this, "removeTag",
    /*#__PURE__*/
    function () {
      var _ref16 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(trackUri, playlistId) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return fetch("https://api.spotify.com/v1/playlists/".concat(playlistId, "/tracks"), {
                  method: "DELETE",
                  body: JSON.stringify({
                    tracks: [{
                      uri: trackUri
                    }]
                  })
                });

              case 2:
                resp = _context6.sent;

                if (resp.ok) {
                  _this.tracksByPlaylist[playlistId] = _this.tracksByPlaylist[playlistId].filter(function (uri) {
                    return uri !== trackUri;
                  });
                } else {}

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x15, _x16) {
        return _ref16.apply(this, arguments);
      };
    }());

    _defineProperty(this, "createTagWithTrack",
    /*#__PURE__*/
    function () {
      var _ref17 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(trackUri, playlistName) {
        var resp, playlist;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return fetch("https://api.spotify.com/v1/users/".concat(_this.user.id, "/playlists"), {
                  method: "POST",
                  body: JSON.stringify({
                    name: playlistName,
                    description: "Created by Tagify."
                  })
                });

              case 2:
                resp = _context7.sent;

                if (resp.ok) {
                  _context7.next = 5;
                  break;
                }

                throw new Error("Couldn't create tag");

              case 5:
                _context7.next = 7;
                return resp.json();

              case 7:
                playlist = _context7.sent;

                _this.playlists.push(playlist);

                _this.addTag(trackUri, playlist.id);

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x17, _x18) {
        return _ref17.apply(this, arguments);
      };
    }());

    this.playlists = [];
    this.tracksByPlaylist = {};
    this.tracksById = {};
    this.searchState = Object(mobx__WEBPACK_IMPORTED_MODULE_1__["observable"])({
      query: "",
      selectedPlaylistId: "all",
      numFetches: 0
    });
    this.user = {};
  }

  _createClass(PlaylistStore, [{
    key: "playlistsById",
    get: function get() {
      return lodash__WEBPACK_IMPORTED_MODULE_6___default.a.keyBy(this.playlists, "id");
    }
  }, {
    key: "playlistSelectValues",
    get: function get() {
      return this.playlists.map(function (p) {
        return {
          value: p.id,
          label: p.name
        };
      });
    }
  }, {
    key: "playlistIds",
    get: function get() {
      return this.playlists.map(function (p) {
        return p.id;
      });
    }
  }, {
    key: "allTracks",
    get: function get() {
      return lodash__WEBPACK_IMPORTED_MODULE_6___default.a.uniqBy(lodash__WEBPACK_IMPORTED_MODULE_6___default.a.flatten(Object.values(this.tracksByPlaylist)), function (t) {
        return t;
      });
    }
  }, {
    key: "tagsByTrack",
    get: function get() {
      var ret = {};

      lodash__WEBPACK_IMPORTED_MODULE_6___default.a.forEach(this.tracksByPlaylist, function (trackIds, playlistId) {
        trackIds.forEach(function (uri) {
          if (!ret[uri]) {
            ret[uri] = [];
          }

          if (!ret[uri].includes(playlistId)) {
            ret[uri].push(playlistId);
          }
        });
      });

      return ret;
    }
  }, {
    key: "filteredTracks",
    get: function get() {
      var tracksForSelectedList = (this.searchState.selectedPlaylistId === "all" ? this.allTracks : this.tracksByPlaylist[this.searchState.selectedPlaylistId]) || []; // TODO

      var filteredList = tracksForSelectedList; // const filteredList = this.searchState.query
      //   ? tracksForSelectedList.filter(t => {
      //       const query = this.searchState.query.toLowerCase();
      //       return (
      //         t.track.name.toLowerCase().includes(query) ||
      //         _.some(t.track.artists, a => a.name.toLowerCase().includes(query))
      //       );
      //     })
      //   : tracksForSelectedList;

      return filteredList;
    }
  }]);

  return PlaylistStore;
}();


Object(mobx__WEBPACK_IMPORTED_MODULE_1__["decorate"])(PlaylistStore, {
  playlists: mobx__WEBPACK_IMPORTED_MODULE_1__["observable"],
  tracksByPlaylist: mobx__WEBPACK_IMPORTED_MODULE_1__["observable"],
  tracksById: mobx__WEBPACK_IMPORTED_MODULE_1__["observable"],
  playlistsById: mobx__WEBPACK_IMPORTED_MODULE_1__["computed"],
  playlistIds: mobx__WEBPACK_IMPORTED_MODULE_1__["computed"],
  allTracks: mobx__WEBPACK_IMPORTED_MODULE_1__["computed"],
  tagsByTrack: mobx__WEBPACK_IMPORTED_MODULE_1__["computed"],
  filteredTracks: mobx__WEBPACK_IMPORTED_MODULE_1__["computed"]
});

/***/ })

})
//# sourceMappingURL=index.js.ad64f7c43c04f1ee8703.hot-update.js.map