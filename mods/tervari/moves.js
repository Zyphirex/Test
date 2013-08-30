exports.BattleMovedex = {
	"chainbolt": {
		num: 701,
		accuracy: 100,
		basePower: 25,
		category: "Special",
		desc: "Deals damage to one adjacent target and hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's Substitute, it will take damage for the remaining hits. If the user has the Ability Skill Link, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn.",
		id: "chainbolt",
		isViable: true,
		name: "Chain Bolt",
		pp: 30,
		priority: 0,
		multihit: [2,5],
		secondary: false,
		target: "normal",
		type: "Electric"
	},
	"deserttomb": {
		num: 702,
		accuracy: 95,
		basePower: 85,
		category: "Special",
		desc: "Deals damage to one adjacent target and prevents it from switching for four or five turns; seven turns if the user is holding Grip Claw. Causes damage to the target equal to 1/16 of its maximum HP (1/8 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin. This effect is not stackable or reset by using this or another partial-trapping move.",
		shortDesc: "Traps and damages the target for 4-5 turns.",
		id: "deserttomb",
		isViable: true,
		name: "Desert Tomb",
		pp: 10,
		priority: 0,
		volatileStatus: 'partiallytrapped',
		secondary: false,
		target: "normal",
		type: "Rock"
	},
	"distortion": {
		num: 703,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "Blah Blah Blah",
		shortDesc: "Blah Blah Blah",
		id: "distortion",
		isViable: true,
		name: "Distortion",
		pp: 10,
		priority: -1,
		beforeTurnCallback: function(pokemon, target) {
			decision = this.willMove(target);
			if (decision.move.priority === 1) {
				this.willMove(pokemon).move.priority = 1;
			}
		},
		secondary: false,
		target: "normal",
		type: "Psychic"
	},
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
		num: 705,
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
	"focusball": {
		num: 706,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "Deals damage to one adjacent target with a 20% chance to lower its Special Defense by 1 stage.",
		shortDesc: "20% chance to lower the target's Sp. Def by 1.",
		id: "focusball",
		isViable: true,
		name: "Focus Ball",
		pp: 15,
		priority: 0,
		secondary: {
			chance: 20,
			boosts: {
				spd: -1
			}
		},
		target: "normal",
		type: "Fighting"
	},
	"gyre": {
		num: 707,
		accuracy: 85,
		basePower: 100,
		basePowerCallback: function() {
			if (this.weather) return 125;
			return 100;
		},
		category: "Special",
		desc: "Deals damage to one adjacent target. Power doubles during weather effects and this move's type changes to match; Ice-type during Hail, Water-type during Rain Dance, Rock-type during Sandstorm, and Fire-type during Sunny Day.",
		shortDesc: "Power doubles and type varies in each weather.",
		id: "gyre",
		isViable: true,
		name: "Gyre",
		pp: 10,
		priority: 0,
		onModifyMove: function(move) {
			switch (this.effectiveWeather()) {
			case 'sunnyday':
				move.type = 'Fire';
				break;
			case 'raindance':
				move.type = 'Water';
				break;
			case 'sandstorm':
				move.type = 'Rock';
				break;
			case 'hail':
				move.type = 'Ice';
				break;
			}
		},
		secondary: false,
		target: "flying",
		type: "Flying"
	},
	"magnify": {
		num: 708,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Accuracy by 2 stages.",
		shortDesc: "Boosts the user's Accuracy by 2.",
		id: "magnify",
		isViable: true,
		name: "Magnify",
		pp: 30,
		priority: 0,
		isSnatchable: true,
		boosts: {
			accuracy: 2
		},
		secondary: false,
		target: "self",
		type: "Steel"
	},
	"mindforce": {
		num: 709,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "Deals damage to one adjacent target. Fails if the target did not select a status move for use this turn, or if the target moves before the user. Priority +1.",
		shortDesc: "Usually goes first. Fails if target is not using a status move.",
		id: "mindforce",
		isViable: true,
		name: "Mind Force",
		pp: 5,
		priority: 1,
		onTryHit: function(target) {
			decision = this.willMove(target);
			if (!decision || decision.choice !== 'move' || (decision.move.category !== 'Status' && decision.move.id !== 'mefirst')) {
				return false;
			}
		},
		secondary: false,
		target: "normal",
		type: "Psychic"
	},
	"mysticroom": {
		num: 710,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, all active Pokemon have their Attack and Special Attack stats swapped. Stat stage changes are unaffected. If this move is used during the effect, the effect ends. Priority -7.",
		shortDesc: "For 5 turns, all Attack and Sp. Atk stats switch.",
		id: "mysticroom",
		name: "Mystic Room",
		pp: 10,
		priority: -7,
		onHitField: function(target, source, effect) {
			if (this.pseudoWeather['mysticroom']) {
				this.removePseudoWeather('mysticroom', source, effect, '[of] '+source);
			} else {
				this.addPseudoWeather('mysticroom', source, effect, '[of] '+source);
			}
		},
		effect: {
			duration: 5,
			onStart: function(side, source) {
				this.add('-fieldstart', 'move: MysticRoom', '[of] '+source);
			},
			onModifyAtkPriority: 100,
			onModifyAtk: function(atk, pokemon) {
			return pokemon.stats.spa;
			},
			onModifySpAPriority: 100,
			onModifySpA: function(spa, pokemon) {
				return pokemon.stats.atk;
			},
			onResidualOrder: 24,
			onEnd: function() {
				this.add('-fieldend', 'move: Mystic Room');
			}
		},
		secondary: false,
		target: "all",
		type: "Psychic"
	},
	"rabidfrenzy": {
		num: 711,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "Deals damage to one adjacent target and lowers the user's Defense and Special Defense by 1 stage. Makes contact.",
		shortDesc: "Lowers the user's Defense and Sp. Def by 1.",
		id: "rabidfrenzy",
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
		num: 712,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		desc: "Deals damage to all adjacent foes and changes type to Grass before hitting.",
		shortDesc: "Changes foes type to Grass before hitting.",
		id: "rootbomb",
		name: "Root Bomb",
		pp: 15,
		priority: 0,
		effect: { 
			onBeforeMove: function(pokemon, target, move) {
				this.add('-start', target, 'typechange', 'Grass');
				target.types = ['Grass'];
			}
		},
		secondary: false,
		target: "normal",
		type: "Fire"
	},
	"shadowsword": {
		num: 713,
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
		num: 714,
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
	"starstorm": {
		num: 715,
		accuracy: 85,
		basePower: 120,
		category: "Special",
		desc: "Deals damage to one adjacent target with a 20% chance to lower its Special Defense by 1 stage.",
		shortDesc: "20% chance to lower the target's Sp. Def by 1.",
		id: "starstorm",
		isViable: true,
		name: "Star Storm",
		pp: 5,
		priority: 0,
		secondary: {
			chance: 20,
			boosts: {
				spd: -1
			}
		},
		target: "normal",
		type: "Psychic"
	},
        "vendetta": {
                num: 716,
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
		num: 717,
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
