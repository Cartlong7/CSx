const subtractTwo = (num) => num - 2;

const map = (array, cb) => {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(cb(array[i]));
  }
  return newArr;
}
// Uncomment these to check your work!
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]
