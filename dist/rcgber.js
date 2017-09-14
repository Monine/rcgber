(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Rcgber"] = factory();
	else
		root["Rcgber"] = factory();
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


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rcgber = function Rcgber(options) {
  _classCallCheck(this, Rcgber);

  this.options = Object.assign({
    el: document.body,
    num: 3,
    min: 30,
    max: 50,
    alpha: 0.15
  }, options);
};

Object.assign(Rcgber.prototype, {
  render: function render() {
    var num = this.options.num;

    var $container = document.createElement('div');

    Object.assign($container.style, {
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    });

    for (var i = 0; i < num; i++) {
      var alpha = this.options.alpha;

      var size = Math.round(Math.random() * (this.options.max - this.options.min) + this.options.min);

      var _getPosition = getPosition(num, i + 1),
          top = _getPosition.top,
          left = _getPosition.left;

      $container.appendChild(new Spot({ top: top, left: left, size: size, alpha: alpha }));
    }

    this.options.el.appendChild($container);
  }
});

var Spot = function Spot(options) {
  _classCallCheck(this, Spot);

  this.options = Object.assign({
    top: '50%',
    left: '50%',
    size: 30,
    alpha: .15
  }, options);

  return this.makeSpot();
};

Object.assign(Spot.prototype, {
  makeSpot: function makeSpot() {
    var $spot = document.createElement('span');
    var _options = this.options,
        top = _options.top,
        left = _options.left,
        size = _options.size,
        alpha = _options.alpha;

    var halfSize = size / 2;

    var _getRandomRGB = getRandomRGB(),
        R = _getRandomRGB.R,
        G = _getRandomRGB.G,
        B = _getRandomRGB.B;

    Object.assign($spot.style, {
      position: 'absolute',
      top: top + '%',
      left: left + '%',
      width: size + 'px',
      height: size + 'px',
      marginTop: '-' + halfSize + 'px',
      marginLeft: '-' + halfSize + 'px',
      borderRadius: '50%',
      backgroundColor: 'rgba(' + R + ', ' + G + ', ' + B + ', ' + alpha + ')'
    });

    return $spot;
  }
});

function getRandomRGB() {
  var R = Math.round(Math.random() * 256);
  var G = Math.round(Math.random() * 256);
  var B = Math.round(Math.random() * 256);

  return { R: R, G: G, B: B };
}

function getPosition(num, index) {
  var top = Math.round(Math.random() * 100);
  var left = Math.round(100 / (num + 1) * index);

  return { top: top, left: left };
}

module.exports = Rcgber;

/***/ })
/******/ ]);
});
