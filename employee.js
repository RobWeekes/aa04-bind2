class Employee {
    constructor(name, occupation) {
        this.name = name;
        this.occupation = occupation;
    }

    // INSTANCE METHODS
    sayName() {
        console.log(`${this.name} says hello`);
    }

    sayOccupation() {
        console.log(`${this.name} is a ${this.occupation}`);
    }

    // STATIC CLASS METHODS
}

module.exports = Employee;
