const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, title, id, email, github) {
        super(name, title, id, email);
        this.special = github;
    }
}

module.exports = Engineer;