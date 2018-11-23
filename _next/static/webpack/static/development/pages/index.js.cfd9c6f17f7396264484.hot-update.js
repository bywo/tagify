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
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var random_material_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! random-material-color */ "./node_modules/random-material-color/dist/randomColor.js");
/* harmony import */ var random_material_color__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(random_material_color__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _BasicTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BasicTable */ "./components/BasicTable.js");
var _jsxFileName = "/Users/byron/dev/tagify/components/MainPane.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // import Table from "./VirtualizedTable";



var MainPane =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MainPane, _React$Component);

  function MainPane() {
    _classCallCheck(this, MainPane);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainPane).apply(this, arguments));
  }

  _createClass(MainPane, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          uiStore = _this$props.uiStore,
          playlistStore = _this$props.playlistStore;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: playlistStore.searchState.query,
        onChange: function onChange(e) {
          playlistStore.searchState.query = e.target.value;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "flex"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          position: "relative",
          width: uiStore.state.trackColWidth
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Title", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ResizeHandle, {
        onResize: function onResize(delta) {
          return uiStore.state.trackColWidth += delta;
        },
        style: {
          position: "absolute",
          right: 0,
          width: 5,
          top: 0,
          height: "100%",
          background: "gray"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          position: "relative",
          width: uiStore.state.artistColWidth
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Artist", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ResizeHandle, {
        onResize: function onResize(delta) {
          return uiStore.state.artistColWidth += delta;
        },
        style: {
          position: "absolute",
          right: 0,
          width: 5,
          top: 0,
          height: "100%",
          background: "gray"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Tags")), playlistStore.searchState.numFetches ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Loading...", this.props.playlistStore.searchState.numFetches) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BasicTable__WEBPACK_IMPORTED_MODULE_5__["default"], {
        uiStore: uiStore,
        playlistStore: playlistStore,
        tagSelectOptions: this.tagSelectOptions,
        tagSelectOptionsMap: this.tagSelectOptionsMap,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }));
    }
  }, {
    key: "tagSelectOptions",
    get: function get() {
      var playlistStore = this.props.playlistStore;
      return _.map(playlistStore.playlistsById, function (p, id) {
        return {
          label: p.name,
          value: id,
          color: random_material_color__WEBPACK_IMPORTED_MODULE_4___default.a.getColor({
            text: id
          })
        };
      });
    }
  }, {
    key: "tagSelectOptionsMap",
    get: function get() {
      return _.keyBy(this.tagSelectOptions, "value");
    }
  }]);

  return MainPane;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(MainPane, "propTypes", {
  playlistStore: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({}).isRequired
});

Object(mobx__WEBPACK_IMPORTED_MODULE_3__["decorate"])(MainPane, {
  tagSelectOptions: mobx__WEBPACK_IMPORTED_MODULE_3__["computed"],
  tagSelectOptionsMap: mobx__WEBPACK_IMPORTED_MODULE_3__["computed"]
});
/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(MainPane));

/***/ }),

/***/ "./node_modules/murmurhash-js/index.js":
/*!*********************************************!*\
  !*** ./node_modules/murmurhash-js/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var murmur3 = __webpack_require__(/*! ./murmurhash3_gc.js */ "./node_modules/murmurhash-js/murmurhash3_gc.js")
var murmur2 = __webpack_require__(/*! ./murmurhash2_gc.js */ "./node_modules/murmurhash-js/murmurhash2_gc.js")

module.exports = murmur3
module.exports.murmur3 = murmur3
module.exports.murmur2 = murmur2


/***/ }),

/***/ "./node_modules/murmurhash-js/murmurhash2_gc.js":
/*!******************************************************!*\
  !*** ./node_modules/murmurhash-js/murmurhash2_gc.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * JS Implementation of MurmurHash2
 * 
 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
 * @see http://github.com/garycourt/murmurhash-js
 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
 * @see http://sites.google.com/site/murmurhash/
 * 
 * @param {string} str ASCII only
 * @param {number} seed Positive integer only
 * @return {number} 32-bit positive integer hash
 */

