const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, title, id, email, office) {
        super(name, title, id, email);
        this.special = office;
    }
    officeNumber(){
        return this.special;
    }
    getRole(){
        return this.title;
    }
}

module.exports = Manager;