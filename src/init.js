var game = new Phaser.Game(440, 660, Phaser.AUTO, 'game');

game.state.add('Boot', Distro.Boot);
game.state.start('Boot');