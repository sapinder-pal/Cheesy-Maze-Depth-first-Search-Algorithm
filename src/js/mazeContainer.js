import Cell from './cell.js';
import { gameContainer, currentGame, canvas } from './index.js';
import Player from './player.js';

const preparingGrid = document.querySelector('.preparing-grid');

export default class Maze {
  #mapRefreshRate;

  constructor(ctx) {
    this.ctx = ctx;
    const boundingRect = gameContainer.getBoundingClientRect();
    this.width = Math.floor(boundingRect.width);
    this.height = Math.floor(boundingRect.height);
    this.rows = currentGame.gridOrder;
    this.columns = this.rows;
    this.cellWidth = this.width / this.columns;
    this.cellHeight = this.height / this.rows;

    this.grid = []; // to store individual cells
    this.stack = []; // to push each visited cell for tracking previous steps

    this.#mapRefreshRate = 0.0001;
  }

  //define grid
  setup() {
    canvas.width = this.width;
    canvas.height = this.height;

    for (let rowNum = 0; rowNum < this.rows; rowNum++) {
      let row = [];

      for (let colNum = 0; colNum < this.columns; colNum++) {
        let cell = new Cell(
          this.ctx,
          rowNum,
          colNum,
          this.cellWidth,
          this.cellHeight
        );
        row.push(cell);
      }
      this.grid.push(row);
    }
    // will be used to place player diagonally opposite to goal
    this.gridLastRow = this.grid.length - 1;
    this.gridLastColumn = this.grid[0].length - 1;

    this.player = new Player(this);

    // show preparing-stuff
    preparingGrid.classList.add('show');

    //set random starting point
    this.currentCell = this.startPoint();
    this.currentCell.visited = true;

    this.traceMap();
  }

  traceMap() {
    let nextCell = this.currentCell.next(this.grid);
    if (nextCell) {
      nextCell.visited = true;

      this.stack.push(this.currentCell);
      this.currentCell.removeWalls(nextCell);
      this.currentCell = nextCell;
    }

    // else if we can go back
    else if (this.stack.length > 0) {
      this.currentCell = this.stack.pop();
    }

    // if can't go back, set goal & player
    if (this.stack.length === 0) {
      this.drawMap();

      // remove Preparing Screen
      preparingGrid.classList.remove('show');
      return;
    } else this.traceMap();
  }

  drawMap() {
    this.grid.forEach(row => row.forEach(col => col.drawCell()));
    this.goal = this.currentCell;
    this.drawGoal();
    this.player.setPlayer();
  }

  // point to start drawing cell (either of four corners)
  startPoint() {
    let corners = [
      this.grid[0][0],
      this.grid[this.gridLastRow][0],
      this.grid[0][this.gridLastColumn],
      this.grid[this.gridLastRow][this.gridLastColumn],
    ];

    return corners[Math.floor(Math.random() * 4)];
  }

  drawGoal() {
    let cheese = new Image();
    this.setImageNetSize(cheese, 2);
    this.setImagePosInsideCell(cheese, this.goal.xLeftCord, this.goal.yCord);

    cheese.onload = () =>
      this.ctx.drawImage(
        cheese,
        cheese.xPos,
        cheese.yPos,
        cheese.width,
        cheese.height
      );
    cheese.src = require('../assets/cheese.png');
  }

  setImageNetSize(image, cellWallOffset) {
    const netHeight = this.cellHeight - cellWallOffset;
    const netWidth = this.cellWidth - cellWallOffset;

    // restrict size to the max of smaller cell dimension
    if (netWidth >= netHeight) {
      image.height = netHeight;
      image.width = netWidth * (netHeight / netWidth);
    } else {
      image.width = netWidth;
      image.height = netHeight * (netWidth / netHeight);
    }
  }

  setImagePosInsideCell(image, xCord, yCord) {
    image.xPos = xCord + this.cellWidth / 2 - image.width / 2;
    image.yPos = yCord + this.cellHeight / 2 - image.height / 2;
  }
}
