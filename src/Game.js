Distro.Game = function (game) {
    counter = 0;
    step = Math.PI * 2 / 360;
    rocks = null;
    stagesRocks = {
        'firstStage': {
            'rockBig': [
                [50, 190], [280, 340]
            ],
            'rockMedium': [
                [180, 100], [370, 260], [120, 420]
            ],
            'rockSmall': [
                [340, 70], [65, 510], [200, 240], [330, 550]
            ]
        }
    }
};

Distro.Game.prototype = {
    create: function () {
        // Background
        this.add.sprite(0, 0, 'background');
        // Start phasers physics
        this.physics.startSystem(Phaser.Physics.ARCADE);
        // Create rocks group
        this.rocks = this.add.group();

        // Add rocks to the group
        for (var key in stagesRocks.firstStage) {
            if (key.match(/(rock){1}[a-zA-Z]*/)) {
                for (var i = 0; i < stagesRocks.firstStage[key].length; i++) {
                    this.rocks.create(
                        stagesRocks.firstStage[key][i][0], 
                        stagesRocks.firstStage[key][i][1],
                        key
                    );
                }
            }
        }

        // Set anchor point to every rock in stage
        // And enable gravity on it
        for (var key in this.rocks.children) {
            this.rocks.children[key].anchor.set(0.5);
            this.physics.arcade.enable(this.rocks.children[key]);
        }
    },
    update: function () {
        var tStep = Math.sin(counter);

        // Gravity bounce rocks
        // And rotate them
        for (var key in this.rocks.children) {
            this.rocks.children[key].body.y = this.rocks.children[key].body.y + tStep / 2;
            this.rocks.children[key].angle += 0.2;
        }

        counter += step;
    },
};