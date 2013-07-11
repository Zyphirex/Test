exports.BattleMovedex = {
  	"vodkabottlethrow": {
   		num: 800,
		accuracy: 85,
		basePower: 20,
		category: "Special",
		desc: "Deals damage to one adjacent target and hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's Substitute, it will take damage for the remaining hits. If the user has the Ability Skill Link, this move will always hit five times. Makes contact.",
		shortDesc: "Hits 2-5 times in one turn.",
		id: "vodkabottlethrow",
		name: "Vodka Bottle Throw",
		pp: 20,
		priority: 0,
		isContact: true,
		multihit: [3,5],
		secondary: false,
		target: "normal",
		type: "Water"
	},
	"shockbeam": {
		num: 801,
		accuracy: 85,
		basePower: 130,
		basePowerCallback: function(attacker, defender, move) {
			if (defender.volatiles['substitute']) {
				this.debug('You should not have done that substitute person, for Master Spark will hit you harder!');
				return 540;
			}
			return 130;
		},
		category: "Special",
		desc: "MASTAAAAAAA SPAAAAAAAAKU"
		shortDesc: "BeamSpam",
		id: "shockbeam",
		name: "Master Spark",
		pp: 5,
		priority: 0,
		multihit: [1,1]
		multihitCallback: function(attacker, defender, move) {
			if (defender.volatiles['substitute']) {
				return [2,2];
			}
			return [1,1];
		},
		secondary: {
			chance: 20,
			status: 'brn'
		},
		target: "normal",
		type: "Electric"	
	},
	"shockspam": {
		num: 802,
		accuracy: 100,
		basePower: 25,
		category: "Special",
		desc: "ASFLKJCLV:KMXC?><MQW:RLKJQW:IUQPOEWIURPS",
		shortDesc: "SPAAAAAAAAAAAAAAAAAM",
		id: "shockspam",
		name: "Chain Bolt",
		pp: 10,
		priority: 0,
		multihit: [6,6],
		secondary: false,
		target: "normal",
		type: "Electric"
	},
};
