let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numbersOrdened = numbers.sort(function(a, b){
    if (a < b) return 1
    if (a > b)return -1
    return 0;
})

console.log(numbersOrdened);