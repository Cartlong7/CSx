class PersonClass {
	constructor(name) {
    this.name = name;
	}
	greet() {
    console.log('hello');
  }
}

// create a class Developer Class that creates objects by extending PersonClass
// add a method introduce that logs the string "Hello World, my name is [name]"
class DeveloperClass extends PersonClass {
  constructor(name, greet) {
    super(name, greet);
  }
  introduce(){
    console.log(`Hello World, my name is ${this.name}`);
  }
}

const thai = new DeveloperClass('Thai', 32);

// Uncomment these lines to check your work!
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); // -> Logs 'Hello World, my name is Thai'
