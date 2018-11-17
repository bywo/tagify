webpackHotUpdate("static/development/pages/index.js",{

/***/ "./data/UIStore.js":
/*!*************************!*\
  !*** ./data/UIStore.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UIStore; });
/* harmony import */ var _util_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/fetch */ "./util/fetch.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var UIStore =
/*#__PURE__*/
function () {
  function UIStore() {
    var _this = this;

    _classCallCheck(this, UIStore);

    _defineProperty(this, "state", Object(mobx__WEBPACK_IMPORTED_MODULE_1__["observable"])({
      panelGutter: 20,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      sidebarWidth: 200,
      trackColWidth: 180,
      artistColWidth: 180,
      tagsColWidth: 200
    }));

    window.addEventListener("resize", function () {
      _this.state.windowWidth = window.innerWidth;
      _this.state.windowHeight = window.innerHeight;
    });
  }

  _createClass(UIStore, [{
    key: "mainPanelWidth",
    get: function get() {
      return this.state.windowWidth - this.state.sidebarWidth - this.state.panelGutter;
    }
  }]);

  return UIStore;
}();


Object(mobx__WEBPACK_IMPORTED_MODULE_1__["decorate"])(UIStore, {
  mainPanelWidth: mobx__WEBPACK_IMPORTED_MODULE_1__["computed"]
});

/***/ })

})
//# sourceMappingURL=index.js.5e74ee9b47e1133a779f.hot-update.js.map