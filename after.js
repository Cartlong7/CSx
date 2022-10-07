// declare a function that takes two parameters (# of times cb needs to be called before executed, and the cb)
const after = (callCount, cb) => {
  let counter = 0; // initialize a variable that is set to 0 that will be incremented
  // create a function that uses the rest parameter to store elements
  const numTimesRun = (...args) => {
    counter++; // increment counter
    if (counter >= callCount) {  // if counter is greater than or equal to callCount
      return cb(...args); // return cb with the argument of spread parameter args
    }
  }
  return numTimesRun;
}

const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> 'hello world' is printed
