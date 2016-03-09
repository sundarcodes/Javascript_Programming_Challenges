// Find all elements greater than a given value

// Library Code
function greaterThan(array,var){
	var result = [];
	for(i=0;i<array.length;i++){
		if (array[i] > var){
			result.push(array[i]);
		}
	}
	return result;
}

// User Code
console.log(greaterThan([1,2,4,5,4],5));

// Find all elements lesser than a given value
// Library Code
function lesserThan(array,var){
	var result = [];
	for(i=0;i<array.length;i++){
		if (array[i] < var){
			result.push(array[i]);
		}
	}
	return result;
}

// User Code
console.log(lesserThan([1,2,4,5,4],5));

// Find all elements equal a given value

function equalTo(array,var){
	var result = [];
	for(i=0;i<array.length;i++){
		if (array[i] == var){
			result.push(array[i]);
		}
	}
	return result;
}


// Now what if we want need more functions like finding multiples of a given number in a array, 
// prime numbers in a array etc ?



// Coming to our aid is functional Programming

// Library Code
// Filter
// Apply a the function to all the elements in array 
var filter = function(arr,fn){
	var result = [];
	for(i=0;i<array.length;i++){
		result.push(fn(a[i]));
	}
	return result;
}



// Now to find all elements greater than a given number

//User Code

filter([1,2,4,3,6,5],function(item){
	if (item == 5){
		return item;
	}
	else {
		return null;
	}
});

// Now to find all elements lesser than a given number

//User Code

filter([1,2,4,3,6,5],function(item){
	if (item < 5){
		return item;
	}
});


// Now to find all elements equal to a given number

//User Code

filter([1,2,4,3,6,5],function(item){
	if (item == 5){
		return item;
	}
});


// Now to find all elements equal to a given number

//User Code

filter([1,2,4,3,6,5],function(item){
	if (item == 5){
		return item;
	}
});


// Now to find all elements which are divisible by 3

//User Code

filter([1,2,4,3,6,5],function(item){
	if (item % 3 == 0){
		return item;
	}
});


// Functional vs Procedural/modular programming


// Exercise

var a = add(2, 5); // 7
var b = add(2)(5); // 7

console.log(a);
console.log(b);


// Build a library function called map which will take an array and function as arguments
// and return the elements of array after applying a function on all the items

// map function could be used to say add 2 to all elements in array, double all the elements the array 
// and return the new set


console.log(map([1,2,3,4]),function(item){
	return item*2;
})

// This should print [2,4,5,8]

console.log(map([1,2,3,4]),function(item){
	return item > 2;
})

// This should print [false,false,true,true]


