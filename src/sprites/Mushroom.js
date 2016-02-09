import Phaser from 'phaser-shim'
export default class extends Phaser.Sprite {

  constructor({ game, x, y, asset }) {
    super(game, x, y, asset)

    this.game = game
    this.anchor.setTo(0.5)

  }

  update() {
    this.angle += 1
  }

}