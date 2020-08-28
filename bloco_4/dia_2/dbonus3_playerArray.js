let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let newArrays = [];

for(let i = 0; i < numbers.length - 1; i += 1){
    newArrays.push(numbers[i] * numbers[i + 1]);
}

console.log(newArrays);