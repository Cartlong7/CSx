// This question comes from the Closure CSbin, not CSX!

function rollCall(names) {
  return function() {
    if (names.length === 0) console.log('Everyone accounted for');
    else {
      console.log(names[0]);
    	names = names.slice(1);
    }
  }
}

// Uncomment the lines below to check your work.

// const nameArr = ['John', 'Erica', 'Wilson', 'Stephanie'];
// const callName = rollCall(nameArr);
// callName();
// callName();
// callName();
// callName();
// callName();
