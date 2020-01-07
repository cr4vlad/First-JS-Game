import GameScene from '../GameScene'

export default class MenuScene {
  constructor(game) {
    this.game = game;
  }

  update(dt) {
    if (this.game.keys['13']) this.game.setScene(GameScene); // Enter
    if (this.game.keys['9']) throw new FatalError('Just stop JS on Tab.'); // Tab - break JS
  }

  render(dt) {
    console.log('Render menu');
  }
}