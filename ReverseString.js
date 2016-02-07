var input = prompt('Enter a string');

var i = 0;
var j = input.len;

while(i!=j){
	// Swap elements at i & j
	tmp=input[i];
	input[i]=input[j];
	input[i]=tmp;
	i++;
	j--;
}

console.log(input);