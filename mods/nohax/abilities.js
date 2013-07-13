exports.BattleAbilities = {
	"skilllink": {
		inherit: true,
		onModifyMove: function(move) {
			if (move.multihit && move.multihit.length) {
				if (move.multihit[1] === 3 && move.id !== "triplekick") {
					move.multihit = 5;
				}
			}
		}
	}
};
