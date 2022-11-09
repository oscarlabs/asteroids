class Point {
  /**
   *
   * @param {number} x => Position X
   * @param {number} y => Position Y
   * @param {number} w => Points Box width
   * @param {number} h => Points Box height
   */
  constructor(x, y, c) {
    this.positionX = x;
    this.positionY = y;
    this.finalPositionX = c;
    this.width = 100;
    this.height = 10;
  }

  draw() {
    ctx.beginPath();
    ctx.font = '11px Arial';
    ctx.fillStyle = '#0d47a1';
    ctx.fillText(`POINTS ${totalPoints}`, this.positionX, this.positionY);
    ctx.stroke();
  }

  asteroidsDestroyed() {
    ctx.beginPath();
    ctx.font = '11px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText(
      `ASTEROIDS DESTROYED ${asteroidsDestroyed}`,
      this.finalPositionX - 150,
      this.positionY - 15
    );
    ctx.stroke();

    ctx.beginPath();
    ctx.font = '11px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText(
      `DODGED ${asteroidsDodged}`,
      this.finalPositionX - 83,
      this.positionY - 3
    );
    ctx.stroke();
  }
}
