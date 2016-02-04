var inputString=prompt("Enter the year from which you want to compute the leap years");
var year = parseInt(inputString);
// First check the next immediate leap year from the given year
rem = year%4;
// If year is 2017, next leap year should be 2020
// If year is 2020, next leap year should be 2024
nextLeapYear = year + (4-rem);
if (!checkIsCentury(nextLeapYear)){
  nextLeapYear+=4;
}
// Now print the 100 next leap years
counter=0
while(counter<100){
  console.log(nextLeapYear);
  nextLeapYear+=4;
  if (!checkIsCentury(nextLeapYear)){
    nextLeapYear+=4;
  }
  counter+=1
}

// This function checks if the year is century or not.
// Remember 2100,2200 are not leap years, but 2400 is.
// Logic is if a century is divisible by 400, it is a leap year else it is not
function checkIsCentury(year){
  if (year % 100 == 0 && year%400!=0){
    return false;
  }
  return true;
}
