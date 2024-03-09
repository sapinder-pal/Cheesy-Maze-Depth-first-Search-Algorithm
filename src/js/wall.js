export default class Wall {
  constructor(cell, position) {
    this.cell = cell;
    this.position = position;
    this.ctx = cell.ctx;

    this.#defineStroke();
  }

  draw() {
    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = 2;

    this.ctx.beginPath();
    this.ctx.moveTo(this.xStart, this.yStart);
    this.ctx.lineTo(this.xEnd, this.yEnd);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  #defineStroke() {
    if (this.position === 'top' || this.position === 'bottom') {
      this.xStart = this.cell.xLeftCord;
      this.xEnd = this.cell.xRightCord;

      if (this.position === 'top') {
        this.yStart = this.yEnd = this.cell.yTopCord;
      } else {
        this.yStart = this.yEnd = this.cell.yBottomCord;
      }
    } else if (this.position === 'left' || this.position === 'right') {
      this.yStart = this.cell.yTopCord;
      this.yEnd = this.cell.yBottomCord;

      if (this.position === 'left') {
        this.xStart = this.xEnd = this.cell.xLeftCord;
      } else {
        this.xStart = this.xEnd = this.cell.xRightCord;
      }
    } else console.error('Invalid wall position received');
  }
}
