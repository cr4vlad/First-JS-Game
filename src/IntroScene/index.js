import MenuScene from '../MenuScene'

export default class IntroScene {
  constructor(game) {
    this.game = game;
  }

  update(dt) {
    console.log('Update intro')
  }

  render(dt) {
    console.log('Render intro')
    this.game.setScene(MenuScene);
  }
}