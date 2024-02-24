import Game from './game.js';

export const gameContainer = document.getElementById('game-container');
export const canvas = document.getElementById('canvas');
export const formSelect = document.getElementById('difficulty');

export const currentGame = new Game();

currentGame.initiate();

let ChangeBtn = document.getElementById('change');

ChangeBtn.addEventListener('click', () => {
  if (formSelect.value != currentGame.gridOrder) {
    currentGame.context.clearRect(
      0,
      0,
      gameContainer.offsetWidth,
      gameContainer.offsetWidth // for square container
    );
    currentGame.setOrder(formSelect.value);

    currentGame.unListenMoves();
    currentGame.initiate();
  }
});
