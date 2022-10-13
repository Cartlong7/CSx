const majority = (array, cb) => {
  let countTrue = 0;
  let countFalse = 0;
  for (let i = 0; i < array.length; i++) {
    cb(array[i]) ? countTrue++ : countFalse++; 
  }
  if (countTrue > countFalse) return true;
    return false;
}

// Uncomment these to check your work!
const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false
