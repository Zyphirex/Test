 /*******************************************************************************************
  * Mafia Variables *************************************************************************
  ******************************************************************************************/

// Welcome to the code for mafia. This mainly functions on 2 general objects, mafia and user.mafia.

var mafia = exports.mafia = {
	// Initializing variables
	gameRunning : false,
	gameStarting : false,
	daytime : false,
	nighttime : false,
	votingphase : false,
	players : [],
	mafiaThemes : JSON.parse(fs.readFileSync('config/mafiathemes.json')),
	theme : {},
	timer : setTimeout(function(){},0),
	maxPlayers : 0,
	rolesList : [],
	rolesDisplay : [],
	// Modify this pathway to change the mafia room.
	room : require('../rooms.js').rooms.mafia,
	
	// Major game functions
	// Function for shuffling player list. Got off of StackOverflow because lazy.
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
	
	// Retrieves a role from the theme object given the name.
	getRole : function(roleName) {
		var i = 0;
		while (mafia.theme.roles[i].role !== roleName) {
			i++;
		}
		return mafia.theme.roles[i];
	},
	
	gameSignUp : function(user, theme) {
		mafia.players = [];
		mafia.theme = mafia.mafiaThemes[theme];
		// Determine the maximum number of players for the theme.
		var rolesListNum = 1;
		while (('roles' + rolesListNum) in mafia.theme) {
			rolesListNum++;
		}
		mafia.maxPlayers = mafia.theme['roles' + (rolesListNum-1)];
		// Announce the game.
		mafia.room.add(user + ' has started a new mafia game with theme ' + mafa.theme.name);
		mafia.room.add('Type //mjoin to join the game.');
		// If the theme has a summary, it will be posted.
		if ('summary' in mafia.theme) {
			mafia.room.add(mafia.theme.summary);
		}
		// Comment this line out to prevent broadcasting to lobby.
		require('../rooms.js').rooms.lobby.add('A new mafia game is starting. Join tervari.psim.us/mafia and type /mjoin to join.');
		// Begin the countdown to gameStart.
		mafia.timer = setTimeout(function() {room.add('Hurry up! Only 30 seconds remaining to join.'); setTimeout(mafia.gameStart, 30000);}, 30000);
	},
	
	gameStart : function() {
		var minPlayers = 5;
		if (minplayers in mafia.theme) {
			minPlayers = mafia.theme.minplayers;
		}
		if (mafia.players.length < minPlayers) {
			gameStarting = false;
			// Clean up user data.
			for(var i=0;i<mafia.players.length;i++) {
				var removedPlayer = Users.get(mafia.players[i]);
				if (removedPlayer) {
					delete removedPlayer.mafia;
				}
			}
			mafia.room.add('At least ' + minPlayers + ' are required for this theme.');
			return mafia.room.add('Try again later.')
		}
		mafia.gameRunning = true;
		mafia.gameStarting = false;
		mafia.players = mafia.shuffle(mafia.players);
		// Determine roles list to use.
		var rolesList = 1;
		while (mafia.theme['roles' + rolesList].length < mafia.players.length) {
			rolesList++;
		}
		// Send out beginning info.
		mafia.room.add('***************************************************************************************');
		// Assign roles and send pm.
		mafia.rolesList = mafia.theme['roles' + rolesList];
		for (var j=0;j<mafia.players.length;j++) {
			var targetUser = Users.get(mafia.players[j]);
			if (targetUser) {
				// Find the user's role.
				targetUser.mafia.role = mafia.getRole(mafia.rolesList[j]);
				var rolePM = targetUser.mafia.role.translation;
				mafia.rolesDisplay[j] = rolePM
				// Check to see if the user has start-up conditions
				if ('startup' in targetUser.mafia.role.actions) {
					// Miller with fake PM
					if('revealAs' in targetUser.mafia.role.actions.startup) {
						rolePM = mafia.getRole(targetUser.mafia.role.actions.startup.revealAs).translation;
					}
					// Miller with fake list name
					if('onlist' in targetUser.mafia.role.actions) {
						mafia.rolesDisplay[j] = mafia.getRole(targetUser.mafia.role.actions.startup.onlist).translation;
					}
				}
				// Now we can send the role PM.
				targetUser.sendTo(mafia.room,'You are a ' + rolePM +'.');
				targetUser.sendTo(mafia.room,targetUser.role.help);
				// Start here to add Miller team reveal.
			}
		}
		// Now to show the player and role lists.
		mafia.room.add('Current Roles: ' + mafia.rolesDisplay.sort());
		mafia.room.add('Current Team: ' + mafia.players.sort());
		mafia.room.add('***************************************************************************************');
	}
};
	
	/*********************************************************
	 * Mafia commands
	 *********************************************************/

var commands = exports.commands = {
	
	mstart: function(target, room, user, connection) {
		// Make sure the user isn't doing something they aren't supposed to be doing.
		if (room !== mafia.room) { return; }
		if (!this.canTalk()) {
			return this.sendReply('You cannot start a mafia game because you are muted.');
		}
		if (mafia.gameRunning) {
			this.sendReply('A game is currently being played.');
			return this.sendReply('Wait until the game is over to start a new one.');
		}
		if (mafia.gameStarting) {
			this.sendReply('A game is currently in its sign-up phase.');
			return this.sendReply('Type /mjoin to join.');
		}
		// Theme defaults to default (surprise).
		if (!target) {
			target = 'default';
		}
		if (!(target in mafia.mafiaThemes)) {
			return this.sendReply('The theme ' + target + ' does not exist.');
		}
		// And begin the sign-ups!
		mafia.gameStarting = true;
		mafia.gameSignUp(user, target);
	},
	
	mjoin: function(target, room, user, connection) {
		// Make sure the user isn't doing something they aren't supposed to be doing.
		if (room !== mafia.room) { return; }
		if (!this.canTalk()) {
			return this.sendReply('You cannot join the mafia game because you are muted.');
		}
		if (mafia.gameRunning) {
			this.sendReply('A game is currently being played.');
			return this.sendReply('Use /mjoin to join the next game.');
		}
		if (!mafia.gameStarting) {
			this.sendReply('There is no mafia game in its Sign-Up phase right now.');
			return this.sendReply('Type /mstart to start a new game.');
		}
		if (mafia.players.indexOf(user) !== -1) {
			return this.sendReply('You have already joined the current game.');
		}
		mafia.players.push(user.userid);
		user.mafia = {
			role: {},
			hasVoted: false,
			votes: 0
		};
		room.add(user + ' joined the mafia game.');
		if (mafia.players.length >== mafia.maxPlayers) {
			clearTimeout(mafia.timer);
			room.add('Sign-Ups have closed.');
			return mafia.gameStart();
		}
	}
};
