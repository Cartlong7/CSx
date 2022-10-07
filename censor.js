const censor = () => {
  const cache = {};
  return function(stringOne, stringTwo) {
    if (stringTwo) {
      cache[stringOne] = stringTwo;
      return;
    } 
    Object.keys(cache).forEach(key => {
      stringOne = stringOne.replace(key, cache[key]);
    });
    return stringOne;
  }
}
// Uncomment these to check your work!
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'
