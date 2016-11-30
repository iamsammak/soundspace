class Rectangle {
  constructor(x, y, options) {
    this.x = x;
    this.y = y;
    this.color = options.color;
    this.width = options.width;
    this.height = options.height;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.lineWidth = "6";
    ctx.strokeStyle = "red";
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
  }
}

export default Rectangle;
