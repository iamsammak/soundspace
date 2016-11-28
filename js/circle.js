const Circle = function (x, y) {
  this.x = x;
  this.y = y;
  this.alpha = 1;
  this.radius = 0;
  this.lineWidth = 6;
  this.color = '#FFF';
};

Circle.prototype.draw = function (ctx) {
  ctx.globalAlpha = this.alpha;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
  ctx.lindeWidth = this.lineWidth;
  ctx.strokeStyle = this.color;
  ctx.stroke();
};

module.exports = Circle;

// const createCircle = function (x, y) {
//   const p = {};
//   p.x = x;
//   p.y = y;
//   p.color = '#FFF';
//   p.radius = 0;
//   p.alpha = 1;
//   p.lineWidth = 6;
//   p.draw = function () {
//     ctx.globalAlpha = p.alpha;
//     ctx.beginPath();
//     ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
//     ctx.lindeWidth = p.lineWidth;
//     ctx.strokeStyle = p.color;
//     ctx.stroke();
//   };
//   return p;
// };
