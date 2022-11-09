class Laser {
  /**
   *
   * @param {number} x => Position X
   * @param {number} y => Position Y
   * @param {number} s => Laser strength
   */
  constructor() {
    this.positionX = 0;
    this.positionY = 0;
  }

  draw(x, y, asteroids) {
    asteroids.sort((a, b) => (a.positionY > b.positionY ? 1 : -1));

    let target = 0;

    for (const [index, asteroid] of asteroids.entries()) {
      if (
        x >= asteroid.positionX + 10 &&
        x <= asteroid.positionX + asteroid.width - 10 &&
        asteroid.positionY < y
      ) {
        target = asteroid.positionY + asteroid.height - 30;
        totalPoints += Math.floor(asteroid.width / 10);
        asteroidsDestroyed++;
        asteroids.splice(index, 1);
      }
    }

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, target);
    ctx.strokeStyle = '#ff0000';
    ctx.stroke();
  }
}
