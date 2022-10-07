const personStore = {
  greet: function() {
    console.log('hello');
  }
}

function personFromPersonStore(name, age) {
	const person = Object.create(personStore);
  person.name = name;
  person.age = age;
  return person;
}

const sandra = personFromPersonStore('Sandra', 26);

// store a new method named introduce on a variable called namePerson
personStore.introduce = namePerson;
// function declaration of namePerson must be in function notation not ES6+ arrow function notation as arrow functions don't have their own 'this'
function namePerson (name) {console.log(`Hi, my name is ${this.name}`)}

// Uncomment this line to check your work!
sandra.introduce(); // -> Logs 'Hi, my name is Sandra'
