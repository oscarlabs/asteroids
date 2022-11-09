class Background {
  /**
   *
   * @param {number} x => Position X
   * @param {number} y => Position Y
   * @param {number} w => Image width
   * @param {number} h => Image height
   */
  constructor(x, y, w, h) {
    this.positionX = x;
    this.positionY = y;
    this.width = w;
    this.height = h;
    this.image_side_a = new Image();
    this.image_side_a.src = '/images/infinite_sky_a.png';
    this.image_side_b = new Image();
    this.image_side_b.src = '/images/infinite_sky_b.png';
    this.image_side_c = new Image();
    this.image_side_c.src = '/images/infinite_sky_c.png';
  }

  draw() {
    if (this.positionY >= this.height) {
      this.positionY = 0;
    }
    this.positionY += 5;
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(
      this.image_side_a,
      this.positionX,
      this.positionY,
      this.width,
      this.height
    );
    ctx.drawImage(
      this.image_side_a,
      this.positionX,
      this.positionY - this.height,
      this.width,
      this.height
    );
  }
}
