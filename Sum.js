
process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
   parameterArr = data.split('\n');
   inputData=parameterArr[0];
   main(inputData);
});

function main(input){

	var sum=0;

	for(i=0;i<input;i++){
		sum+=i;
	}
	console.log(sum);
}