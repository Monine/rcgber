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


module.exports = function rcgber($el) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$num = options.num,
      num = _options$num === undefined ? 3 : _options$num,
      _options$size = options.size,
      size = _options$size === undefined ? 30 : _options$size,
      _options$alpha = options.alpha,
      alpha = _options$alpha === undefined ? 0.15 : _options$alpha;

  var spotNum = num.toFixed ? num + 1 : getRangeRandom(num.max, num.min);

  if (typeof $el === 'string') $el = document.querySelector($el);

  var $container = document.createElement('div');
  $container.classList.add('rcgber-container');

  for (var i = 1; i <= spotNum; i++) {
    var _getSpotOffset = getSpotOffset(spotNum, i),
        top = _getSpotOffset.top,
        left = _getSpotOffset.left;

    var spotSize = size.toFixed ? size : getRangeRandom(size.max, size.min);
    $container.appendChild(createSpot({ top: top, left: left, alpha: alpha, size: spotSize }));
  }

  $el.insertAdjacentElement('afterBegin', $container);
};

function createSpot(_ref) {
  var top = _ref.top,
      left = _ref.left,
      size = _ref.size,
      alpha = _ref.alpha;

  var halfSize = size / 2;

  var _getRandomRGB = getRandomRGB(),
      r = _getRandomRGB.r,
      g = _getRandomRGB.g,
      b = _getRandomRGB.b;

  var $spot = document.createElement('span');
  $spot.classList.add('rcgber-spot');

  Object.assign($spot.style, {
    top: top + '%',
    left: left + '%',
    width: size + 'px',
    height: size + 'px',
    marginTop: '-' + halfSize + 'px',
    marginLeft: '-' + halfSize + 'px',
    borderRadius: '50%',
    backgroundColor: 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')'
  });

  return $spot;
}

function getRandomRGB() {
  var r = Math.round(Math.random() * 256);
  var g = Math.round(Math.random() * 256);
  var b = Math.round(Math.random() * 256);
  return { r: r, g: g, b: b };
}

function getSpotOffset(num, index) {
  var top = Math.round(Math.random() * 100);
  var left = Math.round(100 / num * index);
  return { top: top, left: left };
}

function getRangeRandom(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

/***/ })
/******/ ]);
});
