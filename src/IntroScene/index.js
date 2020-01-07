import MenuScene from '../MenuScene'
import html from './view/html'
import './view/style.css'

export default class IntroScene {
  constructor(game) {
    this.game = game;
  }

  update(dt) {
    console.log('Update intro')
  }

  render(dt, root) {
    root.innerHTML = html;
    setTimeout(() => this.game.setScene(MenuScene), 2000);
  }
}