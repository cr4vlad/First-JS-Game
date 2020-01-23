import MenuScene from '../MenuScene'
import updateState, { shipState } from './model'
import html from './view/html'
import './view/style.css'

export default class GameScene {
  constructor(game) {
    this.game = game;
  }
  update(dt) {
    let acceleration = false;
    let turn = 0;

    // control
    if (this.game.keys['87'] || this.game.keys['38']) acceleration = true; // W / arrow up
    if (this.game.keys['65'] || this.game.keys['37']) turn += 1; // A / arrow left
    if (this.game.keys['68'] || this.game.keys['39']) turn -= 1; // D / arrow right
    if (this.game.keys['83'] || this.game.keys['40']) console.log('Reverse. (S)'); // S / arrow down (optional)
    if (this.game.keys['32'] || this.game.keys['17']) console.log('Fire! (Space)'); // Space / Ctrl (optional)
    if (this.game.keys['27']) this.game.setScene(MenuScene); // Esc - Back to menu

    updateState(dt, turn, acceleration);
  }
  render(dt, root) {
    if (!root.innerHTML) root.innerHTML = html;
    
    // functional data
    for (var prop in shipState) {
      root.innerHTML += `<p>${prop}: ${shipState[prop].toFixed(2)}</p>`;
    }
    root.innerHTML += `<p>Real FPS: ${Math.round(1 / dt)}</p>`;
  }
}