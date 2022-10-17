// declare a function that takes two parameters (# of times cb needs to be called before executed, and the cb)
  // initialize a variable that is set to 0 that will be incremented
  // create a function that uses the rest parameter to store elements
    // increment counter
    // if counter is greater than or equal to callCount
      // return cb with the argument of spread parameter args
const after = (num, cb) => {
  let counter = 0;
  return function(...args) {
    counter++;
    if (counter >= num) {
			return cb(...args);
    } 
  }
}

const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> 'hello world' is printed
