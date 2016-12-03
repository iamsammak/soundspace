class Line {
  constructor(x1, y1, x2, y2, options) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;

    let widthIndex = Math.floor((Math.random()*options.lineWidth.length));
    this.lineWidth = options.lineWidth[widthIndex];

    let colorIndex = Math.floor((Math.random()*options.color.length));
    this.color = options.color[colorIndex];
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    // ctx.lineWidth = this.lineWidth;
    // ctx.strokestyle = this.color;
    ctx.stroke();
  }
}

export default Line;
