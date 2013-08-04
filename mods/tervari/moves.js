exports.BattleMovedex = {
	"divingtalon": {
		num: 704,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "Deals damage to one adjacent target. Makes contact. Priority +1.",
		shortDesc: "Usually goes first.",
		id: "divingtalon",
		isViable: true,
		name: "Diving Talon",
		pp: 20,
		priority: 1,
		isContact: true,
		secondary: false,
		target: "normal",
		type: "Flying"
	},
	"firerocket": {
		num: 703,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "Deals damage to one adjacent target. Makes contact. Priority +1.",
		shortDesc: "Usually goes first.",
		id: "firerocket",
		isViable: true,
		name: "Fire Rocket",
		pp: 20,
		priority: 1,
		isContact: true,
		secondary: false,
		target: "normal",
		type: "Fire"
	},
	"rabidfrenzy": {
		num: 370,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "Deals damage to one adjacent target and lowers the user's Defense and Special Defense by 1 stage. Makes contact.",
		shortDesc: "Lowers the user's Defense and Sp. Def by 1.",
		id: "rapidfrenzy",
		isViable: true,
		name: "Rabid Frenzy",
		pp: 5,
		priority: 0,
		isContact: true,
		self: {
			boosts: {
				def: -1,
				spd: -1
			}
		},
		secondary: false,
		target: "normal",
		type: "Dark"
	},
	"rootbomb": {
		num: 510,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		desc: "Deals damage to all adjacent foes and changes type to Grass before hitting.",
		shortDesc: "Changes foes type to Grass before hitting.",
		id: "rootbomb",
		name: "Root Bomb",
		pp: 15,
		priority: 0,
		onHit: function(target) {
			this.add('-start', target, 'typechange', 'Grass');
			target.types = ['Grass'];
		},
		secondary: false,
		target: "normal",
		type: "Fire"
	},
	"shadowsword": {
		num: 610,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		desc: "Deals damage to one adjacent target with a 20% chance to lower its Defense by 1 stage. Makes contact.",
		shortDesc: "20% chance to lower the target's Defense by 1",
		id: "shadowsword",
		name: "Shadow Sword",
		pp: 20,
		priority: 0,
		isContact: true,
		secondary: {
			chance: 20,
			boosts: {
				def: -1
			}
		},
		target: "ghost",
		type: "Ghost"
	},
	"shortcircuit": {
		num: 705,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "Deals damage to one adjacent target. Makes contact. Priority +1.",
		shortDesc: "Usually goes first.",
		id: "shortcircuit",
		isViable: true,
		name: "Short Circuit",
		pp: 20,
		priority: 1,
		isContact: true,
		secondary: false,
		target: "normal",
		type: "Electric"
	},
        "vendetta": {
                num: 702,
                accuracy: 85,
                basePower: 120,
                category: "Special",
                desc: "Deals damage to one adjacent target with a 20 chance to hit it with Spite.",
                shortDesc: "20% chance to spite the target.",
                id: "vendetta",
                isViable: true,
                name: "Vendetta",
                pp: 5,
                priority: 0,
                onHit: function(target) {
                        var spiteroll = this.random(100);
                        if (spiteroll > 80) {
                                if (target.deductPP(target.lastMove, 4)) {
                                        this.add("-activate", target, 'move: vendetta', target.lastMove, 4);
                                        return;
                                }
                        }
                        return false;
                },
                target: "normal",
                type: "Ghost"
        },
	"voidhorn": {
		num: 701,
		accuracy: 85,
		basePower: 120,
		category: "Physical",
		desc: "Deals damage to one adjacent target",
		shortDesc: "Strong Ghost-Type Move",
		id: "voidhorn",
		isViable: true,
		name: "Void Horn",
		pp: 10,
		priority: 0,
		isContact: true,
		secondary: false,
		target: "normal",
		type: "Ghost"
	},
};
