 /*******************************************************************************************
  * Mafia Variables *************************************************************************
  ******************************************************************************************/
var mafia = exports.mafia = {
	game : false,
	gameStarting : false,
	dayTime : false,
	nightTime : false,
	counted : false,
	players : new Array(),
	rooms : require('../rooms.js'),
	numVotes : 0,
	numMob : 0,
	numVillager : 0,
	killTarget : "",
	timer : {},
	theme : {},
	rolesOrder : [],
	rolesIndex : 1,

// Shuffle function courtesy of StackOverflow. If this doesn't work, I'll try something else. :P
	shuffle : function(array) {
		var currentIndex = array.length,temporaryValue,randomIndex;

  // While there remain elements to shuffle...
  		while (0 !== currentIndex) {

    // Pick a remaining element...
    			randomIndex = Math.floor(Math.random() * currentIndex);
    			currentIndex -= 1;

    // And swap it with the current element.
    			temporaryValue = array[currentIndex];
    			array[currentIndex] = array[randomIndex];
    			array[randomIndex] = temporaryValue;
		}

		return array;
	},

	endGame : function() {
		mafia.game = false;
		for (var i=0; i<mafia.players.length; i++) {
			mafia.players[i].inMafia = false;
		}
	},
	
	remove : function(user, leave) {
		if (leave) {
			mafia.rooms.rooms.mafia.send(user + " has left the game.");
		} else {
			mafia.rooms.rooms.mafia.send(user + " has been killed.");
		}
		var playerIndex = mafia.players.indexOf(user);
		if ( user.mGroup === 'villager'){
			mafia.numVillager--;
		} else if ( user.mGroup === 'mafia'){
			mafia.numMob--;
		}
		mafia.players[playerIndex].inMafia = false;
		mafia.players.splice(playerIndex, 1);
		if (mafia.numVillager === 0){
			mafia.rooms.rooms.mafia.add("All villagers have been killed. The mafia win!");
			mafia.endGame();
		}else if (mafia.numMob === 0){
			mafia.rooms.rooms.mafia.add("All mafia have been killed. The villagers win!");
			mafia.endGame();
		}
	},

	night : function() {
		if (!mafia.game) { return; }
		mafia.rooms.rooms.mafia.send('It is now night. Mafia members, you have 30 seconds to choose a player to kill.');
		mafia.nightTime = true;
		mafia.dayTime = false;
		setTimeout(function(){
			if (!mafia.game) { return; }
			if(mafia.killTarget !== ""){
				mafia.remove(mafia.killTarget);
				mafia.killTarget = "";
			} else {
				mafia.rooms.rooms.mafia.send('No one was killed.');
			}
			mafia.interval();
		}, 30000);
	}

	count : function() {
		if (mafia.counted || !mafia.game) { return; }
		mafia.rooms.rooms.mafia.send('Counting votes.');
		mafia.counted = true;
		var chosen = mafia.players[0];
		var chosenNum = 0;
		var tie = false;
		for (var i=0; i<mafia.players.length; i++) {
			if (mafia.players[i].votes > mafia.chosenNum) {
				chosen = mafia.players[i];
				chosenNum = chosen.votes;
				tie = false;
			} else if (mafia.players[i].votes === mChosenNum) {
				tie = true;
			}
		}
		if (tie) {
			mafia.rooms.rooms.mafia.send('No majority was reached.');
		} else {
			mafia.remove(chosen, false);
		}
		mafia.night();
	}

	day : function() {
		if (!mafia.game) { return; }
		mafia.rooms.rooms.mafia.send('It is now day. You have 30 seconds to vote on a person to kill.');
		mafia.dayTime = true;
		mafia.counted = false;
		mafia.numVotes = 0;
		mafia.timer = setTimeout(mCount, 30000);
	}
	 
	interval : function() {
		if (!mGame) { return; }
		mafia.nightTime = false;
		mafia.dayTime = false;
		mafia.rooms.rooms.mafia.send('You have 30 seconds to discuss.');
		for (var i=0; i<mafia.players.length; i++) {
			mafia.players[i].voted = false;
			mafia.players[i].votes = 0;
		}
		setTimeout(mafia.day, 30000);
	}

	gameStart : function() {
		if (!mafia.gameStarting ) { return; }
		if (mafia.players.length < 5) {
			mafia.rooms.rooms.mafia.add('At least 5 players are required to play. Retrying in 30 seconds.');
			setTimeout(mafia.gameStart, 30000);
			return;
		}
		mafia.gameStarting = false;
		mafia.game = true;
		/*
		mafia.shuffle(mafia.players);
		for (var q=0; i<mafia.players.length; q++) {
			mafia.players[q].mRole = mafia.theme["roles" + mafia.rolesIndex][q]
		}
		*/
		mafia.numMob = 0;
		mafia.numVillager = 0;
		mafia.rooms.rooms.mafia.add('A new mafia game has begun. Players: ' + mafia.players);
		for (var i=0; i<mPlayers.length; i++) {
			mafia.players[i].inMafia = true;
			mafia.players[i].mGroup = 'villager';
		}
		for (var j=0; j<(mafia.players.length*.25); j++) {
			var player = Math.floor(Math.random()*mafia.players.length);
			mafia.players[player].mGroup = 'mafia';
			mafia.players[mPlayer].sendTo(mafia.rooms.rooms.mafia, "You are a mafia member. Attempt to kill the villagers.");
			mafia.numMob++;
		}
		for (var k=0; k<mafia.players.length; k++) {
			if (mafia.players[k].mGroup === 'mafia') { continue; }
			mafia.players[k].sendTo(mafia.rooms.rooms.mafia, "You are a villager. Attempt to find out who the mafia are.");
			mafia.numVillager++;
		}
		mafia.interval();
	}
	
};

	/*********************************************************
	 * Mafia commands
	 *********************************************************/

