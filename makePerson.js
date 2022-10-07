function makePerson(name, age) {
	// create an empty object
  let user = {};
  user.name = name;
  user.age = age;
  return user;
}

const vicky = makePerson('Vicky', 24);


// Uncomment these lines to check your work!
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24
