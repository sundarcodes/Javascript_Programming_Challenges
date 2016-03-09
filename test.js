var filter = function(arr,fn){
	var result = [];
	for(i=0;i<arr.length;i++){
		result.push(fn(arr[i]));
	}
	return result;
}

//User Code

var res=filter([1,2,4,3,6,5],function(item){
	if (item == 5){
		return item;
	}
});

console.log(res);


arr=[1,2,3,4];

for(i=0;i<arr.length;i++){
	console.log(arr[i]);
}