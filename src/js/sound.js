import { Howl, Howler } from 'howler';

class Sound {
  #gameplay = new Howl({
    src: [require('../assets/audio/gameplay.wav')],
    html5: true,
    loop: true,
    volume: 0.2,
    onend: () => {
      this.#gameplay.stop();
    },
  });

  constructor() {
    Howler.volume(0.5);
  }

  checkIsLoaded(sound) {
    return sound.state() === 'loaded';
  }

  playBackground() {
    if (this.checkIsLoaded(this.#gameplay)) this.#gameplay.play();
    else this.#gameplay.once('load', () => this.#gameplay.play());
  }
}

export default new Sound();
