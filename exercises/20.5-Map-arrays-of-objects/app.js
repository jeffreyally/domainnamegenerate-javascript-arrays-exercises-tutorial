let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

let simplifier = function(person){
	let userDOB = person.birthDate;
	let today = new Date();

	let msDiff = today - userDOB;
	let age = Math.floor(msDiff / (365.25*24*60*60*1000))


	return `Hello my name is ${person['name']} and I am ${age} years old.`;
};

console.log(people.map(simplifier));