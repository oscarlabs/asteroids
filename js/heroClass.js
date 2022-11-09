class Hero {
  /**
   *
   * @param {number} x => Position X
   * @param {number} y => Position Y
   * @param {number} w => Image width
   * @param {number} h => Image height
   * @param {number} s => Hero speed
   */
  constructor(x, y, w, h, s) {
    this.positionX = x;
    this.positionY = y;
    this.width = w;
    this.height = h;
    this.speed = s;
    this.image = new Image();
    this.image.src = 'images/superman2d.png';
  }

  draw() {
    ctx.drawImage(
      this.image,
      this.positionX,
      this.positionY,
      this.width,
      this.height
    );
  }

  moveLeft() {
    if (this.positionX <= 0) this.positionX = 10;
    this.positionX -= 2;
  }

  moveRight() {
    if (this.positionX + this.width >= 400) {
      this.positionX = this.positionX - 12;
    }

    this.positionX += 2;
  }

  moveBack() {
    this.positionY += 1;
  }

  useSpeed() {
    if (this.positionY <= 0) this.positionY = 1;
    this.positionY -= this.speed;
  }

  applyWindForce() {
    this.positionY += 0.2 * Math.floor(Math.random() * 2 + 1);
  }
}
