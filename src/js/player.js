import { currentGame } from './index.js';

const headerSpan = document.querySelector('.header .steps-count');

export default class Player {
  #stepCount;
  colNum;
  rowNum;
  #imgUrl;
  #directionKeyCodes = new Map();

  constructor(maze) {
    this.maze = maze;
    this.ctx = maze.ctx;
    this.cellWidth = maze.cellWidth;
    this.cellHeight = maze.cellHeight;

    this.#directionKeyCodes.set('left', 37);
    this.#directionKeyCodes.set('top', 38);
    this.#directionKeyCodes.set('right', 39);
    this.#directionKeyCodes.set('bottom', 40);

    this.stepCount = 0;

    this.#setPlayer();
  }

  get stepCount() {
    return this.#stepCount;
  }

  set stepCount(value) {
    this.#stepCount = value;
    headerSpan.innerText = String(value);
  }

  #setPlayer() {
    // set player to diagonally opposite cell
    this.colNum = this.maze.goal.colNum === 0 ? this.maze.gridLastColumn : 0;
    this.rowNum = this.maze.goal.rowNum === 0 ? this.maze.gridLastRow : 0;

    this.#imgUrl =
      this.colNum === 0
        ? require('../assets/mouse.png')
        : require('../assets/mouse-reverse.png');

    this.#drawPlayer(true);
  }

  #drawPlayer(isInitialDraw) {
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

    mouse.src = this.#imgUrl;

    if (!isInitialDraw) this.stepCount += 1;
  }

  move(data) {
    let currentCell = this.maze.grid[this.rowNum][this.colNum];
    let changeOccurred = this.#testMove(data, currentCell);

    if (changeOccurred) {
      this.ctx.clearRect(
        currentCell.xLeftCord,
        currentCell.yTopCord,
        currentCell.width,
        currentCell.height
      );
      currentCell.drawCell();
      this.#drawPlayer();

      currentGame.checkCompletion();
    }
  }

  #testMove(data, currentCell) {
    let test,
      testCases = new Map();
    const walls = currentCell.walls;

    if (data.type === 'key') {
      testCases = this.#directionKeyCodes;
      test = data.keyCode;
    } else if (data.type === 'gesture') {
      testCases = data.cellNeighbors;
      test = data.targetCell;
    } else {
      console.error('Invalid input type received');
      return false;
    }

    switch (test) {
      case testCases.get('left'):
        if (!walls.has('left')) {
          this.colNum -= 1;
          return true;
        }
        break;

      case testCases.get('top'):
        if (!walls.has('top')) {
          this.rowNum -= 1;
          return true;
        }
        break;

      case testCases.get('right'):
        if (!walls.has('right')) {
          this.colNum += 1;
          return true;
        }
        break;

      case testCases.get('bottom'):
        if (!walls.has('bottom')) {
          this.rowNum += 1;
          return true;
        }
        break;

      default:
        console.error('Invalid test received');
        return false;
    }
  }
}
