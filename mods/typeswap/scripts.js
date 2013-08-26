exports.BattleScripts = {
    init: function() {
        for (var i in this.data.Pokedex) {
            if (this.data.Pokedex[i].types[0] === 'Water') {
                this.modData('Pokedex', i).types[0] = 'Grass';
            } 

else if (this.data.Pokedex[i].types[0] === 'Fire') {
                this.modData('Pokedex', i).types[0] = 'Water';

            }

else if (this.data.Pokedex[i].types[0] === 'Grass') {
                this.modData('Pokedex', i).types[0] = 'Fire';

            }

else if (this.data.Pokedex[i].types[0] === 'Normal') {
                this.modData('Pokedex', i).types[0] = 'Ghost';
}

else if (this.data.Pokedex[i].types[0] === 'Poison') {
                this.modData('Pokedex', i).types[0] = 'Steel';
}

else if (this.data.Pokedex[i].types[0] === 'Psychic') {
                this.modData('Pokedex', i).types[0] = 'Fighting';
}

else if (this.data.Pokedex[i].types[0] === 'Bug') {
                this.modData('Pokedex', i).types[0] = 'Dragon';
}

else if (this.data.Pokedex[i].types[0] === 'Ground') {
                this.modData('Pokedex', i).types[0] = 'Flying';
}

else if (this.data.Pokedex[i].types[0] === 'Electric') {
                this.modData('Pokedex', i).types[0] = 'Dark';
}

else if (this.data.Pokedex[i].types[0] === 'Ice') {
                this.modData('Pokedex', i).types[0] = 'Rock';

            }

else if (this.data.Pokedex[i].types[1] === 'Water') {
                this.modData('Pokedex', i).types[1] = 'Grass';

            }

else if (this.data.Pokedex[i].types[1] === 'Fire') {
                this.modData('Pokedex', i).types[1] = 'Water';

            }
        
else if (this.data.Pokedex[i].types[1] === 'Grass') {
                this.modData('Pokedex', i).types[1] = 'Fire';

            }

else if (this.data.Pokedex[i].types[1] === 'Normal') {
                this.modData('Pokedex', i).types[1] = 'Ghost';
}

else if (this.data.Pokedex[i].types[1] === 'Poison') {
                this.modData('Pokedex', i).types[1] = 'Steel';
}

else if (this.data.Pokedex[i].types[1] === 'Psychic') {
                this.modData('Pokedex', i).types[1] = 'Fighting';
}

else if (this.data.Pokedex[i].types[1] === 'Bug') {
                this.modData('Pokedex', i).types[1] = 'Dragon';
}

else if (this.data.Pokedex[i].types[1] === 'Ground') {
                this.modData('Pokedex', i).types[1] = 'Flying';
}

else if (this.data.Pokedex[i].types[1] === 'Electric') {
                this.modData('Pokedex', i).types[1] = 'Dark';
}

else if (this.data.Pokedex[i].types[1] === 'Ice') {
                this.modData('Pokedex', i).types[1] = 'Rock';

            }
         for (var x in this.data.Learnsets) {
                if (this.data.Learnsets[x].waterfall && this.modData('Pokedex', i).types[0] === 'Grass' && x === i || this.data.Learnsets[x].waterfall && this.modData('Pokedex', i).types[1] === 'Grass' && x === i) {
                    this.modData('Learnsets', x).seedbomb = ['5L0'];
                }
else if (this.data.Learnsets[x].aquatail && this.modData('Pokedex', i).types[0] === 'Grass' && x === i || this.data.Learnsets[x].aquatail && this.modData('Pokedex', i).types[1] === 'Grass' && x === i) {
                    this.modData('Learnsets', x).leafblade = ['5L0'];
                }
else if (this.data.Learnsets[x].hydropump && this.modData('Pokedex', i).types[0] === 'Grass' && x === i || this.data.Learnsets[x].hydropump && this.modData('Pokedex', i).types[1] === 'Grass' && x === i) {
                    this.modData('Learnsets', x).solarbeam = ['5L0'];
                }
else if (this.data.Learnsets[x].scald && this.modData('Pokedex', i).types[0] === 'Grass' && x === i || this.data.Learnsets[x].scald && this.modData('Pokedex', i).types[1] === 'Grass' && x === i) {
                    this.modData('Learnsets', x).gigadrain = ['5L0'];
                }
else if (this.data.Learnsets[x].surf && this.modData('Pokedex', i).types[0] === 'Grass' && x === i || this.data.Learnsets[x].surf && this.modData('Pokedex', i).types[1] === 'Grass' && x === i) {
                    this.modData('Learnsets', x).gigadrain = ['5L0'];
                }
else if (this.data.Learnsets[x].scald && this.modData('Pokedex', i).types[0] === 'Grass' && x === i || this.data.Learnsets[x].scald && this.modData('Pokedex', i).types[1] === 'Grass' && x === i) {
                    this.modData('Learnsets', x).energyball = ['5L0'];
                }
else if (this.data.Learnsets[x].surf && this.modData('Pokedex', i).types[0] === 'Grass' && x === i || this.data.Learnsets[x].surf && this.modData('Pokedex', i).types[1] === 'Grass' && x === i) {
                    this.modData('Learnsets', x).energyball = ['5L0'];
                }
else if (this.data.Learnsets[x].fireblast && this.modData('Pokedex', i).types[0] === 'Water' && x === i || this.data.Learnsets[x].fireblast && this.modData('Pokedex', i).types[1] === 'Water' && x === i) {
                    this.modData('Learnsets', x).hydropump = ['5L0'];
                }
else if (this.data.Learnsets[x].flamethrower && this.modData('Pokedex', i).types[0] === 'Water' && x === i || this.data.Learnsets[x].flamethrower && this.modData('Pokedex', i).types[1] === 'Water' && x === i) {
                    this.modData('Learnsets', x).surf = ['5L0'];
                }
else if (this.data.Learnsets[x].lavaplume && this.modData('Pokedex', i).types[0] === 'Water' && x === i || this.data.Learnsets[x].lavaplume && this.modData('Pokedex', i).types[1] === 'Water' && x === i) {
                    this.modData('Learnsets', x).scald = ['5L0'];
                }
else if (this.data.Learnsets[x].eruption && this.modData('Pokedex', i).types[0] === 'Water' && x === i || this.data.Learnsets[x].eruption && this.modData('Pokedex', i).types[1] === 'Water' && x === i) {
                    this.modData('Learnsets', x).waterspout = ['5L0'];
                }
else if (this.data.Learnsets[x].firefang && this.modData('Pokedex', i).types[0] === 'Water' && x === i || this.data.Learnsets[x].firefang && this.modData('Pokedex', i).types[1] === 'Water' && x === i) {
                    this.modData('Learnsets', x).waterfall = ['5L0'];
                }
else if (this.data.Learnsets[x].firepunch && this.modData('Pokedex', i).types[0] === 'Water' && x === i || this.data.Learnsets[x].firepunch && this.modData('Pokedex', i).types[1] === 'Water' && x === i) {
                    this.modData('Learnsets', x).aquatail = ['5L0'];
                }
else if (this.data.Learnsets[x].firefang && this.modData('Pokedex', i).types[0] === 'Water' && x === i || this.data.Learnsets[x].firefang && this.modData('Pokedex', i).types[1] === 'Water' && x === i) {
                    this.modData('Learnsets', x).waterfall = ['5L0'];
                }
else if (this.data.Learnsets[x].firepunch && this.modData('Pokedex', i).types[0] === 'Water' && x === i || this.data.Learnsets[x].firepunch && this.modData('Pokedex', i).types[1] === 'Water' && x === i) {
                    this.modData('Learnsets', x).aquatail = ['5L0'];
                }
else if (this.data.Learnsets[x].energyball && this.modData('Pokedex', i).types[0] === 'Fire' && x === i || this.data.Learnsets[x].energyball && this.modData('Pokedex', i).types[1] === 'Fire' && x === i) {
                    this.modData('Learnsets', x).flamethrower = ['5L0'];
                }
else if (this.data.Learnsets[x].gigadrain && this.modData('Pokedex', i).types[0] === 'Fire' && x === i || this.data.Learnsets[x].gigadrain && this.modData('Pokedex', i).types[1] === 'Fire' && x === i) {
                    this.modData('Learnsets', x).flamethrower = ['5L0'];
                }
else if (this.data.Learnsets[x].solarbeam && this.modData('Pokedex', i).types[0] === 'Fire' && x === i || this.data.Learnsets[x].solarbeam && this.modData('Pokedex', i).types[1] === 'Fire' && x === i) {
                    this.modData('Learnsets', x).fireblast = ['5L0'];
                }
else if (this.data.Learnsets[x].seedbomb && this.modData('Pokedex', i).types[0] === 'Fire' && x === i || this.data.Learnsets[x].seedbomb && this.modData('Pokedex', i).types[1] === 'Fire' && x === i) {
                    this.modData('Learnsets', x).firepunch = ['5L0'];
                }
else if (this.data.Learnsets[x].leafblade && this.modData('Pokedex', i).types[0] === 'Fire' && x === i || this.data.Learnsets[x].leafblade && this.modData('Pokedex', i).types[1] === 'Fire' && x === i) {
                    this.modData('Learnsets', x).firepunch = ['5L0'];
                }
else if (this.data.Learnsets[x].woodhammer && this.modData('Pokedex', i).types[0] === 'Fire' && x === i || this.data.Learnsets[x].woodhammer && this.modData('Pokedex', i).types[1] === 'Fire' && x === i) {
                    this.modData('Learnsets', x).flareblitz = ['5L0'];
                }
else if (this.data.Learnsets[x].powerwhip && this.modData('Pokedex', i).types[0] === 'Fire' && x === i || this.data.Learnsets[x].powerwhip && this.modData('Pokedex', i).types[1] === 'Fire' && x === i) {
                    this.modData('Learnsets', x).flareblitz = ['5L0'];
                }
else if (this.data.Learnsets[x].leafstorm && this.modData('Pokedex', i).types[0] === 'Fire' && x === i || this.data.Learnsets[x].leafstorm && this.modData('Pokedex', i).types[1] === 'Fire' && x === i) {
                    this.modData('Learnsets', x).overheat = ['5L0'];
                }
else if (this.data.Learnsets[x].seedflare && this.modData('Pokedex', i).types[0] === 'Fire' && x === i || this.data.Learnsets[x].seedflare && this.modData('Pokedex', i).types[1] === 'Fire' && x === i) {
                    this.modData('Learnsets', x).lavaplume = ['5L0'];
                }
else if (this.data.Learnsets[x].hypervoice && this.modData('Pokedex', i).types[0] === 'Ghost' && x === i || this.data.Learnsets[x].hypervoice && this.modData('Pokedex', i).types[1] === 'Ghost' && x === i) {
                    this.modData('Learnsets', x).shadowball = ['5L0'];
                }
else if (this.data.Learnsets[x].triattack && this.modData('Pokedex', i).types[0] === 'Ghost' && x === i || this.data.Learnsets[x].triattack && this.modData('Pokedex', i).types[1] === 'Ghost' && x === i) {
                    this.modData('Learnsets', x).shadowball = ['5L0'];
                }
else if (this.data.Learnsets[x].hypervoice && this.modData('Pokedex', i).types[0] === 'Ghost' && x === i || this.data.Learnsets[x].hypervoice && this.modData('Pokedex', i).types[1] === 'Ghost' && x === i) {
                    this.modData('Learnsets', x).hex = ['5L0'];
                }
else if (this.data.Learnsets[x].triattack && this.modData('Pokedex', i).types[0] === 'Ghost' && x === i || this.data.Learnsets[x].triattack && this.modData('Pokedex', i).types[1] === 'Ghost' && x === i) {
                    this.modData('Learnsets', x).hex = ['5L0'];
                }
else if (this.data.Learnsets[x].return && this.modData('Pokedex', i).types[0] === 'Ghost' && x === i || this.data.Learnsets[x].return && this.modData('Pokedex', i).types[1] === 'Ghost' && x === i) {
                    this.modData('Learnsets', x).shadowclaw = ['5L0'];
                }
else if (this.data.Learnsets[x].bodyslam && this.modData('Pokedex', i).types[0] === 'Ghost' && x === i || this.data.Learnsets[x].bodyslam && this.modData('Pokedex', i).types[1] === 'Ghost' && x === i) {
                    this.modData('Learnsets', x).shadowclaw = ['5L0'];
                }
else if (this.data.Learnsets[x].return && this.modData('Pokedex', i).types[0] === 'Ghost' && x === i || this.data.Learnsets[x].return && this.modData('Pokedex', i).types[1] === 'Ghost' && x === i) {
                    this.modData('Learnsets', x).shadowpunch = ['5L0'];
                }
else if (this.data.Learnsets[x].bodyslam && this.modData('Pokedex', i).types[0] === 'Ghost' && x === i || this.data.Learnsets[x].bodyslam && this.modData('Pokedex', i).types[1] === 'Ghost' && x === i) {
                    this.modData('Learnsets', x).shadowpunch = ['5L0'];
                }
else if (this.data.Learnsets[x].quickattack && this.modData('Pokedex', i).types[0] === 'Ghost' && x === i || this.data.Learnsets[x].quickattack && this.modData('Pokedex', i).types[1] === 'Ghost' && x === i) {
                    this.modData('Learnsets', x).shadowsneak = ['5L0'];
                }
else if (this.data.Learnsets[x].extremespeed && this.modData('Pokedex', i).types[0] === 'Ghost' && x === i || this.data.Learnsets[x].extremespeed && this.modData('Pokedex', i).types[1] === 'Ghost' && x === i) {
                    this.modData('Learnsets', x).shadowsneak = ['5L0'];
                }
else if (this.data.Learnsets[x].zenheadbutt && this.modData('Pokedex', i).types[0] === 'Fighting' && x === i || this.data.Learnsets[x].zenheadbutt && this.modData('Pokedex', i).types[1] === 'Fighting' && x === i) {
                    this.modData('Learnsets', x).brickbreak = ['5L0'];
                }
else if (this.data.Learnsets[x].zenheadbutt && this.modData('Pokedex', i).types[0] === 'Fighting' && x === i || this.data.Learnsets[x].zenheadbutt && this.modData('Pokedex', i).types[1] === 'Fighting' && x === i) {
                    this.modData('Learnsets', x).drainpunch = ['5L0'];
                }
else if (this.data.Learnsets[x].psychocut && this.modData('Pokedex', i).types[0] === 'Fighting' && x === i || this.data.Learnsets[x].psychochut && this.modData('Pokedex', i).types[1] === 'Fighting' && x === i) {
                    this.modData('Learnsets', x).crosschop = ['5L0'];
                }
else if (this.data.Learnsets[x].psychic && this.modData('Pokedex', i).types[0] === 'Fighting' && x === i || this.data.Learnsets[x].psychic && this.modData('Pokedex', i).types[1] === 'Fighting' && x === i) {
                    this.modData('Learnsets', x).aurasphere = ['5L0'];
                }
else if (this.data.Learnsets[x].psychic && this.modData('Pokedex', i).types[0] === 'Fighting' && x === i || this.data.Learnsets[x].psychic && this.modData('Pokedex', i).types[1] === 'Fighting' && x === i) {
                    this.modData('Learnsets', x).focusblast = ['5L0'];
                }
else if (this.data.Learnsets[x].psyshock && this.modData('Pokedex', i).types[0] === 'Fighting' && x === i || this.data.Learnsets[x].psyshock && this.modData('Pokedex', i).types[1] === 'Fighting' && x === i) {
                    this.modData('Learnsets', x).aurasphere = ['5L0'];
                }
else if (this.data.Learnsets[x].psyshock && this.modData('Pokedex', i).types[0] === 'Fighting' && x === i || this.data.Learnsets[x].psyshock && this.modData('Pokedex', i).types[1] === 'Fighting' && x === i) {
                    this.modData('Learnsets', x).focusblast = ['5L0'];
                }
else if (this.data.Learnsets[x].psystrike && this.modData('Pokedex', i).types[0] === 'Fighting' && x === i || this.data.Learnsets[x].psystrike && this.modData('Pokedex', i).types[1] === 'Fighting' && x === i) {
                    this.modData('Learnsets', x).secret sword = ['5L0'];
                }
else if (this.data.Learnsets[x].psychoboost && this.modData('Pokedex', i).types[0] === 'Fighting' && x === i || this.data.Learnsets[x].psychoboost && this.modData('Pokedex', i).types[1] === 'Fighting' && x === i) {
                    this.modData('Learnsets', x).closecombat = ['5L0'];
                }
else if (this.data.Learnsets[x].poisonjab && this.modData('Pokedex', i).types[0] === 'Steel' && x === i || this.data.Learnsets[x].poisonjab && this.modData('Pokedex', i).types[1] === 'Steel' && x === i) {
                    this.modData('Learnsets', x).ironhead = ['5L0'];
                }
else if (this.data.Learnsets[x].crosspoison && this.modData('Pokedex', i).types[0] === 'Steel' && x === i || this.data.Learnsets[x].crosspoison && this.modData('Pokedex', i).types[1] === 'Steel' && x === i) {
                    this.modData('Learnsets', x).ironhead = ['5L0'];
                }
else if (this.data.Learnsets[x].gunkshot && this.modData('Pokedex', i).types[0] === 'Steel' && x === i || this.data.Learnsets[x].gunkshot && this.modData('Pokedex', i).types[1] === 'Steel' && x === i) {
                    this.modData('Learnsets', x).gyroball = ['5L0'];
                }
else if (this.data.Learnsets[x].sludgebomb && this.modData('Pokedex', i).types[0] === 'Steel' && x === i || this.data.Learnsets[x].sludgebomb && this.modData('Pokedex', i).types[1] === 'Steel' && x === i) {
                    this.modData('Learnsets', x).flashcannon = ['5L0'];
                }
else if (this.data.Learnsets[x].sludgewave && this.modData('Pokedex', i).types[0] === 'Steel' && x === i || this.data.Learnsets[x].sludgewave && this.modData('Pokedex', i).types[1] === 'Steel' && x === i) {
                    this.modData('Learnsets', x).flashcannon = ['5L0'];
                }
else if (this.data.Learnsets[x].uturn && this.modData('Pokedex', i).types[0] === 'Dragon' && x === i || this.data.Learnsets[x].uturn && this.modData('Pokedex', i).types[1] === 'Dragon' && x === i) {
                    this.modData('Learnsets', x).dragonclaw = ['5L0'];
                }
else if (this.data.Learnsets[x].uturn && this.modData('Pokedex', i).types[0] === 'Dragon' && x === i || this.data.Learnsets[x].uturn && this.modData('Pokedex', i).types[1] === 'Dragon' && x === i) {
                    this.modData('Learnsets', x).outrage = ['5L0'];
                }
else if (this.data.Learnsets[x].xscissor && this.modData('Pokedex', i).types[0] === 'Dragon' && x === i || this.data.Learnsets[x].xscissor && this.modData('Pokedex', i).types[1] === 'Dragon' && x === i) {
                    this.modData('Learnsets', x).dragonclaw = ['5L0'];
                }
else if (this.data.Learnsets[x].xscissor && this.modData('Pokedex', i).types[0] === 'Dragon' && x === i || this.data.Learnsets[x].xscissor && this.modData('Pokedex', i).types[1] === 'Dragon' && x === i) {
                    this.modData('Learnsets', x).outrage = ['5L0'];
                }
else if (this.data.Learnsets[x].bugbite && this.modData('Pokedex', i).types[0] === 'Dragon' && x === i || this.data.Learnsets[x].bugbite && this.modData('Pokedex', i).types[1] === 'Dragon' && x === i) {
                    this.modData('Learnsets', x).dragonclaw = ['5L0'];
                }
else if (this.data.Learnsets[x].bugbite && this.modData('Pokedex', i).types[0] === 'Dragon' && x === i || this.data.Learnsets[x].bugbite && this.modData('Pokedex', i).types[1] === 'Dragon' && x === i) {
                    this.modData('Learnsets', x).outrage = ['5L0'];
                }
else if (this.data.Learnsets[x].signalbeam && this.modData('Pokedex', i).types[0] === 'Dragon' && x === i || this.data.Learnsets[x].signalbeam && this.modData('Pokedex', i).types[1] === 'Dragon' && x === i) {
                    this.modData('Learnsets', x).dracometeor = ['5L0'];
                }
else if (this.data.Learnsets[x].signalbeam && this.modData('Pokedex', i).types[0] === 'Dragon' && x === i || this.data.Learnsets[x].signalbeam && this.modData('Pokedex', i).types[1] === 'Dragon' && x === i) {
                    this.modData('Learnsets', x).dragonpulse = ['5L0'];
                }
else if (this.data.Learnsets[x].bugbuzz && this.modData('Pokedex', i).types[0] === 'Dragon' && x === i || this.data.Learnsets[x].bugbuzz && this.modData('Pokedex', i).types[1] === 'Dragon' && x === i) {
                    this.modData('Learnsets', x).dracometeor = ['5L0'];
                }
else if (this.data.Learnsets[x].bugbuzz && this.modData('Pokedex', i).types[0] === 'Dragon' && x === i || this.data.Learnsets[x].bugbuzz && this.modData('Pokedex', i).types[1] === 'Dragon' && x === i) {
                    this.modData('Learnsets', x).dragonpulse = ['5L0'];
                }
else if (this.data.Learnsets[x].megahorn && this.modData('Pokedex', i).types[0] === 'Dragon' && x === i || this.data.Learnsets[x].megahorn && this.modData('Pokedex', i).types[1] === 'Dragon' && x === i) {
                    this.modData('Learnsets', x).dragonrush = ['5L0'];
                }
else if (this.data.Learnsets[x].attackorder && this.modData('Pokedex', i).types[0] === 'Dragon' && x === i || this.data.Learnsets[x].attackorder && this.modData('Pokedex', i).types[1] === 'Dragon' && x === i) {
                    this.modData('Learnsets', x).dragonrush = ['5L0'];
                }
else if (this.data.Learnsets[x].earthquake && this.modData('Pokedex', i).types[0] === 'Flying' && x === i || this.data.Learnsets[x].earthquake && this.modData('Pokedex', i).types[1] === 'Flying' && x === i) {
                    this.modData('Learnsets', x).bravebird = ['5L0'];
                }
else if (this.data.Learnsets[x].earthquake && this.modData('Pokedex', i).types[0] === 'Flying' && x === i || this.data.Learnsets[x].earthquake && this.modData('Pokedex', i).types[1] === 'Flying' && x === i) {
                    this.modData('Learnsets', x).acrobatics = ['5L0'];
                }
else if (this.data.Learnsets[x].earthquake && this.modData('Pokedex', i).types[0] === 'Flying' && x === i || this.data.Learnsets[x].earthquake && this.modData('Pokedex', i).types[1] === 'Flying' && x === i) {
                    this.modData('Learnsets', x).fly = ['5L0'];
                }
else if (this.data.Learnsets[x].earthpower && this.modData('Pokedex', i).types[0] === 'Flying' && x === i || this.data.Learnsets[x].earthpower && this.modData('Pokedex', i).types[1] === 'Flying' && x === i) {
                    this.modData('Learnsets', x).airslash = ['5L0'];
                }
else if (this.data.Learnsets[x].thunder && this.modData('Pokedex', i).types[0] === 'Dark' && x === i || this.data.Learnsets[x].thunder && this.modData('Pokedex', i).types[1] === 'Dark' && x === i) {
                    this.modData('Learnsets', x).darkpulse = ['5L0'];
                }
else if (this.data.Learnsets[x].thunderbolt && this.modData('Pokedex', i).types[0] === 'Dark' && x === i || this.data.Learnsets[x].thunderbolt && this.modData('Pokedex', i).types[1] === 'Dark' && x === i) {
                    this.modData('Learnsets', x).darkpulse = ['5L0'];
                }
else if (this.data.Learnsets[x].voltswitch && this.modData('Pokedex', i).types[0] === 'Dark' && x === i || this.data.Learnsets[x].voltswitch && this.modData('Pokedex', i).types[1] === 'Dark' && x === i) {
                    this.modData('Learnsets', x).darkpulse = ['5L0'];
                }
else if (this.data.Learnsets[x].thunderpunch && this.modData('Pokedex', i).types[0] === 'Dark' && x === i || this.data.Learnsets[x].thunderpunch && this.modData('Pokedex', i).types[1] === 'Dark' && x === i) {
                    this.modData('Learnsets', x).crunch = ['5L0'];
                }
else if (this.data.Learnsets[x].thunderpunch && this.modData('Pokedex', i).types[0] === 'Dark' && x === i || this.data.Learnsets[x].thunderpunch && this.modData('Pokedex', i).types[1] === 'Dark' && x === i) {
                    this.modData('Learnsets', x).pursuit = ['5L0'];
                }
else if (this.data.Learnsets[x].wildcharge && this.modData('Pokedex', i).types[0] === 'Dark' && x === i || this.data.Learnsets[x].wildcharge && this.modData('Pokedex', i).types[1] === 'Dark' && x === i) {
                    this.modData('Learnsets', x).suckerpunch = ['5L0'];
                }
else if (this.data.Learnsets[x].wildcharge && this.modData('Pokedex', i).types[0] === 'Dark' && x === i || this.data.Learnsets[x].wildcharge && this.modData('Pokedex', i).types[1] === 'Dark' && x === i) {
                    this.modData('Learnsets', x).nightslash = ['5L0'];
                }
else if (this.data.Learnsets[x].icepunch && this.modData('Pokedex', i).types[0] === 'Rock' && x === i || this.data.Learnsets[x].icepunch && this.modData('Pokedex', i).types[1] === 'Rock' && x === i) {
                    this.modData('Learnsets', x).stoneedge = ['5L0'];
                }
else if (this.data.Learnsets[x].icepunch && this.modData('Pokedex', i).types[0] === 'Rock' && x === i || this.data.Learnsets[x].icepunch && this.modData('Pokedex', i).types[1] === 'Rock' && x === i) {
                    this.modData('Learnsets', x).rockslide = ['5L0'];
                }
else if (this.data.Learnsets[x].avalanche && this.modData('Pokedex', i).types[0] === 'Rock' && x === i || this.data.Learnsets[x].avalanche && this.modData('Pokedex', i).types[1] === 'Rock' && x === i) {
                    this.modData('Learnsets', x).headsmash = ['5L0'];
                }
else if (this.data.Learnsets[x].avalanche && this.modData('Pokedex', i).types[0] === 'Rock' && x === i || this.data.Learnsets[x].avalanche && this.modData('Pokedex', i).types[1] === 'Rock' && x === i) {
                    this.modData('Learnsets', x).rockwrecker = ['5L0'];
                }
else if (this.data.Learnsets[x].iciclecrash && this.modData('Pokedex', i).types[0] === 'Rock' && x === i || this.data.Learnsets[x].iciclecrash && this.modData('Pokedex', i).types[1] === 'Rock' && x === i) {
                    this.modData('Learnsets', x).headsmash = ['5L0'];
                }
else if (this.data.Learnsets[x].iciclecrash && this.modData('Pokedex', i).types[0] === 'Rock' && x === i || this.data.Learnsets[x].iciclecrash && this.modData('Pokedex', i).types[1] === 'Rock' && x === i) {
                    this.modData('Learnsets', x).rockwrecker = ['5L0'];
                }
else if (this.data.Learnsets[x].iciclespear && this.modData('Pokedex', i).types[0] === 'Rock' && x === i || this.data.Learnsets[x].iciclespear && this.modData('Pokedex', i).types[1] === 'Rock' && x === i) {
                    this.modData('Learnsets', x).rockblast = ['5L0'];
                }
else if (this.data.Learnsets[x].icebeam && this.modData('Pokedex', i).types[0] === 'Rock' && x === i || this.data.Learnsets[x].icebeam && this.modData('Pokedex', i).types[1] === 'Rock' && x === i) {
                    this.modData('Learnsets', x).ancientpower = ['5L0'];
                }

else if (this.data.Learnsets[x].icebeam && this.modData('Pokedex', i).types[0] === 'Rock' && x === i || this.data.Learnsets[x].icebeam && this.modData('Pokedex', i).types[1] === 'Rock' && x === i) {
                    this.modData('Learnsets', x).powergem = ['5L0'];
                }
else if (this.data.Learnsets[x].blizzzard && this.modData('Pokedex', i).types[0] === 'Rock' && x === i || this.data.Learnsets[x].blizzard && this.modData('Pokedex', i).types[1] === 'Rock' && x === i) {
                    this.modData('Learnsets', x).ancientpower = ['5L0'];
                }
else if (this.data.Learnsets[x].blizzard && this.modData('Pokedex', i).types[0] === 'Rock' && x === i || this.data.Learnsets[x].blizzard && this.modData('Pokedex', i).types[1] === 'Rock' && x === i) {
                    this.modData('Learnsets', x).powergem = ['5L0'];
                }

            }
        }
    }
};

