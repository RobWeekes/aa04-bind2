const Employee = require('./employee');

let john = new Employee('John Wick', 'Dog Lover');

// use bind method on john.sayName to set 'this' context to john
const sayNameBound = john.sayName.bind(john);
setTimeout(sayNameBound, 2000);

const sayOccBound = john.sayOccupation.bind(john);
setTimeout(sayOccBound, 3000);
