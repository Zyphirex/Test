exports.BattleAbilities = {
  "serenegrace": {
		desc: "The side effects of this Pokemon's attack occur twice as often. For example, if this Pokemon uses Ice Beam, it will have a 20% chance to freeze its target.",
		shortDesc: "This Pokemon's moves have their secondary effect chance doubled.",
		onModifyMove: function(move) {
			if (move.secondaries) {
				this.debug('doubling secondary chance');
				for (var i=0; i<move.secondaries.length; i++) {
					move.secondaries[i].chance *= 2;
				}
			}
		},
		id: "serenegrace",
		name: "Serene Grace",
		rating: 4,
		num: 32
	}
