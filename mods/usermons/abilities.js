 exports.BattleAbilities = {
 "drunkenfist": {
    desc: "If a contact move knocks out this Pokemon, the opponent receives damage equal to one-fourth of its max HP.",
		shortDesc: "If this Pokemon is KOed with a contact move, that move's user loses 1/4 its max HP.",
		id: "drunkenfist",
		name: "Drunken Fist",
		onStart: function(pokemon) {
			this.add('-message', 'The effects of weather disappeared. (placeholder)');
		},
			pokemon.addVolatile('confusion');
			 this.boost({spa:2});
			 this.boost({atk:2});
			}
		},
		rating: 3,
		num: -8
	},
		"download": {
		desc: "If this Pokemon switches into an opponent with equal Defenses or higher Defense than Special Defense, this Pokemon's Special Attack receives a 50% boost. If this Pokemon switches into an opponent with higher Special Defense than Defense, this Pokemon's Attack receive a 50% boost.",
		shortDesc: "On switch-in, Attack or Sp. Atk is boosted by 1 based on the foes' weaker Defense.",
		onStart: function (pokemon) {
			var foeactive = pokemon.side.foe.active;
			var totaldef = 0;
			var totalspd = 0;
			for (var i=0; i<foeactive.length; i++) {
				if (!foeactive[i] || foeactive[i].fainted) continue;
				totaldef += foeactive[i].stats.def;
				totalspd += foeactive[i].stats.spd;
			}
			if (totaldef && totaldef >= totalspd) {
				this.boost({spa:1});
			} else if (totalspd) {
				this.boost({atk:1});
			}
		},
	"objection": {
		desc: "This Pokémon avoids all Rock-type attacks and hazards when switching in.",
		shortDesc: "On switch-in, this Pokemon avoids all Rock-type attacks and Stealth Rock.",
		onImmunity: function(type, target) {
			if (type === 'Normal' && !target.activeTurns) {
				return false;
			      this.add('-message', pokemon.name + " objectified the normal type move!");	
			}
		},
		id: "objection",
		name: "OBJECTION",
		rating: 3.5,
		num: 801	
    }
};
