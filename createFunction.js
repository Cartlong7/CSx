// declare a function createFunction with no parameters
const createFunction = () => {
	// the function returns a function, and when called returns the string 'hello world'
  const sayHello = () => {
 return 'hello world'; 
  }
  return sayHello;
}


// Uncomment these to check your work!
const myFunction = createFunction();
console.log(myFunction()); //should log: 'hello world'
