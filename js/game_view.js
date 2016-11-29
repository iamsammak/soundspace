// const anime = require('animejs');
import anime from 'animejs';
// const Circle = require('./circle.js');
import Circle from './circle.js';
// const Dot = require('./dot.js');
import Dot from './dot.js';
// const dotOptions = require('./util.js');
import dotOptions from './util.js';

const GameView = (function (canvas, ctx) {
  const animations = [];

  const setCanvasSize = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const distance = canvas.width;

  const createDots = function (x, y, options) {
    const dots = [];
    for (let i = 0; i < options.numDots; i++) {
      const p = new Dot(x, y, options);
      dots.push(p);
    }
    return dots;
  };

  const removeAnimation = function (animation) {
    const index = animations.indexOf(animation);
    if (index > -1) { animations.splice(index, 1); }
  };

  const animateDots = function (options) {
    setCanvasSize();
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const dots = createDots(x, y, options);
    const circle = new Circle(x, y);
    const dotsAnimation = anime({
      targets: dots,
      x: function(p) { return p.x + anime.random(-distance, distance); },
      y: function(p) { return p.y + anime.random(-distance, distance); },
      radius: options.endRadius,
      duration: function () { return anime.random(...options.duration); },
      easing: 'easeOutExpo',
      complete: removeAnimation,
    });
    const circleAnimation = anime({
      targets: circle,
      radius: function () { return canvas.width + 200; },
      lineWidth: 0,
      alpha: {
        value: 0,
        easing: 'linear',
        duration: function () { return 80000; },
      },
      duration: function () { return anime.random(5000, 8000); },
      easing: 'easeOutExpo',
      complete: removeAnimation,
    });
    animations.push(dotsAnimation);
    animations.push(circleAnimation);
  };

  const mainLoop = anime({
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

  document.addEventListener('keydown', function (e) {
    const key = (e.key);
    if (Object.keys(dotOptions).indexOf(key) > -1) {
      animateDots(dotOptions[key]);
    }
  }, false);

  window.addEventListener('resize', setCanvasSize, false);
});

// module.exports = GameView;
export default GameView;
