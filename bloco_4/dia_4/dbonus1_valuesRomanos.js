
const romanToDecimalConverter = (function(){
  const baseNumbers = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  }

  let getValueConverted = function(numInRoman){
    for(let key in baseNumbers){
      if(key === numInRoman) return baseNumbers[key];
    }
  }

  let calculations = {
    sum: (num1, num2) => {
      return num1 + num2
    },
    subtract: (num1, num2) => {
      return num2 - num1
    },
  }

  let selectSumOrSubtract = function(num1, num2){
    if(num1 === num2) return calculations.sum(num1, num2);
    else if(num1 > num2) return calculations.sum(num1, num2);
    else if(num1 < num2) return calculations.subtract(num1, num2);
  }

  let converter = function(numberInRoman){
    let sum = 0;
    for(let i = numberInRoman.length - 1; i >= 0; i -= 2){
  
      if(numberInRoman.length === 1) {
        sum += getValueConverted(numberInRoman[i]);
      }else if(numberInRoman.length % 2 === 0){
        sum += selectSumOrSubtract(
          getValueConverted(numberInRoman[i - 1]), 
          getValueConverted(numberInRoman[i])
        )
      }else if(numberInRoman.length % 2 === 1){
        if(i > 1){
          sum += selectSumOrSubtract(
            getValueConverted(numberInRoman[i - 1]), 
            getValueConverted(numberInRoman[i])
          )
        }else{
          sum += getValueConverted(numberInRoman[i]);
        }
      }
    }
  
    return sum;
  }

  console.log(converter('xixi'));

})()