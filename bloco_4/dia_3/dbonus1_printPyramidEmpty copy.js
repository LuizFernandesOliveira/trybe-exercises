//print pyramid numbers inderted

const pyramidSideSize = 7;


for (let i = 1; i <= pyramidSideSize; i += 1) {

    let asteriskNumber = ' *';
    let spaced = '';
    let spacedMedia = '';
    let lastAsteriskNumber = '';

    // coloca dois escpaços em cada posição que não tem asteristico
    for (let s = 1; s <= Math.floor((pyramidSideSize - i) / 2); s += 1) {
        spaced += '  ';
    }

    // se for par, icrementa mais um espaço - para organização
    if (i % 2 === 0) {
        spaced += ' ';
    }

    for (let space = 3; space <= i; space += 1) {
        spacedMedia += '  ';
    }

    
    if(i === 1){
        newAsteriskNumber = spaced + asteriskNumber + spaced
    } else if(i === pyramidSideSize){

        for(let inc = 1; inc <= pyramidSideSize; inc += 1){
            lastAsteriskNumber += ' *';
        }
        newAsteriskNumber = spaced + lastAsteriskNumber + spaced;
    }else {
        newAsteriskNumber = spaced + asteriskNumber + spacedMedia + asteriskNumber + spaced;
    }

    console.log(newAsteriskNumber);
}
