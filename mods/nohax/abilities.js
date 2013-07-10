exports.BattleAbilities = {
  "serenegrace": {
  		inherit: true
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
	}
};
