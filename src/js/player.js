import { currentGame } from './index.js';

export default class Player {
  #stepCount;

  constructor(maze) {
    this.maze = maze;
    this.ctx = maze.ctx;
    this.cellWidth = maze.cellWidth;
    this.cellHeight = maze.cellHeight;

    this.HeaderSpan = document.querySelector('.header .steps-count');

    this.stepCount = 0;
  }

  get stepCount() {
    return this.#stepCount;
  }

  set stepCount(value) {
    this.#stepCount = value;
    this.HeaderSpan.innerText = String(value);
  }

  setPlayer() {
    // set player to diagonally opposite cell
    this.colNum = this.maze.goal.colNum === 0 ? this.maze.gridLastColumn : 0;
    this.rowNum = this.maze.goal.rowNum === 0 ? this.maze.gridLastRow : 0;

    this.imgUrl =
      this.colNum === 0
        ? require('../assets/mouse.png')
        : require('../assets/mouse-reverse.png');

    this.drawPlayer(true);
  }

  drawPlayer(isInitialDraw) {
    //update Coordinates of player
    this.xLeftCord = this.colNum * this.cellWidth;
    this.yTopCord = this.rowNum * this.cellHeight;

    let mouse = new Image();
    this.maze.setImageNetSize(mouse, this.ctx.lineWidth);
    this.maze.setImagePosInsideCell(mouse, this.xLeftCord, this.yTopCord);

    mouse.onload = () =>
      this.ctx.drawImage(
        mouse,
        mouse.xPos,
        mouse.yPos,
        mouse.width,
        mouse.height
      );

    mouse.src = this.imgUrl;

    if (!isInitialDraw) this.stepCount += 1;
  }

  move(data, gestureTarget) {
    let current = this.maze.grid[this.rowNum][this.colNum];
    let walls = current.walls;
    let changeOccurred = false;

    // run test for keyboard inputs
    if (gestureTarget == undefined)
      // if gestureTarget isn't passed in i.e. it's a keyboard move
      changeOccurred = this.testCases(data.keyCode, 37, 38, 39, 40, walls);
    // run test for gesture
    else
      changeOccurred = this.testCases(
        gestureTarget,
        data.left,
        data.top,
        data.right,
        data.bottom,
        walls
      );

    if (changeOccurred) {
      this.ctx.clearRect(
        current.xLeftCord,
        current.yTopCord,
        current.width,
        current.height
      );
      current.drawCell();
      this.drawPlayer();

      currentGame.checkCompletion();
    }
  }

  testCases(test, case1, case2, case3, case4, walls) {
    switch (test) {
      case case1:
        if (!walls.left) {
          this.colNum -= 1;
          return true;
        }
        break;

      case case2:
        if (!walls.top) {
          this.rowNum -= 1;
          return true;
        }
        break;

      case case3:
        if (!walls.right) {
          this.colNum += 1;
          return true;
        }
        break;

      case case4:
        if (!walls.bottom) {
          this.rowNum += 1;
          return true;
        }
        break;

      default:
        return undefined;
    }
  }
}
