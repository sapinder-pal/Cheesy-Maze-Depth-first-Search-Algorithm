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

    this.imgSrc =
      this.colNum === 0 ? `./assets/mouse.png` : './assets/mouse-reverse.png';

    this.drawPlayer(true);
  }

  drawPlayer(isInitialDraw) {
    //update Coordinates of player
    this.xCord = this.colNum * this.cellWidth;
    this.yCord = this.rowNum * this.cellHeight;

    let mouse = new Image();
    this.#setMouseSize(mouse);

    mouse.xPos = this.xCord + this.cellWidth / 2 - mouse.width / 2;
    mouse.yPos = this.yCord + this.cellHeight / 2 - mouse.height / 2;

    mouse.onload = () =>
      this.ctx.drawImage(
        mouse,
        mouse.xPos,
        mouse.yPos,
        mouse.width,
        mouse.height
      );

    mouse.src = this.imgSrc;

    if (!isInitialDraw) this.stepCount += 1;
  }

  #setMouseSize(mouse) {
    const cellWallOffset = 2;
    const netHeight = this.cellHeight - cellWallOffset;
    const netWidth = this.cellWidth - cellWallOffset;

    // restrict size to the max of smaller cell dimension
    if (netWidth >= netHeight) {
      mouse.height = netHeight;
      mouse.width = netWidth * (netHeight / netWidth);
    } else {
      mouse.width = netWidth;
      mouse.height = netHeight * (netWidth / netHeight);
    }
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
        current.xCord,
        current.yCord,
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
        if (!walls.leftWall) {
          this.colNum -= 1;
          return true;
        }
        break;

      case case2:
        if (!walls.topWall) {
          this.rowNum -= 1;
          return true;
        }
        break;

      case case3:
        if (!walls.rightWall) {
          this.colNum += 1;
          return true;
        }
        break;

      case case4:
        if (!walls.bottomWall) {
          this.rowNum += 1;
          return true;
        }
        break;

      default:
        return undefined;
    }
  }
}
