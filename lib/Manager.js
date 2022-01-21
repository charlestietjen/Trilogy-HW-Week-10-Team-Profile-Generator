const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, title, id, email, office) {
        super(name, title, id, email);
        this.office = office;
    }
}

module.exports = Manager;