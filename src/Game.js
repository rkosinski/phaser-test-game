Distro.Game = function (game) {
    gravityCounter = 0;
    gravitySteps = Math.PI * 2 / 360;
    currentStage = 'firstStage';

    rockItems = {
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
    crystalItems = {
        'firstStage': {
            'crystals': [
                [260, 190, 1], [100, 330, 2], [360, 470, 0]
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
        // Create crystals group
        this.crystals = this.add.group();
        // Set stage items groups (rocks and crystals)
        this.setStageItemsGroups(rockItems, this.rocks);
        this.setStageItemsGroups(crystalItems, this.crystals);

        this.setRocksAnchorPointsAndEnableGravity();
        this.setCrystalsRandomAngleAndEnableGravity();
    },
    setStageItemsGroups: function (items, itemGroup) {
        for (var key in items[currentStage]) {
            for (var i = 0; i < items[currentStage][key].length; i++) {
                itemGroup.create(
                    items[currentStage][key][i][0], 
                    items[currentStage][key][i][1],
                    key,
                    items[currentStage][key][i][2]
                );
            }
        }
    },
    setRocksAnchorPointsAndEnableGravity: function () {
        for (var key in this.rocks.children) {
            this.rocks.children[key].anchor.set(0.5);
            this.physics.arcade.enable(this.rocks.children[key]);
        }
    },
    setCrystalsRandomAngleAndEnableGravity: function () {
        for (var key in this.crystals.children) {
            this.crystals.children[key].angle = Math.floor(Math.random() * (360 - 0 + 1) + 0);
            this.physics.arcade.enable(this.crystals.children[key]);
        }
    },
    update: function () {
        this.setItemsGravityBounceAndRotation(this.rocks, 2, true);
        this.setItemsGravityBounceAndRotation(this.crystals, 5, false);
    },
    setItemsGravityBounceAndRotation: function (itemGroup, bounceDistance, isRotation) {
        var tStep = Math.sin(gravityCounter);

        for (var key in itemGroup.children) {
            itemGroup.children[key].body.y = itemGroup.children[key].body.y + tStep / bounceDistance;
            if (isRotation) {
                itemGroup.children[key].angle += 0.2;
            }
        }

        gravityCounter += gravitySteps;
    }
};