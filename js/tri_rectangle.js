class TriRectangle {
  constructor(x, y, options) {
    this.x = x;
    this.y = y;
  }

  draw(ctx) {
    // Red rectangle
    ctx.beginPath();
    ctx.lineWidth = "6";
    ctx.strokeStyle = "red";
    ctx.rect(this.x - 5, this.y - 5, 140, 140);
    ctx.stroke();

    // Green rectangle
    ctx.beginPath();
    ctx.lineWidth = "4";
    ctx.strokeStyle = "green";
    ctx.rect(this.x - 30, this.y - 30, 50, 50);
    ctx.stroke();

    // Blue rectangle
    ctx.beginPath();
    ctx.lineWidth = "10";
    ctx.strokeStyle = "blue";
    ctx.rect(this.x - 50, this.y - 50, 80, 80);
    ctx.stroke();
  }
}

export default TriRectangle;
