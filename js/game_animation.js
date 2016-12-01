import anime from 'animejs';
import Ripple from './ripple.js';
import Circle from './circle.js';
import DisappearingCircle from './disappearing_circle.js';
import HalfCircle from './half_circle.js';
import objOptions from './util.js';
import Box from './box.js';
import TriRectangle from './tri_rectangle.js';
import Rectangle from './rectangle.js';
import Screen from './screen.js';
import Line from './line.js';
import Word from './word.js';

const GameAnimation = (function (canvas, ctx) {
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

    const circlesAnimation = anime({
      targets: circles,
      x: function(cir) { return cir.x + anime.random(-distance, distance); },
      y: function(cir) { return cir.y + anime.random(-distance, distance); },
      radius: options.endRadius,
      duration: function () { return anime.random(...options.duration); },
      easing: 'easeOutExpo',
      complete: removeAnimation,
    });

    animations.push(circlesAnimation);
  };

  const animateExplosions = function (options) {
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
      // alpha: {
      //   value: 0,
      //   easing: 'linear',
      //   duration: function () { return 80000; },
      // },
      duration: function () { return anime.random(5000, 7000); },
      easing: 'easeOutExpo',
      complete: removeAnimation,
    });

    animations.push(circlesAnimation);
    animations.push(rippleAnimation);
  };

  const animateDisappearCircle = function(options) {
    setCanvasSize();
    let x = canvas.width * (1/2), y = canvas.height * (1/2);
    let randIdx = Math.floor((Math.random()*options.x.length));
    let x2 = x + options.x[randIdx], y2 = y + options.y[randIdx];
    let radius1 = options.radius[0], radius2 = options.radius[1];
    let color1 = options.color[0], color2 = options.color[1];
    const circle1 = new DisappearingCircle(x, y, radius1, color1);
    const circle2 = new DisappearingCircle(x2, y2, radius2, color2);
    const circle1Animation = anime({
      targets: circle1,
      duration: options.duration,
      easing: 'easeOutExpo',
      complete: removeAnimation,
    });
    const circle2Animation = anime({
      targets: circle2,
      x: x,
      y: y,
      delay: 200,
      duration: options.duration,
      easing: 'easeOutExpo',
      complete: removeAnimation,
    });
    animations.push(circle1Animation);
    animations.push(circle2Animation);
  };

  const animateHalfCircles = function(options) {
    setCanvasSize();
    let x = canvas.width * (1/2), y = canvas.height * (1/2);
    const topHalf = new HalfCircle(x, y, true, options);
    const bottomHalf = new HalfCircle(x, y, false, options);
    const topHalfAnimation = anime({
      targets: topHalf,
      x: x + 250,
      // y: y + 50,
      color: '#fff',
      duration: options.duration,
      easing: 'easeOutExpo',
      complete:removeAnimation,
    });
    const bottomHalfAnimation = anime({
      targets: bottomHalf,
      x: x - 250,
      // y: y - 50,
      duration: options.duration,
      easing: 'easeOutExpo',
      complete:removeAnimation,
    });
    animations.push(topHalfAnimation);
    animations.push(bottomHalfAnimation);
  };

  const createHundredCircles = function(options) {
    const circles = [];
    let xArr = xLineBoxes(options);
    let yArr = yLineBoxes(options);
    for (let i = 0; i < options.numCircles; i++) {
      for (let j = 0; j < options.numCircles; j++) {
        let x = xArr[i];
        let y = yArr[j];
        const circle = new Circle(x, y, options);
        circles.push(circle);
      }
    }
    return circles;
  };

  const animateHundredCircles = function(options) {
    setCanvasSize();
    const circles = createHundredCircles(options);
    const hundredCirclesAnimation = anime({
      targets: circles,
      radius: options.endRadius,
      // delay: function (el, index) { return index * 10; },
      duration: options.duration,
      easing: 'easeOutExpo',
      complete: removeAnimation
    });
    animations.push(hundredCirclesAnimation);
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
    // let x = canvas.width * (1/8) - (options.width/2);
    let x = canvas.width * (1/8);
    let yArr = [canvas.height * (1/4) - 50, canvas.height * (1/2) - 50, canvas.height * (3/4) - 50];
    const boxes = createBoxes(x, yArr, options);

    const boxAnimation = anime({
      targets: boxes,
      x: function() { return canvas.width * (7/8) - (options.endWidth/2); },
      width: options.endWidth,
      delay: options.delay,
      duration: function () { return anime.random(...options.duration); },
      easing: 'easeOutExpo',
      complete: removeAnimation,
    });

    animations.push(boxAnimation);
  };

  const xLineBoxes = function(options){
    let xArr = [canvas.width * (1/11) - (options.width/2),
                canvas.width * (2/11) - (options.width/2),
                canvas.width * (3/11) - (options.width/2),
                canvas.width * (4/11) - (options.width/2),
                canvas.width * (5/11) - (options.width/2),
                canvas.width * (6/11) - (options.width/2),
                canvas.width * (7/11) - (options.width/2),
                canvas.width * (8/11) - (options.width/2),
                canvas.width * (9/11) - (options.width/2),
                canvas.width * (10/11) - (options.width/2)
    ];
    return xArr;
  };

  const yLineBoxes = function(options){
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
    return yArr;
  };

  const animateLineBoxLR = function(direction, options) {
    setCanvasSize();
    let yArr = yLineBoxes(options);

    if (direction === "left") {
      let x = canvas.width * (9/10);
      const boxes = createBoxes(x, yArr, options);
      const lineBoxAnimation = anime({
        targets: boxes,
        x: function() { return canvas.width * (1/10); },
        delay: function (el, index) { return index * 100; },
        duration: function () { return anime.random(...options.duration); },
        width: options.endWidth,
        height: options.endHeight,
        easing: 'easeOutExpo',
        complete: removeAnimation,
      });

      animations.push(lineBoxAnimation);
    } else if (direction === "right") {
      let x = canvas.width * (1/10);
      const boxes = createBoxes(x, yArr, options);
      const lineBoxRightAnimation = anime({
        targets: boxes,
        x: function() { return canvas.width * (9/10); },
        delay: function (el, index) { return index * 100; },
        duration: function () { return anime.random(...options.duration); },
        width: options.endWidth,
        height: options.endHeight,
        easing: 'easeOutExpo',
        complete: removeAnimation,
      });

      animations.push(lineBoxRightAnimation);
    }
  };

  const createLineBoxUD = function(xArr, y, options) {
    const boxes = [];
    for (let i = 0; i < options.numBoxes; i++) {
      let x = xArr[i];
      const box = new Box(x, y, options);
      boxes.push(box);
    }
    return boxes;
  };

  const animateLineBoxUD = function(direction, options) {
    setCanvasSize();
    let xArr = xLineBoxes(options);
    if (direction === "up") {
      let y = canvas.height * (1/10);
      const boxes = createLineBoxUD(xArr, y, options);
      const lineBoxUpAnimation = anime({
        targets: boxes,
        y: function() { return canvas.height * (9/10); },
        delay: function (el, index) { return index * 100; },
        duration: function () { return anime.random(...options.duration); },
        width: options.endWidth,
        height: options.endHeight,
        easing: 'easeOutExpo',
        complete: removeAnimation,
      });

      animations.push(lineBoxUpAnimation);
    } else if (direction === "down") {
      let y = canvas.height * (9/10);
      const boxes = createLineBoxUD(xArr, y, options);
      const lineBoxDownAnimation = anime({
        targets: boxes,
        y: function() { return canvas.height * (1/10); },
        delay: function (el, index) { return index * 100; },
        duration: function () { return anime.random(...options.duration); },
        width: options.endWidth,
        height: options.endHeight,
        easing: 'easeOutExpo',
        complete: removeAnimation,
      });

      animations.push(lineBoxDownAnimation);
    }
  };
  // have boxes that say in the same place but mapped across the whole canvas, grow or shrink in place
  const createHundredBoxes = function(options) {
    const boxes = [];
    let xArr = xLineBoxes(options);
    let yArr = yLineBoxes(options);
    for (let i = 0; i < options.numBoxes; i++) {
      for (let j = 0; j < options.numBoxes; j++) {
        let x = xArr[i];
        let y = yArr[j];
        const box = new Box(x, y, options);
        boxes.push(box);
      }
    }
    return boxes;
  };

  const animateHundredBoxes = function(options) {
    setCanvasSize();
    const boxes = createHundredBoxes(options);
    const hundredBoxesAnimation = anime({
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

  const animateBigBox = function(options) {
    setCanvasSize();
    let xIdx = Math.floor((Math.random()*options.startX.length));
    let yIdx = Math.floor((Math.random()*options.startY.length));
    let x = (options.startX[xIdx] * canvas.width - (options.width/2));
    let yArr = [(canvas.height*yIdx) + options.startY[yIdx]];
    const bigBox = createBoxes(x, yArr, options);

    const bigBoxAnimation = anime({
      targets: bigBox,
      y: canvas.height * (1/2) - (options.height/2),
      duration: options.duration,
      easing: 'easeOutExpo',
      complete: removeAnimation,
    });

    animations.push(bigBoxAnimation);
  };

// Full screen animations
  const animateScreenFlash = function(options) {
    setCanvasSize();
    let x = 0;
    let y = 0;
    let width = canvas.width;
    let height = canvas.height;
    const screenFlash = new Screen(x, y, width, height, options);

    const screenFlashAnimation = anime({
      targets: screenFlash,
      duration: options.duration,
      easing: 'easeOutExpo',
      complete: removeAnimation,
    });
    animations.push(screenFlashAnimation);
  };

  const animateScreenSwipeLR = function(direction, options) {
    setCanvasSize();
    let x = 0, y = 0, width = canvas.width, height = canvas.height;
    const screen = new Screen(x, y, width, height, options);

    if (direction === 0) {
      const screenSwipeLeftAnimation = anime({
        targets: screen,
        x: canvas.width,
        delay: options.delay,
        duration: options.duration,
        easing: 'easeOutExpo',
        complete: removeAnimation,
      });
      animations.push(screenSwipeLeftAnimation);
    } else { //right
      const screenSwipeLeftAnimation = anime({
        targets: screen,
        width: 0,
        delay: options.delay,
        duration: options.duration,
        easing: 'easeOutExpo',
        complete: removeAnimation,
      });
      animations.push(screenSwipeLeftAnimation);
    }
  };

  const animateScreenSwipeUD = function(direction, options) {
    setCanvasSize();
    let x = 0, y = 0, width = canvas.width, height = canvas.height;
    const screen = new Screen(x, y, width, height, options);

    if (direction === 0) {
      const screenSwipeLeftAnimation = anime({
        targets: screen,
        y: canvas.height,
        delay: options.delay,
        duration: options.duration,
        easing: 'easeOutExpo',
        complete: removeAnimation,
      });
      animations.push(screenSwipeLeftAnimation);
    } else { //right
      const screenSwipeLeftAnimation = anime({
        targets: screen,
        height: 0,
        delay: options.delay,
        duration: options.duration,
        easing: 'easeOutExpo',
        complete: removeAnimation,
      });
      animations.push(screenSwipeLeftAnimation);
    }
  };

  const createRipples = function(x, y, options) {
    const ripples = [];
    for (let i = 0; i < options.numRipples; i++) {
      const ripple = new Ripple(x, y, options);
      ripples.push(ripple);
    }
    return ripples;
  };

  const animateRipple = function(options) {
    setCanvasSize();
    let x = canvas.width * (1/2);
    let y = canvas.height * (1/2);
    const ripples = createRipples(x, y, options);
    const ripplesAnimation = anime({
      targets: ripples,
      radius: options.endRadius,
      delay: function (el, index) { return index * 100; },
      duration: options.duration,
      easing: 'easeOutExpo',
      complete: removeAnimation,
    });
    animations.push(ripplesAnimation);
  };

  const createConfidedRipples = function(options) {
    const ripples = [];
    for (let i = 0; i < options.numRipples; i++) {
      let x = anime.random(canvas.width * (1/4), canvas.width * (3/4));
      let y = anime.random(canvas.height * (1/4), canvas.height * (3/4));
      const ripple = new Ripple(x, y, options);
      ripples.push(ripple);
    }
    return ripples;
  };

  const animateFiveFingerRipple = function(options) {
    setCanvasSize();
    const ripples = createConfidedRipples(options);
    const fiveFingerRippleAnimation = anime({
      targets: ripples,
      radius: canvas.width + 200,
      delay: function (el, index) { return index * 150; },
      duration: options.duration,
      easing: 'easeOutExpo',
      complete: removeAnimation,
    });
    animations.push(fiveFingerRippleAnimation);
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

  const createYes = function(options) {
    const words = [];
    for (let i = 0; i < options.numWords; i++) {
      let x = anime.random(canvas.width * (1/4), canvas.width * (3/4));
      let y = anime.random(canvas.height * (1/4), canvas.height * (3/4));
      const word = new Word(x, y, options);
      words.push(word);
    }
    return words;
  };

  const animateYes = function(options) {
    setCanvasSize();
    const words = createYes(options);
    const wordAnimation = anime({
      targets: words,
      font: options.endFont,
      x: function(el, index) { return anime.random(canvas.width * (1/7), canvas.width * (6/7)); },
      y: function(el, index) { return anime.random(canvas.height * (1/7), canvas.height * (6/7)); },
      delay: function (el, index) { return index * 100; },
      duration: options.duration,
      easing: 'easeOutExpo',
      complete: removeAnimation
    });
    animations.push(wordAnimation);
  };

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  document.addEventListener('keydown', function (e) {
    const key = (e.key).toLowerCase(); //handles accidental caps lock
    if (key === "i") {
      animateBox(objOptions[key]);
    }
    else if (key === "u") {
      animateTriRectangle(objOptions[key]);
    }
    else if (key === "t") {
      animateBigBox(objOptions[key]);
    }
    else if (key === "y") {
      animateLineBoxLR("left", objOptions[key]);
    }
    else if (key === "r") {
      animateLineBoxLR("right", objOptions[key]);
    }
    else if (key === "z") {
      animateLineBoxUD("up", objOptions[key]);
    }
    else if (key === "c") {
      animateLineBoxUD("down", objOptions[key]);
    }
    else if (key === "q") {
      animateScreenFlash(objOptions[key]);
    }
    else if (key === "o") {
      let direction = Math.floor((Math.random()*2));
      animateScreenSwipeLR(direction, objOptions[key]);
    }
    else if (key === "p") {
      let direction = Math.floor((Math.random()*2));
      animateScreenSwipeUD(direction, objOptions[key]);
    }
    else if (key === "m") {
      animateRipple(objOptions[key]);
    }
    else if (key === "f") {
      animateFiveFingerRipple(objOptions[key]);
    }
    else if (key === "g") {
      animateDisappearCircle(objOptions[key]);
    }
    else if (key === "j") {
      animateHalfCircles(objOptions[key]);
    }
    else if (key === "s") {
      animateHundredBoxes(objOptions[key]);
    }
    else if (key === "d") {
      animateHundredCircles(objOptions[key]);
    }
    else if (key === "h" || key === "k" || key === "l") {
      animateExplosions(objOptions[key]);
    }
    else if (key === "v") {
      animateYes(objOptions[key]);
    }
    else if (Object.keys(objOptions).indexOf(key) > -1) {
      animateCircle(objOptions[key]);
    }
  }, false);

  window.addEventListener('resize', setCanvasSize, false);
});

export default GameAnimation;
