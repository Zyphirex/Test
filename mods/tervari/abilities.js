/*

Ratings and how they work:

-2: Extremely detrimental
	  The sort of ability that relegates Pokemon with Uber-level BSTs
	  into NU.
	ex. Slow Start, Truant

-1: Detrimental
	  An ability that does more harm than good.
	ex. Defeatist, Klutz

 0: Useless
	  An ability with no net effect on a Pokemon during a battle.
	ex. Pickup, Illuminate

 1: Ineffective
	  An ability that has a minimal effect. Should never be chosen over
	  any other ability.
	ex. Pressure, Damp

 2: Situationally useful
	  An ability that can be useful in certain situations.
	ex. Blaze, Insomnia

 3: Useful
	  An ability that is generally useful.
	ex. Volt Absorb, Iron Fist

 4: Very useful
	  One of the most popular abilities. The difference between 3 and 4
	  can be ambiguous.
	ex. Technician, Intimidate

 5: Essential
	  The sort of ability that defines metagames.
	ex. Drizzle, Magnet Pull

*/

exports.BattleAbilities = {
	"hotshot": {
		desc: "If this Pokemon is active while Sunny Day is in effect, its speed is temporarily doubled.",
		shortDesc: "If Sunny Day is active, this Pokemon's Speed is doubled.",
		onModifySpe: function(spe) {
			if (this.isWeather('sunnyday')) {
				return spe * 2;
			}
		},
		id: "hotshot",
		name: "Hotshot",
		rating: 2,
		num: 34
	},
        "rawpower": {
                desc: "As health decreases, physical attack damage increases drastically.",
                shortDesc: "Physical attacks have a power increase equal to the percent of health lost.",
                onBasePower: function(basePower, attacker, defender, move) {
                        if (move.category === 'Physical') {
                                this.debug('Raw Power boost');
                                var raw = (2 - (attacker.hp/(attacker.maxhp)));
                                return basePower * raw;
                        }
                },
                id: "rawpower",
                name: "Raw Power",
                rating: 4,
                num: 9001
        },
	"timetwister": {
		desc: "When this Pokemon enters the battlefield, it causes a permanent Trick Room that only stops 5 turns after the user switches out.",
		shortDesc: "On switch-in, this Pokemon summons Trick Room which lasts 5 turns after the user switches out.",
		onStart: function(source) {
			this.setWeather('trickroom');
			this.weatherData.duration = 5;
		},
		id: "timetwister",
		name: "Time Twister",
		rating: 5,
		num: 2
	},
};
