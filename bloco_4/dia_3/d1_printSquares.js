//print square numbers

const squareSideSize = 5;

for(let i = 1; i <= squareSideSize; i += 1){
    let asteriskNumber = ''
    for(let j = 1; j <= squareSideSize; j += 1){
        asteriskNumber += '* '
    }
    console.log(asteriskNumber)
}