class HalfCircle {
  constructor(x, y, topdown, options) {
    this.x = x;
    this.y = y;
    this.topdown = topdown; //boolean
    this.radius = options.radius;

    let colorIndex = Math.floor((Math.random()*options.color.length));
    this.color = options.color[colorIndex];
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI, this.topdown);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

export default HalfCircle;
