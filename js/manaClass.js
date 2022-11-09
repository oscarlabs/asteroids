class Mana {
  /**
   *
   * @param {number} x => Position X
   * @param {number} y => Position Y
   * @param {number} w => Mana Box width
   * @param {number} h => Mana Box height
   */
  constructor(x, y) {
    this.positionX = x;
    this.positionY = y;
    this.width = 100;
    this.height = 10;
  }
  draw() {
    ctx.beginPath();
    ctx.rect(this.positionX + 35, this.positionY - 8, this.width, this.height);
    ctx.strokeStyle = '#ff0000';
    ctx.stroke();
  }

  charge() {
    ctx.beginPath();
    ctx.fillRect(this.positionX + 35, this.positionY - 8, mana, this.height);
    ctx.fillStyle = '#FF0000';
    ctx.stroke();
  }

  title() {
    ctx.beginPath();
    ctx.font = '11px Arial';
    ctx.fillStyle = '#FF0000';
    ctx.fillText('MANA', this.positionX, this.positionY);
    ctx.stroke();
  }
}
