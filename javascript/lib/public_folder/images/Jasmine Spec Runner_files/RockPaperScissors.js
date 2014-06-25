pairs = {
	"rock": { 
		"scissors": "crushes", 
		"lizard": "crushes" 
	},
	"paper": { 
		"rock": "covers", 
		"spock": "disproves"
	},
	"scissors": { 
		"paper": "cuts", 
		"lizard": "decapitates"
	},
	"lizard": {
		"paper": "eats",
		"spock": "poisons"
	},
	"spock": {
		"scissors": "smashes", 
		"rock": "vaporizes",
	}
}

function Player(name) {
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype._isSamePick = function() {
	return this.player1.pick === this.player2.pick;
};

Game.prototype.winner = function() {
	if(this._isSamePick()) return null;
	else if(pairs[this.player1.pick][this.player2.pick]) {
		return this.player1;
	}
	else {
		return this.player2;
	}
};

Game.prototype.loser = function() {
	return (this.winner() === this.player1) ? this.player2 : this.player1
};

Game.prototype.announcement = function() {
	return this.winner.name + "'s " + this.winner.pick + " " + pairs[this.winner.pick][this.loser.pick] + " " + this.loser.name + "'s " + this.loser.pick
};




