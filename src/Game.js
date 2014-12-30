Distro.Game = function (game) {
    rocks = null;
    stagesRocks = {
        'firstStage': {
            'rockBig': [
                [150, 120], [120, 180]
            ],
            'rockMedium': [
                [180, 330], [160, 420], [220, 370]
            ],
            'rockSmall': [
                [340, 190], [250, 280], [180, 190], [230, 550]
            ]
        }
    }
};

Distro.Game.prototype = {
    create: function () {
        // Background
        this.add.sprite(0, 0, 'background');

        // Create rocks group
        this.rocks = this.add.group();

        // Add rocks to the group
        for (var key in stagesRocks.firstStage) {
            for (var i = 0; i < stagesRocks.firstStage[key].length; i++) {
                this.rocks.create(stagesRocks.firstStage[key][i][0], stagesRocks.firstStage[key][i][1] + 10, key);
            }
            
        }
    },
    update: function() {
    }
};