var commands = exports.commands = {
	 
	mstart: function(target, room, user, connection) {
		if (room !== mafia.rooms.rooms.mafia || !user.can('broadcast')) { return; }
		if (mafia.game) {
			this.sendReplyBox('A game is currently being played.');
		} else {
			mafia.players = [];
			mafia.gameStarting = true;
			room.add('A new mafia game is starting. Type /mjoin to join.');
			mafia.rooms.lobby.add('A new mafia game is starting. Join tervari.psim.us/mafia and type /mjoin to join.');
			/*
			mafia.rooms.lobby.add(mafia.theme.name);
			mafia.rooms.lobby.add(mafia.theme.author);
			mafia.rooms.lobby.add(mafia.theme.summary);
			mafia.rolesOrder = mafia.theme.roles1;
			mafia.rolesIndex = 1;
			*/
			mafia.timer = setTimeout(function() {room.add('30 seconds remaining to join.'); setTimeout(mGameStart, 30000);}, 30000)
		}
	},
	
	mjoin: function(target, room, user, connection) {
		if (!mafia.gameStarting || room !== mafia.rooms.rooms.mafia) { return; }
		if (mafia.players.indexOf(user) !== -1){
			this.sendReplyBox('You have already joined the next mafia game.');
			return;
		}
		mafia.players.push(user);
		this.sendReplyBox('You have joined the mafia game.');
		/*
		if (mafia.theme["roles" + mafia.rolesIndex].length <= mafia.players.length) {
			try {
				mafia.rolesIndex++;
				mafia.rolesOrder = mafia.theme["roles" + mafia.rolesIndex];
			}
			catch(e) {
				room.add('Sign-up full. Starting game.');
				clearTimeout(mafia.timer)
				mafia.gameStart()
			}
		}
		*/
	},
	
	mkill: function(target, room, user, connection) {
		if (!mafia.game || room !== mafia.rooms.rooms.mafia) { return; }
		if (user.mGroup !== 'mafia'){
			this.sendReplyBox('You are not a member of the mafia.');
			return;
		}
		if (!mafia.nightTime){
			this.sendReplyBox('It is not night.');
			return;
		}
		target = this.splitTarget(target);
		var targetUser = this.targetUser;
		if (mafia.players.indexOf(targetUser) === -1){
			this.sendReplyBox('That player is not in the game.');
			return;
		}
		if (targetUser.mGroup === 'mafia'){
			this.sendReplyBox('You cannot kill a member of the mafia.');
			return;
		}
		mafia.killTarget = targetUser;
	},
	
	mvote: function(target, room, user, connection) {
		if (!mafia.game || room !== mafia.rooms.rooms.mafia) { return; }
		if (mafia.players.indexOf(user) === -1){
			this.sendReplyBox('You are not playing.');
			return;
		}
		if (!mafia.dayTime){
			this.sendReplyBox('It is not day.');
			return;
		}
		if (user.voted) {
			this.sendReplyBox('You have already voted.');
			return;
		}
		target = this.splitTarget(target);
		var targetUser = this.targetUser;
		if (mafia.players.indexOf(targetUser) === -1){
			this.sendReplyBox('That player is not in the game.');
			return;
		}
		this.send(user + ' voted for ' + targetUser + '.');
		user.voted = true;
		targetUser.votes = targetUser.votes+1;
		mafia.numVotes++;
		if (mafia.numVotes === mafia.players.length) {
			this.send("All players have voted.");
			clearTimeout(mafia.timer);
			mafia.count();
		}
	},
	
	mchat: function(target, room, user, connection) {
		if (!mafia.game || room !== mafia.rooms.rooms.mafia) { return; }
		if (user.mGroup !== 'mafia'){
			this.sendReplyBox('You are not a member of the mafia.');
			return;
		}
		for (var i=0; i<mafia.players.length; i++) {
			if (mafia.players[i].mGroup === 'mafia') {
				mafia.players[i].send("Mafia " + user + ": " + target);
			}
		}
	},
	
	mstop: function(target, room, user, connection) {
		if (!mafia.game || room !== mafia.rooms.rooms.mafia || !user.can('broadcast')) { return; }
		mEndGame();
	},
	
	mcancel: function(target, room, user, connection) {
		if (!mafia.gameStarting || room !== mafia.rooms.rooms.mafia || !user.can('broadcast')) { return; }
		mafia.rooms.rooms.mafia.add('Mafia game cancelled.');
		mafia.gameStarting = false;
	}
	
};
