const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, title, id, email, school) {
        super(name, title, id, email);
        this.school = school;
    }
}

module.exports = Intern;