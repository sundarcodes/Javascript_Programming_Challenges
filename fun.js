

function add(a,b){
  if (b != undefined){
    return a+b;
  }else
  {
    return function(b){
      return a+b;
    }
  }
}


var a = add(2, 5); // 7
var b = add(2)(5); // 7

console.log(a);
console.log(b);

var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};


a=5;
b=6;
