var Distro = {};

Distro.Boot = function(game) {};

Distro.Boot.prototype = {
    preload: function() {
        this.load.image('preloaderBar', 'assets/img/rock-big.png');
    },
    create: function() {
        this.game.input.maxPointers = 1;
        this.game.stage.scale.pageAlignHorizontally = true;
        this.game.stage.scale.pageAlignVertically = true;
        this.game.stage.scale.setScreenSize = true;
        this.game.state.start('Preloader');
    }
};