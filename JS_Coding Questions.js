
//Question: What is the value of foo?
var foo = 10 + '20';

//Question: What is the value of foo?
var foo = 10 + 30 + '20';

var foo = 10*20+30;

//Question: What value is returned from the following statement?
"i'm a lasagna hog".split("").reverse().join("");

//Question: What is the value of window.foo?
( window.foo || ( window.foo = "bar" ) );

//Question: What is the outcome of the two alerts below?
var foo = "Hello";
(function() {
var bar = " World";
alert(foo + bar);
})();
alert(foo + bar);


//Question: What is the value of foo.length?
var foo = [];
foo.push(1);
foo.push(2);

//Question: What is the value of foo.x?
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};

//Question: What does the following code print?
console.log('one');
setTimeout(function() {
	console.log('two');
},1000);
console.log('three');
console.log('three1');
console.log('three2');
console.log('three3');


// What does the following code print ?

greet();

function greet(){
	console.log('Hello Gurdeep');
}

nameLessFunction();

var nameLessFunction = function(){
	console.log('Hello');
}



//And this one is the question that I would like you guys to think over and code : 
//Question: How would you make this work? Write a add function which would work for both the below cases. 
add(2, 5); // 7
add(2)(5); // 7

Please complete your Jquery exercises (Animation,TIC TAC TOE)
and then proceed to doing the AJAX exercise for today which is extending the weather app to get the forecast

https://github.com/sundarcodes/JavaScript-Exercises/tree/master/AJAX


