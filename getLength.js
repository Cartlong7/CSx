const getLength = (array, length = 0) => array[0] === undefined ? length : getLength(array.slice(0, -1), length + 1);
// To check if you've completed the challenge, uncomment these console.logs!
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0