function murmurhash2_32_gc(str, seed) {
  var
    l = str.length,
    h = seed ^ l,
    i = 0,
    k;
  
  while (l >= 4) {
  	k = 
  	  ((str.charCodeAt(i) & 0xff)) |
  	  ((str.charCodeAt(++i) & 0xff) << 8) |
  	  ((str.charCodeAt(++i) & 0xff) << 16) |
  	  ((str.charCodeAt(++i) & 0xff) << 24);
    
    k = (((k & 0xffff) * 0x5bd1e995) + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16));
    k ^= k >>> 24;
    k = (((k & 0xffff) * 0x5bd1e995) + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16));

	h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16)) ^ k;

    l -= 4;
    ++i;
  }
  
  switch (l) {
  case 3: h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
  case 2: h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
  case 1: h ^= (str.charCodeAt(i) & 0xff);
          h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16));
  }

  h ^= h >>> 13;
  h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16));
  h ^= h >>> 15;

  return h >>> 0;
}

if(typeof module !== undefined) {
  module.exports = murmurhash2_32_gc
}


/***/ }),

/***/ "./node_modules/murmurhash-js/murmurhash3_gc.js":
/*!******************************************************!*\
  !*** ./node_modules/murmurhash-js/murmurhash3_gc.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * JS Implementation of MurmurHash3 (r136) (as of May 20, 2011)
 * 
 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
 * @see http://github.com/garycourt/murmurhash-js
 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
 * @see http://sites.google.com/site/murmurhash/
 * 
 * @param {string} key ASCII only
 * @param {number} seed Positive integer only
 * @return {number} 32-bit positive integer hash 
 */

function murmurhash3_32_gc(key, seed) {
	var remainder, bytes, h1, h1b, c1, c1b, c2, c2b, k1, i;
	
	remainder = key.length & 3; // key.length % 4
	bytes = key.length - remainder;
	h1 = seed;
	c1 = 0xcc9e2d51;
	c2 = 0x1b873593;
	i = 0;
	
	while (i < bytes) {
	  	k1 = 
	  	  ((key.charCodeAt(i) & 0xff)) |
	  	  ((key.charCodeAt(++i) & 0xff) << 8) |
	  	  ((key.charCodeAt(++i) & 0xff) << 16) |
	  	  ((key.charCodeAt(++i) & 0xff) << 24);
		++i;
		
		k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff;
		k1 = (k1 << 15) | (k1 >>> 17);
		k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff;

		h1 ^= k1;
        h1 = (h1 << 13) | (h1 >>> 19);
		h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff;
		h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16));
	}
	
	k1 = 0;
	
	switch (remainder) {
		case 3: k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
		case 2: k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
		case 1: k1 ^= (key.charCodeAt(i) & 0xff);
		
		k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
		k1 = (k1 << 15) | (k1 >>> 17);
		k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
		h1 ^= k1;
	}
	
	h1 ^= key.length;

	h1 ^= h1 >>> 16;
	h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
	h1 ^= h1 >>> 13;
	h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff;
	h1 ^= h1 >>> 16;

	return h1 >>> 0;
}

if(true) {
  module.exports = murmurhash3_32_gc
}

/***/ }),

