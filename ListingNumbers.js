var inputString=prompt("Enter the number");
num=parseInt(inputString);

// Go on dividing the number by 10 till the quotient becomes zero
var remainder=0;
digitArray=[];

while(num>0){
    remainder=num%10;
    digitArray.push(remainder);
    num=Math.floor(num/10);
}

// Now just reverse the array
console.log(digitArray.reverse().join('\n'));
