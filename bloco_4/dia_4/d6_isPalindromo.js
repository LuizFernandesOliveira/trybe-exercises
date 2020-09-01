function verificaPalindrome(fhrase){
  const fhraseOriginal = fhrase;
  let fhraseReverse = '';

  console.log()
  for(let i = fhraseOriginal.length - 1; i >= 0; i -= 1){
    fhraseReverse += fhraseOriginal[i];
  }

  if(fhraseOriginal === fhraseReverse) return true;
  else return false;
  
}
console.log(verificaPalindrome("arara"));