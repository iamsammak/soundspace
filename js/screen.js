class Screen {
  constructor(x, y, width, height, options) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    let colorIndex = Math.floor((Math.random()*options.color.length));
    this.color = options.color[colorIndex];
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fill();
  }
}

export default Screen;
