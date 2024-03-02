import Game from './game.js';
import { Howler } from 'howler';
import sound from './sound.js';

export const gameContainer = document.getElementById('game-container');
export const canvas = document.getElementById('canvas');
export const formSelect = document.getElementById('difficulty');

export const currentGame = new Game();

window.addEventListener('click', () => {
  if (Howler.ctx.state === 'suspended') {
    Howler.ctx.resume();
    sound.playBackground();
  }
});

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
