'use strict';

var inpArr1 = [
'6-3',
'4-3,5-1,2-2,1-3,4-4',
'1-1,3-5,5-2,2-3,2-4'
];

var inpArr2 = [
'1-2,1-2',
'3-2,2-1,1-4,4-4,5-4,4-2,2-1',
'5-5,5-5,4-4,5-5,5-5,5-5,5-5,5-5,5-5,5-5'
];


function findMatchingGroup(arr){
  var len = arr.length;
  var matchingGroup = [];
  for (let i=0;i<len;i++){
    var inputStrArr = arr[i].split(',');
    var lenInput = inputStrArr.length;
    var matched = 1;
    var max_match = 1;
    for (let j=1;j<lenInput;j++){
      if ((inputStrArr[j-1].split('-')[1]) == (inputStrArr[j].split('-')[0]))
      {
        matched++;
      }else {
        if (matched >= max_match){
          max_match = matched;
        }
        matched = 1;
      }
    }
    if (matched >= max_match){
      max_match = matched;
    }
    matchingGroup.push(max_match) ;
  }
  return matchingGroup;
}

console.log(findMatchingGroup(inpArr1));
console.log(findMatchingGroup(inpArr2));