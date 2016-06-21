'use strict';

var inp1 = [1,2,[3],[4,[5,6]],[[7]], 8];

var inp2 = [1, 2, [3], [4, [5, 6], 5, 6], [[7], [8, [9]]], 10, [[[11], 12]]];


// With Global Variable
var finalArray = [];

function flatten(arr){
  var len = arr.length;
  let i = 0;
  while (i < len) {
    if (arr[i] instanceof Array){
      flatten(arr[i]);
    }else{
      finalArray.push(arr[i])
    }
    i++;
  }
  return finalArray;
}

// Without Global Variable
function flatten2(arr){
  var finalArray1 = [];
  var len = arr.length;
  let i = 0;
  while (i < len) {
    if (arr[i] instanceof Array){
      finalArray1.push(flatten2(arr[i]));
    }else{
      finalArray1.push(arr[i])
    }
    i++;
  }
  return finalArray1.join(',');
}


console.log(flatten(inp1));
var finalArray = [];
console.log(flatten(inp2));
console.log(flatten2(inp2).split(','));
