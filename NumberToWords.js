
arrSetAToWords=['zero','one','two','three','four','five','six','seven','eight','nine'];
arrSetBToWords=['zero','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
arrSetCToWords=['zero','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

var inputString=prompt("Enter the number");
num=parseInt(inputString);

var wordsArray=[];
var copyOfNum=num;

printToWords(num);

function isWordPresent(word){
  // Scan through all the elements of array to see if word is present or not
  var len=wordsArray.length
  for(i=0;i<len;i++){
    if (wordsArray[i].search(word) != -1){
      return true;
    }
  }
  return false;
}

function printToWords(num){
  // If num is zero, just return zero
  if (num === 0) {
  console.log('zero');
  return;
  }

  // Go on dividing the number by 10 till the quotient becomes zero
  var remainder=0;
  digitArray=[];

  var digitPlace=0;
  while(num>0){
    remainder=num%10;
    digitArray.push(remainder);
    num=Math.floor(num/10);
    digitPlace++;
    word = getWord(remainder,digitPlace);
    wordsArray.push(word);
  }
  // Now just reverse the array
  console.log(copyOfNum);
  console.log(wordsArray.reverse().join(' '));
}

function getWord(number,digitPlace){
  var strInWords='';
  // If the number ends with zero, just pass empty string
  if (number === 0){
    return '';
  }
  switch(digitPlace){
    case 1:
      // One's place
      strInWords=arrSetAToWords[number];
      break;
    case 2:
      // Tens' place
      // Check if the input number if 1 as we need to take it from a different set
      if (number === 1){
        rem=copyOfNum%10;
        if (rem === 0){
          strInWords=arrSetCToWords[number];
        }else{
          strInWords=arrSetBToWords[rem];
          wordsArray=[];
        }
      }
      else{
        strInWords=arrSetCToWords[number];
      }
      break;
    case 3:
      // Hundred's place
      strInWords=arrSetAToWords[number] + ' hundred';
      break;
    case 4:
      // Thousand's place
      strInWords=arrSetAToWords[number] + ' thousand';
      break;
    case 5:
      // Ten Thousand's place
      strInWords=arrSetCToWords[number];
      // Add thousand to the end if its not already added
      if (!isWordPresent('thousand')){
        strInWords+=' thousand';
      }
      break;
    case 6:
      // 100 thousand million
      strInWords=arrSetAToWords[number] + ' hundred';
      // Add thousand to the end if its not already added
      if (!isWordPresent('thousand')){
        strInWords+=' thousand';
      }
      break;
    case 7:
      // 1 million
      strInWords=arrSetAToWords[number] + ' million';
      break;
    case 8:
      // 10 million
      strInWords=arrSetCToWords[number];
      // Add million to the end if its not already added
      if (!isWordPresent('million')){
        strInWords+=' million';
      }
      break;
    case 9:
      // 100 million
      strInWords=arrSetAToWords[number] + ' hundred';
      // Add million to the end if its not already added
      if (!isWordPresent('million')){
        strInWords+=' million';
      }
      break;
  }
  return strInWords;
}
