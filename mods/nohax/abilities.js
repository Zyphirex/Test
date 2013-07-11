exports.BattleAbilities = {
	"serenegrace": {
  		inherit: true
  		onModifyMovePriority: -101,
		onModifyMove: function(move) {
			if (move.secondaries) {
				this.debug('doubling secondary chance');
				for (var i=0; i<move.secondaries.length; i++) {
					if move.secondaries[i].chance >= 50 {
						move.secondaries[i].chance = 100;
					}
				}
			}
		}
	},
	"skilllink": {
		inherit: true
		onModifyMove: function(move) {
			if (move.multihit && move.multihit.length) {
				if (move.multihit[1] === 3 && move.id !== "triplekick") {
					move.multihit = 5;
				}
			}
		}
	}
};
