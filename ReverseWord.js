var inputString=prompt("Enter the text that you want to reverse");
inputArray = inputString.split(' ');
outputArray = [];
//len = inputArray.length;

for (i=0;i<inputArray.length;i++){
  string=inputArray[i];
  outputArray.push(reverseString(string));
}


function reverseString(str){
  var len=str.length;
  var reversedStr='';
  var i=0;
  for(i=len-1;i>=0;i--){
    // console.log(str[i]);
    reversedStr+=str[i];
  }
  return reversedStr;
}
console.log(outputArray.join(" "));
