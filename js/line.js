class Line {
  constructor(x, y, options) {
    this.x = x;
    this.y = y;
  }

  draw(ctx) {
    ctx.font = '40px Montserrat';
    ctx.fillStyle = 'red';
    ctx.fillText('Hello World!', this.x, this.y);
  }
}

export default Line;
