import anime from 'animejs';

class Circle {
  constructor(x, y, options) {
    this.x = x;
    this.y = y;
    this.radius = anime.random(...options.radius);

    let colorIndex = Math.floor((Math.random()*options.color.length));
    this.color = options.color[colorIndex];
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

export default Circle;
