/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _game_animation = __webpack_require__(1);
	
	var _game_animation2 = _interopRequireDefault(_game_animation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(15);
	
	// import GameAnimation from './test_game_view.js';
	
	
	document.addEventListener('DOMContentLoaded', function () {
	  var canvas = document.getElementById("my-canvas");
	  var ctx = canvas.getContext('2d');
	
	  new _game_animation2.default(canvas, ctx);
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _animejs = __webpack_require__(2);
	
	var _animejs2 = _interopRequireDefault(_animejs);
	
	var _options = __webpack_require__(3);
	
	var _utils = __webpack_require__(4);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _ripple = __webpack_require__(5);
	
	var _ripple2 = _interopRequireDefault(_ripple);
	
	var _circle = __webpack_require__(6);
	
	var _circle2 = _interopRequireDefault(_circle);
	
	var _disappearing_circle = __webpack_require__(7);
	
	var _disappearing_circle2 = _interopRequireDefault(_disappearing_circle);
	
	var _half_circle = __webpack_require__(8);
	
	var _half_circle2 = _interopRequireDefault(_half_circle);
	
	var _box = __webpack_require__(9);
	
	var _box2 = _interopRequireDefault(_box);
	
	var _tri_rectangle = __webpack_require__(10);
	
	var _tri_rectangle2 = _interopRequireDefault(_tri_rectangle);
	
	var _rectangle = __webpack_require__(11);
	
	var _rectangle2 = _interopRequireDefault(_rectangle);
	
	var _screen = __webpack_require__(12);
	
	var _screen2 = _interopRequireDefault(_screen);
	
	var _line = __webpack_require__(13);
	
	var _line2 = _interopRequireDefault(_line);
	
	var _word = __webpack_require__(14);
	
	var _word2 = _interopRequireDefault(_word);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var GameAnimation = function GameAnimation(canvas, ctx) {
	  var animations = [];
	
	  var setCanvasSize = function setCanvasSize() {
	    canvas.width = window.innerWidth;
	    canvas.height = window.innerHeight;
	  };
	
	  var distance = canvas.width;
	
	  var mainLoopAnimation = (0, _animejs2.default)({
	    duration: Infinity,
	    update: function update() {
	      ctx.clearRect(0, 0, canvas.width, canvas.height);
	      animations.forEach(function (anim) {
	        anim.animatables.forEach(function (animatable) {
	          animatable.target.draw(ctx);
	        });
	      });
	    }
	  });
	
	  var removeAnimation = function removeAnimation(animation) {
	    var index = animations.indexOf(animation);
	    if (index > -1) {
	      animations.splice(index, 1);
	    }
	  };
	
	  // Circle
	  var createCircles = function createCircles(x, y, options) {
	    var circles = [];
	    for (var i = 0; i < options.numCircles; i++) {
	      var cir = new _circle2.default(x, y, options);
	      circles.push(cir);
	    }
	    return circles;
	  };
	
	  var animateCircle = function animateCircle(options) {
	    setCanvasSize();
	    var x = Math.random() * canvas.width;
	    var y = Math.random() * canvas.height;
	    var circles = createCircles(x, y, options);
	
	    var circlesAnimation = (0, _animejs2.default)({
	      targets: circles,
	      x: function x(cir) {
	        return cir.x + _animejs2.default.random(-distance, distance);
	      },
	      y: function y(cir) {
	        return cir.y + _animejs2.default.random(-distance, distance);
	      },
	      radius: options.endRadius,
	      duration: function duration() {
	        return _animejs2.default.random.apply(_animejs2.default, _toConsumableArray(options.duration));
	      },
	      easing: 'easeOutExpo',
	      complete: removeAnimation
	    });
	
	    animations.push(circlesAnimation);
	  };
	
	  var animateExplosions = function animateExplosions(options) {
	    setCanvasSize();
	    var x = Math.random() * canvas.width;
	    var y = Math.random() * canvas.height;
	    var circles = createCircles(x, y, options);
	    var ripple = new _ripple2.default(x, y);
	
	    var circlesAnimation = (0, _animejs2.default)({
	      targets: circles,
	      x: function x(cir) {
	        return cir.x + _animejs2.default.random(-distance, distance);
	      },
	      y: function y(cir) {
	        return cir.y + _animejs2.default.random(-distance, distance);
	      },
	      radius: options.endRadius,
	      duration: function duration() {
	        return _animejs2.default.random.apply(_animejs2.default, _toConsumableArray(options.duration));
	      },
	      easing: 'easeOutExpo',
	      complete: removeAnimation
	    });
	
	    // Ripple - circle that is only stroked
	    var rippleAnimation = (0, _animejs2.default)({
	      targets: ripple,
	      radius: function radius() {
	        return canvas.width + 200;
	      },
	      lineWidth: 0,
	      // alpha: {
	      //   value: 0,
	      //   easing: 'linear',
	      //   duration: function () { return 80000; },
	      // },
	      duration: function duration() {
	        return _animejs2.default.random(5000, 7000);
	      },
	      easing: 'easeOutExpo',
	      complete: removeAnimation
	    });
	
	    animations.push(circlesAnimation);
	    animations.push(rippleAnimation);
	  };
	
	  var animateDisappearCircle = function animateDisappearCircle(options) {
	    setCanvasSize();
	    var x = canvas.width * (1 / 2),
	        y = canvas.height * (1 / 2);
	    var randIdx = Math.floor(Math.random() * options.x.length);
	    var x2 = x + options.x[randIdx],
	        y2 = y + options.y[randIdx];
	    var radius1 = options.radius[0],
	        radius2 = options.radius[1];
	    var color1 = options.color[0],
	        color2 = options.color[1];
	    var circle1 = new _disappearing_circle2.default(x, y, radius1, color1);
	    var circle2 = new _disappearing_circle2.default(x2, y2, radius2, color2);
	    var circle1Animation = (0, _animejs2.default)({
	      targets: circle1,
	      duration: options.duration,
	      easing: 'easeOutExpo',
	      complete: removeAnimation
	    });
	    var circle2Animation = (0, _animejs2.default)({
	      targets: circle2,
	      x: x,
	      y: y,
	      delay: 200,
	      duration: options.duration,
	      easing: 'easeOutExpo',
	      complete: removeAnimation
	    });
	    animations.push(circle1Animation);
	    animations.push(circle2Animation);
	  };
	
	  var animateHalfCircles = function animateHalfCircles(options) {
	    setCanvasSize();
	    var x = canvas.width * (1 / 2),
	        y = canvas.height * (1 / 2);
	    var topHalf = new _half_circle2.default(x, y, true, options);
	    var bottomHalf = new _half_circle2.default(x, y, false, options);
	    var topHalfAnimation = (0, _animejs2.default)({
	      targets: topHalf,
	      x: x + 250,
	      // y: y + 50,
	      color: '#fff',
	      duration: options.duration,
	      easing: 'easeOutExpo',
	      complete: removeAnimation
	    });
	    var bottomHalfAnimation = (0, _animejs2.default)({
	      targets: bottomHalf,
	      x: x - 250,
	      // y: y - 50,
	      duration: options.duration,
	      easing: 'easeOutExpo',
	      complete: removeAnimation
	    });
	    animations.push(topHalfAnimation);
	    animations.push(bottomHalfAnimation);
	  };
	
	  var createHundredCircles = function createHundredCircles(options) {
	    var circles = [];
	    var xArr = xLineBoxes(options);
	    var yArr = yLineBoxes(options);
	    for (var i = 0; i < options.numCircles; i++) {
	      for (var j = 0; j < options.numCircles; j++) {
	        var x = xArr[i];
	        var y = yArr[j];
	        var circle = new _circle2.default(x, y, options);
	        circles.push(circle);
	      }
	    }
	    return circles;
	  };
	
	  var animateHundredCircles = function animateHundredCircles(options) {
	    setCanvasSize();
	    var circles = createHundredCircles(options);
	    var hundredCirclesAnimation = (0, _animejs2.default)({
	      targets: circles,
	      x: function x() {
	        return _animejs2.default.random(canvas.width * (1 / 7), canvas.width * (6 / 7));
	      },
	      y: function y() {
	        return _animejs2.default.random(canvas.height * (1 / 7), canvas.height * (6 / 7));
	      },
	      radius: options.endRadius,
	      // delay: function (el, index) { return index * 10; },
	      duration: options.duration,
	      easing: 'easeOutExpo',
	      complete: removeAnimation
	    });
	    animations.push(hundredCirclesAnimation);
	  };
	
	  // Box
	  var createBoxes = function createBoxes(x, yArr, options) {
	    var boxes = [];
	    for (var i = 0; i < options.numBoxes; i++) {
	      var y = yArr[i];
	      var box = new _box2.default(x, y, options);
	      boxes.push(box);
	    }
	    return boxes;
	  };
	
	  var animateBox = function animateBox(options) {
	    setCanvasSize();
	    // let x = canvas.width * (1/8) - (options.width/2);
	    var x = canvas.width * (1 / 8);
	    var yArr = [canvas.height * (1 / 4) - 50, canvas.height * (1 / 2) - 50, canvas.height * (3 / 4) - 50];
	    var boxes = createBoxes(x, yArr, options);
	
	    var boxAnimation = (0, _animejs2.default)({
	      targets: boxes,
	      x: function x() {
	        return canvas.width * (7 / 8) - options.endWidth;
	      },
	      width: options.endWidth,
	      delay: options.delay,
	      duration: function duration() {
	        return _animejs2.default.random.apply(_animejs2.default, _toConsumableArray(options.duration));
	      },
	      easing: 'easeOutExpo',
	      complete: removeAnimation
	    });
	
	    animations.push(boxAnimation);
	  };
	
	  var animateSevenBoxes = function animateSevenBoxes(options) {
	    setCanvasSize();
	    var x = canvas.width * (1 / 8);
	    var yArr = [canvas.height * (2 / 10) - options.height / 2, canvas.height * (3 / 10) - options.height / 2, canvas.height * (4 / 10) - options.height / 2, canvas.height * (5 / 10) - options.height / 2, canvas.height * (6 / 10) - options.height / 2, canvas.height * (7 / 10) - options.height / 2, canvas.height * (8 / 10) - options.height / 2];
	    var sevenBoxes = createBoxes(x, yArr, options);
	
	    var boxAnimation = (0, _animejs2.default)({
	      targets: sevenBoxes,
	      x: function x() {
	        return canvas.width * (7 / 8);
	      },
	      width: options.endWidth,
	      delay: options.delay,
	      duration: options.duration,
	      easing: 'easeOutExpo',
	      complete: removeAnimation
	    });
	
	    animations.push(boxAnimation);
	  };
	
	  var animateSpine = function animateSpine(options) {
	    setCanvasSize();
	    var x = canvas.width * (1 / 2) - options.width / 2;
	    var yArr = [canvas.height * (1 / 12) - options.height / 2, canvas.height * (2 / 12) - options.height / 2, canvas.height * (3 / 12) - options.height / 2, canvas.height * (4 / 12) - options.height / 2, canvas.height * (5 / 12) - options.height / 2, canvas.height * (6 / 12) - options.height / 2, canvas.height * (7 / 12) - options.height / 2, canvas.height * (8 / 12) - options.height / 2, canvas.height * (9 / 12) - options.height / 2, canvas.height * (10 / 12) - options.height / 2, canvas.height * (11 / 12) - options.height / 2, canvas.height * (11 / 12) - options.height / 2, canvas.height * (10 / 12) - options.height / 2, canvas.height * (9 / 12) - options.height / 2, canvas.height * (8 / 12) - options.height / 2, canvas.height * (7 / 12) - options.height / 2, canvas.height * (6 / 12) - options.height / 2, canvas.height * (5 / 12) - options.height / 2, canvas.height * (4 / 12) - options.height / 2, canvas.height * (3 / 12) - options.height / 2, canvas.height * (2 / 12) - options.height / 2, canvas.height * (1 / 12) - options.height / 2];
	    var boxes = createBoxes(x, yArr, options);
	
	    var boxAnimation = (0, _animejs2.default)({
	      targets: boxes,
	      x: function x(el, index) {
	        if (_utils2.default.isEven(index)) {
	          return canvas.width * (7 / 8);
	        } else {
	          return canvas.width * (1 / 8);
	        }
	      },
	      width: options.endWidth,
	      delay: function delay(el, index) {
	        return index * 40;
	      },
	      duration: options.duration,
	      easing: 'easeOutExpo',
	      complete: removeAnimation
	    });
	
	    animations.push(boxAnimation);
	  };
	
	  var xLineBoxes = function xLineBoxes(options) {
	    var xArr = [canvas.width * (1 / 11) - options.width / 2, canvas.width * (2 / 11) - options.width / 2, canvas.width * (3 / 11) - options.width / 2, canvas.width * (4 / 11) - options.width / 2, canvas.width * (5 / 11) - options.width / 2, canvas.width * (6 / 11) - options.width / 2, canvas.width * (7 / 11) - options.width / 2, canvas.width * (8 / 11) - options.width / 2, canvas.width * (9 / 11) - options.width / 2, canvas.width * (10 / 11) - options.width / 2];
	    return xArr;
	  };
	
	  var yLineBoxes = function yLineBoxes(options) {
	    var yArr = [canvas.height * (1 / 11) - options.width / 2, canvas.height * (2 / 11) - options.width / 2, canvas.height * (3 / 11) - options.width / 2, canvas.height * (4 / 11) - options.width / 2, canvas.height * (5 / 11) - options.width / 2, canvas.height * (6 / 11) - options.width / 2, canvas.height * (7 / 11) - options.width / 2, canvas.height * (8 / 11) - options.width / 2, canvas.height * (9 / 11) - options.width / 2, canvas.height * (10 / 11) - options.width / 2];
	    return yArr;
	  };
	
	  var animateLineBoxLR = function animateLineBoxLR(direction, options) {
	    setCanvasSize();
	    var yArr = yLineBoxes(options);
	
	    if (direction === "left") {
	      var x = canvas.width * (9 / 10);
	      var boxes = createBoxes(x, yArr, options);
	      var lineBoxAnimation = (0, _animejs2.default)({
	        targets: boxes,
	        x: function x() {
	          return canvas.width * (1 / 10);
	        },
	        delay: function delay(el, index) {
	          return index * 100;
	        },
	        duration: function duration() {
	          return _animejs2.default.random.apply(_animejs2.default, _toConsumableArray(options.duration));
	        },
	        width: options.endWidth,
	        height: options.endHeight,
	        easing: 'easeOutExpo',
	        complete: removeAnimation
	      });
	
	      animations.push(lineBoxAnimation);
	    } else if (direction === "right") {
	      var _x = canvas.width * (1 / 10);
	      var _boxes = createBoxes(_x, yArr, options);
	      var lineBoxRightAnimation = (0, _animejs2.default)({
	        targets: _boxes,
	        x: function x() {
	          return canvas.width * (9 / 10);
	        },
	        delay: function delay(el, index) {
	          return index * 100;
	        },
	        duration: function duration() {
	          return _animejs2.default.random.apply(_animejs2.default, _toConsumableArray(options.duration));
	        },
	        width: options.endWidth,
	        height: options.endHeight,
	        easing: 'easeOutExpo',
	        complete: removeAnimation
	      });
	
	      animations.push(lineBoxRightAnimation);
	    }
	  };
	
	  var createLineBoxUD = function createLineBoxUD(xArr, y, options) {
	    var boxes = [];
	    for (var i = 0; i < options.numBoxes; i++) {
	      var x = xArr[i];
	      var box = new _box2.default(x, y, options);
	      boxes.push(box);
	    }
	    return boxes;
	  };
	
	  var animateLineBoxUD = function animateLineBoxUD(direction, options) {
	    setCanvasSize();
	    var xArr = xLineBoxes(options);
	    if (direction === "up") {
	      var y = canvas.height * (1 / 10);
	      var boxes = createLineBoxUD(xArr, y, options);
	      var lineBoxUpAnimation = (0, _animejs2.default)({
	        targets: boxes,
	        y: function y() {
	          return canvas.height * (9 / 10);
	        },
	        delay: function delay(el, index) {
	          return index * 100;
	        },
	        duration: function duration() {
	          return _animejs2.default.random.apply(_animejs2.default, _toConsumableArray(options.duration));
	        },
	        width: options.endWidth,
	        height: options.endHeight,
	        easing: 'easeOutExpo',
	        complete: removeAnimation
	      });
	
	      animations.push(lineBoxUpAnimation);
	    } else if (direction === "down") {
	      var _y = canvas.height * (9 / 10);
	      var _boxes2 = createLineBoxUD(xArr, _y, options);
	      var lineBoxDownAnimation = (0, _animejs2.default)({
	        targets: _boxes2,
	        y: function y() {
	          return canvas.height * (1 / 10);
	        },
	        delay: function delay(el, index) {
	          return index * 100;
	        },
	        duration: function duration() {
	          return _animejs2.default.random.apply(_animejs2.default, _toConsumableArray(options.duration));
	        },
	        width: options.endWidth,
	        height: options.endHeight,
	        easing: 'easeOutExpo',
	        complete: removeAnimation
	      });
	
	      animations.push(lineBoxDownAnimation);
	    }
	  };
	  // have boxes that say in the same place but mapped across the whole canvas, grow or shrink in place
	  var createHundredBoxes = function createHundredBoxes(options) {
	    var boxes = [];
	    var xArr = xLineBoxes(options);
	    var yArr = yLineBoxes(options);
	    for (var i = 0; i < options.numBoxes; i++) {
	      for (var j = 0; j < options.numBoxes; j++) {
	        var x = xArr[i] - options.endWidth / 2;
	        var y = yArr[j] - options.endHeight / 2;
	        var box = new _box2.default(x, y, options);
	        boxes.push(box);
	      }
	    }
	    return boxes;
	  };
	
	  var animateHundredBoxes = function animateHundredBoxes(options) {
	    setCanvasSize();
	    var boxes = createHundredBoxes(options);
	    var hundredBoxesAnimation = (0, _animejs2.default)({
	      targets: boxes,
	      width: options.endWidth,
	      height: options.endHeight,
	      // delay: function (el, index) { return index * 10; },
	      duration: options.duration,
	      easing: 'easeOutExpo',
	      complete: removeAnimation
	    });
	    animations.push(hundredBoxesAnimation);
	  };
	
	  var animateBigBox = function animateBigBox(options) {
	    setCanvasSize();
	    var xIdx = Math.floor(Math.random() * options.startX.length);
	    var yIdx = Math.floor(Math.random() * options.startY.length);
	    var x = options.startX[xIdx] * canvas.width - options.width / 2;
	    var yArr = [canvas.height * yIdx + options.startY[yIdx]];
	    var bigBox = createBoxes(x, yArr, options);
	
	    var bigBoxAnimation = (0, _animejs2.default)({
	      targets: bigBox,
	      y: canvas.height * (1 / 2) - options.height / 2,
	      duration: options.duration,
	      easing: 'easeOutExpo',
	      complete: removeAnimation
	    });
	
	    animations.push(bigBoxAnimation);
	  };
	
	  // Full screen animations
	  var animateScreenFlash = function animateScreenFlash(options) {
	    setCanvasSize();
	    var x = 0;
	    var y = 0;
	    var width = canvas.width;
	    var height = canvas.height;
	    var screenFlash = new _screen2.default(x, y, width, height, options);
	
	    var screenFlashAnimation = (0, _animejs2.default)({
	      targets: screenFlash,
	      duration: options.duration,
	      easing: 'easeOutExpo',
	      complete: removeAnimation
	    });
	    animations.push(screenFlashAnimation);
	  };
	
	  var animateScreenSwipeLR = function animateScreenSwipeLR(direction, options) {
	    setCanvasSize();
	    var x = 0,
	        y = 0,
	        width = canvas.width,
	        height = canvas.height;
	    var screen = new _screen2.default(x, y, width, height, options);
	
	    if (direction === 0) {
	      var screenSwipeLeftAnimation = (0, _animejs2.default)({
	        targets: screen,
	        x: canvas.width,
	        delay: options.delay,
	        duration: options.duration,
	        easing: 'easeOutExpo',
	        complete: removeAnimation
	      });
	      animations.push(screenSwipeLeftAnimation);
	    } else {
	      //right
	      var _screenSwipeLeftAnimation = (0, _animejs2.default)({
	        targets: screen,
	        width: 0,
	        delay: options.delay,
	        duration: options.duration,
	        easing: 'easeOutExpo',
	        complete: removeAnimation
	      });
	      animations.push(_screenSwipeLeftAnimation);
	    }
	  };
	
	  var animateScreenSwipeUD = function animateScreenSwipeUD(direction, options) {
	    setCanvasSize();
	    var x = 0,
	        y = 0,
	        width = canvas.width,
	        height = canvas.height;
	    var screen = new _screen2.default(x, y, width, height, options);
	
	    if (direction === 0) {
	      var screenSwipeLeftAnimation = (0, _animejs2.default)({
	        targets: screen,
	        y: canvas.height,
	        delay: options.delay,
	        duration: options.duration,
	        easing: 'easeOutExpo',
	        complete: removeAnimation
	      });
	      animations.push(screenSwipeLeftAnimation);
	    } else {
	      //right
	      var _screenSwipeLeftAnimation2 = (0, _animejs2.default)({
	        targets: screen,
	        height: 0,
	        delay: options.delay,
	        duration: options.duration,
	        easing: 'easeOutExpo',
	        complete: removeAnimation
	      });
	      animations.push(_screenSwipeLeftAnimation2);
	    }
	  };
	
	  var createRipples = function createRipples(x, y, options) {
	    var ripples = [];
	    for (var i = 0; i < options.numRipples; i++) {
	      var ripple = new _ripple2.default(x, y, options);
	      ripples.push(ripple);
	    }
	    return ripples;
	  };
	
	  var animateRipple = function animateRipple(options) {
	    setCanvasSize();
	    var x = canvas.width * (1 / 2);
	    var y = canvas.height * (1 / 2);
	    var ripples = createRipples(x, y, options);
	    var ripplesAnimation = (0, _animejs2.default)({
	      targets: ripples,
	      radius: options.endRadius,
	      delay: function delay(el, index) {
	        return index * 100;
	      },
	      duration: options.duration,
	      easing: 'easeOutExpo',
	      complete: removeAnimation
	    });
	    animations.push(ripplesAnimation);
	  };
	
	  var createConfidedRipples = function createConfidedRipples(options) {
	    var ripples = [];
	    for (var i = 0; i < options.numRipples; i++) {
	      var x = _animejs2.default.random(canvas.width * (1 / 4), canvas.width * (3 / 4));
	      var y = _animejs2.default.random(canvas.height * (1 / 4), canvas.height * (3 / 4));
	      var ripple = new _ripple2.default(x, y, options);
	      ripples.push(ripple);
	    }
	    return ripples;
	  };
	
	  var animateFiveFingerRipple = function animateFiveFingerRipple(options) {
	    setCanvasSize();
	    var ripples = createConfidedRipples(options);
	    var fiveFingerRippleAnimation = (0, _animejs2.default)({
	      targets: ripples,
	      radius: canvas.width + 200,
	      delay: function delay(el, index) {
	        return index * 150;
	      },
	      duration: options.duration,
	      easing: 'easeOutExpo',
	      complete: removeAnimation
	    });
	    animations.push(fiveFingerRippleAnimation);
	  };
	
	  // Rectangle
	  var animateTriRectangle = function animateTriRectangle(options) {
	    setCanvasSize();
	    var x = canvas.width * (1 / 4) - 25;
	    var y = canvas.height * (1 / 3) - 25;
	    var triRects = new _tri_rectangle2.default(x, y, options);
	    var triRectsAnimation = (0, _animejs2.default)({
	      targets: triRects,
	      x: function x() {
	        return canvas.width * (3 / 4) - 25;
	      },
	      y: function y() {
	        return canvas.height * (2 / 3) - 25;
	      },
	      duration: options.duration,
	      easing: 'easeOutExpo',
	      complete: removeAnimation
	    });
	
	    var x2 = canvas.width * (3 / 4) + 25;
	    var y2 = canvas.height * (1 / 3) - 25;
	    var triRects2 = new _tri_rectangle2.default(x2, y2, options);
	    var triRectsAnimation2 = (0, _animejs2.default)({
	      targets: triRects2,
	      x: function x() {
	        return canvas.width * (1 / 4) - 25;
	      },
	      y: function y() {
	        return canvas.height * (2 / 3) - 25;
	      },
	      duration: options.duration,
	      easing: 'easeOutExpo',
	      complete: removeAnimation
	    });
	
	    animations.push(triRectsAnimation);
	    animations.push(triRectsAnimation2);
	  };
	
	  var createYes = function createYes(options) {
	    var words = [];
	    for (var i = 0; i < options.numWords; i++) {
	      var x = _animejs2.default.random(canvas.width * (1 / 4), canvas.width * (3 / 4));
	      var y = _animejs2.default.random(canvas.height * (1 / 4), canvas.height * (3 / 4));
	      var word = new _word2.default(x, y, options);
	      words.push(word);
	    }
	    return words;
	  };
	
	  // note: use a callback if you want each el to have a different end X and end Y
	  var animateYes = function animateYes(options) {
	    setCanvasSize();
	    var words = createYes(options);
	    var wordAnimation = (0, _animejs2.default)({
	      targets: words,
	      font: function font() {
	        var endFontIdx = Math.floor(Math.random() * options.endFont.length);
	        return options.endFont[endFontIdx];
	      },
	      x: function x() {
	        return _animejs2.default.random(canvas.width * (1 / 7), canvas.width * (6 / 7));
	      },
	      y: function y() {
	        return _animejs2.default.random(canvas.height * (1 / 7), canvas.height * (6 / 7));
	      },
	      delay: function delay(el, index) {
	        return index * 100;
	      },
	      duration: options.duration,
	      easing: 'easeOutExpo',
	      complete: removeAnimation
	    });
	    animations.push(wordAnimation);
	  };
	
	  var createLines = function createLines(x1, y1, x2, y2, options) {
	    var lines = [];
	    for (var i = 0; i < options.numLines; i++) {
	      var line = new _line2.default(x1, y1, x2, y2, options);
	      lines.push(line);
	    }
	    return lines;
	  };
	
	  var animateLine = function animateLine(options) {
	    setCanvasSize();
	    var x1 = 100,
	        y1 = 100;
	    var x2 = 300,
	        y2 = 300;
	    var lines = createLines(x1, y1, x2, y2, options);
	    var lineAnimation = (0, _animejs2.default)({
	      targets: lines,
	      duration: options.duration,
	      easing: 'easeOutExpo',
	      complete: removeAnimation
	    });
	  };
	
	  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
	  document.addEventListener('keydown', function (e) {
	    var key = e.key.toLowerCase(); //handles accidental caps lock
	    if (key === "i") {
	      animateBox(_options.objOptions[key]);
	    } else if (key === "u") {
	      animateSevenBoxes(_options.objOptions[key]);
	    } else if (key === "t") {
	      animateBigBox(_options.objOptions[key]);
	    } else if (key === "v") {
	      animateLineBoxLR("left", _options.objOptions[key]);
	    } else if (key === "r") {
	      animateLineBoxLR("right", _options.objOptions[key]);
	    } else if (key === "z") {
	      animateLineBoxUD("up", _options.objOptions[key]);
	    } else if (key === "c") {
	      animateLineBoxUD("down", _options.objOptions[key]);
	    } else if (key === "q") {
	      animateScreenFlash(_options.objOptions[key]);
	    } else if (key === "o") {
	      var direction = Math.floor(Math.random() * 2);
	      animateScreenSwipeLR(direction, _options.objOptions[key]);
	    } else if (key === "p") {
	      var _direction = Math.floor(Math.random() * 2);
	      animateScreenSwipeUD(_direction, _options.objOptions[key]);
	    } else if (key === "m") {
	      animateRipple(_options.objOptions[key]);
	    } else if (key === "f") {
	      animateFiveFingerRipple(_options.objOptions[key]);
	    } else if (key === "g") {
	      animateDisappearCircle(_options.objOptions[key]);
	    } else if (key === "j") {
	      animateHalfCircles(_options.objOptions[key]);
	    } else if (key === "s") {
	      animateHundredBoxes(_options.objOptions[key]);
	    } else if (key === "d") {
	      animateHundredCircles(_options.objOptions[key]);
	    } else if (key === "h" || key === "k" || key === "l") {
	      animateExplosions(_options.objOptions[key]);
	    } else if (key === "y") {
	      animateYes(_options.objOptions[key]);
	    } else if (key === "b") {
	      animateSpine(_options.objOptions[key]);
	    } else if (Object.keys(_options.objOptions).indexOf(key) > -1) {
	      animateCircle(_options.objOptions[key]);
	    }
	  }, false);
	
	  window.addEventListener('resize', setCanvasSize, false);
	};
	
	exports.default = GameAnimation;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Anime v1.1.1
	 * http://anime-js.com
	 * JavaScript animation engine
	 * Copyright (c) 2016 Julian Garnier
	 * http://juliangarnier.com
	 * Released under the MIT license
	 */
	
	(function (root, factory) {
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module === 'object' && module.exports) {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    // Browser globals (root is window)
	    root.anime = factory();
	  }
	}(this, function () {
	
	  var version = '1.1.1';
	
	  // Defaults
	
	  var defaultSettings = {
	    duration: 1000,
	    delay: 0,
	    loop: false,
	    autoplay: true,
	    direction: 'normal',
	    easing: 'easeOutElastic',
	    elasticity: 400,
	    round: false,
	    begin: undefined,
	    update: undefined,
	    complete: undefined
	  }
	
	  // Transforms
	
	  var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skewX', 'skewY'];
	  var transform, transformStr = 'transform';
	
	  // Utils
	
	  var is = {
	    arr: function(a) { return Array.isArray(a) },
	    obj: function(a) { return Object.prototype.toString.call(a).indexOf('Object') > -1 },
	    svg: function(a) { return a instanceof SVGElement },
	    dom: function(a) { return a.nodeType || is.svg(a) },
	    num: function(a) { return !isNaN(parseInt(a)) },
	    str: function(a) { return typeof a === 'string' },
	    fnc: function(a) { return typeof a === 'function' },
	    und: function(a) { return typeof a === 'undefined' },
	    nul: function(a) { return typeof a === 'null' },
	    hex: function(a) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a) },
	    rgb: function(a) { return /^rgb/.test(a) },
	    hsl: function(a) { return /^hsl/.test(a) },
	    col: function(a) { return (is.hex(a) || is.rgb(a) || is.hsl(a)) }
	  }
	
	  // Easings functions adapted from http://jqueryui.com/
	
	  var easings = (function() {
	    var eases = {};
	    var names = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];
	    var functions = {
	      Sine: function(t) { return 1 - Math.cos( t * Math.PI / 2 ); },
	      Circ: function(t) { return 1 - Math.sqrt( 1 - t * t ); },
	      Elastic: function(t, m) {
	        if( t === 0 || t === 1 ) return t;
	        var p = (1 - Math.min(m, 998) / 1000), st = t / 1, st1 = st - 1, s = p / ( 2 * Math.PI ) * Math.asin( 1 );
	        return -( Math.pow( 2, 10 * st1 ) * Math.sin( ( st1 - s ) * ( 2 * Math.PI ) / p ) );
	      },
	      Back: function(t) { return t * t * ( 3 * t - 2 ); },
	      Bounce: function(t) {
	        var pow2, bounce = 4;
	        while ( t < ( ( pow2 = Math.pow( 2, --bounce ) ) - 1 ) / 11 ) {}
	        return 1 / Math.pow( 4, 3 - bounce ) - 7.5625 * Math.pow( ( pow2 * 3 - 2 ) / 22 - t, 2 );
	      }
	    }
	    names.forEach(function(name, i) {
	      functions[name] = function(t) {
	        return Math.pow( t, i + 2 );
	      }
	    });
	    Object.keys(functions).forEach(function(name) {
	      var easeIn = functions[name];
	      eases['easeIn' + name] = easeIn;
	      eases['easeOut' + name] = function(t, m) { return 1 - easeIn(1 - t, m); };
	      eases['easeInOut' + name] = function(t, m) { return t < 0.5 ? easeIn(t * 2, m) / 2 : 1 - easeIn(t * -2 + 2, m) / 2; };
	      eases['easeOutIn' + name] = function(t, m) { return t < 0.5 ? (1 - easeIn(1 - 2 * t, m)) / 2 : (easeIn(t * 2 - 1, m) + 1) / 2; };
	    });
	    eases.linear = function(t) { return t; };
	    return eases;
	  })();
	
	  // Strings
	
	  var numberToString = function(val) {
	    return (is.str(val)) ? val : val + '';
	  }
	
	  var stringToHyphens = function(str) {
	    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	  }
	
	  var selectString = function(str) {
	    if (is.col(str)) return false;
	    try {
	      var nodes = document.querySelectorAll(str);
	      return nodes;
	    } catch(e) {
	      return false;
	    }
	  }
	
	  // Numbers
	
	  var random = function(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	  }
	
	  // Arrays
	
	  var flattenArray = function(arr) {
	    return arr.reduce(function(a, b) {
	      return a.concat(is.arr(b) ? flattenArray(b) : b);
	    }, []);
	  }
	
	  var toArray = function(o) {
	    if (is.arr(o)) return o;
	    if (is.str(o)) o = selectString(o) || o;
	    if (o instanceof NodeList || o instanceof HTMLCollection) return [].slice.call(o);
	    return [o];
	  }
	
	  var arrayContains = function(arr, val) {
	    return arr.some(function(a) { return a === val; });
	  }
	
	  var groupArrayByProps = function(arr, propsArr) {
	    var groups = {};
	    arr.forEach(function(o) {
	      var group = JSON.stringify(propsArr.map(function(p) { return o[p]; }));
	      groups[group] = groups[group] || [];
	      groups[group].push(o);
	    });
	    return Object.keys(groups).map(function(group) {
	      return groups[group];
	    });
	  }
	
	  var removeArrayDuplicates = function(arr) {
	    return arr.filter(function(item, pos, self) {
	      return self.indexOf(item) === pos;
	    });
	  }
	
	  // Objects
	
	  var cloneObject = function(o) {
	    var newObject = {};
	    for (var p in o) newObject[p] = o[p];
	    return newObject;
	  }
	
	  var mergeObjects = function(o1, o2) {
	    for (var p in o2) o1[p] = !is.und(o1[p]) ? o1[p] : o2[p];
	    return o1;
	  }
	
	  // Colors
	
	  var hexToRgb = function(hex) {
	    var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	    var hex = hex.replace(rgx, function(m, r, g, b) { return r + r + g + g + b + b; });
	    var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	    var r = parseInt(rgb[1], 16);
	    var g = parseInt(rgb[2], 16);
	    var b = parseInt(rgb[3], 16);
	    return 'rgb(' + r + ',' + g + ',' + b + ')';
	  }
	
	  var hslToRgb = function(hsl) {
	    var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hsl);
	    var h = parseInt(hsl[1]) / 360;
	    var s = parseInt(hsl[2]) / 100;
	    var l = parseInt(hsl[3]) / 100;
	    var hue2rgb = function(p, q, t) {
	      if (t < 0) t += 1;
	      if (t > 1) t -= 1;
	      if (t < 1/6) return p + (q - p) * 6 * t;
	      if (t < 1/2) return q;
	      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
	      return p;
	    }
	    var r, g, b;
	    if (s == 0) {
	      r = g = b = l;
	    } else {
	      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
	      var p = 2 * l - q;
	      r = hue2rgb(p, q, h + 1/3);
	      g = hue2rgb(p, q, h);
	      b = hue2rgb(p, q, h - 1/3);
	    }
	    return 'rgb(' + r * 255 + ',' + g * 255 + ',' + b * 255 + ')';
	  }
	
	  var colorToRgb = function(val) {
	    if (is.rgb(val)) return val;
	    if (is.hex(val)) return hexToRgb(val);
	    if (is.hsl(val)) return hslToRgb(val);
	  }
	
	  // Units
	
	  var getUnit = function(val) {
	    return /([\+\-]?[0-9|auto\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg)?/.exec(val)[2];
	  }
	
	  var addDefaultTransformUnit = function(prop, val, intialVal) {
	    if (getUnit(val)) return val;
	    if (prop.indexOf('translate') > -1) return getUnit(intialVal) ? val + getUnit(intialVal) : val + 'px';
	    if (prop.indexOf('rotate') > -1 || prop.indexOf('skew') > -1) return val + 'deg';
	    return val;
	  }
	
	  // Values
	
	  var getCSSValue = function(el, prop) {
	    // First check if prop is a valid CSS property
	    if (prop in el.style) {
	      // Then return the property value or fallback to '0' when getPropertyValue fails
	      return getComputedStyle(el).getPropertyValue(stringToHyphens(prop)) || '0';
	    }
	  }
	
	  var getTransformValue = function(el, prop) {
	    var defaultVal = prop.indexOf('scale') > -1 ? 1 : 0;
	    var str = el.style.transform;
	    if (!str) return defaultVal;
	    var rgx = /(\w+)\((.+?)\)/g;
	    var match = [];
	    var props = [];
	    var values = [];
	    while (match = rgx.exec(str)) {
	      props.push(match[1]);
	      values.push(match[2]);
	    }
	    var val = values.filter(function(f, i) { return props[i] === prop; });
	    return val.length ? val[0] : defaultVal;
	  }
	
	  var getAnimationType = function(el, prop) {
	    if ( is.dom(el) && arrayContains(validTransforms, prop)) return 'transform';
	    if ( is.dom(el) && (el.getAttribute(prop) || (is.svg(el) && el[prop]))) return 'attribute';
	    if ( is.dom(el) && (prop !== 'transform' && getCSSValue(el, prop))) return 'css';
	    if (!is.nul(el[prop]) && !is.und(el[prop])) return 'object';
	  }
	
	  var getInitialTargetValue = function(target, prop) {
	    switch (getAnimationType(target, prop)) {
	      case 'transform': return getTransformValue(target, prop);
	      case 'css': return getCSSValue(target, prop);
	      case 'attribute': return target.getAttribute(prop);
	    }
	    return target[prop] || 0;
	  }
	
	  var getValidValue = function(values, val, originalCSS) {
	    if (is.col(val)) return colorToRgb(val);
	    if (getUnit(val)) return val;
	    var unit = getUnit(values.to) ? getUnit(values.to) : getUnit(values.from);
	    if (!unit && originalCSS) unit = getUnit(originalCSS);
	    return unit ? val + unit : val;
	  }
	
	  var decomposeValue = function(val) {
	    var rgx = /-?\d*\.?\d+/g;
	    return {
	      original: val,
	      numbers: numberToString(val).match(rgx) ? numberToString(val).match(rgx).map(Number) : [0],
	      strings: numberToString(val).split(rgx)
	    }
	  }
	
	  var recomposeValue = function(numbers, strings, initialStrings) {
	    return strings.reduce(function(a, b, i) {
	      var b = (b ? b : initialStrings[i - 1]);
	      return a + numbers[i - 1] + b;
	    });
	  }
	
	  // Animatables
	
	  var getAnimatables = function(targets) {
	    var targets = targets ? (flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets))) : [];
	    return targets.map(function(t, i) {
	      return { target: t, id: i };
	    });
	  }
	
	  // Properties
	
	  var getProperties = function(params, settings) {
	    var props = [];
	    for (var p in params) {
	      if (!defaultSettings.hasOwnProperty(p) && p !== 'targets') {
	        var prop = is.obj(params[p]) ? cloneObject(params[p]) : {value: params[p]};
	        prop.name = p;
	        props.push(mergeObjects(prop, settings));
	      }
	    }
	    return props;
	  }
	
	  var getPropertiesValues = function(target, prop, value, i) {
	    var values = toArray( is.fnc(value) ? value(target, i) : value);
	    return {
	      from: (values.length > 1) ? values[0] : getInitialTargetValue(target, prop),
	      to: (values.length > 1) ? values[1] : values[0]
	    }
	  }
	
	  // Tweens
	
	  var getTweenValues = function(prop, values, type, target) {
	    var valid = {};
	    if (type === 'transform') {
	      valid.from = prop + '(' + addDefaultTransformUnit(prop, values.from, values.to) + ')';
	      valid.to = prop + '(' + addDefaultTransformUnit(prop, values.to) + ')';
	    } else {
	      var originalCSS = (type === 'css') ? getCSSValue(target, prop) : undefined;
	      valid.from = getValidValue(values, values.from, originalCSS);
	      valid.to = getValidValue(values, values.to, originalCSS);
	    }
	    return { from: decomposeValue(valid.from), to: decomposeValue(valid.to) };
	  }
	
	  var getTweensProps = function(animatables, props) {
	    var tweensProps = [];
	    animatables.forEach(function(animatable, i) {
	      var target = animatable.target;
	      return props.forEach(function(prop) {
	        var animType = getAnimationType(target, prop.name);
	        if (animType) {
	          var values = getPropertiesValues(target, prop.name, prop.value, i);
	          var tween = cloneObject(prop);
	          tween.animatables = animatable;
	          tween.type = animType;
	          tween.from = getTweenValues(prop.name, values, tween.type, target).from;
	          tween.to = getTweenValues(prop.name, values, tween.type, target).to;
	          tween.round = (is.col(values.from) || tween.round) ? 1 : 0;
	          tween.delay = (is.fnc(tween.delay) ? tween.delay(target, i, animatables.length) : tween.delay) / animation.speed;
	          tween.duration = (is.fnc(tween.duration) ? tween.duration(target, i, animatables.length) : tween.duration) / animation.speed;
	          tweensProps.push(tween);
	        }
	      });
	    });
	    return tweensProps;
	  }
	
	  var getTweens = function(animatables, props) {
	    var tweensProps = getTweensProps(animatables, props);
	    var splittedProps = groupArrayByProps(tweensProps, ['name', 'from', 'to', 'delay', 'duration']);
	    return splittedProps.map(function(tweenProps) {
	      var tween = cloneObject(tweenProps[0]);
	      tween.animatables = tweenProps.map(function(p) { return p.animatables });
	      tween.totalDuration = tween.delay + tween.duration;
	      return tween;
	    });
	  }
	
	  var reverseTweens = function(anim, delays) {
	    anim.tweens.forEach(function(tween) {
	      var toVal = tween.to;
	      var fromVal = tween.from;
	      var delayVal = anim.duration - (tween.delay + tween.duration);
	      tween.from = toVal;
	      tween.to = fromVal;
	      if (delays) tween.delay = delayVal;
	    });
	    anim.reversed = anim.reversed ? false : true;
	  }
	
	  var getTweensDuration = function(tweens) {
	    if (tweens.length) return Math.max.apply(Math, tweens.map(function(tween){ return tween.totalDuration; }));
	  }
	
	  // will-change
	
	  var getWillChange = function(anim) {
	    var props = [];
	    var els = [];
	    anim.tweens.forEach(function(tween) {
	      if (tween.type === 'css' || tween.type === 'transform' ) {
	        props.push(tween.type === 'css' ? stringToHyphens(tween.name) : 'transform');
	        tween.animatables.forEach(function(animatable) { els.push(animatable.target); });
	      }
	    });
	    return {
	      properties: removeArrayDuplicates(props).join(', '),
	      elements: removeArrayDuplicates(els)
	    }
	  }
	
	  var setWillChange = function(anim) {
	    var willChange = getWillChange(anim);
	    willChange.elements.forEach(function(element) {
	      element.style.willChange = willChange.properties;
	    });
	  }
	
	  var removeWillChange = function(anim) {
	    var willChange = getWillChange(anim);
	    willChange.elements.forEach(function(element) {
	      element.style.removeProperty('will-change');
	    });
	  }
	
	  /* Svg path */
	
	  var getPathProps = function(path) {
	    var el = is.str(path) ? selectString(path)[0] : path;
	    return {
	      path: el,
	      value: el.getTotalLength()
	    }
	  }
	
	  var snapProgressToPath = function(tween, progress) {
	    var pathEl = tween.path;
	    var pathProgress = tween.value * progress;
	    var point = function(offset) {
	      var o = offset || 0;
	      var p = progress > 1 ? tween.value + o : pathProgress + o;
	      return pathEl.getPointAtLength(p);
	    }
	    var p = point();
	    var p0 = point(-1);
	    var p1 = point(+1);
	    switch (tween.name) {
	      case 'translateX': return p.x;
	      case 'translateY': return p.y;
	      case 'rotate': return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
	    }
	  }
	
	  // Progress
	
	  var getTweenProgress = function(tween, time) {
	    var elapsed = Math.min(Math.max(time - tween.delay, 0), tween.duration);
	    var percent = elapsed / tween.duration;
	    var progress = tween.to.numbers.map(function(number, p) {
	      var start = tween.from.numbers[p];
	      var eased = easings[tween.easing](percent, tween.elasticity);
	      var val = tween.path ? snapProgressToPath(tween, eased) : start + eased * (number - start);
	      val = tween.round ? Math.round(val * tween.round) / tween.round : val;
	      return val;
	    });
	    return recomposeValue(progress, tween.to.strings, tween.from.strings);
	  }
	
	  var setAnimationProgress = function(anim, time) {
	    var transforms;
	    anim.currentTime = time;
	    anim.progress = (time / anim.duration) * 100;
	    for (var t = 0; t < anim.tweens.length; t++) {
	      var tween = anim.tweens[t];
	      tween.currentValue = getTweenProgress(tween, time);
	      var progress = tween.currentValue;
	      for (var a = 0; a < tween.animatables.length; a++) {
	        var animatable = tween.animatables[a];
	        var id = animatable.id;
	        var target = animatable.target;
	        var name = tween.name;
	        switch (tween.type) {
	          case 'css': target.style[name] = progress; break;
	          case 'attribute': target.setAttribute(name, progress); break;
	          case 'object': target[name] = progress; break;
	          case 'transform':
	          if (!transforms) transforms = {};
	          if (!transforms[id]) transforms[id] = [];
	          transforms[id].push(progress);
	          break;
	        }
	      }
	    }
	    if (transforms) {
	      if (!transform) transform = (getCSSValue(document.body, transformStr) ? '' : '-webkit-') + transformStr;
	      for (var t in transforms) {
	        anim.animatables[t].target.style[transform] = transforms[t].join(' ');
	      }
	    }
	    if (anim.settings.update) anim.settings.update(anim);
	  }
	
	  // Animation
	
	  var createAnimation = function(params) {
	    var anim = {};
	    anim.animatables = getAnimatables(params.targets);
	    anim.settings = mergeObjects(params, defaultSettings);
	    anim.properties = getProperties(params, anim.settings);
	    anim.tweens = getTweens(anim.animatables, anim.properties);
	    anim.duration = getTweensDuration(anim.tweens) || params.duration;
	    anim.currentTime = 0;
	    anim.progress = 0;
	    anim.ended = false;
	    return anim;
	  }
	
	  // Public
	
	  var animations = [];
	  var raf = 0;
	
	  var engine = (function() {
	    var play = function() { raf = requestAnimationFrame(step); };
	    var step = function(t) {
	      if (animations.length) {
	        for (var i = 0; i < animations.length; i++) animations[i].tick(t);
	        play();
	      } else {
	        cancelAnimationFrame(raf);
	        raf = 0;
	      }
	    }
	    return play;
	  })();
	
	  var animation = function(params) {
	
	    var anim = createAnimation(params);
	    var time = {};
	
	    anim.tick = function(now) {
	      anim.ended = false;
	      if (!time.start) time.start = now;
	      time.current = Math.min(Math.max(time.last + now - time.start, 0), anim.duration);
	      setAnimationProgress(anim, time.current);
	      var s = anim.settings;
	      if (s.begin && time.current >= s.delay) { s.begin(anim); s.begin = undefined; };
	      if (time.current >= anim.duration) {
	        if (s.loop) {
	          time.start = now;
	          if (s.direction === 'alternate') reverseTweens(anim, true);
	          if (is.num(s.loop)) s.loop--;
	        } else {
	          anim.ended = true;
	          anim.pause();
	          if (s.complete) s.complete(anim);
	        }
	        time.last = 0;
	      }
	    }
	
	    anim.seek = function(progress) {
	      setAnimationProgress(anim, (progress / 100) * anim.duration);
	    }
	
	    anim.pause = function() {
	      removeWillChange(anim);
	      var i = animations.indexOf(anim);
	      if (i > -1) animations.splice(i, 1);
	    }
	
	    anim.play = function(params) {
	      anim.pause();
	      if (params) anim = mergeObjects(createAnimation(mergeObjects(params, anim.settings)), anim);
	      time.start = 0;
	      time.last = anim.ended ? 0 : anim.currentTime;
	      var s = anim.settings;
	      if (s.direction === 'reverse') reverseTweens(anim);
	      if (s.direction === 'alternate' && !s.loop) s.loop = 1;
	      setWillChange(anim);
	      animations.push(anim);
	      if (!raf) engine();
	    }
	
	    anim.restart = function() {
	      if (anim.reversed) reverseTweens(anim);
	      anim.pause();
	      anim.seek(0);
	      anim.play();
	    }
	
	    if (anim.settings.autoplay) anim.play();
	
	    return anim;
	
	  }
	
	  // Remove one or multiple targets from all active animations.
	
	  var remove = function(elements) {
	    var targets = flattenArray(is.arr(elements) ? elements.map(toArray) : toArray(elements));
	    for (var i = animations.length-1; i >= 0; i--) {
	      var animation = animations[i];
	      var tweens = animation.tweens;
	      for (var t = tweens.length-1; t >= 0; t--) {
	        var animatables = tweens[t].animatables;
	        for (var a = animatables.length-1; a >= 0; a--) {
	          if (arrayContains(targets, animatables[a].target)) {
	            animatables.splice(a, 1);
	            if (!animatables.length) tweens.splice(t, 1);
	            if (!tweens.length) animation.pause();
	          }
	        }
	      }
	    }
	  }
	
	  animation.version = version;
	  animation.speed = 1;
	  animation.list = animations;
	  animation.remove = remove;
	  animation.easings = easings;
	  animation.getValue = getInitialTargetValue;
	  animation.path = getPathProps;
	  animation.random = random;
	
	  return animation;
	
	}));


