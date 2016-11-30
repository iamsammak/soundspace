import anime from 'animejs';
import Ripple from './ripple.js';
import Circle from './circle.js';
import objOptions from './util.js';
import Box from './box.js';
import TriRectangle from './tri_rectangle.js';
import Rectangle from './rectangle.js';

const GameView = (function (canvas, ctx) {
  const animations = [];

  const setCanvasSize = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const distance = canvas.width;

  const mainLoopAnimation = anime({
    duration: Infinity,
    update: function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      animations.forEach(function (anim) {
        anim.animatables.forEach(function (animatable) {
          animatable.target.draw(ctx);
        });
      });
    },
  });

  const removeAnimation = function (animation) {
    // debugger;
    const index = animations.indexOf(animation);
    if (index > -1) { animations.splice(index, 1); }
  };

// Circle
  const createCircles = function (x, y, options) {
    const circles = [];
    for (let i = 0; i < options.numCircles; i++) {
      const cir = new Circle(x, y, options);
      circles.push(cir);
    }
    return circles;
  };

  const animateCircle = function (options) {
    setCanvasSize();
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const circles = createCircles(x, y, options);
    const ripple = new Ripple(x, y);

    const circlesAnimation = anime({
      targets: circles,
      x: function(cir) { return cir.x + anime.random(-distance, distance); },
      y: function(cir) { return cir.y + anime.random(-distance, distance); },
      radius: options.endRadius,
      duration: function () { return anime.random(...options.duration); },
      easing: 'easeOutExpo',
      complete: removeAnimation,
    });

// Ripple - circle that is only stroked
    const rippleAnimation = anime({
      targets: ripple,
      radius: function () { return canvas.width + 200; },
      lineWidth: 0,
      alpha: {
        value: 0,
        easing: 'linear',
        duration: function () { return 60000; },
      },
      duration: function () { return anime.random(5000, 7000); },
      easing: 'easeOutExpo',
      complete: removeAnimation,
    });

    animations.push(circlesAnimation);
    animations.push(rippleAnimation);
  };

// Box
  const createBoxes = function (x, yArr, options) {
    const boxes = [];
    for (let i = 0; i < options.numBoxes; i++) {
      let y = yArr[i];
      const box = new Box(x, y, options);
      boxes.push(box);
    }
    return boxes;
  };

  const animateBox = function(options) {
    setCanvasSize();
    let x = canvas.width * (1/8);
    let yArr = [canvas.height * (1/4) - 50, canvas.height * (1/2) - 50, canvas.height * (3/4) - 50];
    const boxes = createBoxes(x, yArr, options);

    const boxAnimation = anime({
      targets: boxes,
      x: function() { return canvas.width * (6/8); },
      delay: function (el, index) { return index * 100; },
      duration: function () { return anime.random(...options.duration); },
      easing: 'easeOutExpo',
      complete: removeAnimation,
    });

    animations.push(boxAnimation);
  };

  const animateLineBox = function(options) {
    setCanvasSize();
    let x = canvas.width * (9/10);
    let yArr = [canvas.height * (1/11) - (options.width/2),
                canvas.height * (2/11) - (options.width/2),
                canvas.height * (3/11) - (options.width/2),
                canvas.height * (4/11) - (options.width/2),
                canvas.height * (5/11) - (options.width/2),
                canvas.height * (6/11) - (options.width/2),
                canvas.height * (7/11) - (options.width/2),
                canvas.height * (8/11) - (options.width/2),
                canvas.height * (9/11) - (options.width/2),
                canvas.height * (10/11) - (options.width/2)
    ];
    const boxes = createBoxes(x, yArr, options);

    const lineBoxAnimation = anime({
      targets: boxes,
      x: function() { return canvas.width * (1/10); },
      delay: function (el, index) { return index * 100; },
      duration: function () { return anime.random(...options.duration); },
      easing: 'easeOutExpo',
      complete: removeAnimation,
    });

    animations.push(lineBoxAnimation);
  };

  const animateBigBox = function(options) {
    setCanvasSize();
    let xIdx = Math.floor((Math.random()*options.startX.length));
    let x = (options.startX[xIdx] * canvas.width - (options.width/2));
    let yArr = options.startY;
    const bigBox = createBoxes(x, yArr, options);

    const bigBoxAnimation = anime({
      targets: bigBox,
      y: function() { return canvas.height - 400; },
      duration: options.duration,
      easing: 'easeOutExpo',
      complete: removeAnimation,
    });

    animations.push(bigBoxAnimation);
  };

// Rectangle
  const animateTriRectangle = function(options) {
    setCanvasSize();
    let x = canvas.width * (1/4) - 25;
    let y = canvas.height * (1/3) - 25;
    const triRects = new TriRectangle(x, y, options);
    const triRectsAnimation = anime({
      targets: triRects,
      x: function() { return canvas.width * (3/4) - 25; },
      y: function() { return canvas.height * (2/3) - 25; },
      duration: options.duration,
      easing: 'easeOutExpo',
      complete: removeAnimation,
    });

    let x2 = canvas.width * (3/4) + 25;
    let y2 = canvas.height * (1/3) - 25;
    const triRects2 = new TriRectangle(x2, y2, options);
    const triRectsAnimation2 = anime({
      targets: triRects2,
      x: function() { return canvas.width * (1/4) - 25; },
      y: function() { return canvas.height * (2/3) - 25; },
      duration: options.duration,
      easing: 'easeOutExpo',
      complete: removeAnimation,
    });

    animations.push(triRectsAnimation);
    animations.push(triRectsAnimation2);
  };

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  document.addEventListener('keydown', function (e) {
    const key = (e.key);
    if (key === "q") {
      animateBox(objOptions[key]);
    }
    else if (key === "r") {
      animateTriRectangle(objOptions[key]);
    }
    else if (key === "t") {
      animateBigBox(objOptions[key]);
    }
    else if (key === "y") {
      animateLineBox(objOptions[key]);
    }
    else if (Object.keys(objOptions).indexOf(key) > -1) {
      animateCircle(objOptions[key]);
    }
  }, false);

  window.addEventListener('resize', setCanvasSize, false);
});

export default GameView;
