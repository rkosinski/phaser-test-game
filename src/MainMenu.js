Distro.MainMenu = function(game) {
    counter = 0;
    step = Math.PI * 2 / 360;
};

Distro.MainMenu.prototype = {

    create: function() {
        // Set menu background
        this.add.sprite(0, 0, 'background');

        // Buttons and controls
        this.startBtn = this.add.button(145, 330, 'startBtn', this.startGame, this, 1, 0);
        this.creditsBtn = this.add.button(145, 388, 'creditsBtn', this.credits, this, 1, 0);
        this.controlsSprite = this.add.tileSprite(350, 570, 76, 74, 'controls');

        // Render game title sprite
        this.gameTitleSprite = this.add.sprite(this.world.centerX, this.world.centerY, 'gameTitle');
        this.gameTitleSprite.anchor.set(0.5);

        // Set controls sprite transparency
        this.controlsSprite.alpha = 0.2;

        // Start basic physics on game title
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.arcade.enable(this.gameTitleSprite);
    },

    update: function () {
        var tStep = Math.sin(counter);

        this.gameTitleSprite.body.y = 150 + tStep * 60;
        counter += step;
    },

    startGame: function() {
        this.game.state.start('Game');
    },

    credits: function() {
        //this.game.state.start('Credits');
    }
};