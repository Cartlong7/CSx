const createFunction = () => {
  const hello = () => 'hello world';
  return hello;
}

// Uncomment these to check your work!
const myFunction = createFunction();
console.log(myFunction()); //should log: 'hello world'
