(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["rcgber"] = factory();
	else
		root["rcgber"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _iconStyle = __webpack_require__(1);

var _iconStyle2 = _interopRequireDefault(_iconStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function rcgber($el) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$icons = options.icons,
      icons = _options$icons === undefined ? ['circle'] : _options$icons,
      _options$size = options.size,
      size = _options$size === undefined ? 30 : _options$size,
      _options$alpha = options.alpha,
      alpha = _options$alpha === undefined ? 0.15 : _options$alpha,
      containerStyle = options.containerStyle;
  var num = options.num;

  num = num.toFixed ? num : getRangeRandom(num.max, num.min);
  var rangeNum = num + 1;
  var lightAlpha = alpha + 0.1;

  if (typeof $el === 'string') $el = document.querySelector($el);

  var $container = document.createElement('div');
  $container.className = 'rcgber-container';
  Object.assign($container.style, containerStyle);

  var iconLength = icons.length;

  for (var i = 1; i < rangeNum; i++) {
    var _getIconOffset = getIconOffset(rangeNum, i),
        top = _getIconOffset.top,
        left = _getIconOffset.left;

    var icon = iconLength === 1 ? icons[0] : icons[Math.floor(Math.random() * iconLength)];
    var iconSize = size.toFixed ? size : getRangeRandom(size.max, size.min);

    $container.appendChild(createIcon({ icon: icon, top: top, left: left, alpha: alpha, lightAlpha: lightAlpha, size: iconSize }));
  }

  $el.insertAdjacentElement('afterBegin', $container);
};

function createIcon(_ref) {
  var icon = _ref.icon,
      top = _ref.top,
      left = _ref.left,
      size = _ref.size,
      alpha = _ref.alpha,
      lightAlpha = _ref.lightAlpha;

  var _getRandomRGB = getRandomRGB(),
      r = _getRandomRGB.r,
      g = _getRandomRGB.g,
      b = _getRandomRGB.b;

  var $icon = document.createElement('span');
  $icon.className = 'rcgber-icon rcgber-icon--' + icon;

  Object.assign($icon.style, {
    top: top + '%',
    left: left + '%',
    color: 'rgba(' + r + ', ' + g + ', ' + b + ', ' + lightAlpha + ')',
    backgroundColor: 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')'
  }, _iconStyle2.default[icon](size));

  return $icon;
}

function getRandomRGB() {
  var r = Math.round(Math.random() * 256);
  var g = Math.round(Math.random() * 256);
  var b = Math.round(Math.random() * 256);
  return { r: r, g: g, b: b };
}

function getIconOffset(num, index) {
  var top = Math.round(Math.random() * 100);
  var left = Math.round(100 / num * index);
  return { top: top, left: left };
}

function getRangeRandom(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  circle: function circle(size) {
    var halfSize = size / 2;
    return { width: size + "px", height: size + "px", marginTop: "-" + halfSize + "px", marginLeft: "-" + halfSize + "px" };
  },
  heart: function heart(size) {
    size = (size / 1.5).toFixed(2);
    var halfSize = size / 2;
    return {
      width: size + "px",
      height: size + "px",
      transform: "translate(-" + halfSize + "px, -" + halfSize + "px) rotate(" + getRandomRotate() + "deg)"
    };
  },
  envelope: function envelope(size) {
    // 弧度计算公式：PI * 角度 / 180
    var halfSize = size / 2;
    var height = halfSize / Math.cos(Math.PI / 6) + 1;
    return {
      width: size + "px",
      height: height + "px",
      transform: "translate(-" + halfSize + "px, -" + height / 2 + "px) rotate(" + getRandomRotate() + "deg)"
    };
  }
};


function getRandomRotate() {
  return Math.round(Math.random() * 360);
}

/***/ })
/******/ ]);
});