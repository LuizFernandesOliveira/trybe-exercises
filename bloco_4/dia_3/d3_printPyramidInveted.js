//print pyramid numbers inderted

const pyramidSideSize = 5;

for(let i = 1; i <= pyramidSideSize; i += 1){
    let asteriskNumber = '';
    let spaced = '';
    for(let s = 1; s <= pyramidSideSize - i; s += 1){
        spaced += ' ';
    }
    for(let j = 1; j <= i; j += 1){
        asteriskNumber += '*';
    }
    newAsteriskNumber = spaced + asteriskNumber;
    console.log(newAsteriskNumber);
}