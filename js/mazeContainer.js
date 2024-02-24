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

    this.#mapRefreshRate = this.#getMapRefreshRate();
  }

  #getMapRefreshRate() {
    switch (currentGame.getLevelName()) {
      case 'hard':
        return 0.01;
      case 'extreme':
        return 0.0001;
      default:
        return 0.1;
    }
  }

  //define grid
  setup() {
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
    this.drawMap();
  }

  drawMap() {
    canvas.width = this.width;
    canvas.height = this.height;

    this.currentCell.visited = true;
    this.grid.forEach(row => row.forEach(col => col.drawCell()));

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
      this.goal = this.currentCell;
      this.drawGoal(this.goal);

      // set player
      this.player.setPlayer();
      // remove Preparing Screen
      preparingGrid.classList.remove('show');
      return;
    }

    window.setTimeout(() => this.drawMap(), this.#mapRefreshRate);
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

  drawGoal(goal) {
    let cheese = new Image();

    cheese.width = goal.width * 2; // scale cheese inside goal cell
    cheese.height = goal.height * 2;

    // adjust cheese position according to its size
    cheese.xPos = goal.xCord - cheese.width / 4;
    cheese.yPos = goal.yCord - cheese.height / 8;

    cheese.onload = () =>
      goal.ctx.drawImage(
        cheese,
        cheese.xPos,
        cheese.yPos,
        cheese.width,
        cheese.height
      );
    cheese.src = './assets/cheese.svg';
  }
}
