function hobbyTracker(hobbies) {
  let cache = {};
  hobbies.forEach(el => {cache[el] = 0})
  function hobbyFunc(hobby, hours){
    if (arguments.length == 0){
      for (let prop in cache) {
        cache[prop] = 0;
      }
      return 'tracker has been reset!'
    }
    cache[hobby] += hours;
    return cache;
  }
  return hobbyFunc;
}


// Uncomment the code below to check your code:
const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
updateHobbies('yoga', 2);
updateHobbies('baking', 4);
updateHobbies('yoga', 1);
console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies()); // --> 'tracker has been reset!'
console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}