/***/ "./node_modules/random-material-color/dist/randomColor.js":
/*!****************************************************************!*\
  !*** ./node_modules/random-material-color/dist/randomColor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defaultPalette={50:["#FFEBEE","#FCE4EC","#F3E5F5","#EDE7F6","#E8EAF6","#E3F2FD","#E1F5FE","#E0F7FA","#E0F2F1","#E8F5E9","#F1F8E9","#F9FBE7","#FFFDE7","#FFF8E1","#FFF3E0","#FBE9E7","#EFEBE9","#FAFAFA","#ECEFF1"],100:["#FFCDD2","#F8BBD0","#E1BEE7","#D1C4E9","#C5CAE9","#BBDEFB","#B3E5FC","#B2EBF2","#B2DFDB","#C8E6C9","#DCEDC8","#F0F4C3","#FFF9C4","#FFECB3","#FFE0B2","#FFCCBC","#D7CCC8","#F5F5F5","#CFD8DC"],200:["#EF9A9A","#F48FB1","#CE93D8","#B39DDB","#9FA8DA","#90CAF9","#81D4FA","#80DEEA","#80CBC4","#A5D6A7","#C5E1A5","#E6EE9C","#FFF59D","#FFE082","#FFCC80","#FFAB91","#BCAAA4","#EEEEEE","#B0BEC5"],300:["#E57373","#F06292","#BA68C8","#9575CD","#7986CB","#64B5F6","#4FC3F7","#4DD0E1","#4DB6AC","#81C784","#AED581","#DCE775","#FFF176","#FFD54F","#FFB74D","#FF8A65","#A1887F","#E0E0E0","#90A4AE"],400:["#EF5350","#EC407A","#AB47BC","#7E57C2","#5C6BC0","#42A5F5","#29B6F6","#26C6DA","#26A69A","#66BB6A","#9CCC65","#D4E157","#FFEE58","#FFCA28","#FFA726","#FF7043","#8D6E63","#BDBDBD","#78909C"],500:["#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548","#9E9E9E","#607D8B"],600:["#E53935","#D81B60","#8E24AA","#5E35B1","#3949AB","#1E88E5","#039BE5","#00ACC1","#00897B","#43A047","#7CB342","#C0CA33","#FDD835","#FFB300","#FB8C00","#F4511E","#6D4C41","#757575","#546E7A"],700:["#D32F2F","#C2185B","#7B1FA2","#512DA8","#303F9F","#1976D2","#0288D1","#0097A7","#00796B","#388E3C","#689F38","#AFB42B","#FBC02D","#FFA000","#F57C00","#E64A19","#5D4037","#616161","#455A64"],800:["#C62828","#AD1457","#6A1B9A","#4527A0","#283593","#1565C0","#0277BD","#00838F","#00695C","#2E7D32","#558B2F","#9E9D24","#F9A825","#FF8F00","#EF6C00","#D84315","#4E342E","#424242","#37474F"],900:["#B71C1C","#880E4F","#4A148C","#311B92","#1A237E","#0D47A1","#01579B","#006064","#004D40","#1B5E20","#33691E","#827717","#F57F17","#FF6F00","#E65100","#BF360C","#3E2723","#212121","#263238"],A100:["#FF8A80","#FF80AB","#EA80FC","#B388FF","#8C9EFF","#82B1FF","#80D8FF","#84FFFF","#A7FFEB","#B9F6CA","#CCFF90","#F4FF81","#FFFF8D","#FFE57F","#FFD180","#FF9E80"],A200:["#FF5252","#FF4081","#E040FB","#7C4DFF","#536DFE","#448AFF","#40C4FF","#18FFFF","#64FFDA","#69F0AE","#B2FF59","#EEFF41","#FFFF00","#FFD740","#FFAB40","#FF6E40"],A400:["#FF1744","#F50057","#D500F9","#651FFF","#3D5AFE","#2979FF","#00B0FF","#00E5FF","#1DE9B6","#00E676","#76FF03","#C6FF00","#FFEA00","#FFC400","#FF9100","#FF3D00"],A700:["#D50000","#C51162","#AA00FF","#6200EA","#304FFE","#2962FF","#0091EA","#00B8D4","#00BFA5","#00C853","#64DD17","#AEEA00","#FFD600","#FFAB00","#FF6D00","#DD2C00"]},murmur=__webpack_require__(/*! murmurhash-js */ "./node_modules/murmurhash-js/index.js");module.exports=function(){var F=[],E={shades:["500"],palette:defaultPalette,text:null,ignoreColors:[]},C=function(C){C||(C=E),C.palette||(C.palette=defaultPalette),C.shades||(C.shades=["500"]);for(var B,D=F.length,t=0;D>t;t++)if(C.text&&F[t].text===C.text)return F[t].color;return B=A(C),C.text&&F.push({text:C.text,color:B}),B},A=function(F){var E=F.shades[B(F.shades.length)],C="";for(var A in F.palette)F.palette.hasOwnProperty(A)&&A===E&&(C=F.text?F.palette[A][D(F.text,F.palette[A].length)]:F.palette[A][B(F.palette[A].length)]);return C},B=function(F){return Math.floor(Math.random()*F)},D=function(F,E){var C=murmur.murmur3(F)/1e10;return.1>C&&(C=10*C),Math.floor(C*E)};return{getColor:C}}();

/***/ })

})
//# sourceMappingURL=index.js.cfd9c6f17f7396264484.hot-update.js.map