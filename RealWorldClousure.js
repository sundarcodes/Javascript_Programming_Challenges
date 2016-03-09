var greet = function(greeting){
	return function(name){
		console.log(greeting+' '+name);
	}
}

// Get input from keyboard
var name = prompt('Enter name');

greet('Hi')


