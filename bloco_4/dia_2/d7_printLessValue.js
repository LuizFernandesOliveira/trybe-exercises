let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lessValueInNumbers = numbers[0];

for(let index = 1; index < numbers.length; index++){
    if(numbers[index] < lessValueInNumbers) lessValueInNumbers = numbers[index];
}

console.log('O menor valor é: ',lessValueInNumbers);