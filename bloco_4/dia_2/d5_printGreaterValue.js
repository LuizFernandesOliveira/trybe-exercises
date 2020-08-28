let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let greaterValueInNumbers = 0;

for(let index in numbers){
    if(numbers[index] > greaterValueInNumbers) greaterValueInNumbers = numbers[index];
}

console.log(greaterValueInNumbers);