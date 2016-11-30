class Ripple {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.alpha = 1;
    this.radius = 0;
    this.lineWidth = 6;
    this.color = '#FFF';
  }

  draw(ctx) {
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
    ctx.lineWidth = this.lineWidth;
    ctx.strokeStyle = this.color;
    ctx.stroke();
  }
}

export default Ripple;
