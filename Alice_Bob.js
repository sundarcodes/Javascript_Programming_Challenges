
process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
   parameterArr = data.split('\n');
   inputData=parameterArr[0];
   main(inputData);
});

function main(input){

	switch(input){
		case 'Alice':
			console.log('Hi Alice');
			break;
		case 'Bob':
			console.log('Hi Bob');
			break;
		default:
			console.log('Sorry only Alice and Bob are greeted :(');
		break;
	}
}