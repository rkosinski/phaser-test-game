var Distro = {};

Distro.Boot = function (game) {};

Distro.Boot.prototype = {
    preload: function () {
        game.load.image('background', 'assets/img/background.png');
    },
    create: function() {
        game.add.tileSprite(0, 0, 440, 660, 'background');
    }
};