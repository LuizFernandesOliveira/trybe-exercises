function returnMoreRepeate(myNumbers) {
  const myNuns = myNumbers;
  let number = 0;
  let countRepeatCurrentValue = 0;
  for (let value of myNuns) {
    let countRepeatValue = 0;

    for (let values of myNuns) {
      if (value === values) {
        countRepeatValue += 1;
      }
      if (countRepeatValue > countRepeatCurrentValue) {
        countRepeatCurrentValue = countRepeatValue;
        number = value;
      }
    }
  }
  msg = `o número repetido é: `;

  return msg + number;
}

console.log(returnMoreRepeate([2, 3, 2, 5, 8, 2, 3]))