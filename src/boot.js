var Distro = {};

Distro.Boot = function (game) {};

Distro.Boot.prototype = {
    // Variables
    gameTitleSprite: '',
    controlsSprite: '',

    // Math variables
    counter: 0,
    step: Math.PI * 2 / 360,

    // Methods
    preload: function () {
        // Background load
        game.load.image('background', 'assets/img/background.png');
        // Game title load
        game.load.image('gameTitle', 'assets/img/title.png');
        // Start btn load
        game.load.spritesheet('startBtn', 'assets/img/btn-start.png', 151, 47);
        // Start btn load
        game.load.spritesheet('creditsBtn', 'assets/img/btn-credits.png', 151, 47);
        // Controls load
        game.load.image('controls', 'assets/img/controls.png');
    },

    create: function () {
        // Start basic physics
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // Render background
        game.add.tileSprite(0, 0, 440, 660, 'background');

        // Buttons and controls
        var startBtn = this.add.button(145, 330, 'startBtn', this.startGame, this, 1, 0);
        var creditsBtn = this.add.button(145, 388, 'creditsBtn', this.credits, this, 1, 0);

        this.controlsSprite = game.add.tileSprite(350, 570, 76, 74, 'controls');

        // Render game title sprite
        this.gameTitleSprite = game.add.sprite(game.world.centerX, game.world.centerY, 'gameTitle');
        this.gameTitleSprite.anchor.set(0.5);

        // Set controls sprite transparency
        this.controlsSprite.alpha = 0.2;

        game.physics.arcade.enable(this.gameTitleSprite);
    },

    update: function () {
        var tStep = Math.sin(this.counter);

        this.gameTitleSprite.body.y = 150 + tStep * 60;
        this.counter += this.step;
    },

    startGame: function () {
        console.log('start game');
    },

    credits: function () {
        console.log('credits');
    }
};