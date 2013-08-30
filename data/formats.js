exports.BattleFormats = {
	//These are the formats rulesets, look in the config folder for the real formats ~~ Oiawesome
                 // Rulesets
        ///////////////////////////////////////////////////////////////////
        
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
