exports.BattleMovedex = {
  	"vodkabottlethrow": {
   		num: 800,
		accuracy: 100,
		basePower: 30,
		category: "Special",
		desc: "Deals damage to one adjacent target and hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's Substitute, it will take damage for the remaining hits. If the user has the Ability Skill Link, this move will always hit five times. Makes contact.",
		shortDesc: "Hits 2-5 times in one turn.",
		id: "vodkabottlethrow",
		name: "Vodka Bottle Throw",
		pp: 20,
		priority: 0,
		isContact: true,
		multihit: [4,4],
		secondary: false,
		target: "normal",
		type: "Water"
	},
	"masterspark": {
		num: 801,
		accuracy: 85,
		basePower: 130,
		category: "Special",
		desc: "MASTAAAAAAA SPAAAAAAAAKU"
		shortDesc: "BeamSpam",
		id: "masterspark",
		name: "Master Spark",
		pp: 5,
		priority: 0,
		secondary: {
			chance: 20,
			status: 'brn'
		},
		target: "normal",
		type: "Electric"
	},
	"chainbolt": {
		num: 802,
		accuracy: 100,
		basePower: 25,
		category: "Special",
		desc: "insert stuff here",
		shortDesc: "SPAAAAAAAAAAAAAAAAAM",
		id: "chainbolt",
		name: "Chain Bolt",
		pp: 10,
		priority: 0,
		multihit: [4,5],
		secondary: false,
		target: "normal",
		type: "Electric"
	},
		"moonblast": {
		num: 803,
		accuracy: 90,
		basePower: 130,
		category: "Special",
		desc: "Surronds the user with moonlight energy and releases all of that energy in one blast using up all the energy making the attacks Special Attack go down.",
		shortDesc: "Deals damage and lowers the attacker's SpA.",
		id: "moonblast",
		isViable: true,
		name: "Moonblast",
		pp: 5,
		priority: 0,
		self: {
			boosts: {
				spa: -2

			}
		},
		secondary: false,
		target: "normal",
		type: "Fairy"
	},
	"fairywind": {
		num: 804,
	        accuracy: 100,
		basePower: 85,
		category: "Special",
		desc: "Deals damage to one adjacent target by summoning a mystical wind that has a chance to encloak the user with mystical energy that boosts speed.",
		shortDesc: "Deals damage and has 10% chance to raise speed.",
		id: "fairywind",
		isViable: true,
		name: "Fairy Wind",
		pp: 15,
		priority: 0,
		secondary: {
			chance: 10,
			self: {
				boosts: {
					spd: 1
				}
			}
		},
		target: "normal",
		type: "Fairy"
	},
	"mysticcrash": {
		num: 805,
	        accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "Deals damage to one adjacent target by crashing into the target with a cloak of mystical energy.",
		shortDesc: "Deals damage and has recoil Basically Double Edge for faries.",
		id: "mysticcrash",
		isViable: true,
		name: "Mystic Crash",
		pp: 15,
		priority: 0,
		isContact: true,
		recoil: [22,100],
		secondary: false,
		target: "normal",
		type: "Fairy"
	},
	"starshot": {
		num: 806,
	        accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "Deals damage to one adjacent target by summoning a star from the sky going lightspeed to hit the opponent(671 million MPH).",
		shortDesc: "A special extremespeed.",
	        id: "starshot",
		isViable: true,
		name: "Star Shot",
		pp: 5,
		priority: 2,
		secondary: false,
		target: "normal",
		type: "Fairy"
	},
	"lunarfist": {
		num: 807,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		desc: "Deals damage to one adjacent target with a mystical punch. Makes contact. Damage is boosted to 1.2x by the Ability Iron Fist.",
		shortDesc: "Is a Punch Move.",
		id: "lunarfist",
		isViable: true,
		name: "Lunar Fist",
		pp: 15,
		priority: 0,
		isContact: true,
		isPunchAttack: true,
		secondary: false,
		target: "normal",
		type: "Fairy"
	}
};
