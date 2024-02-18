import { handleGestureStart, handleKeyDown } from './eventHandlers.js';
import Maze from './mazeContainer.js';

export const GameContainer = document.getElementById('game-container');
export const Canvas = document.getElementById('canvas');
const Ctx = Canvas.getContext('2d');
let Width, Height;
// user-defined rowNum & colNum
let CustomGrid = document.querySelectorAll('#rows, #columns');

export var CheesyMaze;
let MazeRows = CustomGrid[0].value;
let MazeColumns = CustomGrid[1].value;

defineCanvasSize();
initiate();

/********************* CHANGING NUMBER OF ROWS & COLUMNS ****************/
let ChangeBtn = document.getElementById('change');

ChangeBtn.addEventListener('click', () => {
  // if either of #rows and #columns has changed
  if (CustomGrid[0].value !== MazeRows || CustomGrid[1].value !== MazeColumns) {
    resetRowCol();
    Ctx.clearRect(0, 0, Width, Width);
    unListenMoves();

    // restart
    initiate();
  }
});

function defineCanvasSize() {
  // get width of GameContainer and assign it to Width and Height.
  Width = Height = GameContainer.offsetWidth;
}

// Create CheesyMaze
function initiate() {
  CheesyMaze = new Maze(Ctx, Width, Height, MazeRows, MazeColumns);
  CheesyMaze.setup();
  listenMoves();
}

// Reset MazeRows & MazeColumns
function resetRowCol() {
  MazeRows = CustomGrid[0].value;
  MazeColumns = CustomGrid[1].value;
}

/******************************************** MOVE EVENTS ***************************************************************/

function listenMoves() {
  window.addEventListener('keydown', handleKeyDown);
  Canvas.addEventListener('touchstart', handleGestureStart);
  Canvas.addEventListener('mousedown', handleGestureStart);
}

function unListenMoves() {
  window.removeEventListener('keydown', handleKeyDown);
  Canvas.removeEventListener('touchstart', handleGestureStart);
  Canvas.removeEventListener('mousedown', handleGestureStart);
}

/***************************************** GAME COMPLETION *****************************************************/

let CompletionBox = document.querySelector('.game-complete');
let RestartBtn = document.querySelector('#restart');

export function checkCompletion() {
  let Player = CheesyMaze.player;
  let reachedCol = Player.colNum === CheesyMaze.goal.colNum;
  let reachedRow = Player.rowNum === CheesyMaze.goal.rowNum;

  if (reachedRow && reachedCol) {
    unListenMoves();
    gameComplete();
  }
}
function gameComplete() {
  let Player = CheesyMaze.player;

  document.querySelector('.game-complete .steps-count').innerText = String(
    Player.stepCount
  );

  CompletionBox.classList.add('show');
  RestartBtn.addEventListener('click', restart);
}

// Restart Game
function restart() {
  CompletionBox.classList.remove('show');
  initiate();
  document.querySelector('.game-complete h2').innerText = '';

  RestartBtn.removeEventListener('click', restart);
}
