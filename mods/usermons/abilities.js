exports.BattleAbilities = {
 	"drunkenfist": {
   		desc: "If a contact move knocks out this Pokemon, the opponent receives damage equal to one-fourth of its max HP.",
		shortDesc: "If this Pokemon is KOed with a contact move, that move's user loses 1/4 its max HP.",
		id: "drunkenfist",
		name: "Drunken Fist",
		onStart: function(pokemon) {
			this.add('-message', pokemon.name + " is drunk!");
		},
		onStart: function(pokemon) {
			pokemon.addVolatile('confusion');
			 this.boost({spa:2});
			 this.boost({atk:2});
			}
		},
		rating: 3,
		num: -8
	},
	"objection": {
		desc: "This Pokémon avoids all Rock-type attacks and hazards when switching in.",
		shortDesc: "On switch-in, this Pokemon avoids all Rock-type attacks and Stealth Rock.",
		onStart: function(pokemon) {
		         this.add('-message', pokemon.name + " objectified the normal type move!");	
		},
		onImmunity: function(type, target) {
			if (type === 'Normal' && !target.activeTurns) {
				return false;
			}
		},
		id: "objection",
		name: "OBJECTION",
		rating: 3.5,
		num: -9
    	},
    		"jointlighter": {
		desc: "When this Pokemon enters the battlefield, it causes a permanent Rain Dance that can only be stopped by Air Lock, Cloud Nine or another weather condition.",
		shortDesc: "On switch-in, this Pokemon summons Rain Dance until another weather replaces it.",
		onStart: function(pokemon) {
				this.add('-message', pokemon.name + " lit a huge ass joint!");
		},
		onStart: function(source) {
			this.setWeather('zassoukemuri');
			this.weatherData.duration = 0;
		},
		id: "jointlighter",
		name: "Joint Lighter",
		rating: 5,
		num: -13
	}
};
