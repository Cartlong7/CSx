class PersonClass {
	constructor(name) {
    // use this to store the input of name
		this.name = name;
	}
	// add a method greet that logs 'hello'
	greet(){
    console.log('hello');}
}

const george = new PersonClass('George');

// Uncomment this line to check your work!
george.greet(); // -> Logs 'hello'
