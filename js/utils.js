// this class doesn't work yet
// TODO fix this, to implement revolving circle

class Utils {
  static canvas() {
    const canvas = document.getElementById("my-canvas");
    return canvas;
  }

  static isEven(n) {
   return n % 2 === 0;
  }

  static isOdd(n) {
     return Math.abs(n % 2) === 1;
  }

  static randomVec(length, minimum = 1) {
    let x = Math.floor(Math.random()*(length - minimum)) + minimum;
    let y = Math.floor(Math.random()*(length - minimum)) + minimum;

    if( x === 0 && y === 0 ) {
      x = 1;
    }

    return [x, y];
  }

  static radians(angle) {
    return (Math.PI / 180) * angle;
  }

  static rotate(cx, cy, x, y, angle ) {
    let radians = this.radians(angle);
    let cos = Math.cos(radians);
    let sin = Math.sin(radians);

    let nx = (cos * (x - cx)) + (sin * (y - cy)) + cx;
    let ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return [nx, ny];
  }

  static findNewPoint(x, y, angle, distance) {
    let result = [];
    let radians = this.radians(angle);

    result.push( Math.round(Math.cos(radians) * distance + x));
    result.push( Math.round(Math.sin(radians) * distance + y));

    return result;
  }
}

export default Utils;
