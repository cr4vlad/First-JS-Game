import GameScene from '../GameScene'
import html from './view/html'
import './view/style.css'

export default class MenuScene {
  constructor(game) {
    this.game = game;
  }

  update(dt) {
    if (this.game.keys['13']) this.game.setScene(GameScene); // Enter
    if (this.game.keys['9']) throw new FatalError('Just stop JS on Tab.'); // Tab - break JS
  }

  render(dt) {
    root.innerHTML = html;
  }
}