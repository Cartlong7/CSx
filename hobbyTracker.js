function hobbyTracker(hobbies){
  let cache = {};
  hobbies.forEach(el => {cache[el] = 0})
  return function hobbyFunc(hobby, hours){
    if (hobby === undefined){
      Object.keys(cache).forEach(key => {cache[key] = 0})
      return 'tracker has been reset!'
    }
    cache[hobby] += hours;
    return cache;
  }
}


// Uncomment the code below to check your code:
const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
updateHobbies('yoga', 2);
updateHobbies('baking', 4);
updateHobbies('yoga', 1);
console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies()); // --> 'tracker has been reset!'
console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}
