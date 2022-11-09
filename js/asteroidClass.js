class Asteroid {
  /**
   *
   * @param {number} x => Position X
   * @param {number} y => Position Y
   * @param {number} w => Image width
   * @param {number} h => Image height
   * @param {number} s => Asteroid speed
   */
  constructor(x, y, w, h, s) {
    this.positionX = x;
    this.positionY = y;
    this.width = w;
    this.height = h;
    this.speed = s;
    this.image = new Image();
    this.image.src = './images/asteroid.png';
  }

  draw() {
    const direction = Math.floor(Math.random() * 2 + 1);
    if (direction === 0) {
      this.positionY++;
    }

    if (direction === 1) {
      this.positionY++;
      this.positionX++;
    }

    if (direction === 2) {
      this.positionY++;
      this.positionX--;
    }

    ctx.drawImage(
      this.image,
      this.positionX,
      this.positionY,
      this.width,
      this.height
    );
  }
}