/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// this would help DRY up my code
	// testing to get canvas into this file
	// var canvas = document.getElementById("my-canvas");
	// import Utils from './utils.js';
	// make objOptions a function that receives canvas and object[key] as parameters
	// its output would be the the objects below with the correct info, allowing manipulation of the canvas
	
	var objOptions = exports.objOptions = {
	  // canvas: function() {
	  //   return document.getElementById("my-canvas");
	  // },
	  // line
	  b: {
	    color: ['#f4de70'],
	    width: 40,
	    height: 40,
	    endWidth: 0,
	    delay: 100,
	    // something: this.canvas().width,
	    duration: 500,
	    numBoxes: 22
	  },
	  // big
	  x: {
	    color: ['#ed6e2f', '#baecf0', '#fbfbf4'],
	    radius: [175, 200],
	    endRadius: 200,
	    duration: [500, 1000],
	    numCircles: 1
	  },
	  n: {
	    color: ['#00FFC1', '#f6c7df', '#fbfbf4'],
	    radius: [175, 200],
	    endRadius: 200,
	    duration: [500, 1000],
	    numCircles: 1
	  },
	  // medium large
	  a: {
	    color: ['#baecf0', '#ed6e2f', '#f4de70'],
	    radius: [50, 50],
	    duration: [500, 1000],
	    endRadius: 100,
	    numCircles: 10
	  },
	  // small
	  h: {
	    color: ['#fbfbf4', '#222121'],
	    radius: [15, 25],
	    duration: [1000, 2000],
	    endRadius: 0,
	    numCircles: 25
	  },
	  k: {
	    color: ['#f6c7df', '#baecf0'],
	    radius: [15, 20],
	    duration: [700, 1200],
	    endRadius: 0,
	    numCircles: 30
	  },
	  l: {
	    color: ['#f4de70'],
	    radius: [10, 15],
	    duration: [700, 1200],
	    endRadius: 0,
	    numCircles: 30
	  },
	  // shrinking circles
	  w: {
	    color: ['#B2FF4C', '#EA86FF'],
	    radius: [125, 150],
	    duration: [5000, 7000],
	    endRadius: 0,
	    numCircles: 8
	  },
	  e: {
	    color: ['#FF9268', '#4CFFE1'],
	    radius: [100, 120],
	    duration: [4000, 6000],
	    endRadius: 0,
	    numCircles: 8
	  },
	  // hundred circles
	  d: {
	    color: ['#CCA12D', '#99968F', '#FFA952', '#92FFFC', '#2DCC9B', '#A4BDFF', '#FFF4E3'],
	    radius: [5, 20],
	    width: 15,
	    duration: 1000,
	    endRadius: 30,
	    numCircles: 10
	  },
	  // half circle
	  j: {
	    color: ['#267F64'],
	    radius: 250,
	    duration: 1000
	  },
	  // disappearing big circle
	  g: {
	    x: [430, -430, 430, -430],
	    y: [430, -430, -430, 430],
	    color: ['#E54D00', '#636770'],
	    radius: [300, 300],
	    duration: 700
	  },
	  // words
	  y: {
	    font: ['0px Montserrat'],
	    text: ['Yes!', 'YES!'],
	    color: ['#CCA12D', '#99968F', '#FFA952', '#92FFFC', '#2DCC9B', '#A4BDFF', '#FFF4E3'],
	    endFont: ['60px Montserrat', '60px Poiret One', '60px Gloria Hallelujah', '60px Orbitron', '60px Tillana', '60px Indie Flower', '60px Bungee', '60px Amatic SC'],
	    duration: 1000,
	    numWords: 9
	  },
	  // Box
	  i: {
	    color: ['#CC5757'],
	    width: 600,
	    height: 100,
	    endWidth: 100,
	    delay: 100,
	    duration: [400, 500],
	    numBoxes: 3
	  },
	  // seven lines
	  u: {
	    color: ['#ffffff'],
	    // width: Utils.canvassx() * (6/8),
	    width: 1260,
	    height: 60,
	    endWidth: 0,
	    delay: 100,
	    duration: 500,
	    numBoxes: 7
	  },
	  // Line boxes
	  v: {
	    color: ['#82D9FF', '#FF9BAB', '#4993B2', '#9BFFF0', '#FFE482', '#FF8D7E'],
	    width: 20,
	    height: 20,
	    endWidth: 50,
	    endHeight: 50,
	    duration: [400, 500],
	    numBoxes: 10
	  },
	  r: {
	    color: ['#82D9FF', '#FF9BAB', '#4993B2', '#9BFFF0', '#FFE482', '#FF8D7E'],
	    width: 20,
	    height: 20,
	    endWidth: 50,
	    endHeight: 50,
	    duration: [400, 500],
	    numBoxes: 10
	  },
	  z: {
	    color: ['#82D9FF', '#FF9BAB', '#4993B2', '#9BFFF0', '#FFE482', '#FF8D7E'],
	    width: 20,
	    height: 20,
	    endWidth: 50,
	    endHeight: 50,
	    duration: [400, 500],
	    numBoxes: 10
	  },
	  c: {
	    color: ['#82D9FF', '#FF9BAB', '#4993B2', '#9BFFF0', '#FFE482', '#FF8D7E'],
	    width: 20,
	    height: 20,
	    endWidth: 50,
	    endHeight: 50,
	    duration: [400, 500],
	    numBoxes: 10
	  },
	  // hundred boxes
	  s: {
	    color: ['#f6c7df', '#82D9FF', '#FF9BAB', '#4993B2', '#9BFFF0', '#FFE482', '#FF8D7E', '#baecf0'],
	    width: 0,
	    height: 0,
	    duration: 1000,
	    endWidth: 25,
	    endHeight: 25,
	    numBoxes: 10
	  },
	  // BigBox
	  // anime.random(50, 100); // Will set a random value from 50 to 100
	  t: {
	    color: ['#82FFB7', '#D79BFF'],
	    startX: [1 / 4, 3 / 4],
	    startY: [-200, 200],
	    width: 400,
	    height: 400,
	    endWidth: 0,
	    endHeight: 0,
	    duration: 500,
	    numBoxes: 1
	  },
	  // screen swipe
	  q: {
	    color: ['#82D9FF', '#FF9BAB', '#4993B2', '#9BFFF0', '#FFE482', '#FF8D7E'],
	    duration: 50
	  },
	  o: {
	    color: ['#9BFFF0', '#FFE482', '#FF8D7E'],
	    delay: 300,
	    duration: 600
	  },
	  p: {
	    color: ['#82D9FF', '#FF9BAB', '#4993B2'],
	    delay: 300,
	    duration: 600
	  },
	  // ripple
	  m: {
	    color: ['#ffffff'],
	    radius: 300,
	    endRadius: 0,
	    duration: 600,
	    numRipples: 3
	  },
	  f: {
	    color: ['#fbfbf4', '#222121', '#f6c7df', '#baecf0', '#f4de70'],
	    radius: 0,
	    duration: 11000,
	    numRipples: 5
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// this class doesn't work yet
	// TODO fix this, to implement revolving circle
	
	var Utils = function () {
	  function Utils() {
	    _classCallCheck(this, Utils);
	  }
	
	  _createClass(Utils, null, [{
	    key: "canvas",
	    value: function canvas() {
	      var canvas = document.getElementById("my-canvas");
	      return canvas;
	    }
	  }, {
	    key: "isEven",
	    value: function isEven(n) {
	      return n % 2 === 0;
	    }
	  }, {
	    key: "isOdd",
	    value: function isOdd(n) {
	      return Math.abs(n % 2) === 1;
	    }
	  }, {
	    key: "randomVec",
	    value: function randomVec(length) {
	      var minimum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	
	      var x = Math.floor(Math.random() * (length - minimum)) + minimum;
	      var y = Math.floor(Math.random() * (length - minimum)) + minimum;
	
	      if (x === 0 && y === 0) {
	        x = 1;
	      }
	
	      return [x, y];
	    }
	  }, {
	    key: "radians",
	    value: function radians(angle) {
	      return Math.PI / 180 * angle;
	    }
	  }, {
	    key: "rotate",
	    value: function rotate(cx, cy, x, y, angle) {
	      var radians = this.radians(angle);
	      var cos = Math.cos(radians);
	      var sin = Math.sin(radians);
	
	      var nx = cos * (x - cx) + sin * (y - cy) + cx;
	      var ny = cos * (y - cy) - sin * (x - cx) + cy;
	      return [nx, ny];
	    }
	  }, {
	    key: "findNewPoint",
	    value: function findNewPoint(x, y, angle, distance) {
	      var result = [];
	      var radians = this.radians(angle);
	
	      result.push(Math.round(Math.cos(radians) * distance + x));
	      result.push(Math.round(Math.sin(radians) * distance + y));
	
	      return result;
	    }
	  }]);
	
	  return Utils;
	}();
	
	exports.default = Utils;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Ripple = function () {
	  function Ripple(x, y) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	
	    _classCallCheck(this, Ripple);
	
	    this.x = x;
	    this.y = y;
	    this.alpha = 1;
	    this.lineWidth = 6;
	
	    if (options === null) {
	      this.radius = 0;
	      this.color = '#FFF';
	    } else {
	      this.radius = options.radius;
	      var colorIndex = Math.floor(Math.random() * options.color.length);
	      this.color = options.color[colorIndex] || '#FFF';
	    }
	  }
	
	  _createClass(Ripple, [{
	    key: 'draw',
	    value: function draw(ctx) {
	      ctx.globalAlpha = this.alpha;
	      ctx.beginPath();
	      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
	      ctx.lineWidth = this.lineWidth;
	      ctx.strokeStyle = this.color;
	      ctx.stroke();
	    }
	  }]);
	
	  return Ripple;
	}();
	
	exports.default = Ripple;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _animejs = __webpack_require__(2);
	
	var _animejs2 = _interopRequireDefault(_animejs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Circle = function () {
	  function Circle(x, y, options) {
	    _classCallCheck(this, Circle);
	
	    this.x = x;
	    this.y = y;
	    this.radius = _animejs2.default.random.apply(_animejs2.default, _toConsumableArray(options.radius));
	
	    var colorIndex = Math.floor(Math.random() * options.color.length);
	    this.color = options.color[colorIndex];
	  }
	
	  _createClass(Circle, [{
	    key: 'draw',
	    value: function draw(ctx) {
	      ctx.beginPath();
	      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
	      ctx.fillStyle = this.color;
	      ctx.fill();
	    }
	  }]);
	
	  return Circle;
	}();
	
	exports.default = Circle;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DisappearingCircle = function () {
	  function DisappearingCircle(x, y, radius, color) {
	    _classCallCheck(this, DisappearingCircle);
	
	    this.x = x;
	    this.y = y;
	    this.radius = radius;
	    this.color = color;
	  }
	
	  _createClass(DisappearingCircle, [{
	    key: "draw",
	    value: function draw(ctx) {
	      ctx.beginPath();
	      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
	      ctx.fillStyle = this.color;
	      ctx.fill();
	    }
	  }]);
	
	  return DisappearingCircle;
	}();
	
	exports.default = DisappearingCircle;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var HalfCircle = function () {
	  function HalfCircle(x, y, topdown, options) {
	    _classCallCheck(this, HalfCircle);
	
	    this.x = x;
	    this.y = y;
	    this.topdown = topdown; //boolean
	    this.radius = options.radius;
	
	    var colorIndex = Math.floor(Math.random() * options.color.length);
	    this.color = options.color[colorIndex];
	  }
	
	  _createClass(HalfCircle, [{
	    key: "draw",
	    value: function draw(ctx) {
	      ctx.beginPath();
	      ctx.arc(this.x, this.y, this.radius, 0, Math.PI, this.topdown);
	      ctx.closePath();
	      ctx.fillStyle = this.color;
	      ctx.fill();
	    }
	  }]);
	
	  return HalfCircle;
	}();
	
	exports.default = HalfCircle;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Box = function () {
	  function Box(x, y, options) {
	    _classCallCheck(this, Box);
	
	    this.x = x;
	    this.y = y;
	    this.width = options.width;
	    this.height = options.height;
	
	    var colorIndex = Math.floor(Math.random() * options.color.length);
	    this.color = options.color[colorIndex];
	  }
	
	  _createClass(Box, [{
	    key: "draw",
	    value: function draw(ctx) {
	      ctx.beginPath();
	      ctx.fillStyle = this.color;
	      ctx.rect(this.x, this.y, this.width, this.height);
	      ctx.fill();
	    }
	  }]);
	
	  return Box;
	}();
	
	exports.default = Box;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import Utils from './utils.js';
	
	var TriRectangle = function () {
	  function TriRectangle(x, y, options) {
	    _classCallCheck(this, TriRectangle);
	
	    this.x = x;
	    this.y = y;
	
	    // this.rotate = Utils.radians(options.rotate);
	  }
	
	  _createClass(TriRectangle, [{
	    key: "draw",
	    value: function draw(ctx) {
	      // Red rectangle
	      ctx.beginPath();
	      ctx.lineWidth = "6";
	      ctx.strokeStyle = "#C7A1CC";
	      ctx.rect(this.x - 45, this.y - 45, 140, 140);
	      // ctx.rotate(this.rotate);
	      ctx.stroke();
	
	      // Green rectangle
	      ctx.beginPath();
	      ctx.lineWidth = "4";
	      ctx.strokeStyle = "#AEFFE9";
	      ctx.rect(this.x, this.y, 50, 50);
	      // ctx.rotate(this.rotate);
	      ctx.stroke();
	
	      // Blue rectangle
	      ctx.beginPath();
	      ctx.lineWidth = "8";
	      ctx.strokeStyle = "#FFE686";
	      ctx.rect(this.x - 15, this.y - 15, 80, 80);
	      // ctx.rotate(this.rotate);
	      ctx.stroke();
	    }
	  }]);
	
	  return TriRectangle;
	}();
	
	exports.default = TriRectangle;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Rectangle = function () {
	  function Rectangle(x, y, options) {
	    _classCallCheck(this, Rectangle);
	
	    this.x = x;
	    this.y = y;
	    // this.color = options.color;
	    this.width = options.width;
	    this.height = options.height;
	
	    var colorIndex = Math.floor(Math.random() * options.color.length);
	    this.color = options.color[colorIndex];
	  }
	
	  _createClass(Rectangle, [{
	    key: "draw",
	    value: function draw(ctx) {
	      ctx.beginPath();
	      ctx.lineWidth = "6";
	      ctx.strokeStyle = "red";
	      ctx.rect(this.x, this.y, this.width, this.height);
	      ctx.stroke();
	    }
	  }]);
	
	  return Rectangle;
	}();
	
	exports.default = Rectangle;

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Screen = function () {
	  function Screen(x, y, width, height, options) {
	    _classCallCheck(this, Screen);
	
	    this.x = x;
	    this.y = y;
	    this.width = width;
	    this.height = height;
	
	    var colorIndex = Math.floor(Math.random() * options.color.length);
	    this.color = options.color[colorIndex];
	  }
	
	  _createClass(Screen, [{
	    key: "draw",
	    value: function draw(ctx) {
	      ctx.beginPath();
	      ctx.fillStyle = this.color;
	      ctx.rect(this.x, this.y, this.width, this.height);
	      ctx.fill();
	    }
	  }]);
	
	  return Screen;
	}();
	
	exports.default = Screen;

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Line = function () {
	  function Line(x1, y1, x2, y2, options) {
	    _classCallCheck(this, Line);
	
	    this.x1 = x1;
	    this.y1 = y1;
	    this.x2 = x2;
	    this.y2 = y2;
	
	    var widthIndex = Math.floor(Math.random() * options.lineWidth.length);
	    this.lineWidth = options.lineWidth[widthIndex];
	
	    var colorIndex = Math.floor(Math.random() * options.color.length);
	    this.color = options.color[colorIndex];
	  }
	
	  _createClass(Line, [{
	    key: "draw",
	    value: function draw(ctx) {
	      ctx.beginPath();
	      ctx.moveTo(this.x1, this.y1);
	      ctx.lineTo(this.x2, this.y2);
	      // ctx.lineWidth = this.lineWidth;
	      // ctx.strokestyle = this.color;
	      ctx.stroke();
	    }
	  }]);
	
	  return Line;
	}();
	
	exports.default = Line;

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Word = function () {
	  function Word(x, y, options) {
	    _classCallCheck(this, Word);
	
	    this.x = x;
	    this.y = y;
	
	    var fontIndex = Math.floor(Math.random() * options.font.length);
	    this.font = options.font[fontIndex];
	
	    var textIndex = Math.floor(Math.random() * options.text.length);
	    this.text = options.text[textIndex];
	
	    var colorIndex = Math.floor(Math.random() * options.color.length);
	    this.color = options.color[colorIndex];
	  }
	
	  _createClass(Word, [{
	    key: "draw",
	    value: function draw(ctx) {
	      ctx.font = this.font;
	      ctx.fillStyle = this.color;
	      ctx.fillText(this.text, this.x, this.y);
	    }
	  }]);
	
	  return Word;
	}();
	
	exports.default = Word;

/***/ },
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map