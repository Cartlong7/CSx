function PersonConstructor() {
	// use this to declare a method greet and set it to a function that logs 'hello'
  this.greet = function (){
    console.log('hello');
  }
}

const simon = new PersonConstructor();

// Uncomment this line to check your work!
simon.greet(); // -> Logs 'hello'
