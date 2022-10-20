function PersonConstructor() {
	// uses this keyword to save a property on its scope called greet
  this.greet = function(){console.log('hello')};
}

const simon = new PersonConstructor();

// Uncomment this line to check your work!
simon.greet(); // -> Logs 'hello'
