import anime from 'animejs';
import Ripple from './ripple.js';
import Circle from './circle.js';
import circleOptions from './util.js';

class GameView {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.animations = [];

    this.keyHandler = this.keyHandler.bind(this);
    this.animateCircle = this.animateCircle.bind(this);
    this.mainLoopUpdate = this.mainLoopUpdate.bind(this);

    // const mainAnimation = anime({
    anime({
      duration: Infinity,
      // testing_this: this,
      update: this.mainLoopUpdate
    });


    // keydown listener on dom
    document.addEventListener('keydown', this.keyHandler, false);

    window.addEventListener('resize', this.setCanvasSize, false);
  }

  mainLoopUpdate() {
    // debugger;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let that = this;
    this.animations.forEach(function(anim) {
      // debugger;
      // let that = this;
      anim.animatables.forEach(function (animatable) {
        // debugger;
        animatable.target.draw(that.ctx);
      });
    });
  }

  keyHandler(e) {
    const key = (e.key);
    if (Object.keys(circleOptions).indexOf(key) > -1) {
      // debugger;
      this.animateCircle(circleOptions[key]);
    }
  }

  setCanvasSize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    console.log(this.canvas.width);
    console.log(this.canvas.height);
  }

  createCircles(x, y, options) {
    let circles = [];
    for (let i = 0; i < options.numCircles; i++) {
      let p = new Circle(x, y, options);
      circles.push(p);
    }
    return circles;
  }

  removeAnimation(animation) {
    const index = this.animations.indexOf(animation);
    if (index > -1) {
      this.animations.splice(index, 1);
    }
  }

  animateCircle(options) {
    let distance = this.canvas.width;
    const x = Math.random() * this.canvas.width;
    const y = Math.random() * this.canvas.height;
    const circles = this.createCircles(x, y, options);
    const ripple = new Ripple(x, y);

    const circlesAnimation = anime({
      targets: circles,
      x: function(p) {
        return p.x + anime.random(-distance, distance);
      },
      y: function(p) { return p.y + anime.random(-distance, distance); },
      radius: options.endRadius,
      duration: function() { return anime.random(...options.duration); },
      easing: 'easeOutExpo',
      complete: this.removeAnimation()
    });

    const rippleAnimation = anime({
      targets: ripple,
      radius: distance + 200,
      lineWidth: 0,
      alpha: {
        value: 0,
        easing: 'linear',
        duration: function() { return 80000; }
      },
      duration: function() { return anime.random(5000, 8000); },
      easing: 'easeOutExpo',
      complete: this.removeAnimation()
    });
    // debugger;
    this.animations.push(circlesAnimation);
    this.animations.push(rippleAnimation);
  }

}

export default GameView;
