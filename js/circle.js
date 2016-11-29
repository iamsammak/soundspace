// const anime = require('animejs');
//
// const Circle = function (x, y, options) {
//   this.x = x;
//   this.y = y;
//   this.color = options.color; // TODO: This gets customized later
//   this.radius = anime.random(...options.radius); // TODO: This gets customized later
// };
//
// Circle.prototype.draw = function (ctx) {
//   ctx.beginPath();
//   ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
//   ctx.fillStyle = this.color;
//   ctx.fill();
// };
//
// module.exports = Circle;

// const createCircle = function (x, y) {
//   const p = {};
//   p.x = x;
//   p.y = y;
//   p.color = '#ffec6a'; // TODO: This gets customized later
//   p.radius = 50; // TODO: This gets customized later
//   p.draw = function () {
//     ctx.beginPath();
//     ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
//     ctx.fillStyle = p.color;
//     ctx.fill();
//   };
//   return p;
// };

import anime from 'animejs';

class Circle {
  constructor(x, y, options) {
    this.x = x;
    this.y = y;
    this.color = options.color;
    this.radius = anime.random(...options.radius);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

export default Circle;
