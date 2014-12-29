Distro.Preloader = function(game) {
    counter = 0;
    step = Math.PI * 2 / 360;
};

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

        // Set preloader bar anchor points
        this.preloadBar.anchor.setTo(0.5, 0.5);

        // Start physics on the preloader bar
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.arcade.enable(this.preloadBar);
    },

    create: function() {
        this.game.state.start('MainMenu');
    },

    update: function() {
        var tStep = Math.sin(counter);
        // Rotate
        this.preloadBar.angle += 2;
        // Bounce
        this.preloadBar.body.y = 280 + tStep * 30;
        counter += step;
    }
};