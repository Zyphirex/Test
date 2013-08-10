exports.BattleFormats = {
       // Singles
        ////////////////////////////////////////////////////////////////////

        randombattle: {
		name: "Random Battle",
		section: "Singles",

		effectType: 'Format',
		team: 'random',
		canUseRandomTeam: true,
		searchDefault: true,
		rated: true,
		challengeShow: true,
		searchShow: true,
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
	unratedrandombattle: {
		name: "Unrated Random Battle",
		section: "Singles",

		effectType: 'Format',
		team: 'random',
		canUseRandomTeam: true,
		searchShow: true,
		ruleset: ['Random Battle']
	},
	ou: {
		name: "OU",
		section: "Singles",

		effectType: 'Format',
		challengeDefault: true,
		rated: true,
		challengeShow: true,
		searchShow: true,
		isTeambuilderFormat: true,
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
	},
	/**
	oucurrent: {
		name: "OU (current)",
		section: "Singles",

		effectType: 'Format',
		challengeDefault: true,
		rated: true,
		challengeShow: true,
		searchShow: true,
		isTeambuilderFormat: true,
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
	},
	oususpecttest: {
		name: "OU (suspect test)",
		section: "Singles",

		effectType: 'Format',
		challengeDefault: true,
		rated: true,
		challengeShow: true,
		searchShow: true,
		isTeambuilderFormat: true,
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew', 'Landorus']
	},*/
	// ounostealthrock: {
		// name: "OU (no Stealth Rock)",
		// section: "Singles",

		// effectType: 'Format',
		// challengeDefault: true,
		// rated: true,
		// challengeShow: true,
		// searchShow: true,
		// isTeambuilderFormat: true,
		// ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		// banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew', 'Stealth Rock']
	// },
	ubers: {
		name: "Ubers",
		section: "Singles",

		effectType: 'Format',
		rated: true,
		challengeShow: true,
		searchShow: true,
		isTeambuilderFormat: true,
		ruleset: ['Pokemon', 'Team Preview', 'Standard Ubers'],
		banlist: []
	},
	uu: {
		name: "UU",
		section: "Singles",

		effectType: 'Format',
		rated: true,
		challengeShow: true,
		//searchShow: true,
		isTeambuilderFormat: true,
		ruleset: ['OU'],
		banlist: ['OU', 'BL', 'Drought', 'Sand Stream']
	},
	uususpecttest: {
		name: "UU (suspect test)",
		section: "Singles",

		effectType: 'Format',
		rated: true,
		challengeShow: true,
		searchShow: true,
		isTeambuilderFormat: true,
		ruleset: ['OU'],
		banlist: ['OU', 'BL', 'Drought', 'Sand Stream', 'Froslass']
	},
	ru: {
		name: "RU",
		section: "Singles",

		effectType: 'Format',
		rated: true,
		challengeShow: true,
		//searchShow: true,
		isTeambuilderFormat: true,
		ruleset: ['UU'],
		banlist: ['UU', 'BL2', 'Shell Smash + Baton Pass']
	},
	rususpecttest: {
		name: "RU (suspect test)",
		section: "Singles",

		effectType: 'Format',
		rated: true,
		challengeShow: true,
		searchShow: true,
		isTeambuilderFormat: true,
		ruleset: ['UU'],
		banlist: ['UU', 'BL2', 'Shell Smash + Baton Pass']
	},
	nu: {
		name: "NU",
		section: "Singles",

		effectType: 'Format',
		rated: true,
		challengeShow: true,
		searchShow: true,
		isTeambuilderFormat: true,
		ruleset: ['RU'],
		banlist: ['RU','BL3']
	},
	pu: {
		name: "PU",
		section: "Singles",

		effectType: 'Format',
		challengeShow: true,
		isTeambuilderFormat: true,
		ruleset: ['NU'],
		banlist: ["Charizard", "Wartortle", "Kadabra", "Golem", "Haunter", "Exeggutor", "Weezing", "Kangaskhan", "Pinsir", "Lapras", "Ampharos", "Misdreavus", "Piloswine", "Miltank", "Ludicolo", "Swellow", "Gardevoir", "Ninjask", "Torkoal", "Cacturne", "Altaria", "Armaldo", "Gorebyss", "Regirock", "Regice", "Bastiodon", "Floatzel", "Drifblim", "Skuntank", "Lickilicky", "Probopass", "Rotom-Fan", "Samurott", "Musharna", "Gurdurr", "Sawk", "Carracosta", "Garbodor", "Sawsbuck", "Alomomola", "Golurk", "Braviary", "Articuno", "Electabuzz", "Electrode", "Marowak", "Liepard", "Tangela", "Eelektross", "Ditto", "Seismitoad", "Zangoose", "Roselia", "Zebstrika", "Serperior", "Metang", "Tauros", "Torterra", "Cradily", "Primeape", "Munchlax", "Scolipede", "Jynx"]
	},
	nfe: {
		name: "NFE",
		section: "Singles",

		effectType: 'Format',
		challengeShow: true,
		isTeambuilderFormat: true,
		ruleset: ['NU', 'Not Fully Evolved'],
		banlist: []
	}, 
	lc: {
		name: "LC",
		section: "Singles",

		effectType: 'Format',
		maxLevel: 5,
		rated: true,
		challengeShow: true,
		searchShow: true,
		isTeambuilderFormat: true,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Sonicboom', 'Dragon Rage', 'Berry Juice', 'Carvanha', 'Meditite', 'Gligar', 'Scyther', 'Sneasel', 'Tangela', 'Vulpix', 'Yanma', 'Soul Dew']
	},
	cap: {
		name: "CAP",
		section: "Singles",

		effectType: 'Format',
		rated: true,
		challengeShow: true,
		searchShow: true,
		isTeambuilderFormat: true,
		ruleset: ['CAP Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
},
	gbusingles: {
		name: "GBU Singles",
		section: "Singles",

		effectType: 'Format',
		challengeShow: true,
		rated: true,
		searchShow: true,
		validateSet: function(set) {
		if (!set.level || set.level >= 50) set.forcedLevel = 50;
			return [];
		},
		onBegin: function() {
			this.debug('cutting down to 3');
			this.p1.pokemon = this.p1.pokemon.slice(0,3);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,3);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		ruleset: ['Pokemon', 'Species Clause', 'Item Clause', 'Team Preview GBU'],
		banlist: ['Unreleased', 'Illegal', 'Sky Drop', 'Dark Void', 'Soul Dew',
		'Mewtwo', 'Mew', 'Lugia', 'Ho-Oh', 'Celebi', 'Kyogre', 'Groudon',
		'Rayquaza', 'Jirachi', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Speed', 'Deoxys-Defense',
		'Chatot', 'Dialga', 'Palkia', 'Giratina', 'Giratina-Origin', 'Phione',
		'Manaphy', 'Darkrai', 'Shaymin', 'Shaymin-Sky',
		'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire',
		'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison',
		'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
		'Victini', 'Reshiram', 'Zekrom', 'Kyurem', 'Kyurem-Black', 'Kyurem-White',
		'Keldeo', 'Keldeo-Resolute', 'Meloetta', 'Genesect'
		]
	},




////////////////Tervari Tiers
///////////////////////////////////////////////////////////////////////////////////////////
        tervarirandombattle: {
                name: "Tervari Random Battle",
                section: "Tervari Random Tiers",

                mod: 'tervari',
                effectType: 'Format',
                team: 'random',
                canUseRandomTeam: true,
                searchDefault: true,
                rated: true,
                challengeShow: true,
                searchShow: true,
                ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
        },
        tervarichallengecup: {
                name: "Tervari Challenge Cup",
                section: "Tervari Random Tiers",

                mod: 'tervari',
                effectType: 'Format',
                team: 'randomCC',
                canUseRandomTeam: true,
                rated: true,
                challengeShow: true,
                searchShow: true,
                ruleset: ['PotD', 'Pokemon', 'HP Percentage Mod']
        },
        tervarichallengecup1vs1: {
                name: "Tervari Challenge Cup 1-vs-1",
                section: "Tervari Random Tiers",

                mod: 'tervari',
                effectType: 'Format',
                team: 'randomCC',
                canUseRandomTeam: true,
                rated: true,
                challengeShow: true,
                searchShow: true,
                ruleset: ['PotD', 'Pokemon', 'Team Preview 1v1', 'HP Percentage Mod'],
                onBegin: function() {
                        this.debug('Cutting down to 1');
                        this.p1.pokemon = this.p1.pokemon.slice(0, 1);
                        this.p1.pokemonLeft = this.p1.pokemon.length;
                        this.p2.pokemon = this.p2.pokemon.slice(0, 1);
                        this.p2.pokemonLeft = this.p2.pokemon.length;
                }
        },
        tervariou: {
                name: "Tervari OU",
                section: "Tervari Tiers",

                mod: 'tervari',
                effectType: 'Format',
                challengeDefault: true,
                rated: true,
                challengeShow: true,
                searchShow: true,
                isTeambuilderFormat: true,
                ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
                banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Drought ++ Hotshot', 'Soul Dew']        
        },
        tervariubers: {
                name: "Tervari Ubers",
                section: "Tervari Tiers",

                mod: 'tervari',
                effectType: 'Format',
                rated: true,
                challengeShow: true,
                searchShow: true,
                isTeambuilderFormat: true,
                ruleset: ['Pokemon', 'Team Preview', 'Sleep Clause Mod', 'Standard Ubers'],
                banlist: []
        },
        tervarimu: {
                name: "Tervari MU",
                section: "Tervari Tiers",

                mod: 'tervari',
                effectType: 'Format',
                rated: true,
                challengeShow: true,
                searchShow: true,
                isTeambuilderFormat: true,
                ruleset: ['OU'],
                banlist: ['OU', 'BL', 'Drought', 'Sand Stream']
        },
        tervariuu: {
                name: "Tervari UU",
                section: "Tervari Tiers",

                mod: 'tervari',
                effectType: 'Format',
                rated: true,
                challengeShow: true,
                searchShow: true,
                isTeambuilderFormat: true,
                ruleset: ['OU'],
                banlist: ['MU', 'BL2', 'Drought', 'Sand Stream']
        },        
        tervariru: {
                name: "Tervari RU",
                section: "Tervari Tiers",

                mod: 'tervari',
                effectType: 'Format',
                rated: true,
                challengeShow: true,
                searchShow: true,
                isTeambuilderFormat: true,
                ruleset: ['UU'],
                banlist: ['UU', 'BL3', 'Shell Smash + Baton Pass']
        },
        tervarinu: {
                name: "Tervari NU",
                section: "Tervari Tiers",

                mod: 'tervari',
                effectType: 'Format',
                rated: true,
                challengeShow: true,
                searchShow: true,
                isTeambuilderFormat: true,
                ruleset: ['RU'],
                banlist: ['RU','BL4']
        },
        tervaripu: {
                name: "Tervari PU",
                section: "Tervari Tiers",

                mod: 'tervari',
                effectType: 'Format',
                rated: true,
                challengeShow: true,
                searchShow: true,
                isTeambuilderFormat: true,
                ruleset: ['NU'],
                banlist: ['NU','BL5']
        },
        tervarilc: {
                name: "Tervari LC",
                section: "Tervari Tiers",

                mod: 'tervari',
                effectType: 'Format',
                maxLevel: 5,
                rated: true,
                challengeShow: true,
                searchShow: true,
                isTeambuilderFormat: true,
                ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
                banlist: ['Sonicboom', 'Dragon Rage', 'Berry Juice', 'Carvanha', 'Meditite', 'Gligar', 'Scyther', 'Sneasel', 'Tangela', 'Vulpix', 'Yanma', 'Soul Dew']
        },
            tervaridoubles: {
                name: "Tervari Doubles",
                section: "Tervari Double Tiers",

                mod: 'tervari',
                effectType: 'Format',
                gameType: 'doubles',
                challengeShow: true,
                searchShow: true,
                rated: true,
                ruleset: ['Pokemon', 'Team Preview', 'Sleep Clause Mod', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Evasion Abilities Clause', 'HP Percentage Mod'],
                banlist: ['Unreleased', 'Illegal', 'Sky Drop', 'Dark Void', 'Soul Dew',
                        'Mewtwo',
                        'Lugia',
                        'Ho-Oh',
                        'Kyogre',
                        'Groudon',
                        'Rayquaza',
                        'Dialga',
                        'Palkia',
                        'Giratina', 'Giratina-Origin',
                        'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
                        'Reshiram',
                        'Zekrom',
                        'Kyurem-White'
                ]
        },
        tervariuberdoubles: {
                name: "Tervari Uber Doubles",
                section: "Tervari Double Tiers",

                mod: 'tervari',
                effectType: 'Format',
                gameType: 'doubles',
                challengeShow: true,
                searchShow: true,
                rated: true,
                ruleset: ['Pokemon', 'Team Preview', 'Sleep Clause Mod', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Evasion Abilities Clause', 'HP Percentage Mod'],
                banlist: ['Unreleased', 'Illegal', 'Sky Drop']
        },
           // Doubles
        ///////////////////////////////////////////////////////////////////

        doublesvgc2013: {
		name: "Doubles VGC 2013",
		section: 'Doubles',

		effectType: 'Format',
		gameType: 'doubles',
		rated: true,
		challengeShow: true,
		searchShow: true,
		onBegin: function() {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0,4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Team Preview VGC', 'Species Clause', 'Item Clause'],
		banlist: ['Unreleased', 'Illegal', 'Sky Drop', 'Dark Void', 'Soul Dew',
			'Mewtwo',
			'Mew',
			'Lugia',
			'Ho-Oh',
			'Celebi',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Jirachi',
			'Deoxys', 'Deoxys-Attack', 'Deoxys-Speed', 'Deoxys-Defense',
			'Chatot',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Phione',
			'Manaphy',
			'Darkrai',
			'Shaymin', 'Shaymin-Sky',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Victini',
			'Reshiram',
			'Zekrom',
			'Kyurem', 'Kyurem-Black', 'Kyurem-White',
			'Keldeo', 'Keldeo-Resolute',
			'Meloetta',
			'Genesect'
		]
	},
	smogondoubles: {
		name: "Smogon Doubles",
		section: 'Doubles',

		effectType: 'Format',
		gameType: 'doubles',
		challengeShow: true,
		searchShow: true,
		rated: true,
		ruleset: ['Pokemon', 'Team Preview', 'Sleep Clause Mod', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Evasion Abilities Clause', 'HP Percentage Mod'],
		banlist: ['Unreleased', 'Illegal', 'Sky Drop', 'Dark Void', 'Soul Dew',
			'Mewtwo',
			'Lugia',
			'Ho-Oh',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Reshiram',
			'Zekrom',
			'Kyurem-White'
		]
	},
	doublesrandombattledev: {
		name: "Doubles Random Battle (dev)",
		section: 'Doubles',

		effectType: 'Format',
		gameType: 'doubles',
		team: 'random',
		canUseRandomTeam: true,
		rated: true,
		challengeShow: true,
		debug: true,
		ruleset: ['PotD', 'Pokemon', 'HP Percentage Mod']
	},
	doubleschallengecup: {
		name: "Doubles Challenge Cup",
		section: 'Doubles',

		effectType: 'Format',
		gameType: 'doubles',
		team: 'randomCC',
		canUseRandomTeam: true,
		rated: true,
		challengeShow: true,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	doublescustomgame: {
		name: "Doubles Custom Game",
		section: 'Doubles',

		effectType: 'Format',
		gameType: 'doubles',
		challengeShow: true,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 1000,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	},
        // Other Metagames
        ///////////////////////////////////////////////////////////////////
        
        onev1: {
                name: "1v1",
                section: "OM of the Month",

                effectType: 'Format',
                rated: true,
                challengeShow: true,
                searchShow: true,
                onBegin: function() {
                        this.p1.pokemon = this.p1.pokemon.slice(0,1);
                        this.p1.pokemonLeft = this.p1.pokemon.length;
                        this.p2.pokemon = this.p2.pokemon.slice(0,1);
                        this.p2.pokemonLeft = this.p2.pokemon.length;
                },
                ruleset: ['HP Percentage Mod', 'Pokemon', 'OHKO Clause', 'Evasion Moves Clause', 'Moody Clause'],
                banlist: ['Unreleased', 'Illegal', 'Soul Dew',
                        'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
                        'Darkrai', 
                        'Deoxys', 'Deoxys-Attack',
                        'Dialga', 
                        'Giratina', 'Giratina-Origin', 
                        'Groudon', 
                        'Ho-Oh', 
                        'Kyogre', 
                        'Kyurem-White', 
                        'Lugia', 
                        'Mewtwo',
                        'Palkia', 
                        'Rayquaza', 
                        'Reshiram', 
                        'Shaymin-Sky', 
                        'Zekrom',
                        'Memento', 'Explosion', 'Perish Song', 'Destiny Bond', 'Healing Wish', 'Selfdestruct', 'Lunar Dance', 'Final Gambit'
                ]
        },
        onev1TP: {
                name: "1v1 Team Preview",
                section: "OM of the Month",

                effectType: 'Format',
                rated: true,
                challengeShow: true,
                searchShow: true,
                onBegin: function() {
                        this.debug('Cutting down to 1');
                        this.p1.pokemon = this.p1.pokemon.slice(0, 1);
                        this.p1.pokemonLeft = this.p1.pokemon.length;
                        this.p2.pokemon = this.p2.pokemon.slice(0, 1);
                        this.p2.pokemonLeft = this.p2.pokemon.length;
                },
                ruleset: ['HP Percentage Mod', 'Pokemon', 'OHKO Clause', 'Evasion Moves Clause', 'Moody Clause', 'Team Preview 1v1'],
                banlist: ['Unreleased', 'Illegal', 'Soul Dew',
                        'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
                        'Darkrai',
                        'Deoxys', 'Deoxys-Attack',
                        'Dialga',
                        'Giratina', 'Giratina-Origin',
                        'Groudon',
                        'Ho-Oh',
                        'Kyogre',
                        'Kyurem-White',
                        'Lugia',
                        'Mewtwo',
                        'Palkia',
                        'Rayquaza',
                        'Reshiram',
                        'Shaymin-Sky',
                        'Zekrom',
                        'Memento', 'Explosion', 'Perish Song', 'Destiny Bond', 'Healing Wish', 'Selfdestruct', 'Lunar Dance', 'Final Gambit'
                ]
        },
        twov2: {
                name: "2v2",
                section: "OM of the Month",

                effectType: 'Format',
                gameType: 'doubles',
                rated: true,
                challengeShow: true,
                searchShow: true,
                onBegin: function() {
                        this.debug('Cutting down to 2');
                        this.p1.pokemon = this.p1.pokemon.slice(0,2);
                        this.p1.pokemonLeft = this.p1.pokemon.length;
                        this.p2.pokemon = this.p2.pokemon.slice(0,2);
                        this.p2.pokemonLeft = this.p2.pokemon.length;
                },
                ruleset: ['HP Percentage Mod', 'Pokemon', 'OHKO Clause', 'Evasion Moves Clause', 'Moody Clause'],
                banlist: ['Unreleased', 'Illegal', 'Sky Drop', 'Dark Void', 'Soul Dew',
                        'Mewtwo',
                        'Lugia',
                        'Ho-Oh',
                        'Kyogre',
                        'Groudon',
                        'Rayquaza',
                        'Dialga',
                        'Palkia',
                        'Giratina', 'Giratina-Origin',
                        'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
                        'Reshiram',
                        'Zekrom',
                        'Kyurem-White',
                        'Memento', 'Explosion', 'Perish Song', 'Destiny Bond', 'Healing Wish', 'Selfdestruct', 'Lunar Dance', 'Final Gambit'
                ]
        },
        twov2TP: {
                name: "2v2 Team Preview",
                section: "OM of the Month",

                effectType: 'Format',
                gameType: 'doubles',
                rated: true,
                challengeShow: true,
                searchShow: true,
                onBegin: function() {
                        this.debug('Cutting down to 2');
                        this.p1.pokemon = this.p1.pokemon.slice(0,2);
                        this.p1.pokemonLeft = this.p1.pokemon.length;
                        this.p2.pokemon = this.p2.pokemon.slice(0,2);
                        this.p2.pokemonLeft = this.p2.pokemon.length;
                },
                ruleset: ['Pokemon', 'Sleep Clause Mod', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Evasion Abilities Clause', 'HP Percentage Mod', 'Team Preview 2v2'],
                banlist: ['Unreleased', 'Illegal', 'Sky Drop', 'Dark Void', 'Soul Dew',
                        'Mewtwo',
                        'Lugia',
                        'Ho-Oh',
                        'Kyogre',
                        'Groudon',
                        'Rayquaza',
                        'Dialga',
                        'Palkia',
                        'Giratina', 'Giratina-Origin',
                        'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
                        'Reshiram',
                        'Zekrom',
                        'Kyurem-White',
                        'Memento', 'Explosion', 'Perish Song', 'Destiny Bond', 'Healing Wish', 'Selfdestruct', 'Lunar Dance', 'Final Gambit'
                ]
        },
        seasonaljunejubilee: {
                name: "[Seasonal] June Jubilee",
                section: "OM of the Month",
                
                team: 'randomSeasonalJJ',
                canUseRandomTeam: true,
                effectType: 'Format',
                rated: true,
                challengeShow: true,
                searchShow: true,
                ruleset: ['HP Percentage Mod', 'Sleep Clause'],
                onBegin: function() {
                        this.add('-message', "Greetings, trainer! Delibird needs your help! It's lost in the US and it needs to find its way back to the arctic before summer starts! Help your Delibird while travelling north, but you must defeat the opponent before he reaches there first!");
                        this.setWeather('Sunny Day');
                        delete this.weatherData.duration;
                },
                onBeforeMove: function(pokemon, target, move) {
                        // Reshiram changes weather with its tail until you reach the arctic
                        if (pokemon.template.speciesid === 'reshiram' && pokemon.side.battle.turn < 15) {
                                var weatherMsg = '';
                                var dice = this.random(100);
                                if (dice < 25) {
                                        this.setWeather('Rain Dance');
                                        weatherMsg = 'a Drizzle';
                                } else if (dice < 50) {
                                        this.setWeather('Sunny Day');
                                        weatherMsg = 'a Sunny Day';
                                } else if (dice < 75) {
                                        this.setWeather('Hail');
                                        weatherMsg = 'Hail';
                                } else {
                                        this.setWeather('Sandstorm');
                                        weatherMsg = 'a Sandstorm';
                                }
                                this.add('-message', "Reshiram caused " + weatherMsg + " with its tail!");
                                delete this.weatherData.duration;
                        }
                },
                onBeforeMove: function(pokemon) {
                        if (!pokemon.side.battle.seasonal) pokemon.side.battle.seasonal = {'none':false, 'drizzle':false, 'hail':false};
                        if (pokemon.side.battle.turn >= 4 && pokemon.side.battle.seasonal.none === false) {
                                this.add('-message', "You are travelling north and you have arrived to North Dakota! There's a clear sky and the temperature is lower here.");
                                this.clearWeather();
                                pokemon.side.battle.seasonal.none = true;
                        }
                        if (pokemon.side.battle.turn >= 8 && pokemon.side.battle.seasonal.drizzle === false) {
                                this.add('-message', "You are travelling further north and you have arrived to Edmonton! It started raining a lot... and it's effing cold.");
                                this.setWeather('Rain Dance');
                                delete this.weatherData.duration;
                                pokemon.side.battle.seasonal.drizzle = true;
                        }
                        if (pokemon.side.battle.turn >= 12 && pokemon.side.battle.seasonal.hail === false) {
                                this.add('-message', "You have arrived to the arctic! Defeat the other trainer so Delibird can be free!");
                                this.setWeather('Hail');
                                delete this.weatherData.duration;
                                pokemon.side.battle.seasonal.hail = true;
                        }
                },
                onFaint: function(pokemon) {
                        if (pokemon.template.id === 'delibird') {
                                var name = pokemon.side.name;
                                var winner = '';
                                if (pokemon.side.id === 'p1') {
                                        winner = 'p2';
                                } else {
                                        winner = 'p1';
                                }
                                this.add('-message', "No!! You let Delibird down. He trusted you. You lost the battle, " + name + ". But you lost something else: your PokÈmon's trust.");
                                pokemon.battle.win(winner);
                        }
                }
        },
        challengecup: {
                name: "Challenge Cup",
                section: "Other Metagames",

                effectType: 'Format',
                team: 'randomCC',
                canUseRandomTeam: true,
                rated: true,
                challengeShow: true,
                searchShow: true,
                ruleset: ['PotD', 'Pokemon', 'HP Percentage Mod']
        },
        challengecup1vs1: {
                name: "Challenge Cup 1-vs-1",
                section: "Other Metagames",

                effectType: 'Format',
                team: 'randomCC',
                canUseRandomTeam: true,
                rated: true,
                challengeShow: true,
                searchShow: true,
                ruleset: ['PotD', 'Pokemon', 'Team Preview 1v1', 'HP Percentage Mod'],
                onBegin: function() {
                        this.debug('Cutting down to 1');
                        this.p1.pokemon = this.p1.pokemon.slice(0, 1);
                        this.p1.pokemonLeft = this.p1.pokemon.length;
                        this.p2.pokemon = this.p2.pokemon.slice(0, 1);
                        this.p2.pokemonLeft = this.p2.pokemon.length;
                }
        },
        hackmons: {
                name: "Hackmons",
                section: "Other Metagames",

                effectType: 'Format',
                rated: true,
                challengeShow: true,
                searchShow: true,
                isTeambuilderFormat: true,
                ruleset: ['Pokemon'],
                banlist: []
        },
        balancedhackmons: {
                name: "Balanced Hackmons",
                section: "Other Metagames",

                effectType: 'Format',
                rated: true,
                challengeShow: true,
                searchShow: true,
                isTeambuilderFormat: true,
                ruleset: ['Pokemon', 'OHKO Clause'],
                banlist: ['Wonder Guard', 'Pure Power', 'Huge Power', 'Shadow Tag', 'Arena Trap']
        },
        haxmons: {
                name: "Haxmons",
                section: "Other Metagames",

                effectType: 'Format',
                rated: true,
                challengeShow: true,
                searchShow: true,
                isTeambuilderFormat: true,
                ruleset: ['Hax Clause', 'Pokemon', 'Evasion Abilities Clause', 'Team Preview', 'Sleep Clause Mod', 'Freeze Clause', 'standard'],
                banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew', 'Kings Rock', 'Razor Fang']
        },
      // haxmonsdoubles: {
        //        name: "Double Haxmons",
          //      section: "Other Metagames",
	//	gametype: 'doubles',
          //      effectType: 'Format',
            //    rated: true,
              //  challengeShow: true,
                //searchShow: true,
         //       isTeambuilderFormat: true,
           //     ruleset: ['Hax Clause', 'Pokemon', 'Evasion Abilities Clause', 'Team Preview','Freeze Clause'],
             //   banlist: ['Uber', 'Kings Rock', 'Razor Fang']
      //  },
 //       uberhaxmons: {
   //             name: "Haxmons Uber",
     //           section: "Other Metagames",
//
  //              effectType: 'Format',
    //            rated: true,
      //          challengeShow: true,
        //        searchShow: true,
          //      isTeambuilderFormat: true,
            //    ruleset: ['Hax Clause', 'Pokemon', 'Evasion Abilities Clause', 'Team Preview', 'Sleep Clause Mod', 'Freeze Clause'],
              //  banlist: ['Kings Rock', 'Razor Fang']
 //       },
	randomhaxmons: {
               name: "Random Haxmons",
               section: "Other Metagames",

               effectType: 'Format',
                team: 'random',
                canUseRandomTeam: true,
                searchDefault: true,
                rated: true,
                challengeShow: true,
                searchShow: true,
                ruleset: ['Hax Clause', 'PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
        nohaxmons: {
                name: "No Haxmons",
                section: "Other Metagames",

               mod: 'nohax',
               effectType: 'Format',
                challengeShow: true,
                isTeambuilderFormat: true,
                searchShow: true,
                rated: true,
                ruleset: ['No Hax Clause', 'Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
                banlist: ['Drizzle ++ Swift Swim', 'Soul Dew',
                	'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
                        'Darkrai', 
                        'Deoxys', 'Deoxys-Attack',
                        'Dialga', 
                        'Excadrill',
                        'Giratina', 'Giratina-Origin', 
                        'Groudon', 
                        'Ho-Oh', 
                        'Kyogre', 
                        'Kyurem-White', 
                        'Lugia', 
                        'Mewtwo',
                        'Palkia', 
                        'Rayquaza', 
                        'Reshiram', 
                        'Zekrom',]
        },
	randomnohaxmons: {
               name: "Random No Haxmons",
               section: "Other Metagames",

               mod: 'nohax',
               effectType: 'Format',
                team: 'random',
                canUseRandomTeam: true,
                searchDefault: true,
                rated: true,
                challengeShow: true,
                searchShow: true,
                ruleset: ['No Hax Clause', 'PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
        gennextou: {
                name: "Gen-NEXT OU",
                section: "Other Metagames",

                mod: 'gennext',
                effectType: 'Format',
                challengeShow: true,
                ruleset: ['Pokemon', 'Standard NEXT', 'Team Preview'],
                banlist: ['Uber']
        },
        oumonotype: {
                name: "OU Monotype",
                section: "Other Metagames",

                effectType: 'Format',
                challengeShow: true,
                isTeambuilderFormat: true,
                ruleset: ['Pokemon', 'Standard', 'Same Type Clause', 'Evasion Abilities Clause', 'Team Preview'],
                banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
        },
        glitchmons: {
                name: "Glitchmons",
                section: "Other Metagames",

                effectType: 'Format',
                rated: true,
                challengeShow: true,
                isTeambuilderFormat: true,
                ruleset: ['Pokemon', 'Team Preview', 'HP Percentage Mod'],
                banlist: ['Illegal', 'Unreleased'],
                mimicGlitch: true
        },
        lcubers: {
                name: "LC Ubers",
                section: "Other Metagames",

                effectType: 'Format',
                maxLevel: 5,
                challengeShow: true,
                ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
                banlist: ['Sonicboom', 'Dragon Rage', 'Berry Juice', 'Soul Dew']
        },
        lcuu: {
                name: "LC UU",
                section: "Other Metagames",

                effectType: 'Format',
                maxLevel: 5,
                challengeShow: true,
                ruleset: ['LC'],
                banlist: ['Abra', 'Aipom', 'Archen', 'Axew', 'Bronzor', 'Chinchou', 'Clamperl', 'Cottonee', 'Cranidos', 'Croagunk', 'Diglett', 'Drifloon', 'Drilbur', 'Dwebble', 'Ferroseed', 'Foongus', 'Frillish', 'Gastly', 'Hippopotas', 'Houndour', 'Koffing', 'Larvesta', 'Lileep', 'Machop', 'Magnemite', 'Mienfoo', 'Misdreavus', 'Munchlax', 'Murkrow', 'Pawniard', 'Ponyta', 'Porygon', 'Riolu', 'Sandshrew', 'Scraggy', 'Shellder', 'Shroomish', 'Slowpoke', 'Snover', 'Staryu', 'Tentacool', 'Timburr', 'Tirtouga']
        },
        dreamworld: {
                name: "Dream World",
                section: "Other Metagames",

                effectType: 'Format',
                challengeShow: true,
                isTeambuilderFormat: true,
                ruleset: ['Pokemon', 'Standard DW', 'Team Preview'],
                banlist: []
        },
        tiershift: {
                name: "Tier Shift",
                section: "Other Metagames",

                mod: 'tiershift',
                effectType: 'Format',
                rated: true,
                challengeShow: true,
                searchShow: true,
                isTeambuilderFormat: true,
                ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
                banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
        },

        supershift: {
                name: "Super Shift",
                section: "Other Metagames",

                mod: 'snaqshift',
                effectType: 'Format',
                rated: true,
                challengeShow: true,
                searchShow: true,
                isTeambuilderFormat: true,
                ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
        },
        
	capv2: {
        	name: "CAP V. 2",
        	section: "Other Metagames",
        	
       		mod: 'capv2',
        	effectType: 'Format',
        	challengeDefault: true,
        	rated: true,
        	challengeShow: true,
        	searchShow: true,
        	isTeambuilderFormat: true,
        	ruleset: ['CAP Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
        	banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
	},
	
	
	puremeta: {
		name: "Pure Meta",
		section: "Other Metagames",

		effectType: 'Format',
		challengeDefault: true,
		rated: true,
		challengeShow: true,
		searchShow: true,
		isTeambuilderFormat: true,
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew'],
		validateSet: function (set, format) {
			var problems = [];
			var lmove = "";
			var j = 0;
			var movelegal = false;
			var template = this.getTemplate(string(set.species));
			var move = ""
			for (var i=0; i<set.moves.length; i++) {
				movelegal = false;
				move = string(set.moves[i])
				for (j=0; j<template.learnset[move].length; j++) {
					lmove = template.learnset[move][j].substr(1,1);
					if (lmove === "L") movelegal = true;
				}
				if (!(movelegal)) problems.push(string(set.species) + ' has ' + move);
			}
			return problems;
		}
	},
	
	
        stabmons: {
                name: "Stabmons",
                section: "Other Metagames",

                effectType: 'Format',
                rated: true,
        	     challengeShow: true,
                searchShow: true,
                debug: true,
                ruleset: ['Pokemon', 'Evasion Abilities Clause', 'Team Preview', 'Sleep Clause', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause'],
                banlist: ['Unreleased', 'Uber', 'Drizzle ++ Swift Swim', 'Soul Dew'],
                validateSet: function (set, format) {
                        var problems = [];
                        // Check that moves aren't repeated
                        var moves = [];
                        if (set.moves) {
                                var hasMove = {};
                                for (var i=0; i<set.moves.length; i++) {
                                        var move = this.getMove(set.moves[i]);
                                        var moveid = move.id;
                                        if (hasMove[moveid]) continue;
                                        hasMove[moveid] = true;
                                        moves.push(set.moves[i]);
                                }
                        }
                        set.moves = moves;

                        // Check learnset for illegalities BUT same type moves
                        var lsetData = {set:set, format:format};
                        var template = this.getTemplate(string(set.species));
                        for (var i=0; i<set.moves.length; i++) {
                                if (!set.moves[i]) continue;
                                var move = this.getMove(string(set.moves[i]));
                                // Check if the Pokémon has the move type
                                var check = true;
                                for (var t in template.types) {
                                        if (template.types[t] === move.type) check = false;
                                }
                        }

                        // Check EVs
                        var totalEV = 0;
                        for (var k in set.evs) {
                                if (typeof set.evs[k] !== 'number') {
                                        set.evs[k] = 0;
                                }
                                totalEV += set.evs[k];
                        }
                        if (totalEV > 510) {
                                problems.push(name+" has more than 510 total EVs.");
                        }

                        return problems;
                }
        },
        bluntmons: {
                name: "Bluntmons",
                section: "Other Metagames",

                effectType: 'Format',
                rated: true,
        	     challengeShow: true,
                searchShow: true,
                debug: true,
                ruleset: ['Pokemon', 'Evasion Abilities Clause', 'Team Preview', 'Sleep Clause', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause'],
                banlist: ['Unreleased', 'Uber', 'Drizzle ++ Swift Swim', 'Soul Dew'],
                validateSet: function (set, format) {
                        var problems = [];
                        // Check that moves aren't repeated
                        var moves = [];
                        if (set.moves) {
                                var hasMove = {};
                                for (var i=0; i<set.moves.length; i++) {
                                        var move = this.getMove(set.moves[i]);
                                        var moveid = move.id;
                                        if (hasMove[moveid]) continue;
                                        hasMove[moveid] = true;
                                        moves.push(set.moves[i]);
                                }
                        }
                        set.moves = moves;

                        // Check learnset for illegalities INCLUDING same type moves that aren't status
                        var lsetData = {set:set, format:format};
                        var template = this.getTemplate(string(set.species));
                        for (var i=0; i<set.moves.length; i++) {
                                if (!set.moves[i]) continue;
                                var move = this.getMove(string(set.moves[i]));
                                // Check if the Pokémon has the move type
                                var check = true;
                                for (var t in template.types) {
                                        if (template.types[t] === move.type && move.category !== 'Status') {
                                        	problems.push(move.name+' is the same type as '+set.name+', and is not a Status move.');
                                        }
                                }
                        }

                        // Check EVs
                        var totalEV = 0;
                        for (var k in set.evs) {
                                if (typeof set.evs[k] !== 'number') {
                                        set.evs[k] = 0;
                                }
                                totalEV += set.evs[k];
                        }
                        if (totalEV > 510) {
                                problems.push(name+" has more than 510 total EVs.");
                        }

                        return problems;
                }
        },
    //    lessbasepower: {
    //            name: "Less Base Power",
    //            section: "Singles",
    //		  mod: 'lessbasepower',
    //            effectType: 'Format',
    //            challengeDefault: true,
    //            rated: true,
    //            challengeShow: true,
    //            searchShow: true,
    //            isTeambuilderFormat: true,
    //            ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
    //            banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
    //    },

 // divebattles: {
 //               name: "Dive Battle",
 //               section: "Other Metagames",

 //               effectType: 'Format',
 //               challengeDefault: true,
 //               rated: true,
 //               challengeShow: true,
 //               searchShow: true,
 //               isTeambuilderFormat: true,
 //               ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview','DiveBattle clause'],
 //               banlist: ['Uber', 'Drizzle', 'Soul Dew']
 //       },	
       specialstat: {
                name: "Special Stat",
                section: "Other Metagames",
		mod: 'special',
                effectType: 'Format',
                challengeDefault: true,
                rated: true,
                challengeShow: true,
                searchShow: true,
                isTeambuilderFormat: true,
                ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
                banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
        },

      splitmons: {
                name: "Splitmons",
                section: "Other Metagames",
		mod: 'split',
                effectType: 'Format',
                challengeDefault: true,
                rated: true,
                challengeShow: true,
                searchShow: true,
                isTeambuilderFormat: true,
                ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
                banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
        },



 //     levelone: {
   //             name: "Level 1",
     //           section: "Other Metagames",
//
  //              effectType: 'Format',
    //            maxForcedLevel: 1,
      //          rated: true,
        //        challengeShow: true,
          //      searchShow: true,
            //    isTeambuilderFormat: true,
              //  ruleset: ['Pokemon', 'Standard', 'Team Preview'],
                //banlist: ['Sonicboom', 'Dragon Rage', 'Berry Juice', 'Drought']
 //       },

    ne: {
                name: "NE",
                section: "Other Metagames",

                effectType: 'Format',
                rated: true,
                challengeShow: true,
                searchShow: true,
                isTeambuilderFormat: true,
                ruleset: ['Pokemon', 'Standard', 'Team Preview', 'NE'],
                banlist: ['Soul Dew']
        },
        // Past Generations
        ///////////////////////////////////////////////////////////////////

        gen4oubeta: {
                name: "[Gen 4] OU (beta)",
                section: "Past Generations",

                mod: 'gen4',
                effectType: 'Format',
                challengeDefault: true,
                rated: true,
                challengeShow: true,
                searchShow: true,
                isTeambuilderFormat: true,
                ruleset: ['Pokemon', 'Standard'],
                banlist: ['Uber']
        },
        gen4uubeta: {
                name: "[Gen 4] UU (beta)",
                section: "Past Generations",

                mod: 'gen4',
                effectType: 'Format',
                challengeDefault: true,
                rated: true,
                challengeShow: true,
                searchShow: true,
                isTeambuilderFormat: true,
                ruleset: ['Pokemon', 'Standard'],
                banlist: ['Uber', 'OU', 'BL']
        },
        gen4hackmons: {
                name: "[Gen 4] Hackmons",
                section: "Past Generations",

                mod: 'gen4',
                effectType: 'Format',
                challengeShow: true,
                ruleset: ['Pokemon', 'HP Percentage Mod'],
                banlist: []
        },
        gen4customgame: {
                name: "[Gen 4] Custom Game",
                section: "Past Generations",

                mod: 'gen4',
                effectType: 'Format',
                challengeShow: true,
                canUseRandomTeam: true,
                debug: true,
                ruleset: []
        },
        gen3hackmons: {
                name: "[Gen 3] Hackmons",
                section: "Past Generations",

                mod: 'gen3',
                effectType: 'Format',
                challengeShow: true,
                ruleset: ['Pokemon', 'HP Percentage Mod'],
                banlist: []
        },
        gen3customgame: {
                name: "[Gen 3] Custom Game",
                section: "Past Generations",

                mod: 'gen3',
                effectType: 'Format',
                challengeShow: true,
                ruleset: []
        },
        gen1oubeta: {
                name: "[Gen 1] OU (beta)",
                section: "Past Generations",

                mod: 'gen1',
                effectType: 'Format',
                challengeDefault: true,
                rated: true,
                challengeShow: true,
                searchShow: true,
                isTeambuilderFormat: true,
                ruleset: ['Pokemon', 'Standard'],
                banlist: ['Uber', 'Wrap', 'Fire Spin', 'Clamp', 'Bind']
        },
        gen1customgame: {
                name: "[Gen 1] Custom Game",
                section: "Past Generations",

                mod: 'gen1',
                effectType: 'Format',
                challengeShow: true,
                debug: true,
                ruleset: ['Pokemon']
        },


        standardnext: {
                effectType: 'Banlist',
                ruleset: ['Sleep Clause Mod', 'Species Clause', 'OHKO Clause', 'HP Percentage Mod'],
                banlist: ['Unreleased', 'Illegal', 'Double Team'],
                validateSet: function(set) {
                        // limit one of each move in Standard
                        var moves = [];
                        if (set.moves) {
                                var hasMove = {};
                                for (var i=0; i<set.moves.length; i++) {
                                        var move = this.getMove(set.moves[i]);
                                        var moveid = move.id;
                                        if (hasMove[moveid]) continue;
                                        hasMove[moveid] = true;
                                        moves.push(set.moves[i]);
                                }
                        }
                        set.moves = moves;
                }
        },
     tervarihackmons: {
                name: "Tervari Hackmons",
                section: "Other Tervari Metagames",

                mod: 'tervari',
                effectType: 'Format',
                rated: true,
                challengeShow: true,
                searchShow: true,
                isTeambuilderFormat: true,
                ruleset: ['Pokemon'],
                banlist: []
        },
        tervaribalancedhackmons: {
                name: "Tervari Balanced Hackmons",
                section: "Other Tervari Metagames",

                mod: 'tervari',
                effectType: 'Format',
                rated: true,
                challengeShow: true,
                searchShow: true,
                isTeambuilderFormat: true,
                ruleset: ['Pokemon', 'OHKO Clause'],
                banlist: ['Wonder Guard', 'Pure Power', 'Huge Power', 'Shadow Tag', 'Arena Trap']
        },
        tervarihaxmons: {
                name: "Tervari Haxmons",
                section: "Other Tervari Metagames",
		mod: 'tervari',
                effectType: 'Format',
                rated: true,
                challengeShow: true,
                searchShow: true,
                isTeambuilderFormat: true,
                ruleset: ['Hax Clause', 'Pokemon', 'Evasion Abilities Clause', 'Team Preview', 'Sleep Clause Mod', 'Freeze Clause'],
                banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew', 'Kings Rock', 'Razor Fang']
        },                

         // Rulesets
        ///////////////////////////////////////////////////////////////////

	divebattleclause: {
                effectType: 'Rule',
                onStart: function() {
			this.add('rule', 'Dive Battle: Only Water And Ice-type pokemon are allowed.');
		},
                validateSet: function(set) {
                        var template = this.getTemplate(set.types || set.types);
                        if (set.type !== 'Water' && set.type !== 'Ice') {
                                return [set.species+" is banned because it is not of the Water type or the Ice Type."];
                        }
                }
        },
           standard: {
                effectType: 'Banlist',
                ruleset: ['Sleep Clause Mod', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'HP Percentage Mod'],
                banlist: ['Unreleased', 'Illegal'],
                validateSet: function(set) {
                        // limit one of each move in Standard
                        var moves = [];
                        if (set.moves) {
                                var hasMove = {};
                                for (var i=0; i<set.moves.length; i++) {
                                        var move = this.getMove(set.moves[i]);
                                        var moveid = move.id;
                                        if (hasMove[moveid]) continue;
                                        hasMove[moveid] = true;
                                        moves.push(set.moves[i]);
                                }
                        }
                        set.moves = moves;
                }
        },
        standardubers: {
                effectType: 'Banlist',
                ruleset: ['Species Clause', 'Moody Clause', 'OHKO Clause', 'HP Percentage Mod'],
                banlist: ['Unreleased', 'Illegal'],
                validateSet: function(set) {
                        // limit one of each move in Standard
                        var moves = [];
                        if (set.moves) {
                                var hasMove = {};
                                for (var i=0; i<set.moves.length; i++) {
                                        var move = this.getMove(set.moves[i]);
                                        var moveid = move.id;
                                        if (hasMove[moveid]) continue;
                                        hasMove[moveid] = true;
                                        moves.push(set.moves[i]);
                                }
                        }
                        set.moves = moves;
                }
        },
        standarddw: {
                effectType: 'Banlist',
                ruleset: ['Sleep Clause Mod', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'HP Percentage Mod'],
                banlist: ['Illegal', 'Moody'],
                validateSet: function(set) {
                        // limit one of each move in Standard
                        var moves = [];
                        if (set.moves) {
                                var hasMove = {};
                                for (var i=0; i<set.moves.length; i++) {
                                        var move = this.getMove(set.moves[i]);
                                        var moveid = move.id;
                                        if (hasMove[moveid]) continue;
                                        hasMove[moveid] = true;
                                        moves.push(set.moves[i]);
                                }
                        }
                        set.moves = moves;
                }
        },
        pokemon: {
                effectType: 'Banlist',
                validateSet: function(set, format) {
                        var item = this.getItem(set.item);
                        var template = this.getTemplate(set.species);
                        var problems = [];

                        if (set.species === set.name) delete set.name;
                        if (template.gen > this.gen) {
                                problems.push(set.species+' does not exist in gen '+this.gen+'.');
                        } else if (template.isNonstandard) {
                                problems.push(set.species+' is not a real Pokemon.');
                        }
                        if (set.ability) {
                                var ability = this.getAbility(set.ability);
                                if (ability.gen > this.gen) {
                                        problems.push(ability.name+' does not exist in gen '+this.gen+'.');
                                } else if (ability.isNonstandard) {
                                        problems.push(ability.name+' is not a real ability.');
                                }
                        }
                        if (set.moves) for (var i=0; i<set.moves.length; i++) {
                                var move = this.getMove(set.moves[i]);
                                if (move.gen > this.gen) {
                                        problems.push(move.name+' does not exist in gen '+this.gen+'.');
                                } else if (move.isNonstandard) {
                                        problems.push(move.name+' is not a real move.');
                                }
                        }
                        if (item) {
                                if (item.gen > this.gen) {
                                        problems.push(item.name+' does not exist in gen '+this.gen+'.');
                                } else if (item.isNonstandard) {
                                        problems.push(item.name + ' is not a real item.');
                                }
                        }
                        if (set.moves && set.moves.length > 4) {
                                problems.push((set.name||set.species) + ' has more than four moves.');
                        }
                        if (set.level && set.level > 100) {
                                problems.push((set.name||set.species) + ' is higher than level 100.');
                        }

                        // ----------- legality line ------------------------------------------
                        if (!format.banlistTable || !format.banlistTable['illegal']) return problems;
                        // everything after this line only happens if we're doing legality enforcement

                        if (template.num == 351) { // Castform
                                set.species = 'Castform';
                        }
                        if (template.num == 421) { // Cherrim
                                set.species = 'Cherrim';
                        }
                        if (template.num == 493) { // Arceus
                                if (set.ability === 'Multitype' && item.onPlate) {
                                        set.species = 'Arceus-'+item.onPlate;
                                } else {
                                        set.species = 'Arceus';
                                }
                        }
                        if (template.num == 555) { // Darmanitan
                                set.species = 'Darmanitan';
                        }
                        if (template.num == 487) { // Giratina
                                if (item.id === 'griseousorb') {
                                        set.species = 'Giratina-Origin';
                                        set.ability = 'Levitate';
                                } else {
                                        set.species = 'Giratina';
                                        set.ability = 'Pressure';
                                }
                        }
                        if (template.num == 647) { // Keldeo
                                if (set.species === 'Keldeo-Resolution' && set.moves.indexOf('Secret Sword') < 0) {
                                        set.species = 'Keldeo';
                                }
                        }
                        if (template.num == 648) { // Meloetta
                                set.species = 'Meloetta';
                        }
                        return problems;
                }
        },
        cappokemon: {
                effectType: 'Rule',
                validateSet: function(set, format) {
                        // don't return
                        this.getEffect('Pokemon').validateSet.call(this, set, format);
                }
        },
        legal: {
                effectType: 'Banlist',
                banlist: ['Crobat+BraveBird+Hypnosis']
        },
        potd: {
                effectType: 'Rule',
                onPotD: '',
                onStart: function() {
                        if (this.effect.onPotD) {
                                this.add('rule', 'Pokemon of the Day: '+this.effect.onPotD);
                        }
                }
        },
        teampreviewvgc: {
                onStartPriority: -10,
                onStart: function() {
                        this.add('clearpoke');
                        for (var i=0; i<this.sides[0].pokemon.length; i++) {
                                this.add('poke', this.sides[0].pokemon[i].side.id, this.sides[0].pokemon[i].details.replace(/Arceus(\-[a-zA-Z\?]+)?/, 'Arceus-*'));
                        }
                        for (var i=0; i<this.sides[1].pokemon.length; i++) {
                                this.add('poke', this.sides[1].pokemon[i].side.id, this.sides[1].pokemon[i].details.replace(/Arceus(\-[a-zA-Z\?]+)?/, 'Arceus-*'));
                        }
                },
                onTeamPreview: function() {
                        this.makeRequest('teampreview', 4);
                }
        },
        teampreview1v1: {
                onStartPriority: -10,
                onStart: function() {
                        this.add('clearpoke');
                        for (var i=0; i<this.sides[0].pokemon.length; i++) {
                                this.add('poke', this.sides[0].pokemon[i].side.id, this.sides[0].pokemon[i].details.replace(/Arceus(\-[a-zA-Z\?]+)?/, 'Arceus-*'));
                        }
                        for (var i=0; i<this.sides[1].pokemon.length; i++) {
                                this.add('poke', this.sides[1].pokemon[i].side.id, this.sides[1].pokemon[i].details.replace(/Arceus(\-[a-zA-Z\?]+)?/, 'Arceus-*'));
                        }
                },
                onTeamPreview: function() {
                        this.makeRequest('teampreview', 1);
                }
        },
           teampreview2v2: {
                onStartPriority: -10,
                onStart: function() {
                        this.add('clearpoke');
                        for (var i=0; i<this.sides[0].pokemon.length; i++) {
                                this.add('poke', this.sides[0].pokemon[i].side.id, this.sides[0].pokemon[i].details.replace(/Arceus(\-[a-zA-Z\?]+)?/, 'Arceus-*'));
                        }
                        for (var i=0; i<this.sides[1].pokemon.length; i++) {
                                this.add('poke', this.sides[1].pokemon[i].side.id, this.sides[1].pokemon[i].details.replace(/Arceus(\-[a-zA-Z\?]+)?/, 'Arceus-*'));
                        }
                },
                onTeamPreview: function() {
                        this.makeRequest('teampreview', 2);
                }
        },
        teampreview: {
                onStartPriority: -10,
                onStart: function() {
                        this.add('clearpoke');
                        for (var i=0; i<this.sides[0].pokemon.length; i++) {
                                this.add('poke', this.sides[0].pokemon[i].side.id, this.sides[0].pokemon[i].details.replace(/Arceus(\-[a-zA-Z\?]+)?/, 'Arceus-*'));
                        }
                        for (var i=0; i<this.sides[1].pokemon.length; i++) {
                                this.add('poke', this.sides[1].pokemon[i].side.id, this.sides[1].pokemon[i].details.replace(/Arceus(\-[a-zA-Z\?]+)?/, 'Arceus-*'));
                        }
                },
                onTeamPreview: function() {
                        this.makeRequest('teampreview');
                }
        },
        littlecup: {
                effectType: 'Rule',
                validateSet: function(set) {
                        var template = this.getTemplate(set.species || set.name);
                        if (template.prevo) {
                                return [set.species+" isn't the first in its evolution family."];
                        }
                        if (!template.nfe) {
                                return [set.species+" doesn't have an evolution family."];
                        }
                }
        },
        ne: {
                effectType: 'Rule',
                validateSet: function(set) {
                        var template = this.getTemplate(set.species || set.name);
                        if (template.prevo) {
                                return [set.species+" did evolve to this."];
                        }
                        if (!template.evo) {
                                return [set.species+" does evolve into better Pokemon."];
                        }
                }
        },
        notfullyevolved: {
               effectType: 'Rule',
               validateSet: function(set) {
                        var template = this.getTemplate(set.species || set.name);
                        if (!template.evo || !template.nfe) {
                                return [set.species+" is fully evolved or doesn't have an evolutionary family."];
                        }
               }
        },
        speciesclause: {
                effectType: 'Rule',
                onStart: function() {
                        this.add('rule', 'Species Clause: Limit one of each Pokemon');
                },
                validateTeam: function(team, format) {
                        var speciesTable = {};
                        for (var i=0; i<team.length; i++) {
                                var template = this.getTemplate(team[i].species);
                                if (speciesTable[template.num]) {
                                        return ["You are limited to one of each pokemon by Species Clause.","(You have more than one "+template.name+")"];
                                }
                                speciesTable[template.num] = true;
                        }
                }
        },
        itemclause: {
                effectType: 'Rule',
                onStart: function() {
                        this.add('rule', 'Item Clause: Limit one of each item');
                },
                validateTeam: function(team, format) {
                        var itemTable = {};
                        for (var i=0; i<team.length; i++) {
                                var item = toId(team[i].item);
                                if (!item) continue;
                                if (itemTable[item]) {
                                        return ["You are limited to one of each item by Item Clause.","(You have more than one "+this.getItem(item).name+")"];
                                }
                                itemTable[item] = true;
                        }
                }
        },
        ohkoclause: {
                effectType: 'Rule',
                onStart: function() {
                        this.add('rule', 'OHKO Clause: OHKO moves are banned');
                },
                validateSet: function(set) {
                        var problems = [];
                        if (set.moves) {
                                for (var i in set.moves) {
                                        var move = this.getMove(set.moves[i]);
                                        if (move.ohko) problems.push(move.name+' is banned by OHKO Clause.');
                                }
                        }
                        return problems;
                }
        },
        evasionabilitiesclause: {
                effectType: 'Banlist',
                name: 'Evasion Abilities Clause',
                banlist: ['Sand Veil', 'Snow Cloak'],
                onStart: function() {
                        this.add('rule', 'Evasion Abilities Clause: Evasion abilities are banned');
                }
        },
        evasionmovesclause: {
                effectType: 'Banlist',
                name: 'Evasion Moves Clause',
                banlist: ['Minimize', 'Double Team'],
                onStart: function() {
                        this.add('rule', 'Evasion Moves Clause: Evasion moves are banned');
                }
        },
        moodyclause: {
                effectType: 'Banlist',
                name: 'Moody Clause',
                banlist: ['Moody'],
                onStart: function() {
                        this.add('rule', 'Moody Clause: Moody is banned');
                }
        },
        hppercentagemod: {
                effectType: 'Rule',
                name: 'HP Percentage Mod',
                onStart: function() {
                        this.add('rule', 'HP Percentage Mod: HP is reported as percentages');
                        this.reportPercentages = true;
                }
        },
        sleepclausemod: {
                effectType: 'Rule',
                onStart: function() {
                        this.add('rule', 'Sleep Clause Mod: Limit one foe put to sleep');
                },
                onSetStatus: function(status, target, source) {
                        if (source && source.side === target.side) {
                                return;
                        }
                        if (status.id === 'slp') {
                                for (var i=0; i<target.side.pokemon.length; i++) {
                                        var pokemon = target.side.pokemon[i];
                                        if (pokemon.status === 'slp') {
                                                if (!pokemon.statusData.source ||
                                                        pokemon.statusData.source.side !== pokemon.side) {
                                                        this.add('-message', 'Sleep Clause Mod activated.');
                                                        return false;
                                                }
                                        }
                                }
                        }
                }
        },
        freezeclause: {
                effectType: 'Rule',
                onStart: function() {
                        this.add('rule', 'Freeze Clause: Limit one foe frozen');
                },
                onSetStatus: function(status, target, source) {
                        if (source && source.side === target.side) {
                                return;
                        }
                        if (status.id === 'frz') {
                                for (var i=0; i<target.side.pokemon.length; i++) {
                                        var pokemon = target.side.pokemon[i];
                                        if (pokemon.status === 'frz') {
                                                this.add('-message', 'Freeze Clause activated.');
                                                return false;
                                        }
                                }
                        }
                }
        },
	haxclause: {
		effectType: 'Rule',
		onStart: function() {
			this.add('rule', 'Hax Clause');
		},
		onModifyMovePriority: -100,
		onModifyMove: function(move) {
			if (move.secondaries) {
				for (var s = 0; s < move.secondaries.length; ++s) {
					move.secondaries[s].chance = 100;
				}
			}
			if (move.accuracy !== true && move.accuracy <= 99) {
				move.accuracy = 0;
				if (move.name.indexOf(' ') > -1) {
					var moveName = move.name.split(' ');
					moveName[1] = 'Miss';
					move.name = moveName[0] + '  ' + moveName[1];
				} else {
					move.name = move.name.substr(0, move.name.length-2) + 'fail';
				}
			}
			move.willCrit = true;
		}
	},
	nohaxclause: {
		effectType: 'Rule',
		onStart: function() {
			this.add('rule', 'Hax Clause');
		},
		onModifyMovePriority: -100,
		onModifyMove: function(move) {
			if (move.secondaries) {
				for (var s = 0; s < move.secondaries.length; ++s) {
					if (move.secondaries[s].chance !== 100) {
						move.secondaries[s].chance = 0;
					}
				}
			}
			if (move.accuracy !== true) {
				move.accuracy = true;
			}
			move.willCrit = false;
		}
	},
        sametypeclause: {
                effectType: 'Rule',
                onStart: function() {
                        this.add('rule', 'Same Type Clause: Pokemon in a team must share a type');
                },
                validateTeam: function(team, format) {
                        var typeTable = {};
                        for (var i=0; i<team.length; i++) {
                                var template = this.getTemplate(team[i].species);
                                if (!template.types) continue;

                                // first type
                                var type = template.types[0];
                                typeTable[type] = (typeTable[type]||0) + 1;

                                // second type
                                type = template.types[1];
                                if (type) typeTable[type] = (typeTable[type]||0) + 1;
                        }
                        for (var type in typeTable) {
                                if (typeTable[type] >= team.length) {
                                        return;
                                }
                        }
                        return ["Your team must share a type."];
                }
        }
};
