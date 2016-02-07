
// Generate a random number between 1 to 100

num = parseInt(Math.random()*100);
var numberOfTries = 0;
var lastNumGuessed = null;

var numGuessed = prompt('Enter a number');


while(numberOfTries < 50){
	lastNumGuessed = numGuessed;
	if (numGuessed == num){
		alert('You got it.. You cracked after '+numberOfTries+' tries..Cool!!');
		break;
	}else if (numGuessed > num){
		numGuessed = prompt('Number you have guessed is bigger than what I have. Please enter a smaller num');
	}else{
		numGuessed = prompt('Number you have guessed is smaller than what I have. Please enter a bigger num');
	}
	if (lastNumGuessed != numGuessed){
		numberOfTries++;
	}
}
if (numberOfTries>=50){
	console.log('You have tried more than 50 times..')
}