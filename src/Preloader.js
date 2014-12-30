Distro.Preloader = function(game) {};

Distro.Preloader.prototype = {

    preload: function() {
        // Load preloader bar
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY + 50, 'preloaderBar');
        this.load.setPreloadSprite(this.preloadBar);

        // Load images
        this.load.image('background', 'assets/img/background.png');
        this.load.image('gameTitle', 'assets/img/title.png');
        this.load.image('controls', 'assets/img/controls.png');
        this.load.image('rockBig', 'assets/img/rock-big.png');
        this.load.image('rockMedium', 'assets/img/rock-medium.png');
        this.load.image('rockSmall', 'assets/img/rock-small.png');

        // Load spritesheets
        this.load.spritesheet('startBtn', 'assets/img/btn-start.png', 151, 47);
        this.load.spritesheet('creditsBtn', 'assets/img/btn-credits.png', 151, 47);
        this.load.spritesheet('crystals', 'assets/img/crystals.png', 26, 23);
    },

    create: function() {
        this.game.state.start('MainMenu');
    }
};