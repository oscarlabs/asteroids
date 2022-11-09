class Image {
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
  }

  draw() {
    console.log('draw');
    console.log(this.image);
    ctx.drawImage(
      this.image,
      this.positionX,
      this.positionY,
      this.width,
      this.height
    );
  }
}
