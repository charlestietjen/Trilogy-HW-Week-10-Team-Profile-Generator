const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, title, id, email, school) {
        super(name, title, id, email);
        this.special = school;
    }
    getSchool(){
        return this.special;
    }
    getRole(){
        return this.title;
    }
}

module.exports = Intern;