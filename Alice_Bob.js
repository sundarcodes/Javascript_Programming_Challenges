
process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
   parameterArr = data.split('\n');
   inputData=parameterArr[0];
   main(inputData);
});

function main(input){

	inputArr = input.split('');
	var i = 0;
	var j = inputArr.length-1;

	while(i<j){
		// Swap elements at i & j
		tmp=inputArr[i];
		inputArr[i]=inputArr[j];
		inputArr[j]=tmp;
		i++;
		j--;
	}

console.log(inputArr.join(''));
}