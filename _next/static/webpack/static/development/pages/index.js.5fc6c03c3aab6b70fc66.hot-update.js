webpackHotUpdate("static/development/pages/index.js",{

/***/ "./data/PlaylistStore.js":
/*!*******************************!*\
  !*** ./data/PlaylistStore.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlaylistStore; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/fetch */ "./util/fetch.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var PlaylistStore =
/*#__PURE__*/
function () {
  function PlaylistStore() {
    var _this = this;

    _classCallCheck(this, PlaylistStore);

    _defineProperty(this, "addTag",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(trackUri, playlistId) {
        var add, dispose;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // const resp = await fetch(
                //   `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
                //   {
                //     method: "POST",
                //     body: JSON.stringify({
                //       uris: [trackUri]
                //     })
                //   }
                // );
                // if (resp.ok) {
                add = function add() {
                  return _this.tracksByPlaylist[playlistId].push(_this.tracksById[trackUri]);
                };

                if (_this.tracksByPlaylist[playlistId]) {
                  add();
                } else {
                  // we're probably fetching the playlist
                  dispose = Object(mobx__WEBPACK_IMPORTED_MODULE_2__["autorun"])(function () {
                    if (_this.tracksByPlaylist[playlistId]) {
                      dispose();
                      add();
                    }
                  });
                } // } else {
                // }


              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(this, "removeTag",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(trackUri, playlistId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // const resp = await fetch(
                //   `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
                //   {
                //     method: "DELETE",
                //     body: JSON.stringify({
                //       tracks: [{ uri: trackUri }]
                //     })
                //   }
                // );
                // if (resp.ok) {
                _this.tracksByPlaylist[playlistId] = _this.tracksByPlaylist[playlistId].filter(function (t) {
                  return t.track.uri !== trackUri;
                }); // } else {
                // }

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(this, "createTagWithTrack",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(trackUri, playlistName) {
        var resp, playlist;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(_util_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])("https://api.spotify.com/v1/users/".concat(_this.user.id, "/playlists"), {
                  method: "POST",
                  body: JSON.stringify({
                    name: playlistName,
                    description: "Created by Tagify."
                  })
                });

              case 2:
                resp = _context3.sent;

                if (resp.ok) {
                  _context3.next = 5;
                  break;
                }

                throw new Error("Couldn't create tag");

              case 5:
                _context3.next = 7;
                return resp.json();

              case 7:
                playlist = _context3.sent;

                _this.playlists.push(playlist);

                _this.addTag(trackUri, playlist.id);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    }());

    this.playlists = Object(mobx__WEBPACK_IMPORTED_MODULE_2__["observable"])([]);
    this.tracksByPlaylist = Object(mobx__WEBPACK_IMPORTED_MODULE_2__["observable"])({});
    this.tracksById = {};
    this.searchState = Object(mobx__WEBPACK_IMPORTED_MODULE_2__["observable"])({
      query: "",
      selectedPlaylistId: "all",
      numFetches: 0
    });
    this.user = {};
    this.playlists.observe(function (changeData) {
      console.log("changedata", changeData);

      if (changeData.type === "splice") {
        changeData.added.forEach(function (p) {
          _this.fetchTracks(p.id, p.tracks.href);
        });
      }
    });
    this.fetchUserProfile();
    this.fetchPlaylists();
  }

  _createClass(PlaylistStore, [{
    key: "fetchUserProfile",
    value: function () {
      var _fetchUserProfile = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var resp, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Object(_util_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])("https://api.spotify.com/v1/me");

              case 2:
                resp = _context4.sent;
                _context4.next = 5;
                return resp.json();

              case 5:
                data = _context4.sent;
                this.user = data;

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function fetchUserProfile() {
        return _fetchUserProfile.apply(this, arguments);
      };
    }()
  }, {
    key: "fetchPlaylists",
    value: function () {
      var _fetchPlaylists = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var _this$playlists;

        var url,
            resp,
            _ref4,
            next,
            items,
            _args5 = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                url = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : "https://api.spotify.com/v1/me/playlists?limit=50";
                this.searchState.numFetches += 1;
                _context5.next = 4;
                return Object(_util_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])(url);

              case 4:
                resp = _context5.sent;
                this.searchState.numFetches -= 1;
                _context5.next = 8;
                return resp.json();

              case 8:
                _ref4 = _context5.sent;
                next = _ref4.next;
                items = _ref4.items;

                (_this$playlists = this.playlists).push.apply(_this$playlists, _toConsumableArray(items)); // if (next) {
                //   console.log("calling next", next);
                //   this.fetchPlaylists(next);
                // }


              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function fetchPlaylists() {
        return _fetchPlaylists.apply(this, arguments);
      };
    }()
  }, {
    key: "fetchTracks",
    value: function () {
      var _fetchTracks = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(playlistId, url) {
        var _this2 = this;

        var resp, _ref5, next, items, _this$tracksByPlaylis;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.searchState.numFetches += 1;
                _context6.next = 3;
                return Object(_util_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])(url);

              case 3:
                resp = _context6.sent;
                _context6.next = 6;
                return resp.json();

              case 6:
                _ref5 = _context6.sent;
                next = _ref5.next;
                items = _ref5.items;

                if (!this.tracksByPlaylist[playlistId]) {
                  this.tracksByPlaylist[playlistId] = [];
                }

                if (items) {
                  (_this$tracksByPlaylis = this.tracksByPlaylist[playlistId]).push.apply(_this$tracksByPlaylis, _toConsumableArray(items));

                  items.forEach(function (track) {
                    return _this2.tracksById[track.track.uri] = track;
                  });
                }

                this.searchState.numFetches -= 1; // if (next) {
                //   this.fetchTracks(playlistId, next);
                // }

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function fetchTracks(_x7, _x8) {
        return _fetchTracks.apply(this, arguments);
      };
    }()
  }, {
    key: "playlistsById",
    get: function get() {
      return lodash__WEBPACK_IMPORTED_MODULE_3___default.a.keyBy(this.playlists, "id");
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
      return lodash__WEBPACK_IMPORTED_MODULE_3___default.a.sortBy(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.uniqBy(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.flatten(Object.values(this.tracksByPlaylist)), function (t) {
        return t.track.uri;
      }), function (t) {
        return t.track.name;
      });
    }
  }, {
    key: "tagsByTrack",
    get: function get() {
      console.log("computing tagsByTrack");
      var ret = {};

      lodash__WEBPACK_IMPORTED_MODULE_3___default.a.forEach(this.tracksByPlaylist, function (tracks, playlistId) {
        tracks.forEach(function (t) {
          var identifier = t.track.uri;

          if (!ret[identifier]) {
            ret[identifier] = [];
          }

          if (!ret[identifier].includes(playlistId)) {
            ret[identifier].push(playlistId);
          }
        });
      });

      return ret;
    }
  }, {
    key: "filteredTracks",
    get: function get() {
      var _this3 = this;

      var tracksForSelectedList = (this.searchState.selectedPlaylistId === "all" ? this.allTracks : this.tracksByPlaylist[this.searchState.selectedPlaylistId]) || [];
      var filteredList = this.searchState.query ? tracksForSelectedList.filter(function (t) {
        var query = _this3.searchState.query.toLowerCase();

        return t.track.name.toLowerCase().includes(query) || lodash__WEBPACK_IMPORTED_MODULE_3___default.a.some(t.track.artists, function (a) {
          return a.name.toLowerCase().includes(query);
        });
      }) : tracksForSelectedList;
      return filteredList;
    }
  }]);

  return PlaylistStore;
}();


Object(mobx__WEBPACK_IMPORTED_MODULE_2__["decorate"])(PlaylistStore, {
  playlistsById: mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
  playlistIds: mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
  allTracks: mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
  tagsByTrack: mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
  filteredTracks: mobx__WEBPACK_IMPORTED_MODULE_2__["computed"]
});

/***/ })

})
//# sourceMappingURL=index.js.5fc6c03c3aab6b70fc66.hot-update.js.map