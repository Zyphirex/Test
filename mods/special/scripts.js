exports.BattleScripts = {
	init: function() {
		for (var i in this.data.Pokedex) {
			var sp = (this.data.Pokedex[i].baseStats.spa + this.data.Pokedex[i].baseStats.spd) / 2;
			this.data.Pokedex[i].baseStats.spa = sp;
			this.data.Pokedex[i].baseStats.spd = sp;
		}
	}
};