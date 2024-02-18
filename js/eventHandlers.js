import { CheesyMaze, GameContainer, Canvas, checkCompletion } from './index.js';

let GestureStartX, GestureStartY;
let GestureEndX, GestureEndY;

export function handleKeyDown(evt) {
  let Player = CheesyMaze.player;
  Player.move({ keyCode: evt.keyCode });

  checkCompletion();
}

export function handleGestureStart(evt) {
  evt.preventDefault();

  /* 	Handle TouchStart */
  if (evt.type === 'touchstart') {
    if (evt.touches && evt.touches.length > 1) return; // exit function if multi-touch occurred

    GestureStartX = evt.targetTouches[0].pageX - GameContainer.offsetLeft;
    GestureStartY = evt.targetTouches[0].pageY - GameContainer.offsetTop;

    Canvas.addEventListener('touchend', handleGestureEnd);
  } else {
    /* Handle MouseDown */
    GestureStartX = evt.pageX - GameContainer.offsetLeft;
    GestureStartY = evt.pageY - GameContainer.offsetTop;

    Canvas.addEventListener('mouseup', handleGestureEnd);
  }
}

function handleGestureEnd(evt) {
  /* Handle TouchEnd */
  if (evt.type === 'touchend') {
    GestureEndX = evt.changedTouches[0].pageX - GameContainer.offsetLeft;
    GestureEndY = evt.changedTouches[0].pageY - GameContainer.offsetTop;
  } else {
    /* Handle MouseUp */
    GestureEndX = evt.pageX - GameContainer.offsetLeft;
    GestureEndY = evt.pageY - GameContainer.offsetTop;
  }

  let Player = CheesyMaze.player;
  // Cell Range
  let PlayerRangeX = Player.xCord + Player.width;
  let PlayerRangeY = Player.yCord + Player.height;

  // Check gesture occurred on Player cell
  let isPlayerCol =
    GestureStartX >= Player.xCord && GestureStartX <= PlayerRangeX;
  let isPlayerRow =
    GestureStartY >= Player.yCord && GestureStartY <= PlayerRangeY;
  let gestureOnPlayer = isPlayerCol && isPlayerRow;

  if (gestureOnPlayer) {
    // Check if target is either of Player's neighbor
    let targetColumn = Math.floor(GestureEndX / CheesyMaze.cellWidth);
    let targetRow = Math.floor(GestureEndY / CheesyMaze.cellHeight);

    let possibleTargets = {
      left:
        Player.colNum !== 0
          ? CheesyMaze.grid[Player.rowNum][Player.colNum - 1]
          : undefined,

      top:
        Player.rowNum !== 0
          ? CheesyMaze.grid[Player.rowNum - 1][Player.colNum]
          : undefined,

      right:
        Player.colNum !== CheesyMaze.gridLastColumn
          ? CheesyMaze.grid[Player.rowNum][Player.colNum + 1]
          : undefined,

      bottom:
        Player.rowNum !== CheesyMaze.gridLastRow
          ? CheesyMaze.grid[Player.rowNum + 1][Player.colNum]
          : undefined,
    };

    Player.move(possibleTargets, CheesyMaze.grid[targetRow][targetColumn]);
  }

  checkCompletion();
}
