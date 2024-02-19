import { gameContainer, canvas, currentGame } from './index.js';

let GestureStartX, GestureStartY;
let GestureEndX, GestureEndY;

export function handleKeyDown(evt) {
  currentGame.player.move({ keyCode: evt.keyCode });
}

export function handleGestureStart(evt) {
  evt.preventDefault();

  /* 	Handle TouchStart */
  if (evt.type === 'touchstart') {
    if (evt.touches && evt.touches.length > 1) return; // exit function if multi-touch occurred

    GestureStartX = evt.targetTouches[0].pageX - gameContainer.offsetLeft;
    GestureStartY = evt.targetTouches[0].pageY - gameContainer.offsetTop;

    canvas.addEventListener('touchend', handleGestureEnd);
  } else {
    /* Handle MouseDown */
    GestureStartX = evt.pageX - gameContainer.offsetLeft;
    GestureStartY = evt.pageY - gameContainer.offsetTop;

    canvas.addEventListener('mouseup', handleGestureEnd);
  }
}

function handleGestureEnd(evt) {
  /* Handle TouchEnd */
  if (evt.type === 'touchend') {
    GestureEndX = evt.changedTouches[0].pageX - gameContainer.offsetLeft;
    GestureEndY = evt.changedTouches[0].pageY - gameContainer.offsetTop;
  } else {
    /* Handle MouseUp */
    GestureEndX = evt.pageX - gameContainer.offsetLeft;
    GestureEndY = evt.pageY - gameContainer.offsetTop;
  }

  let player = currentGame.player;
  // Cell Range
  let playerRangeX = player.xCord + player.width;
  let playerRangeY = player.yCord + player.height;

  // Check gesture occurred on player cell
  let isplayerCol =
    GestureStartX >= player.xCord && GestureStartX <= playerRangeX;
  let isplayerRow =
    GestureStartY >= player.yCord && GestureStartY <= playerRangeY;
  let gestureOnplayer = isplayerCol && isplayerRow;

  if (gestureOnplayer) {
    let maze = currentGame.maze;
    // Check if target is either of player's neighbor
    let targetColumn = Math.floor(GestureEndX / maze.cellWidth);
    let targetRow = Math.floor(GestureEndY / maze.cellHeight);

    let possibleTargets = {
      left:
        player.colNum !== 0
          ? maze.grid[player.rowNum][player.colNum - 1]
          : undefined,

      top:
        player.rowNum !== 0
          ? maze.grid[player.rowNum - 1][player.colNum]
          : undefined,

      right:
        player.colNum !== maze.gridLastColumn
          ? maze.grid[player.rowNum][player.colNum + 1]
          : undefined,

      bottom:
        player.rowNum !== maze.gridLastRow
          ? maze.grid[player.rowNum + 1][player.colNum]
          : undefined,
    };

    player.move(possibleTargets, maze.grid[targetRow][targetColumn]);
  }
}
