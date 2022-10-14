const addByX = (input) => {
  const addNum = (num) => num += input;
  return addNum;
}

const addByTwo = addByX(2);
// Now call addByTwo with an input of 1 and log the output
console.log(addByTwo(1));
// Now call addByTwo with an input of 2 and log the output
console.log(addByTwo(2));
