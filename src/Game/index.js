import IntroScene from '../IntroScene';

export default class Game {
  constructor() {
    this.root = document.getElementById('root');
    this.setScene(IntroScene);
    this.initInput();
    this.startLoop();
  }
  initInput() {
    this.keys = {};
    document.addEventListener('keydown', e => { this.keys[e.which] = true; });
    document.addEventListener('keyup', e => { this.keys[e.which] = false; });
  }
  setScene(Scene) {
    this.activeScene = new Scene(this);
  }
  update(dt) {
    this.activeScene.update(dt);
  }
  render(dt) {
    this.root.innerHTML = "";
    this.activeScene.render(dt, this.root);
  }
  startLoop() {
    let last = performance.now(),
        step = 1 / 60,
        dt = 0,
        now;

    let frame = () => {
      now = performance.now();
      dt = dt + Math.min(1, (now - last) / 1000); // исправление проблемы неактивных вкладок
      while(dt > step) {
        dt = dt - step;
        this.update(step);
      }
      last = now;

      this.render(dt);
      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  }
}