const once = (cb) => {
  let hasBeenCalled = false; // indicates whether cb has been invoked
  let cache; // initialize a variable  that will store result of cb invocation
  
  // create a function that uses the rest parameter to store elements
  const onceRun = (...args) => {
    if (!hasBeenCalled) {  // if cb hasn't yet been invoked
      cache = cb(...args); // call cb and store result in cache
      hasBeenCalled = true; // set the value of hasBeenCalled to true
    }
    return cache;
  }
  return onceRun
}


const addByTwoOnce = once(function(num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7
