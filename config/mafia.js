 /*********************************************************
  * Mafia Variables
  *********************************************************/
 
var mGame = exports.mGame = false;
var mDayTime = false;
var mNightTime = false;
var mCounted = false;
var mPlayers = new Array();
var mNextPlayers = new Array();
var mRoom;
var mNumVotes = 0;
var mNumMob = 0;
var mNumVillager = 0;
var mKillTarget = "";

function mEndGame() {
	mGame = exports.mGame = false;
	for (var i=0; i<mPlayers.length; i++) {
		mPlayers[i].inMafia = false;
	}
}
	
var mRemove = exports.mRemove = function(user, leave) {
	if (leave) {
		mNextPlayers.splice(mNextPlayers.indexOf(user), 1);
		mRoom.send(user + " has left the game.");
	} else {
		mRoom.send(user + " has been killed.");
	}
	var mPlayI = mPlayers.indexOf(user);
	if ( user.mGroup === 'villager'){
		mNumVillager--;
	} else if ( user.mGroup === 'mafia'){
		mNumMob--;
	}
	mPlayers[mPlayI].inMafia = false;
	mPlayers.splice(mPlayI, 1);
	if (mNumVillager === 0){
		mRoom.send("All villagers have been killed. The mafia win!");
		mEndGame();
	}else if (mNumMob === 0){
		mRoom.send("All mafia have been killed. The villagers win!");
		mEndGame();
	}
}

function mNight() {
		if (!mGame) { return; }
		mRoom.send('It is now night. Mafia members, choose a player to kill.');
		mNightTime = true;
		mDayTime = false;
		setTimeout(mRemove(targetUser), 30000)
		mInterval();
}

function mCount() {
	if (mCounted || !mGame) { return; }
	mRoom.send('Counting votes.');
	mCounted = true;
	var mChosen = mPlayers[0];
	var mChosenNum = 0;
	var mTie = false;
	for (var i=0; i<mPlayers.length; i++) {
		if (mPlayers[i].votes > mChosenNum) {
			mChosen = mPlayers[i];
			mChosenNum = mChosen.votes;
			mTie = false;
		} else if (mPlayers[i].votes === mChosenNum) {
			mTie = true;
		}
	}
	if (mTie) {
		mRoom.send('No majority was reached.');
	} else {
		mRemove(mChosen, false);
	}
	mNight();
}

function mDay() {
	if (!mGame) { return; }
	mRoom.send('It is now day. You have 30 seconds to vote on a person to kill.');
	mDayTime = true;
	mCounted = false;
	mNumVotes = 0;
	setTimeout(mCount, 30000);
}
	 
function mInterval() {
	if (!mGame) { return; }
	mNightTime = false;
	mDayTime = false;
	mRoom.send('You have 30 seconds to discuss.');
	for (var i=0; i<mPlayers.length; i++) {
		mPlayers[i].voted = false;
		mPlayers[i].votes = 0;
	}
	setTimeout(mDay, 30000);
}

	/*********************************************************
	 * Mafia commands
	 *********************************************************/

var commands = exports.commands = {
	 
	mstart: function(target, room, user, connection) {
		if (room !== Rooms.rooms.mafia || !user.can('broadcast')) { return; }
		if (mGame) {
			this.sendReplyBox('A game is currently being played.');
		} else if (mNextPlayers.length < 4) {
			this.sendReplyBox('At least 4 players are required to play.');
		} else {
			mGame = exports.mGame = true;
			mRoom = this;
			mNumMob = 0;
			mNumVillager = 0;
			mPlayers = mNextPlayers.slice(0);
			this.add('A new mafia game has begun. Players: ' + mPlayers);
			for (var i=0; i<mPlayers.length; i++) {
				mPlayers[i].inMafia = true;
				mPlayers[i].mGroup = 'villager';
			}
			for (var j=0; j<(mPlayers.length*.25); j++) {
				var mPlayer = Math.floor(Math.random()*mPlayers.length);
				mPlayers[mPlayer].mGroup = 'mafia';
				mPlayers[mPlayer].sendTo(Rooms.rooms.mafia, "You are a mafia member. Attempt to kill the villagers.");
				mNumMob++;
			}
			for (var k=0; k<mPlayers.length; k++) {
				if (mPlayers[k].mGroup === 'mafia') { continue; }
				mPlayers[k].sendTo(Rooms.rooms.mafia, "You are a villager. Attempt to find out who the mafia are.");
				mNumVillager++;
			}
			mInterval();
		}
	},
	
	mjoin: function(target, room, user, connection) {
		if (room !== Rooms.rooms.mafia) { return; }
		if (mNextPlayers.indexOf(user) !== -1){
			this.sendReplyBox('You have already joined the next mafia game.');
			return;
		}
		mNextPlayers.push(user);
		this.sendReplyBox('You have joined the next mafia game.');
	},
	
	mleave: function(target, room, user, connection) {
		if (room !== Rooms.rooms.mafia) { return; }
		if (mNextPlayers.indexOf(user) === -1){
			this.sendReplyBox('You are not playing the next game.');
			return;
		}
		mNextPlayers.splice(mNextPlayers.indexOf(user), 1);
		this.sendReplyBox('You will not play the next mafia game.');
	},
	
	mkill: function(target, room, user, connection) {
		if (!mGame || room !== Rooms.rooms.mafia) { return; }
		if (user.mGroup !== 'mafia'){
			this.sendReplyBox('You are not a member of the mafia.');
			return;
		}
		if (!mNightTime){
			this.sendReplyBox('It is not night.');
			return;
		}
		target = this.splitTarget(target);
		var targetUser = this.targetUser;
		if (targetUser.mGroup === 'mafia'){
			this.sendReplyBox('You cannot kill a member of the mafia.');
			return;
		}
		if (mPlayers.indexOf(targetUser) === -1){
			this.sendReplyBox('That player is not in the game.');
			return;
		}
		mKillTarget = targetUser;
	},
	
	mvote: function(target, room, user, connection) {
		if (!mGame || room !== Rooms.rooms.mafia) { return; }
		if (mPlayers.indexOf(user) === -1){
			this.sendReplyBox('You are not playing.');
			return;
		}
		if (!mDayTime){
			this.sendReplyBox('It is not day.');
			return;
		}
		if (user.voted) {
			this.sendReplyBox('You have already voted.');
			return;
		}
		target = this.splitTarget(target);
		var targetUser = this.targetUser;
		if (mPlayers.indexOf(targetUser) === -1){
			this.sendReplyBox('That player is not in the game.');
			return;
		}
		this.send(user + ' voted for ' + targetUser + '.');
		user.voted = true;
		targetUser.votes = targetUser.votes+1;
		mNumVotes++;
		if (mNumVotes === mPlayers.length) {
			this.send("All players have voted.");
			mCount();
		}
	},
	
	mchat: function(target, room, user, connection) {
		if (!mGame || room !== Rooms.rooms.mafia) { return; }
		if (user.mGroup !== 'mafia'){
			this.sendReplyBox('You are not a member of the mafia.');
			return;
		}
		for (var i=0; i<mPlayers.length; i++) {
			if (mPlayers[i].mGroup === 'mafia') {
				mPlayers[i].send("Mafia " + user + ": " + target);
			}
		}
	}
	
};
