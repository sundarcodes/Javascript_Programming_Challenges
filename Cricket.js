'use strict';
class Game{
	constructor(player1,player2){
		this.player1=player1;
		this.player2=player2;
	}
	printScore(){
		this.player1.printScore();
		this.player2.printScore();
	}
}

class Player{
	constructor(name,score){
		this.name=name;
		this.score=score;
	}
	printScore(){
		console.log('Score of '+this.name+' is '+this.score);
	}
}

var p1=new Player('Sachin',100);
var p2=new Player('Dravid', 200);

var game = new Game(p1,p2);
game.printScore();