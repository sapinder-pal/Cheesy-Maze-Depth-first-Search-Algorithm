import Game from './game.js';

export const GameContainer = document.getElementById('game-container');
export const Canvas = document.getElementById('canvas');
export const FormSelect = document.getElementById('difficulty');

export let currentGame = new Game();

currentGame.initiate();

let ChangeBtn = document.getElementById('change');

ChangeBtn.addEventListener('click', () => {
  if (FormSelect.value !== Game.gridOrder) {
    Game.context.clearRect(
      0,
      0,
      GameContainer.offsetWidth,
      GameContainer.offsetWidth // for square container
    );
    currentGame.setOrder(FormSelect.value);

    currentGame.unListenMoves();
    currentGame.initiate();
  }
});
