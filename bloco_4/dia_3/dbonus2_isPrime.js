const number = 43;

let dividers = 0;
for(let i  = 0; i <= number; i += 1){
    if(number % i === 0){
        dividers += 1;
    }
}

if(!(dividers > 2)){
    console.log(`${number} is a prime number`);
}else {
    console.log(`${number} is not a prime nummber`);
}