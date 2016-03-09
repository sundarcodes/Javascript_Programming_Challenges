var ones=['','one','two','three','four','five','six','seven','eight','nine'];
var teens=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
var tees=['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];


function printWord(digit){
	if (digit<10){
		return ones[digit];
	}else if (digit < 20){
		// Get the one's digit of the two digit number
		onesDigit=digit%10;
		return teens[onesDigit];
	}else if(digit < 100){
		// Get the one's digit of the two digit number
		onesDigit=digit%10;
		// Get the ten's digit of the two digit number
		tensDigit=Math.floor(digit/10);
		return tees[tensDigit-2]+' '+ones[onesDigit];
	}else if(digit < 1000){
		// Get the hundred's digit
		hundredsDigit=Math.floor(digit/100);
		// Get the remainder
		var remainder=digit%100;
		if (remainder === 0){
			return ones[hundredsDigit]+' hundred ';	
		}else{
			return ones[hundredsDigit]+' hundred and '+printWord(remainder);	
		}
	}else if(digit < 1000000){
		// Get the thousands
		thousands=Math.floor(digit/1000);
		// Get the remainder
		var remainder=digit%1000;
		if (remainder === 0){
			return printWord(thousands)+' thousand ';
		}else{
			return printWord(thousands)+' thousand and '+printWord(remainder);	
		}
	}else if(digit < 1000000000){
		// Get the million
		millions=Math.floor(digit/1000000);
		// Get the remainder
		var remainder=digit%1000000;
		return printWord(millions)+' million '+printWord(remainder);
	}else if(digit < 1000000000000){
		// Get the billion
		billions=Math.floor(digit/1000000000);
		// Get the remainder
		var remainder=digit%1000000000;
		return printWord(billions)+' billion '+printWord(remainder);
	}
}

var inputTestCases=[1,2,9,10,11,19,20,21,30,35,50,99,100,101,
199,200,210,231,250,299,900,999,1000,1001,1100,1200,
1210,1299,1387,1900,1999,8000,8001,9999,10000,
234000, 234001, 234500, 234999, 999999,
  1000000, 1000001, 1111115, 999999999,1000000000,1000000001,1111111115];

inputTestCases.forEach(function(input){
	console.log(input+" --> "+printWord(input));
});
