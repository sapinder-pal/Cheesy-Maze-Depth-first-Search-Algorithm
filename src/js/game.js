import { handleGestureStart, handleKeyDown } from './eventHandlers.js';
import { canvas, formSelect, gameContainer } from './index.js';
import Maze from './mazeContainer.js';

let completionBox = document.querySelector('.game-complete');
let restartButton = document.getElementById('restart');

export default class Game {
  static context;
  #gridOrder;
  maze;
  player;

  constructor() {
    this.gridOrder = formSelect.value;
    this.context = canvas.getContext('2d');

    // scale to device-pixel-ratio
    const dpr = window.devicePixelRatio;
    const rect = gameContainer.getBoundingClientRect();

    gameContainer.width = rect.width * dpr;
    gameContainer.height = rect.height * dpr;

    this.context.scale(dpr, dpr);

    gameContainer.style.width = `${rect.width}px`;
    gameContainer.style.height = `${rect.height}px`;
  }

  set gridOrder(value) {
    this.#gridOrder = parseInt(value);
  }

  get gridOrder() {
    return this.#gridOrder;
  }

  setOrder(value) {
    this.gridOrder = value;
  }

  initiate() {
    this.maze = new Maze(this.context);
    this.maze.setup();
    this.player = this.maze.player;
    this.listenMoves();
  }

  listenMoves() {
    window.addEventListener('keydown', handleKeyDown);
    canvas.addEventListener('touchstart', handleGestureStart);
    canvas.addEventListener('mousedown', handleGestureStart);
  }

  unListenMoves() {
    window.removeEventListener('keydown', handleKeyDown);
    canvas.removeEventListener('touchstart', handleGestureStart);
    canvas.removeEventListener('mousedown', handleGestureStart);
  }

  checkCompletion() {
    let reachedCol = this.player.colNum === this.maze.goal.colNum;
    let reachedRow = this.player.rowNum === this.maze.goal.rowNum;

    if (reachedRow && reachedCol) {
      this.unListenMoves();
      this.gameComplete();
    }
  }

  gameComplete() {
    document.querySelector('.game-complete .steps-count').innerText = String(
      this.player.stepCount
    );

    completionBox.classList.add('show');
    restartButton.addEventListener('click', this.restart.bind(this));
  }

  restart() {
    completionBox.classList.remove('show');
    this.initiate();
    document.querySelector('.game-complete h2').innerText = '';

    restartButton.removeEventListener('click', this.restart);
  }
}
