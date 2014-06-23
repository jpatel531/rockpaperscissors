pairs = {
	"rock": { "beats": "scissors"},
	"paper": { "beats": "rock" },
	"scissors": { "beats": "paper" }
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

Game.prototype.samePick = function() {
	return this.player1.pick === this.player2.pick;
};

Game.prototype.winner = function() {
	if (this.samePick() === true) {
		return null;
	}
	else if (pairs[this.player1.pick]["beats"] === this.player2.pick) {
		return this.player1;
	}
	else {
		return this.player2;
	}
};




