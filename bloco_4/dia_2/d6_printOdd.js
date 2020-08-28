let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let amountOdd = 0;

for(let index in numbers){
    if(numbers[index] % 2 == 1) amountOdd++
}

console.log(amountOdd ? `existe ${amountOdd} ímpares` : 'nenhum valor ímpar encontrado');