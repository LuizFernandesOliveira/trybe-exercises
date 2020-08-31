//print pyramid numbers inderted

const pyramidSideSize = 7;


if(pyramidSideSize % 2 === 1){
    for(let i = 1; i <= pyramidSideSize; i += 1){

        let asteriskNumber = '';
        let spaced = '';

        // coloca dois escpaços em cada posição que não tem asteristico
        for(let s = 1; s <= Math.floor((pyramidSideSize - i) / 2); s += 1){
            spaced += '  ';
        }

        if(i % 2 === 0){
            spaced += ' ';
        }

        for(let j = 1; j <= i; j += 1){
            asteriskNumber += ' *';
        }

        newAsteriskNumber = spaced + asteriskNumber + spaced;
        console.log(newAsteriskNumber);
    }
}else{
    console.log('Só é legal fazer com números impares');
}
