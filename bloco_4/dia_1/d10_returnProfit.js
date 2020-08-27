const quantifyParts = 1000
const cost = quantifyParts * 1.00;
const saleValue = quantifyParts * 2.00;

if(cost > 0){

    const costTotal = cost + (cost * 0.20);

    const profit = saleValue - costTotal;

    console.log('Your profit is: ', profit);

}
else console.log('The indicated value is insufficient');
