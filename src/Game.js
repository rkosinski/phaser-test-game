Distro.Game = function (game) {
    rocks = null;
    bigRocks = 2;
    mediumRocks = 3;
    smallRocks = 4;
};

Distro.Game.prototype = {
    create: function () {
        // Background
        this.add.sprite(0, 0, 'background');

        // Create rocks group
        this.rocks = this.add.group();

        // Create big rocks
        for (var i = 0; i < bigRocks; i++) {
            this.rocks.create(Math.random() * 400, Math.random() * 540, 'rockBig');
        }

        // Create medium rocks
        for (var i = 0; i < mediumRocks; i++) {
            this.rocks.create(Math.random() * 400, Math.random() * 540, 'rockMedium');
        }

        // Create small rocks
        for (var i = 0; i < smallRocks; i++) {
            this.rocks.create(Math.random() * 400, Math.random() * 540, 'rockSmall');
        }

        console.log('From game.js');
    },
    update: function() {
    }
};