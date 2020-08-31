//print pyramid numbers

const pyramidSideSize = 5;

for(let i = 1; i <= pyramidSideSize; i += 1){
    let asteriskNumber = ''
    for(let j = 1; j <= i; j += 1){
        asteriskNumber += '*'
    }
    console.log(asteriskNumber)
}