class Word {
  constructor(x, y, options) {
    this.x = x;
    this.y = y;
    this.font = options.font;

    let textIndex = Math.floor((Math.random()*options.text.length));
    this.text = options.text[textIndex];

    let colorIndex = Math.floor((Math.random()*options.color.length));
    this.color = options.color[colorIndex];
  }

  draw(ctx) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(this.text, this.x, this.y);
  }
}

export default Word;
