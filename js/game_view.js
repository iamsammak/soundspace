import anime from 'animejs';
import Ripple from './ripple.js';
import Circle from './circle.js';
import circleOptions from './util.js';

const GameView = (function (canvas, ctx) {
  const animations = [];

  const setCanvasSize = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const distance = canvas.width;

  const createCircles = function (x, y, options) {
    const circles = [];
    for (let i = 0; i < options.numCircles; i++) {
      const p = new Circle(x, y, options);
      circles.push(p);
    }
    return circles;
  };

  const removeAnimation = function (animation) {
    const index = animations.indexOf(animation);
    if (index > -1) { animations.splice(index, 1); }
  };

  const animateCircles = function (options) {
    setCanvasSize();
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const circles = createCircles(x, y, options);
    const ripple = new Ripple(x, y);
    const circlesAnimation = anime({
      targets: circles,
      x: function(p) { return p.x + anime.random(-distance, distance); },
      y: function(p) { return p.y + anime.random(-distance, distance); },
      radius: options.endRadius,
      duration: function () { return anime.random(...options.duration); },
      easing: 'easeOutExpo',
      complete: removeAnimation,
    });
    const rippleAnimation = anime({
      targets: ripple,
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
    animations.push(circlesAnimation);
    animations.push(rippleAnimation);
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
    if (Object.keys(circleOptions).indexOf(key) > -1) {
      animateCircles(circleOptions[key]);
    }
  }, false);

  window.addEventListener('resize', setCanvasSize, false);
});

// module.exports = GameView;
export default GameView;
