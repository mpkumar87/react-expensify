//
// Object Destructuring
//
const person = {
	name: 'kumar',
	age: 20,
	location: {
		city: 'chennai',
		temp: 101
	}
}

const {name: firstName = 'default_name', age} = person;
console.log(`${firstName} is ${age}.`);

const {city, temp: temp_rename} = person.location;
if (city && temp_rename) {
	console.log(`It is ${temp_rename} in ${city}`);
}

//
// Array Destructuring
//

const address = ['41st street', 'korattur', 'chennai', '600080'];

const [, area, my_city = 'Madurai'] = address;

console.log(`you are in ${area}, ${my_city}`);