function solution(N) {
    // write your code in JavaScript (Node.js 4.0.0)
    // Divide the number by 2
    N=parseInt(N);
    var maxOfMaxZeros=0;
    var maxZerosSoFar=0;
    var isBinaryOnePresent = false;
    var quotient=parseInt(N/2);
    var remainder=N%2;
    while(quotient>0){
        if (remainder === 0 && isBinaryOnePresent){
            maxZerosSoFar+=1;
        }else if (remainder === 1){
            isBinaryOnePresent=true;
            if (maxZerosSoFar>maxOfMaxZeros){
                maxOfMaxZeros=maxZerosSoFar;
            }
            maxZerosSoFar=0;
        }
        remainder=quotient%2;
        quotient=parseInt(quotient/2);
    }
    if (maxZerosSoFar>maxOfMaxZeros){
         maxOfMaxZeros=maxZerosSoFar;
    }
    return maxOfMaxZeros;
}

// console.log(solution(561892));
// console.log(solution(34));

var arr=[1,2,3,45,2345,23,561892,74901729,1376796946,1610612737,2147483647];
arr.forEach(function(item){
    console.log(item+' : '+ solution(item));
});

// maxZeros = 0;

// function recursiveSolution(n){
//     quotient = n/2;
//     remainder = n % 2;
//     if (quotient == 1){
//         return 1;
//     }
//     if (quotient >= 2){

//     }
// }