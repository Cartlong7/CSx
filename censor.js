const censor = () => {
  const cache = {};
  return function(string1, string2) {
    if (string2) {
      cache[string1] = string2;
      return;
    }
    Object.keys(cache).forEach(key => string1 = string1.replace(key, cache[key]));
    return string1;
  }
}
// Uncomment these to check your work!
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'
