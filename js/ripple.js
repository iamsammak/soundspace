class Ripple {
  constructor(x, y, options = null) {
    this.x = x;
    this.y = y;
    this.alpha = 1;
    this.lineWidth = 6;

    if (options === null) {
      this.radius = 0;
      this.color = '#FFF';
    } else {
      this.radius = options.radius;
      let colorIndex = Math.floor((Math.random()*options.color.length));
      this.color = options.color[colorIndex] || '#FFF';
    }
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
