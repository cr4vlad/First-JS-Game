import MenuScene from '../MenuScene'

export default class GameScene {
  constructor(game) {
    this.game = game;
    this.angle = 0;
    this.posX = 0;
    this.posY = 0;
  }
  update(dt) {
    if (this.game.keys['87']) this.posY--; // W
    if (this.game.keys['83']) this.posY++; // S
    if (this.game.keys['65']) this.posX--; // A
    if (this.game.keys['68']) this.posX++; // D
    if (this.game.keys['82']) this.angle++; // R
    if (this.game.keys['27']) this.game.setScene(MenuScene); // Back to menu
  }
  render(dt) {
    console.log('Render game');
  }
}