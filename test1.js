var map = function(arr,fn){
	var result = [];
	for(i=0;i<arr.length;i++){
		result.push(fn(arr[i]));
	}
	return result;
}



// Now to find all elements greater than a given number

//User Code

console.log(map([1,2,4,3,6,5],function(item){
	if (item > 5){
		return item;
	}
	else {
		return false;
	}
}));