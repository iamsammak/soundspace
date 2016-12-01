class TriRectangle {
  constructor(x, y, options) {
    this.x = x;
    this.y = y;
  }

  draw(ctx) {
    // Red rectangle
    ctx.beginPath();
    ctx.lineWidth = "6";
    ctx.strokeStyle = "#C7A1CC";
    ctx.rect(this.x - 45, this.y - 45, 140, 140);
    ctx.stroke();

    // Green rectangle
    ctx.beginPath();
    ctx.lineWidth = "4";
    ctx.strokeStyle = "#AEFFE9";
    ctx.rect(this.x, this.y, 50, 50);
    ctx.stroke();

    // Blue rectangle
    ctx.beginPath();
    ctx.lineWidth = "8";
    ctx.strokeStyle = "#FFE686";
    ctx.rect(this.x - 15, this.y - 15, 80, 80);
    ctx.stroke();
  }
}

export default TriRectangle;
