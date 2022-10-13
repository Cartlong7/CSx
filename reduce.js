const reduce = (array, callback, accumulator) => {
  array.forEach(element => { 
    accumulator = callback(accumulator, element);
  });
  return accumulator;
}

// Uncomment these to check your work!
const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
console.log(reduce(nums, add, 0)); // should log 8
