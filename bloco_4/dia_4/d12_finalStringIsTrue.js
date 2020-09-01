function verificaFimPalavra(word, ending){
  if(ending.length > word.length) return 'palavra final maior que palavra';

  let positionInitialWord = (ending.length - 1) + (word.length - ending.length);

  let isEqual = false;
  
  for(let i = ending.length - 1; i >= 0; i -= 1){
    if(word[positionInitialWord] == ending[i]) isEqual = true;
    else return false;
    positionInitialWord -= 1;
  }

  return isEqual;

}

console.log(verificaFimPalavra("tryber", "ber"))