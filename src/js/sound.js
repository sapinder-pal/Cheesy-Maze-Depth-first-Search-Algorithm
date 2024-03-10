import { Howl, Howler } from 'howler';

class Sound {
  #gameplay = new Howl({
    src: [require('../assets/audio/gameplay.wav')],
    html5: true,
    loop: true,
    volume: 0.1,
  });
  #move = new Howl({
    src: [require('../assets/audio/move.wav')],
    html5: true,
    onend: () => this.#move.stop(),
  });

  constructor() {
    Howler.volume(0.5);
  }

  checkIsLoaded(sound) {
    return sound.state() === 'loaded';
  }

  #play(sound) {
    if (this.checkIsLoaded(sound)) sound.play();
    else sound.once('load', () => sound.play());
  }

  playBackground() {
    this.#play(this.#gameplay);
  }
  playMove() {
    if (this.#move.playing()) this.#move.stop();
    this.#play(this.#move);
  }
}

export default new Sound();
