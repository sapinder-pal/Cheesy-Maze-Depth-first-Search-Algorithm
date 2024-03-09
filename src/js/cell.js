import Wall from './wall';

export default class Cell {
  constructor(ctx, rowNum, colNum, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.rowNum = rowNum;
    this.colNum = colNum;

    this.xLeftCord = this.colNum * this.width;
    this.yTopCord = this.rowNum * this.height;
    this.xRightCord = this.xLeftCord + this.width;
    this.yBottomCord = this.yTopCord + this.height;

    this.visited = false;
    this.walls = new Map();

    ['top', 'bottom', 'left', 'right'].forEach(side =>
      this.walls.set(side, new Wall(this, side))
    );
  }

  drawCell() {
    this.ctx.clearRect(this.xLeftCord, this.yTopCord, this.width, this.height);

    this.walls.forEach(wall => wall.draw());
  }

  removeWalls(nextCell) {
    let columnDiff = nextCell.colNum - this.colNum;
    let rowDiff = nextCell.rowNum - this.rowNum;

    if (columnDiff)
      switch (columnDiff) {
        case 1:
          this.walls.delete('right');
          nextCell.walls.delete('left');
          break;
        case -1:
          this.walls.delete('left');
          nextCell.walls.delete('right');
          break;
        default:
          console.error('Next cell is not a neighbor');
      }
    else if (rowDiff)
      switch (rowDiff) {
        case 1:
          this.walls.delete('bottom');
          nextCell.walls.delete('top');
          break;
        case -1:
          this.walls.delete('top');
          nextCell.walls.delete('bottom');
          break;
        default:
          console.error('Next cell is not neighbor');
      }
  }

  // choose next cell to visit
  next(grid) {
    let topNeighbor =
      this.rowNum !== 0 ? grid[this.rowNum - 1][this.colNum] : undefined;

    let bottomNeighbor =
      this.rowNum !== grid.length - 1
        ? grid[this.rowNum + 1][this.colNum]
        : undefined;

    let leftNeighbor =
      this.colNum !== 0 ? grid[this.rowNum][this.colNum - 1] : undefined;

    let rightNeighbor =
      this.colNum !== grid[0].length - 1
        ? grid[this.rowNum][this.colNum + 1]
        : undefined;

    let unVisited = [];

    if (topNeighbor && !topNeighbor.visited) unVisited.push(topNeighbor);
    if (bottomNeighbor && !bottomNeighbor.visited)
      unVisited.push(bottomNeighbor);
    if (leftNeighbor && !leftNeighbor.visited) unVisited.push(leftNeighbor);
    if (rightNeighbor && !rightNeighbor.visited) unVisited.push(rightNeighbor);

    if (unVisited.length !== 0)
      return unVisited[Math.floor(Math.random() * unVisited.length)];
    else return undefined;
  }
}
